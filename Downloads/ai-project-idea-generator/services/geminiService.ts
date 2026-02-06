// FIX: Populating the services/geminiService.ts file which was previously empty.
import { GoogleGenAI, Type } from "@google/genai";
import type { UserInput, ProjectIdea } from '../types';

// Per guidelines, initialize with API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const generatePrompt = (userInput: UserInput): string => {
  return `
    Based on the following developer profile, generate a unique and suitable project idea.
    
    Developer Profile:
    - Technical Skills: ${userInput.skills}
    - Experience Level: ${userInput.experienceLevel}
    - Primary Career Goal: ${userInput.careerGoal}
    - Interests/Domains: ${userInput.interests}
    - Project Time Availability: ${userInput.timeAvailability}

    Please generate a project idea that aligns with this profile. The project should be challenging but achievable within the specified time frame.
    It should help the developer learn new skills and build a portfolio piece that supports their career goal.

    Provide the output in the specified JSON format. The "timeline" should be specifically tailored to the user's stated time availability.
  `;
}

const projectIdeaSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "A catchy and descriptive title for the project." },
    description: { type: Type.STRING, description: "A one-paragraph summary of the project idea." },
    techStack: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of recommended technologies, frameworks, and tools. Include both familiar and new technologies from the user's skills to provide a learning opportunity."
    },
    features: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of 3-5 key features for the project's MVP (Minimum Viable Product)."
    },
    learningOpportunities: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of specific skills or concepts the developer can learn by completing this project."
    },
    timeline: { type: Type.STRING, description: `A brief, high-level timeline or roadmap for the project, broken down by weeks, matching the user's availability.` }
  },
  required: ['title', 'description', 'techStack', 'features', 'learningOpportunities', 'timeline'],
};


export const generateProjectIdea = async (userInput: UserInput): Promise<ProjectIdea> => {
    // Using gemini-2.5-flash as it's suitable for this kind of structured text generation.
    const model = 'gemini-2.5-flash';

    const response = await ai.models.generateContent({
      model: model,
      contents: generatePrompt(userInput),
      config: {
        responseMimeType: "application/json",
        responseSchema: projectIdeaSchema,
      }
    });
    
    const jsonString = response.text.trim();
    return JSON.parse(jsonString) as ProjectIdea;
};
