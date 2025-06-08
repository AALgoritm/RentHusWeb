import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import workHereVideo from "../../assets/workHere.mp4"; // You'll need to add this video file

interface WorkHereProps {
  className?: string;
}

const WorkHere: React.FC<WorkHereProps> = ({ className }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 items-center ${className}`}
    >
      <Card className="w-full lg:w-1/2">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Jobba hos oss!</CardTitle>
          <CardDescription className="text-lg mt-2">
            Bli en del av vårt team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Vill du jobba hos oss? Skicka in ditt CV och personliga brev så hör
            vi av oss om det är intressant och finns möjlighet! Maila till
            <span className="font-medium"> info@renthus.com</span>
          </p>

          <Button
            className="cursor-pointer inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-700/30"
            onClick={() => (window.location.href = "mailto:info@renthus.com")}
          >
            Skicka Email
          </Button>
        </CardContent>
      </Card>

      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-xl shadow-lg"
          >
            <source src={workHereVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default WorkHere;
