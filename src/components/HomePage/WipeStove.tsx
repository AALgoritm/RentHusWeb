import React from "react";
import wipeStoveVideo from "../../assets/wipeStove.mp4";

interface WipeStoveProps {
  className?: string;
}

const WipeStove: React.FC<WipeStoveProps> = ({ className }) => {
  return (
    <div className={className}>
      <video autoPlay loop muted playsInline className="w-full h-auto">
        <source src={wipeStoveVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WipeStove;
