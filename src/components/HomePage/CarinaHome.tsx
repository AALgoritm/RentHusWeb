import carina from "../../assets/carinaHome.png";

const CarinaHome = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="relative h-[300px] md:h-[400px] w-full flex justify-center items-center">
              <div className="rounded-full overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[300px] shadow-lg">
                <img
                  src={carina}
                  alt="Carina - Owner of Rent Hus"
                  className="object-cover w-full h-full object-top"
                ></img>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-4">
              <p className="text-foreground font-poppins text-left">
                Vi arbetar efter svensk miljöbas högt ställda kriterier och
                självklart har vi kollektivavtal.<br></br> För er och vår
                trygghet har vi företagsförsäkring och samtliga medarbetare
                utrustade med Rent Hus id kort, arbetskläder och företagsbilar.
                Vi kräver också utdrag från polisregistret vid nyanställning.
              </p>
              <div className="pl-4 mt-6">
                <p className="italic">
                  "För mig är personalens hälsa & välmående viktigast, för då
                  skapar vi ett friskt och starkt företag för er kunder. För
                  tillsammans är vi Rent Hus"
                </p>
                <p className="font-semibold mt-2">Carina Hultquist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarinaHome;
