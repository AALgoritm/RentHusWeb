import { Card, CardContent } from "../ui/card";
import jennyM from "../../assets/jennyM.jpg";
import sannaS from "../../assets/sannaS.jpg";
import nathalieV from "../../assets/nathalieV.png";
import carina from "../../assets/carinaHome.png";
import avatar from "../../assets/avatar.png";

interface TeamMember {
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
  linkedIn?: string;
  objectPosition?: string; // Add this to control image focus point
}

const teamMembers: TeamMember[] = [
  {
    name: "Eddie Hultquist",
    title: "Operativ chef",
    phone: "070-0160508",
    email: "eddie@renthus.com",
    image: avatar,
  },
  {
    name: "Sanna Sundmark",
    title: "Arbetsledare",
    phone: "072-0133240",
    email: "arbetsledare@renthus.com",
    image: sannaS,
  },
  {
    name: "Nathalie Viklund",
    title: "Arbetsledare",
    phone: "072-0133240",
    email: "arbetsledare@renthus.com",
    image: nathalieV,
  },
  {
    name: "Jenny Moberg",
    title: "Administratör/Ekonomi",
    phone: "019-269767",
    email: "jenny@renthus.com",
    image: jennyM,
  },
  {
    name: "Carina Hultquist",
    title: "VD/Ägare",
    phone: "019-269767",
    email: "carina@renthus.com",
    image: carina,
    objectPosition: "center top", // Focus on the top part of the image to show face
  },
];

const OurTeam = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-center">
          Vårt <span className="text-teal-600 dark:text-teal-400">Team</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-[700px] text-center">
          Möt personerna bakom Rent Hus i Örebro AB som arbetar för att ge dig
          bästa möjliga service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800"
          >
            {/* Image positioned at the very top without padding */}
            <div className="aspect-square relative overflow-hidden w-full">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full"
                style={{ objectPosition: member.objectPosition || "center" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <CardContent className="p-6 flex-grow">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.title}
                  </p>
                </div>

                <div className="pt-4 space-y-1 w-full text-center">
                  <a
                    href={`tel:${member.phone.replace(/-/g, "")}`}
                    className="text-sm block text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm block text-teal-600 dark:text-teal-400 hover:underline transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
