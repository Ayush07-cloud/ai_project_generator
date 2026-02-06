// FIX: Populating the types.ts file which was previously empty.
import { EXPERIENCE_LEVELS } from './constants';

export type ExperienceLevel = typeof EXPERIENCE_LEVELS[number];

export interface UserInput {
  skills: string;
  experienceLevel: ExperienceLevel;
  careerGoal: string;
  interests: string;
  timeAvailability: string;
}

export interface ProjectIdea {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  learningOpportunities: string[];
  timeline: string;
}
