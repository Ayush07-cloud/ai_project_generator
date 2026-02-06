import React, { useState } from 'react';
import { InputForm } from './components/InputForm';
import { ProjectDisplay } from './components/ProjectDisplay';
import { generateProjectIdea } from './services/geminiService';
import { UserInput, ProjectIdea } from './types';
import { useTheme } from './hooks/useTheme';
import { SunIcon } from './components/icons/SunIcon';
import { MoonIcon } from './components/icons/MoonIcon';

function App() {
  const [projectIdea, setProjectIdea] = useState<ProjectIdea | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [theme, toggleTheme] = useTheme();

  const handleGenerateProject = async (userInput: UserInput) => {
    setIsLoading(true);
    setError(null);
    setProjectIdea(null);
    try {
      const idea = await generateProjectIdea(userInput);
      setProjectIdea(idea);
    } catch (e) {
      console.error(e);
      setError('Failed to generate project idea. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <header className="py-4 px-8 flex justify-between items-center border-b border-slate-200 dark:border-slate-700">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          AI Project Idea Generator
        </h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
        </button>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <InputForm onSubmit={handleGenerateProject} isLoading={isLoading} />
          <div className="lg:sticky lg:top-8">
            <ProjectDisplay projectIdea={projectIdea} isLoading={isLoading} error={error} />
          </div>
        </div>
      </main>

      <footer className="text-center py-4 mt-8 border-t border-slate-200 dark:border-slate-700">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Powered by Google Gemini API
        </p>
      </footer>
    </div>
  );
}

export default App;
