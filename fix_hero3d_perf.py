import re

with open('src/components/Hero3D.tsx', 'r') as f:
    content = f.read()

# Replace meshPhysicalMaterial completely
pattern = r'<meshPhysicalMaterial[\s\S]*?/>'

# Actually, I should only replace it inside RefractiveGlassCore.
# Let's find RefractiveGlassCore and replace the meshPhysicalMaterial inside it.

def replacer(match):
    return '''<meshPhysicalMaterial 
         color="#0A1628" 
         opacity={0.4} 
         transparent={true}
         roughness={0.2} 
         metalness={0.8}
         clearcoat={1} 
         clearcoatRoughness={0.1}
         emissive="#008080"
         emissiveIntensity={0.5}
      />'''

content = re.sub(r'<meshPhysicalMaterial[^>]*?transmission={0\.96}[^>]*?/>', replacer, content)

with open('src/components/Hero3D.tsx', 'w') as f:
    f.write(content)
