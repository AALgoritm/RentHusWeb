import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard: React.FC<{
  title: string;
  titleHighlight: string;
  description: string[];
}> = ({ title, titleHighlight, description }) => {
  return (
    <div className="border border-zinc-300 dark:border-zinc-700 rounded-lg p-8 bg-white-50/80 dark:bg-zinc-800/50 shadow-md flex flex-col h-full">
      <h3 className="text-2xl font-bold text-zinc-800 dark:text-gray-100 mb-4 text-center">
        {title}{" "}
        <span className="text-teal-600 dark:text-teal-400">
          {titleHighlight}
        </span>
      </h3>
      {description.map((paragraph, index) => (
        <p
          key={index}
          className="text-zinc-700 dark:text-gray-300 mb-4 text-center"
        >
          {paragraph}
        </p>
      ))}
      <div className="flex justify-center mt-auto pt-6">
        <Link
          to="/contact"
          className="inline-block"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <button className="cursor-pointer inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-700/30">
            Boka möte
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const ServicesCards: React.FC = () => {
  const services = [
    {
      title: "Förvandla ditt hem till en fristad tillsammans med",
      titleHighlight: "Rent Hus",
      description: [
        "Vi vet att ditt hem är din personliga borg och förtjänar den yttersta omsorgen. På Rent Hus erbjuder vi därför hemstadtjänster som är skräddarsydda för just dig och ditt hem. Vi inleder varje nytt samarbete med ett kostnadsfritt hembesök för ett personligt erbjudande.",
        "Oavsett om du söker efter en regelbunden städtjänst för att upprätthålla ett ständigt skinande hem, eller om du endast behöver hjälp då och då, är vi här för att tillmötesgå dina krav. Vårt team tar med sig allt städmaterial som behövs för en bekymmersfri upplevelse.",
      ],
    },
    {
      title: "Optimera din arbetsplats tillsammans med",
      titleHighlight: "Rent Hus",
      description: [
        "Vi inser vikten av ett rent kontor - det är inte bara hjärtat i ditt företag, utan även nyckeln till högre produktivitet och bättre trivsel bland dina anställda. Vi tar detta på största allvar och erbjuder därför skräddarsydda kontorsstädtjänster.",
        "Vid vårt första möte på plats, kommer vi tillsammans att utforma en städlösning som bäst passar ditt kontors storlek, dina scheman och specifika behov. Vårt flexibla team är här för att tillgodose alla dina behov, så att du kan fokusera fullständigt på din verksamhet.",
      ],
    },
    {
      title: "Gör din flytt smidiagare tillsammans med",
      titleHighlight: "Rent Hus",
      description: [
        "Vi vet att flytta kan vara en av livets mest stressfyllda händelser. För att göra övergången så smidig som möjligt erbjuder Rent Hus en omfattande flyttstädtjänst designad för att avlasta dig. Vår tjänst täcker allt från noggrann rengöring av varje vrå i din bostad till fönsterputs.",
        "Med Rent Hus kan du känna dig trygg; vi lämnar inte bara ett skinande rent hem bakom oss, vi erbjuder också en städgaranti för din sinnesro. Oavsett om du flyttar in eller ut, ser vårt professionella team till att dina utrymmen är rena och välkomnande.",
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-2 ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              titleHighlight={service.titleHighlight}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
