import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { X, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Reset selected project when navigating to /portfolio
  useEffect(() => {
    if (location.pathname === '/portfolio') {
      setSelectedProject(null);
    }
  }, [location]);

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(
      projects.flatMap(project => [project.category, ...project.tools])
    )
  );

  // Filter projects based on selected tags
  const filteredProjects = projects.filter(project => 
    selectedTags.length === 0 || 
    selectedTags.some(tag => 
      project.category === tag || project.tools.includes(tag)
    )
  );

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const Sidebar = () => (
    <div className={cn(
      "fixed md:relative inset-y-0 left-0 z-30 w-64 bg-gray-50 border-r transform transition-transform duration-300 ease-in-out",
      isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
    )}>
      <div className="p-4 h-full overflow-y-auto">
        {/* Filter Section */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Filter Projects by Tags</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={cn(
                  "px-2 py-1 text-xs rounded-full transition-colors",
                  selectedTags.includes(tag)
                    ? "bg-primary text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <h2 className="font-bold mb-4">Projects</h2>
        <div className="space-y-2">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setIsSidebarOpen(false);
              }}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm",
                selectedProject?.id === project.id
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              )}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const SidebarToggle = () => (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        "fixed left-0 top-24 z-40 md:hidden p-1.5 bg-primary text-white rounded-r-full transition-transform duration-300",
        isSidebarOpen && "translate-x-64"
      )}
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <ChevronRight className={cn(
        "h-4 w-4 transition-transform duration-300",
        isSidebarOpen && "rotate-180"
      )} />
    </Button>
  );

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {selectedProject ? (
        <div className="fixed inset-x-0 top-16 bottom-0 bg-white z-20 flex">
          <Sidebar />
          <SidebarToggle />

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setSelectedTags([]);
                }}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="max-w-4xl mx-auto p-8">
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
                
                <div className="flex items-center gap-4 mb-6">
                  <h1 className="text-3xl font-bold">{selectedProject.title}</h1>
                  <button
                    onClick={() => toggleTag(selectedProject.category)}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20"
                  >
                    {selectedProject.category}
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tools.map((tool) => (
                    <button
                      key={tool}
                      onClick={() => toggleTag(tool)}
                      className={cn(
                        "px-3 py-1 rounded-full text-sm transition-colors",
                        selectedTags.includes(tool)
                          ? "bg-primary text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      )}
                    >
                      {tool}
                    </button>
                  ))}
                </div>

                <div className="prose prose-slate max-w-none">
                  <ReactMarkdown>{selectedProject.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Grid view with sidebar
        <div className="flex">
          <Sidebar />
          <SidebarToggle />
          
          <div className="flex-1">
            <div className="container mx-auto px-4 py-12">
              <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card 
                    key={project.id}
                    className="group cursor-pointer transform-gpu transition-all duration-300 ease-out will-change-transform hover:shadow-lg"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 transform-gpu transition-transform duration-300 ease-out will-change-transform">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-out"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col items-center justify-center text-white">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;