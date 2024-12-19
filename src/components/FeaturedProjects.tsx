import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    title: "BIM Automation Tool",
    category: "Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    id: 3,
    title: "Sustainable Housing",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my best work in architecture and custom tool development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={`/portfolio/${project.id}`} key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="project-card-overlay">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <span className="text-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;