import Image from "next/image";

interface MissionProps {
  img: string;
  heading: string;
  text: string;
}

const MissionComponent = ({ img, heading, text }: MissionProps) => {
  return (
    <div className="md:m-4 p-6 flex py-[5rem]">
      <Image
        src={img}
        width={100}
        height={100}
        alt="Join Us Image"
        className="p-4 md:me-4"
      />
      <div className="font-estiem me-4">
        <h3 className="text-4xl text-white font-bold my-2">{heading}</h3>
        <p className="text-white text-justify md:text-sm text-xs sm:w-72 w-full">
          {text}
        </p>
      </div>
    </div>
  );
};
export default MissionComponent;
