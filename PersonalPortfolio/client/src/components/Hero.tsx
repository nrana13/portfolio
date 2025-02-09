import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Nikki Rana
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A Systems Design Engineering student passionate about creating meaningful products through user-centered design and effective project management
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button asChild>
              <a href="#contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View my work</a>
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="mailto:Nikki.rana@uwaterloo.ca"
              className="text-foreground/70 hover:text-foreground"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}