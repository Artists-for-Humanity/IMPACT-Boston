interface ContentBoxProps {
  description: string;
}

export default function ContentBox({ description }: ContentBoxProps) {
  return (
    <>
      <div className="image min-w-[588px] h-fit justify-start items-start flex flex-col">
        <div className="flex w-full" id="colorTop">
          <div className="w-1/3 bg-[#E86834] h-[8px]"></div>
          <div className="w-1/3 bg-[#563672] h-[8px]"></div>
          <div className="w-1/3 bg-[#311E41] h-[8px]"></div>
        </div>
        <p className="p1 w-full p-[32px]">{description}</p>
      </div>
    </>
  );
}
