🧠 SmartChat AI

SmartChat AI is a next-generation chatbot built using React + Vite and powered by Google Gemini API.
It provides intelligent, human-like responses through a clean, modern interface — fully frontend-based and developer-friendly.

🚀 Features

🤖 AI-Powered Chat — Uses Google Gemini to generate accurate and natural responses.

⚛️ React Frontend Only — No backend setup required.

🎨 Modern UI — Gradient theme, rounded chat interface, and mobile responsiveness.

🗂️ Multi-Page Structure — Includes About, Contact, Login, and Chat sections.

🔑 Custom API Key Support — Add your own Gemini API key for full functionality.

🧭 Persistent Navbar & Footer — Clean and consistent layout across all pages.

🏗️ Tech Stack
Category	Technology
Frontend	React + Vite
Styling	Custom CSS (Responsive Design)
Icons	Lucide React
AI Model	Google Gemini 2.0 Flash
Routing	React Router DOM v6
📁 Project Structure
src/
├── components/
│   ├── chat/
│   │   ├── ChatBotWindow.jsx
│   │   └── chatbot.css
│   ├── navbar/
│   │   ├── Navbar.jsx
│   │   └── navbar.css
│   ├── footer/
│   │   ├── Footer.jsx
│   │   └── footer.css
│
├── pages/
│   ├── About.jsx
│   ├── about.css
│   ├── Contact.jsx
│   ├── contact.css
│   ├── Login.jsx
│   ├── login.css
│   └── Chat.jsx
│
├── App.jsx
├── main.jsx
└── index.css

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/smartchat-ai.git
cd smartchat-ai

2️⃣ Install dependencies
npm install

3️⃣ Add your Gemini API key

⚠️ Important: The built-in API key is temporary and may expire.
You must use your own Google Gemini API key for stable access.

Create a .env file in your project root:

VITE_CHATBOT_API_KEY=YOUR_OWN_GEMINI_API_KEY


You can get your key from 👉 Google AI Studio

4️⃣ Start the development server
npm run dev


Then open the app at 👉 http://localhost:5173

💡 How It Works

The chatbot sends your message directly to Google Gemini API.

The API responds with AI-generated text based on your prompt.

The response is displayed in the chat interface instantly.

Everything happens in the frontend — no backend required.

🧠 Example API Request
const res = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_CHATBOT_API_KEY}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: userMessage }] }],
    }),
  }
);

🧾 Environment Variables
Variable	Description
VITE_CHATBOT_API_KEY	Your Gemini API key from Google AI Studio
🖌️ Customization

You can easily update the UI and configuration to make it your own:

🎨 Change Colors — Edit gradients and themes in chatbot.css and navbar.css.

🧠 Switch AI Models — Update the model in ChatBotWindow.jsx (e.g. gemini-pro).

🏷️ Replace Branding — Change the app name or logo in Navbar.jsx and Footer.jsx.

🗣️ Adjust Prompts — Modify how the chatbot responds in your API request body.

📱 Pages Overview
Page	Description
💬 Chat	Main chatbot interface
📘 About	Overview of SmartChat AI and its purpose
📞 Contact	Contact details and form section
🔐 Login	Login placeholder screen
🧭 Navbar & Footer	Persistent layout and navigation
🧑‍💻 Developer Notes

This project runs entirely on the frontend.

The Gemini API is called directly — no server or backend required.

For production deployments, you can add a Node.js backend to hide your API key for better security.

🛡️ License

This project is open-source and free to use for educational or personal development purposes.

💬 Credits

Developed by SmartChat AI Team 💡
Designed with ❤️ using React + Google Gemini API.
