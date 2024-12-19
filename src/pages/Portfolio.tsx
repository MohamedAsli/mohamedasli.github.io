import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    description: "A state-of-the-art office complex designed with sustainability in mind",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tools: ["Revit", "BIM 360", "Dynamo"]
  },
  {
    id: 2,
    title: "BIM Automation Tool",
    description: "Custom tool development for automating repetitive BIM tasks",
    category: "Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tools: ["Python", "Revit API", "C#"]
  },
  {
    id: 3,
    title: "Sustainable Housing",
    description: "Eco-friendly residential project focusing on energy efficiency",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tools: ["Revit", "Green Building Studio", "Insight"]
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={project.image} 
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;