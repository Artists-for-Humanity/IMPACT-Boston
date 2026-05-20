import Image from "next/image";
import whiteArrow from "../../../public/images/WhiteArrow.svg";
import blackArrow from "../../../public/images/BlackArrow.svg";
interface attribute {
  desktop?: number;
  tablet?: number;
  phone?: number;
  color: string;
  textColor: string;
}
export default function LearnMore({
  desktop,
  tablet,
  phone,
  color,
  textColor,
}: attribute) {
  const handleArrow = (color: string) => {
    if (color == "white") {
      return (
        <Image draggable="false" src={blackArrow} alt="buttonArrow"></Image>
      );
    } else if (color == "black") {
      return (
        <Image draggable="false" src={whiteArrow} alt="buttonArrow"></Image>
      );
    }
  };
  return (
    <div className="flex justfy-center lg:justify-start w-full">
      <div className={`lg:grid lg:grid-cols-${desktop} lg:gap-6 w-full`}>
        <button
          type="button"
          className={`flex bg-${color} lg:col-span-3 justify-between items-center p-[24px]`}
        >
          <p className={`link text-${textColor}`}>Learn More</p>
          {handleArrow(color)}
        </button>
      </div>
    </div>
  );
}
