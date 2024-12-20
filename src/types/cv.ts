export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  projects?: string;
  description: string[];
}

export interface Education {
  formation: string;
  organisme: string;
  annee: string;
}

export interface CVData {
  softSkills: Skill[];
  hardSkills: Skill[];
  experiences: Experience[];
  education: Education[];
}