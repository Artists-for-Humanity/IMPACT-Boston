import Image from "next/image";
import Grid from "./Grid";
import { PLACEHOLDER_IMAGE_SRC } from "./placeholderImage";

interface CenterImageProps {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  showImagePlaceholder?: boolean;
}

export default function CenterImage({
  imageSrc,
  imageAlt,
  className = "",
  showImagePlaceholder = false,
}: CenterImageProps) {
  return (
    <div className={`${className}`}>
      <Grid>
        <div className="col-span-full">
          {/* CHANGED: Fixed heights so they don't collapse to 0px */}
          <div className="relative w-full h-75 md:h-100 lg:h-130">
            {showImagePlaceholder ? (
              <Image
                src={PLACEHOLDER_IMAGE_SRC}
                fill
                alt={imageAlt ?? ""}
                sizes="100vw"
                className="object-cover "
              />
            ) : imageSrc ? (
              <Image
                src={imageSrc}
                fill
                alt={imageAlt ?? ""}
                sizes="100vw"
                className="object-cover "
              />
            ) : null}
          </div>
        </div>
      </Grid>
    </div>
  );
}
