import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-3">
            <a
              href="tel:+4619269767"
              className="text-muted-foreground hover:text-foreground flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <span>019-26 97 67</span>
            </a>
          </div>
          <div className="flex space-x-3">
            <a
              href="https://www.google.com/maps/place/Rent+Hus+i+%C3%96rebro+AB/@59.2848088,15.2237602,17z/data=!3m1!4b1!4m6!3m5!1s0x465c151a8459f911:0x2cbbdff3f796a430!8m2!3d59.2848088!4d15.2237602!16s%2Fg%2F1hc5qwp_j?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
              className="text-muted-foreground hover:text-foreground flex items-center gap-2"
            >
              <MapPin className="h-5 w-5" />
              <span className="">Bergslagsgatan 6, 703 67 Örebro</span>
            </a>
          </div>
          <div className="flex space-x-3">
            <a
              href="mailto:info@renthus.com"
              className="text-muted-foreground hover:text-foreground flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              <span className="">info@renthus.com</span>
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mt-4 mb-2 text-lg">
            <span className="text-orange-600">AAL</span>
            goritm
            <span className="text-orange-600">()</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} AALgoritm. Alla rättigheter förbehålls.
          </p>
        </div>
      </div>
    </footer>
  );
}
