import React from 'react';
import { ProjectIdea } from '../types';
import { ProjectIdeaCard } from './ProjectIdeaCard';
import { LoadingSpinner } from './icons/LoadingSpinner';
import { SparklesIcon } from './icons/SparklesIcon';

interface ProjectDisplayProps {
  projectIdea: ProjectIdea | null;
  isLoading: boolean;
  error: string | null;
}

export const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ projectIdea, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700 min-h-[300px]">
        <LoadingSpinner className="h-12 w-12 text-indigo-500 mb-4" />
        <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Generating your personalized project idea...</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">This might take a moment.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 rounded-xl min-h-[300px]">
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">Something went wrong</h3>
        <p className="text-red-600 dark:text-red-300 mt-2">{error}</p>
      </div>
    );
  }

  if (projectIdea) {
    return <ProjectIdeaCard idea={projectIdea} />;
  }

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700 min-h-[300px]">
      <SparklesIcon className="h-12 w-12 text-slate-400 dark:text-slate-500 mb-4" />
      <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">Your Project Idea Awaits</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1">
        Fill out the form with your details, and we'll generate a unique project idea tailored just for you.
      </p>
    </div>
  );
};
