import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    window.location.href = `mailto:your-email@example.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Get in Touch</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your Name"
            name="name"
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <Textarea
            placeholder="Your Message"
            name="message"
            required
            className="min-h-[100px]"
          />
          <Button type="submit" className="w-full">
            Send Message
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <div className="flex justify-center gap-6 pt-4">
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
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;