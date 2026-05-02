import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Initialize Database
  const db = new Database('database.db');
  
  // Create table if it doesn't exist
  db.exec(`
    CREATE TABLE IF NOT EXISTS registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      school_name TEXT NOT NULL,
      phone_number TEXT NOT NULL,
      selected_event TEXT NOT NULL,
      registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  app.use(express.json());

  // API Routes
  app.post('/api/register', (req, res) => {
    const { full_name, email, school_name, phone_number, selected_event } = req.body;

    // Basic Validation
    if (!full_name || !email || !school_name || !phone_number || !selected_event) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    try {
      const stmt = db.prepare(`
        INSERT INTO registrations (full_name, email, school_name, phone_number, selected_event)
        VALUES (?, ?, ?, ?, ?)
      `);
      const info = stmt.run(full_name, email, school_name, phone_number, selected_event);
      
      res.status(201).json({ 
        message: 'Registration successful!', 
        registrationId: info.lastInsertRowid 
      });
    } catch (error) {
      console.error('Database Error:', error);
      res.status(500).json({ error: 'Database connection failed. Please try again later.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
