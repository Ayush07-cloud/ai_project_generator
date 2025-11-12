import React from 'react';

interface ProjectSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ icon, title, children }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
        {icon}
        {title}
      </h3>
      <div className="text-slate-600 dark:text-slate-400 space-y-2">
        {children}
      </div>
    </div>
  );
};
