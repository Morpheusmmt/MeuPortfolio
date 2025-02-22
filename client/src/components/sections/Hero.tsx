import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Olá, eu sou <span className="text-primary">Maida Martins</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Desenvolvedora apaixonada por tecnologia, criando soluções digitais eficientes e impactantes.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Entre em contato
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-background"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Meus projetos
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <img
              src="https://i.imgur.com/mzCcjvo.jpeg"
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto border-4 border-primary"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown
          size={32}
          className="text-primary animate-bounce cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        />
      </motion.div>
    </section>
  );
}
