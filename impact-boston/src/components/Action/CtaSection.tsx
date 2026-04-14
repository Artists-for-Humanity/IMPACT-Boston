import Button from "../common/Button";
import Image from "next/image";


export default function CtaSection({
  panels,
}: {
  panels: {
    wrapperClassName: string;
    title: string;
    titleLine2?: string;
    description: string;
    buttonText: string;
    href: string;
    iconSrc: string;
    iconWidth: number;
    iconHeight: number;
  
  }[];
}) {
  return (
    <div className="md:flex max-w-[2000px] mx-auto">
      {panels.map((panel, index) => (
        <CtaPanel key={index} {...panel} />
      ))}
    </div>
  );
}

function CtaPanel({
  wrapperClassName,
  title,
  titleLine2,
  description,
  buttonText,
  href,
  iconSrc,
  iconWidth,
  iconHeight,
}: {
  wrapperClassName: string;
  title: string;
  titleLine2?: string;
  description: string;
  buttonText: string;
  href: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
}) {
  return (
    <div className={wrapperClassName}>
      <div className="py-14 px-10 flex flex-col gap-4 h-full justify-between ">
        <h3 className="h3 text-white">
          {title}
          {titleLine2 ? (
            <>
              <br />
              {titleLine2}
            </>
          ) : null}
        </h3>

        <p className="p1 text-white">{description}</p>

        <Button
          className="col-span-full bg-white flex justify-between cursor-pointer py-4 lg:w-1/2"
          href={href}
        >
          <p className="p1-bold text-black">{buttonText}</p>
          <Image src={iconSrc} width={iconWidth} height={iconHeight} alt="" />
        </Button>
      </div>
    </div>
  );
}