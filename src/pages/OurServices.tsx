import OurServicesTop from "@/components/OurServices/OurServicesTop";
import ServicesCards from "@/components/OurServices/ServiceCards";
import ServiceWarranty from "@/components/OurServices/ServiceWarranty";

const OurServices = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <OurServicesTop />
        <ServicesCards />
        <ServiceWarranty />
      </div>
    </>
  );
};

export default OurServices;
