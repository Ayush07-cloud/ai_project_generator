import React, { useState } from 'react';
import { UserInput } from '../types';
import { EXPERIENCE_LEVELS, CAREER_GOALS, TIME_AVAILABILITIES } from '../constants';
import { SparklesIcon } from './icons/SparklesIcon';
import { LoadingSpinner } from './icons/LoadingSpinner';

interface InputFormProps {
  onSubmit: (userInput: UserInput) => void;
  isLoading: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<UserInput>({
    skills: '',
    experienceLevel: 'Beginner',
    careerGoal: CAREER_GOALS[0],
    interests: '',
    timeAvailability: TIME_AVAILABILITIES[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-8 border border-slate-200 dark:border-slate-700">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Your Technical Skills
          </label>
          <input
            type="text"
            name="skills"
            id="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g., React, Node.js, Python, Docker"
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            required
          />
        </div>

        <div>
          <label htmlFor="experienceLevel" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Experience Level
          </label>
          <select
            name="experienceLevel"
            id="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          >
            {EXPERIENCE_LEVELS.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="careerGoal" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Primary Career Goal
          </label>
          <select
            name="careerGoal"
            id="careerGoal"
            value={formData.careerGoal}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          >
            {CAREER_GOALS.map(goal => (
              <option key={goal} value={goal}>{goal}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="interests" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Interests / Domains
          </label>
          <input
            type="text"
            name="interests"
            id="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="e.g., FinTech, AI, E-commerce, Gaming"
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            required
          />
        </div>
        
        <div>
          <label htmlFor="timeAvailability" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Time Availability for Project
          </label>
          <select
            name="timeAvailability"
            id="timeAvailability"
            value={formData.timeAvailability}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          >
            {TIME_AVAILABILITIES.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-2 px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed dark:focus:ring-offset-slate-800"
        >
          {isLoading ? (
            <>
              <LoadingSpinner className="h-5 w-5" />
              Generating...
            </>
          ) : (
            <>
              <SparklesIcon className="h-5 w-5" />
              Generate Project Idea
            </>
          )}
        </button>
      </form>
    </div>
  );
};
