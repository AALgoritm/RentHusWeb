import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import homeClean from "../../assets/homeClean.png";
import officeClean from "../../assets/officeClean.png";
import moveClean from "../../assets/moveClean.png";

const OurServices: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Kontorsstäd",
      icon: officeClean,
      description:
        "Vi förstår att ett rent och välskött arbetsutrymme inte bara skapar en positiv arbetsmiljö utan även påverkar produktiviteten och trivseln för ditt företag. Här kommer vi överens på plats hur vi ska skräddarsy era specifika behov, oavsett om du behöver daglig, veckovis eller mer sällan städning. Förbrukningsmaterial finns att tillgå, och vi tillhandahåller städmaterial.",
      link: "/services",
    },
    {
      id: 2,
      title: "Hemstäd",
      icon: homeClean,
      description:
        "Ditt hem är din fristad därför erbjuder vi skräddarsydda hemstädstjänster där vi kommer ut kostnadsfritt för att göra en offert. Varje hem är unikt så oavsett om du behöver regelbunden veckostädning eller mer sällan är vi här för att tillgodose dina behov. Vi tillhandahåller städmaterial.",
      link: "/services",
    },
    {
      id: 3,
      title: "Flyttstäd",
      icon: moveClean,
      description:
        "Att en flytt kan vara en hektisk tid för många, vet vi alla om. Därför erbjuder vi på Rent Hus en omfattande och pålitlig flyttstädtjänst som inkluderar fullständig rengöring av lokal och bostad samt fönsterputs. Städgaranti lämnas alltid.",
      link: "/services",
    },
    {
      id: 4,
      title: "Storstäd/Grovstäd",
      description:
        "Ibland krävs mer än den dagliga underhållsstädningen, och det är här vår specialiserade tjänst kommer in där vi erbjuder en djupare rengöring. Här lyssnar vi på era önskemål och skräddarsyr en plan efter det. Vi tillhandahåller städmaterial.",
      link: "/contact",
    },
    {
      id: 5,
      title: "Specialarbeten",
      specialContent: true,
      link: "/contact",
    },
    {
      id: 6,
      title: "Påfyllningstjänst",
      description:
        "Finns att beställa förbrukningsmaterial oavsett om det gäller ditt hem eller företag",
      link: "/contact",
    },
  ];

  return (
    <section className="bg-beige dark:bg-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-slate-800 dark:text-gray-200 font-semibold text-center mb-16">
          Våra tjänster
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-xl border-brown/10 dark:border-gray-700 h-full flex flex-col bg-gradient-to-b from-white to-beige/30 dark:bg-zinc-800 dark:from-zinc-800 dark:to-zinc-900/80 shadow-md dark:shadow-zinc-900/50"
            >
              <CardHeader className="flex flex-col items-center text-center py-6 bg-gradient-to-b from-beige/70 to-transparent dark:from-zinc-700 dark:to-transparent">
                {service.icon && (
                  <div className="bg-white dark:bg-zinc-600/80 p-4 rounded-full mb-4 shadow-md ring-1 ring-brown/5 dark:ring-zinc-500/30">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="w-14 h-14 object-contain dark:invert dark:brightness-200 dark:contrast-75"
                    />
                  </div>
                )}
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-gray-100">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-6 pb-4 flex-grow">
                {service.specialContent ? (
                  <div className="text-center">
                    <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                      I våra specialtjänster erbjuder vi.
                    </p>
                    <table className="mx-auto mb-4">
                      <tbody>
                        <tr>
                          <td className="pr-6 text-right text-slate-600 dark:text-gray-300">
                            1.
                          </td>
                          <td className="text-left text-slate-600 dark:text-gray-300">
                            Fönsterputs
                          </td>
                        </tr>
                        <tr>
                          <td className="pr-6 text-right text-slate-600 dark:text-gray-300">
                            2.
                          </td>
                          <td className="text-left text-slate-600 dark:text-gray-300">
                            Golvvård
                          </td>
                        </tr>
                        <tr>
                          <td className="pr-6 text-right text-slate-600 dark:text-gray-300">
                            3.
                          </td>
                          <td className="text-left text-slate-600 dark:text-gray-300">
                            Mattvätt
                          </td>
                        </tr>
                        <tr>
                          <td className="pr-6 text-right text-slate-600 dark:text-gray-300">
                            4.
                          </td>
                          <td className="text-left text-slate-600 dark:text-gray-300">
                            Möbeltvätt
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed mt-4">
                      Byggstäd – id06 finnes
                    </p>
                  </div>
                ) : (
                  <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </p>
                )}
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-2">
                {service.id <= 3 ? (
                  <Button
                    asChild
                    className="w-full bg-teal-700 hover:bg-teal-600 text-white transition-all duration-300 shadow-md hover:shadow-teal-700/30 dark:bg-teal-600 dark:hover:bg-teal-500 dark:hover:shadow-teal-500/20"
                  >
                    <Link
                      to={service.link}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      className="flex items-center justify-center"
                    >
                      Läs mer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    asChild
                    className="w-full border-teal-600 text-teal-700 hover:text-teal-800 hover:bg-teal-50 hover:border-teal-700 transition-all duration-300 dark:border-teal-500 dark:text-teal-400 dark:hover:text-teal-300 dark:hover:bg-teal-900/30 dark:hover:border-teal-400"
                  >
                    <Link
                      to={service.link}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      className="flex items-center justify-center"
                    >
                      Kontakta oss
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
