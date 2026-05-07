import Grid from "../Grid";
import Image from "next/image";


interface Content {
  Icon: string ;
  title: string;
  context: string;
}

export default function ActionBox({ title, Icon, context }: Content) {
  return (
    <Grid>
      <div id="box" className="grid col-span-4">
        <div id="icon" className="flex">
          <Image src={Icon} alt="icon"></Image>
        </div>
        <div id="content" className="grid col-span-4">
          <h2 className="title">{title}</h2>
          <p id="context" className="flex">
            {context}
          </p>
        </div>
      </div>
    </Grid>
  );
}
