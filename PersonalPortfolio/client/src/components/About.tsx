import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-square rounded-full bg-gradient-to-tr from-primary to-blue-600 mb-6" />
                <div className="text-center">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <FileDown className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                I'm a Systems Design Engineering student at the University of Waterloo with a passion for creating impactful products through thoughtful design and effective management.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise lies at the intersection of user experience design, product management, and systems thinking. I believe in creating products that not only solve problems but provide delightful experiences for users.
              </p>
              <p className="text-lg leading-relaxed">
                With a strong foundation in both technical and design principles, I approach each project with a holistic perspective, ensuring that user needs, business goals, and technical feasibility are all carefully balanced.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}