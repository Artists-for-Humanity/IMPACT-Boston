import Image from 'next/image';

export interface MemberCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  role: string;
  bio: string;
}

export default function MemberCard({ imageSrc, imageAlt, name, role, bio }: MemberCardProps) {
  return (
    <div className="col-span-full flex flex-col gap-6 md:grid md:grid-cols-subgrid md:gap-x-6 lg:flex lg:flex-col lg:gap-6 lg:col-span-4">
      <div className="col-span-2">
        <div
          style={{
            height: '4px',
            width: '100%',
            background:
              'linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)',
          }}
        />
        <Image
          src={imageSrc}
          width={5000}
          height={5000}
          alt={imageAlt}
          priority
          className="object-cover w-full h-auto aspect-square md:aspect-auto md:w-[184px] md:h-[160px] lg:w-[368px] lg:h-[328px] bg-text-grey-light"
        />
      </div>

      <div className="col-span-6 lg:col-span-3 flex flex-col gap-3 justify-between">
        <div>
          <p className="p1-bold">{name}</p>
          <p className="p2">{role}</p>
        </div>
        <p className="p2">{bio}</p>
      </div>
    </div>
  );
}
