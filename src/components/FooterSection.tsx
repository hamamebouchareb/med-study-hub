import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import hamameLogo from "@/assets/hamame-logo.png";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={hamameLogo} alt="Hamame" className="w-11 h-11 rounded-lg object-cover" />
              <span className="font-heading text-xl font-bold text-foreground">Hamame</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              La plateforme éducative algérienne pour les futurs élites en médecine et tous les domaines.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Plateforme</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#fonctionnalites" className="hover:text-foreground transition-colors">Fonctionnalités</a></li>
              <li><a href="#abonnement" className="hover:text-foreground transition-colors">Abonnement</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mentions légales</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                contact@hamame.dz
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +213 xxx xxx xxx
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Algérie
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-6 text-center text-sm text-muted-foreground">
          © 2026 Hamame. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
