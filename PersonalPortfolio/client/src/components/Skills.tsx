import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiFigma,
  SiCplusplus,
  SiArduino,
  SiJira,
} from "react-icons/si";
import { BsConeStriped } from "react-icons/bs";

const skills = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Agile", icon: SiJira, color: "#0052CC" },
  { name: "SolidWorks", icon: BsConeStriped, color: "#FF0000" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Arduino", icon: SiArduino, color: "#00979D" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <skill.icon className="w-12 h-12 mb-4" style={{ color: skill.color }} />
                    <span className="font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}