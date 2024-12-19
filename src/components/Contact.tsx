import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    window.location.href = `mailto:your-email@example.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                name="name"
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                className="w-full"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                name="message"
                required
                className="w-full min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/mohamedasli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/MohamedAsli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;