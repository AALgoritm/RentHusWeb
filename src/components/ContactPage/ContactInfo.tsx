import { Card } from "../ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <>
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 dark:text-gray-200">
            Hör av dig till{" "}
            <span className="text-teal-600 dark:text-teal-400">
              Rent Hus i Örebro AB
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mb-8">
            Har du frågor, funderingar eller är du redo att boka en av våra
            tjänster? Kontakta oss idag!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          <Card className="flex flex-col items-center text-center p-6">
            <Mail className="h-12 w-12 text-teal-600 dark:text-teal-400 mb-4" />
            <h2 className="text-xl font-bold mb-2">E-post</h2>
            <p className="text-muted-foreground mb-4">
              Skicka ett mail så återkommer vi så snart vi kan.
            </p>
            <a
              href="mailto:info@renthus.se"
              className="text-teal-600 dark:text-teal-400 hover:underline mt-auto"
            >
              info@renthus.se
            </a>
          </Card>

          <Card className="flex flex-col items-center text-center p-6">
            <Phone className="h-12 w-12 text-teal-600 dark:text-teal-400 mb-4" />
            <h2 className="text-xl font-bold mb-2">Telefon</h2>
            <p className="text-muted-foreground mb-4">
              Tillgängliga vardagar 8:00-15:00
            </p>
            <a
              href="tel:+46701234567"
              className="text-teal-600 dark:text-teal-400 hover:underline mt-auto"
            >
              019-26 97 67
            </a>
          </Card>

          <Card className="flex flex-col items-center text-center p-6">
            <MapPin className="h-12 w-12 text-teal-600 dark:text-teal-400 mb-4" />
            <h2 className="text-xl font-bold mb-2">Besök oss</h2>
            <p className="text-muted-foreground mb-4">Vi finns i Örebro</p>
            <address className="not-italic text-teal-600 dark:text-teal-400 mt-auto">
              Bergslagsgatan 6
              <br />
              703 67 Örebro
            </address>
          </Card>
        </div>

        <div className="py-10">
          <h2 className="text-3xl font-bold mb-6">Hitta hit</h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.32666808602!2d15.221289977269473!3d59.28489201457686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c151a848e1bd9%3A0x3d931ad64600a9c6!2sBergslagsgatan%206%2C%20703%2067%20%C3%96rebro!5e1!3m2!1ssv!2sse!4v1749449368225!5m2!1ssv!2sse"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
