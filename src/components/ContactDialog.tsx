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
import { useTranslations } from "@/hooks/useTranslations";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const t = useTranslations();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'for_mohamedasli.github.io', // Replace with your EmailJS service ID
        'template_for_github.io', // Replace with your EmailJS template ID
        e.currentTarget,
        '0TwE0rJnuFwBjRMSc' // Replace with your EmailJS public key
      );

      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });

      onOpenChange(false);
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">{t.contact.title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder={t.contact.name}
            name="user_name"
            required
          />
          <Input
            type="email"
            placeholder={t.contact.email}
            name="user_email"
            required
          />
          <Textarea
            placeholder={t.contact.message}
            name="message"
            required
            className="min-h-[100px]"
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : t.contact.send}
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