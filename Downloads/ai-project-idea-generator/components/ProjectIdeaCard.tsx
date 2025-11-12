import React from 'react';
import { ProjectIdea } from '../types';
import { ProjectSection } from './ProjectSection';
import { InfoIcon } from './icons/InfoIcon';
import { LayersIcon } from './icons/LayersIcon';
import { CheckSquareIcon } from './icons/CheckSquareIcon';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { MapIcon } from './icons/MapIcon';
import { ClipboardIcon } from './icons/ClipboardIcon';

interface ProjectIdeaCardProps {
  idea: ProjectIdea;
}

export const ProjectIdeaCard: React.FC<ProjectIdeaCardProps> = ({ idea }) => {
  
  const copyToClipboard = () => {
    const textToCopy = `
Project Title: ${idea.title}

Description: ${idea.description}

Tech Stack:
${idea.techStack.map(item => `- ${item}`).join('\n')}

Key Features:
${idea.features.map(item => `- ${item}`).join('\n')}

Learning Opportunities:
${idea.learningOpportunities.map(item => `- ${item}`).join('\n')}

Timeline: ${idea.timeline}
    `;
    navigator.clipboard.writeText(textToCopy.trim());
    alert("Project details copied to clipboard!");
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-8 border border-slate-200 dark:border-slate-700 relative">
        <button 
          onClick={copyToClipboard}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400"
          title="Copy to clipboard"
        >
          <ClipboardIcon className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pr-10">{idea.title}</h2>
        
        <div className="space-y-6">
          <ProjectSection icon={<InfoIcon className="h-5 w-5 text-indigo-500" />} title="Description">
            <p>{idea.description}</p>
          </ProjectSection>

          <ProjectSection icon={<LayersIcon className="h-5 w-5 text-indigo-500" />} title="Tech Stack">
            <ul className="list-disc list-inside">
              {idea.techStack.map((tech, index) => <li key={index}>{tech}</li>)}
            </ul>
          </ProjectSection>

          <ProjectSection icon={<CheckSquareIcon className="h-5 w-5 text-indigo-500" />} title="Key Features (MVP)">
            <ul className="list-disc list-inside">
              {idea.features.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
          </ProjectSection>

          <ProjectSection icon={<BriefcaseIcon className="h-5 w-5 text-indigo-500" />} title="Learning Opportunities">
            <ul className="list-disc list-inside">
              {idea.learningOpportunities.map((opportunity, index) => <li key={index}>{opportunity}</li>)}
            </ul>
          </ProjectSection>
          
          <ProjectSection icon={<MapIcon className="h-5 w-5 text-indigo-500" />} title="Timeline">
            <p>{idea.timeline}</p>
          </ProjectSection>
        </div>
    </div>
  );
};
