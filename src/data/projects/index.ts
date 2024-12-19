import { Project } from '@/types/project';

// This will automatically import all project data
const projectModules = import.meta.glob('./*/project.md', { eager: true });
const projectImages = import.meta.glob('./*/cover.{png,jpg,jpeg,webp}', { eager: true });

export const projects: Project[] = Object.entries(projectModules).map(([path, module]) => {
  const projectPath = path.split('/')[1];
  const imageUrl = Object.entries(projectImages).find(([imagePath]) => 
    imagePath.startsWith(`.//${projectPath}`)
  )?.[1]?.default;

  return {
    id: projectPath,
    ...module.default,
    coverImage: imageUrl,
  };
});