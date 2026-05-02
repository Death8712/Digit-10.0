-- Database Schema for Digit 10.0 Registrations
-- This script creates the registrations table for a professional symposium database.

CREATE TABLE IF NOT EXISTS registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  school_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  selected_event TEXT NOT NULL,
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Example Insertion (for testing)
-- INSERT INTO registrations (full_name, email, school_name, phone_number, selected_event)
-- VALUES ('John Doe', 'john@example.com', 'Ahlcon Public School', '9876543210', 'Digi Bug');
