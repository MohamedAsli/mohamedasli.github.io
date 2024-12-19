import { Project } from '@/types/project';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <img 
        src={project.coverImage} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span 
              key={tool} 
              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
        <Button 
          className="w-full mt-4"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;