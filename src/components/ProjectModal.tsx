import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Project } from "@/types/project";
import ReactMarkdown from "react-markdown";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal = ({ project, open, onOpenChange }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-64 object-cover rounded-t-lg -mt-6 -mx-6"
        />
        <div className="prose prose-slate max-w-none mt-6">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;