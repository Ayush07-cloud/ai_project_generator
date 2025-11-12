<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# AI Project Idea Generator

An intelligent web application that generates personalized AI project ideas based on your technical skills, experience level, career goals, and available time. Powered by Google Gemini API.

View your app in AI Studio: https://ai.studio/apps/drive/1cASueoxvhDTHs43MhxYOuuAYNzUCIer6

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Workflow](#workflow)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Build & Deploy](#build--deploy)

## Features

✨ **AI-Powered Project Generation** - Uses Google Gemini API to generate custom project ideas
🎯 **Personalized Recommendations** - Tailors projects based on your skills, experience, and goals
🌓 **Dark Mode Support** - Toggle between light and dark themes for comfortable viewing
⚡ **Real-time Generation** - Fast and responsive project idea generation
📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
🎨 **Modern UI** - Built with Tailwind CSS for a polished user experience

## Project Structure

```
ai-project-idea-generator/
├── components/              # React components
│   ├── InputForm.tsx       # User input form component
│   ├── ProjectDisplay.tsx  # Project idea display component
│   ├── ProjectIdeaCard.tsx # Individual project card
│   ├── ProjectSection.tsx  # Section renderer for project details
│   └── icons/              # SVG icon components
│       ├── BriefcaseIcon.tsx
│       ├── CheckSquareIcon.tsx
│       ├── ClipboardIcon.tsx
│       ├── InfoIcon.tsx
│       ├── LayersIcon.tsx
│       ├── LoadingSpinner.tsx
│       ├── MapIcon.tsx
│       ├── MoonIcon.tsx
│       ├── SparklesIcon.tsx
│       └── SunIcon.tsx
├── hooks/                  # Custom React hooks
│   └── useTheme.ts        # Theme management hook
├── services/              # API services
│   └── geminiService.ts   # Google Gemini API integration
├── App.tsx               # Main application component
├── types.ts              # TypeScript type definitions
├── constants.ts          # Application constants
├── index.tsx             # React entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies
├── .env.local            # Environment variables (not in version control)
└── README.md             # This file
```

## Workflow

### 1. **User Input Phase**
```
User Interface (InputForm.tsx)
         ↓
    User fills the form with:
    - Technical Skills (e.g., React, Node.js, Python)
    - Experience Level (Beginner/Intermediate/Advanced)
    - Career Goal (Frontend Dev, Backend Dev, Full-stack, etc.)
    - Interests/Domains (e.g., Web, Mobile, AI/ML)
    - Time Availability (1-2 weeks, 2-4 weeks, etc.)
```

### 2. **Form Validation & Submission**
```
InputForm Component (InputForm.tsx)
         ↓
  User clicks "Generate Project"
         ↓
  Form validation & handleSubmit
         ↓
  Pass UserInput to App.tsx
```

### 3. **Project Generation**
```
App.tsx Component
         ↓
  Call generateProjectIdea(userInput)
         ↓
  geminiService.ts
         ↓
  Generate AI Prompt from user input
         ↓
  Send request to Google Gemini API
         ↓
  Receive structured JSON response
         ↓
  Parse response into ProjectIdea object
```

### 4. **Display Results**
```
ProjectDisplay.tsx
         ↓
  Render ProjectIdeaCard.tsx
         ↓
  Display:
  - Project Title
  - Description
  - Tech Stack
  - Key Features
  - Learning Opportunities
  - Timeline/Roadmap
```

### 5. **Theme Management**
```
useTheme Hook
    ↓
  localStorage (persist user preference)
    ↓
  Apply theme classes (light/dark)
    ↓
  Update UI in real-time
```

## Tech Stack

### Frontend
- **React 19.2** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Modern build tool and dev server

### API & Services
- **Google Gemini API** - AI model for project idea generation
- **@google/genai** - Official Google GenAI SDK

### Development
- **Node.js** - JavaScript runtime
- **npm** - Package manager

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Google Gemini API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayush07-cloud/ai_project_generator.git
   cd ai-project-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Configuration

1. **Get your Gemini API Key**
   - Visit [Google AI Studio](https://aistudio.google.com/apikey)
   - Create a new API key

2. **Set up environment variables**
   - Create a `.env.local` file in the root directory
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

### Development

**Start the development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build & Deploy

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

The optimized build will be in the `dist/` directory, ready for deployment.

## API Integration

### generateProjectIdea Function
Located in `services/geminiService.ts`

**Input:**
```typescript
interface UserInput {
  skills: string;           // Technical skills
  experienceLevel: string;  // Beginner/Intermediate/Advanced
  careerGoal: string;       // Target career path
  interests: string;        // Domains and interests
  timeAvailability: string; // Available time frame
}
```

**Output:**
```typescript
interface ProjectIdea {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  learningOpportunities: string[];
  timeline: string;
}
```

## Component Hierarchy

```
App
├── Header
│   ├── Title
│   └── Theme Toggle (SunIcon/MoonIcon)
├── Main Container
│   ├── InputForm
│   │   ├── Skills Input
│   │   ├── Experience Level Select
│   │   ├── Career Goal Select
│   │   ├── Interests Input
│   │   ├── Time Availability Select
│   │   └── Submit Button
│   └── ProjectDisplay
│       ├── LoadingSpinner (while generating)
│       ├── Error Message (if failed)
│       └── ProjectIdeaCard
│           ├── ProjectSection (Title)
│           ├── ProjectSection (Description)
│           ├── ProjectSection (Tech Stack)
│           ├── ProjectSection (Features)
│           ├── ProjectSection (Learning Opportunities)
│           └── ProjectSection (Timeline)
└── Footer
    └── Credits
```

## Key Features Explained

### 1. **Intelligent Prompt Generation**
The `generatePrompt` function in `geminiService.ts` creates a detailed prompt that:
- Incorporates user's current skills
- Considers their experience level
- Aligns with their career goals
- Matches their time constraints
- Suggests both familiar and new technologies

### 2. **Structured Output**
Uses JSON schema validation to ensure consistent, structured responses from Gemini API with:
- Project title and description
- Recommended tech stack
- MVP features
- Learning opportunities
- Realistic timeline

### 3. **Dark Mode Support**
- Implemented via `useTheme` hook
- Persists user preference in localStorage
- Responsive theme switching across entire app
- Tailwind CSS dark mode classes

### 4. **Error Handling**
- API failures are caught and displayed to users
- Loading states prevent multiple submissions
- User-friendly error messages

## Environment Variables

Create a `.env.local` file:

```env
# Google Gemini API Key
GEMINI_API_KEY=your_api_key_here
```

**Note:** This file should never be committed to version control. It's already in `.gitignore`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For support, please open an issue on the [GitHub repository](https://github.com/Ayush07-cloud/ai_project_generator/issues).
