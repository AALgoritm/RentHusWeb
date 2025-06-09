import React from "react";

const ServiceWarranty: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-teal-800 dark:bg-teal-900 rounded-lg shadow-xl p-8 md:p-12 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Vårt löfte till dig: Städgaranti från{" "}
          <span className="text-white">Rent Hus</span>
        </h2>

        <p className="text-lg md:text-xl text-center max-w-4xl mx-auto">
          Städgaranti är vårt ord till dig om kvalitet och tillfredsställelse.
          Vår garanti innebär att om du mot förmodan skulle vara missnöjd med
          något i vår städning, åtar vi oss att åtgärda detta.
        </p>
      </div>
    </div>
  );
};

export default ServiceWarranty;
