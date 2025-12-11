# Carolina Diecast & Figures

A futuristic, luxury e-commerce experience for high-end diecast cars and figures, featuring AI-generated content and 3D-style visualizations.

## Automated Setup Scripts

Choose your operating system below. Copy the entire block and paste it into your terminal. 

These scripts will:
1.  **Install Prerequisites**: Node.js, npm, and Git.
2.  **Scaffold Project**: Create the Vite React app and install dependencies.
3.  **Prepare Structure**: Create all necessary folders (`components`, `services`) and placeholder files so you can simply paste the code from the chat.

### 1. Ubuntu / Debian
```bash
# 1. System Setup
sudo apt-get update && sudo apt-get install -y ca-certificates curl gnupg git
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update && sudo apt-get install -y nodejs

# 2. Project Initialization
npm create vite@latest carolina-diecast -- --template react-ts
cd carolina-diecast
npm install tailwindcss postcss autoprefixer lucide-react @google/genai three @react-three/fiber @react-three/drei
npx tailwindcss init -p

# 3. File Structure Setup (Simulating Repo Clone)
mkdir -p src/components src/services
rm -f src/App.css src/index.css src/main.tsx src/assets/react.svg

# Create empty files for you to paste content into
touch .env metadata.json src/types.ts src/services/geminiService.ts
for file in Navigation Hero ThreeScene Ghostbusters Articles Footer; do touch src/components/$file.tsx; done

echo "✅ Setup Complete!"
echo "📂 The 'carolina-diecast' folder is ready."
echo "📝 Open the created files in 'src/' and paste the code provided in the chat."
```

### 2. Fedora
```bash
# 1. System Setup
sudo dnf install -y nodejs npm git

# 2. Project Initialization
npm create vite@latest carolina-diecast -- --template react-ts
cd carolina-diecast
npm install tailwindcss postcss autoprefixer lucide-react @google/genai three @react-three/fiber @react-three/drei
npx tailwindcss init -p

# 3. File Structure Setup (Simulating Repo Clone)
mkdir -p src/components src/services
rm -f src/App.css src/index.css src/main.tsx src/assets/react.svg

# Create empty files for you to paste content into
touch .env metadata.json src/types.ts src/services/geminiService.ts
for file in Navigation Hero ThreeScene Ghostbusters Articles Footer; do touch src/components/$file.tsx; done

echo "✅ Setup Complete!"
echo "📂 The 'carolina-diecast' folder is ready."
echo "📝 Open the created files in 'src/' and paste the code provided in the chat."
```

### 3. OpenSUSE
```bash
# 1. System Setup
sudo zypper install -y nodejs npm git

# 2. Project Initialization
npm create vite@latest carolina-diecast -- --template react-ts
cd carolina-diecast
npm install tailwindcss postcss autoprefixer lucide-react @google/genai three @react-three/fiber @react-three/drei
npx tailwindcss init -p

# 3. File Structure Setup (Simulating Repo Clone)
mkdir -p src/components src/services
rm -f src/App.css src/index.css src/main.tsx src/assets/react.svg

# Create empty files for you to paste content into
touch .env metadata.json src/types.ts src/services/geminiService.ts
for file in Navigation Hero ThreeScene Ghostbusters Articles Footer; do touch src/components/$file.tsx; done

echo "✅ Setup Complete!"
echo "📂 The 'carolina-diecast' folder is ready."
echo "📝 Open the created files in 'src/' and paste the code provided in the chat."
```

### 4. Arch Linux
```bash
# 1. System Setup
sudo pacman -Syu --noconfirm nodejs npm git

# 2. Project Initialization
npm create vite@latest carolina-diecast -- --template react-ts
cd carolina-diecast
npm install tailwindcss postcss autoprefixer lucide-react @google/genai three @react-three/fiber @react-three/drei
npx tailwindcss init -p

# 3. File Structure Setup (Simulating Repo Clone)
mkdir -p src/components src/services
rm -f src/App.css src/index.css src/main.tsx src/assets/react.svg

# Create empty files for you to paste content into
touch .env metadata.json src/types.ts src/services/geminiService.ts
for file in Navigation Hero ThreeScene Ghostbusters Articles Footer; do touch src/components/$file.tsx; done

echo "✅ Setup Complete!"
echo "📂 The 'carolina-diecast' folder is ready."
echo "📝 Open the created files in 'src/' and paste the code provided in the chat."
```

## Post-Script Instructions

1.  **Paste Code**: Open the empty files created by the script (e.g., `src/components/ThreeScene.tsx`) and paste the corresponding code provided in this interface.
2.  **Tailwind Config**: Copy the `tailwind.config` object from `index.html` (inside the `<script>` tag) into your local `tailwind.config.js` file.
3.  **API Key**: Open the `.env` file created in the root and add your key:
    ```
    VITE_API_KEY=your_gemini_api_key_here
    ```
4.  **Start App**:
    ```bash
    npm run dev
    ```
