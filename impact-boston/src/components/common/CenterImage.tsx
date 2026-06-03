import Image from "next/image";
import Grid from "../common/Grid";

interface CenterImageProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export default function CenterImage({
  imageSrc,
  imageAlt,
  className = "",
}: CenterImageProps) {
  return (
    <div className={`${className}`}>
      <Grid>
        <div className="col-span-full">
          <div className="relative w-full h-75 md:h-100 lg:h-130">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Grid>
    </div>
  );
}
