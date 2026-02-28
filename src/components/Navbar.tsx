import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import hamameLogo from "@/assets/hamame-logo.png";

const navLinks = [
{ label: "Accueil", href: "#accueil" },
{ label: "Fonctionnalités", href: "#fonctionnalites" },
{ label: "Abonnement", href: "#abonnement" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { session } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#accueil" className="flex items-center gap-2">
          <img src={hamameLogo} alt="Hamame Platform" className="w-11 h-11 rounded-lg object-cover" />
          <span className="font-heading text-xl font-bold text-foreground">Hamame</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors">

              {link.label}
            </a>
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {session ?
          <Link to="/dashboard">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Tableau de bord
              </Button>
            </Link> :

          <>
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  Se connecter
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  S'inscrire
                </Button>
              </Link>
            </>
          }
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}>

          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-card border-b border-border">

            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground py-2 transition-colors"
              onClick={() => setMobileOpen(false)}>

                  {link.label}
                </a>
            )}
              <div className="flex gap-3 pt-2">
                {session ?
              <Link to="/dashboard" className="flex-1" onClick={() => setMobileOpen(false)}>
                    <Button size="sm" className="w-full bg-primary text-primary-foreground">
                      Tableau de bord
                    </Button>
                  </Link> :

              <>
                    <Link to="/login" className="flex-1" onClick={() => setMobileOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full text-muted-foreground">
                        Se connecter
                      </Button>
                    </Link>
                    <Link to="/signup" className="flex-1" onClick={() => setMobileOpen(false)}>
                      <Button size="sm" className="w-full bg-primary text-primary-foreground">
                        S'inscrire
                      </Button>
                    </Link>
                  </>
              }
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

};

export default Navbar;