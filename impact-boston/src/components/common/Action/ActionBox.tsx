import Image from "next/image";
import arrow from "../../../../public/images/WhiteArrow.svg";
interface Content {
  icon: string;
  title: string;
  context: string;
  background: string;
}

export default function ActionBox({
  title,
  icon,
  context,
  background,
}: Content) {
  return (
    <div
      id="box"
      className={`grid h-[35vh] justify-between col-span-4 p-8 text-white ${background}`}
    >
      <div className="flex flex-col justify-between">
        <div id="icon" className="flex w-full justify-between">
          <Image draggable="false" src={icon} alt="icon"></Image>
          <Image
            draggable="false"
            src={arrow}
            alt="arrow"
            style={{ width: `32px`, height: `auto` }}
          ></Image>
        </div>
        <div id="content" className="flex flex-col">
          <h2 className="title sub-1 pb-2">{title}</h2>
          <p id="context" className="flex p1">
            {context}
          </p>
        </div>
      </div>
    </div>
  );
}
