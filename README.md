# Carolina Diecast & Figures

A futuristic, luxury e-commerce experience for high-end diecast cars and figures, featuring AI-generated content and 3D-style visualizations.

## Local Development Setup

To download and deploy this project locally, you need to set up a React environment with Vite and Tailwind CSS. 

Below are the detailed, single-script commands for various Linux distributions. These scripts will:
1. Install Node.js and npm.
2. Create the project scaffold using Vite.
3. Install all specific dependencies used in this application.
4. Initialize Tailwind CSS.

### 1. Ubuntu / Debian
Copy and paste this entire block into your terminal:

```bash
# Update package list and install Node.js (using NodeSource for latest LTS)
sudo apt-get update && sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update && sudo apt-get install -y nodejs

# Create Project Scaffold
npm create vite@latest carolina-diecast -- --template react-ts
cd carolina-diecast

# Install Project Dependencies
npm install tailwindcss postcss autoprefixer lucide-react @google/genai three @react-three/fiber @react-three/drei

# Initialize Tailwind
npx tailwindcss init -p

echo "✅ Setup Complete. Copy the provided source files into the 'src' folder."
```

### 2. Fedora
Copy and paste this entire block into your terminal:

```bash
# Install Node.js
sudo dnf install -y nodejs npm

# Create Project Scaffold
npm create vite@latest carolina-diecast -- --template react-ts
cd carolina-diecast

# Install Project Dependencies
npm install tailwindcss postcss autoprefixer lucide-react @google/genai three @react-three/fiber @react-three/drei

# Initialize Tailwind
npx tailwindcss init -p

echo "✅ Setup Complete. Copy the provided source files into the 'src' folder."
```

### 3. OpenSUSE
Copy and paste this entire block into your terminal:

```bash
# Install Node.js
sudo zypper install -y nodejs npm

# Create Project Scaffold
npm create vite@latest carolina-diecast -- --template react-ts
cd carolina-diecast

# Install Project Dependencies
npm install tailwindcss postcss autoprefixer lucide-react @google/genai three @react-three/fiber @react-three/drei

# Initialize Tailwind
npx tailwindcss init -p

echo "✅ Setup Complete. Copy the provided source files into the 'src' folder."
```

### 4. Arch Linux
Copy and paste this entire block into your terminal:

```bash
# Update system and install Node.js
sudo pacman -Syu --noconfirm nodejs npm

# Create Project Scaffold
npm create vite@latest carolina-diecast -- --template react-ts
cd carolina-diecast

# Install Project Dependencies
npm install tailwindcss postcss autoprefixer lucide-react @google/genai three @react-three/fiber @react-three/drei

# Initialize Tailwind
npx tailwindcss init -p

echo "✅ Setup Complete. Copy the provided source files into the 'src' folder."
```

## Final Steps

After running the script for your OS:

1.  **Copy Files**: Copy the contents of the files provided in this interface (like `App.tsx`, `components/`, etc.) into your local `carolina-diecast/src/` folder.
2.  **Update Config**: Copy the tailwind configuration from the provided `index.html` `script` tag into your local `tailwind.config.js`.
3.  **API Key**: Create a `.env` file in the root directory and add your API Key:
    ```
    VITE_API_KEY=your_gemini_api_key_here
    ```
4.  **Run**:
    ```bash
    npm run dev
    ```
