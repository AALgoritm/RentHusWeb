import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container max-w-6xl mx-auto px-4 mt-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-2">
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
          <div className=" mt-8 text-sm">
            <p className="text-sm text-muted-foreground">
              © {currentYear}
              <span> upprättad av</span>{" "}
              <a
                href="https://www.aalgoritm.se"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <span className="text-orange-600 font-bold">AAL</span>
                goritm
                <span className="text-orange-600 font-bold">()</span>
              </a>
              . Alla rättigheter förbehålls.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
