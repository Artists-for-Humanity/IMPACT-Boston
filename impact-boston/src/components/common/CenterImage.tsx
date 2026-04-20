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
    <div className={`mx-4 md:mx-8 lg:mx-36 py-8 md:py-10 lg:py-18 ${className}`}>
      <Grid>
        <div className="col-span-full">
          <div className="relative w-full h-75 md:h-100 lg:h-130">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Grid>
    </div>
  );
}