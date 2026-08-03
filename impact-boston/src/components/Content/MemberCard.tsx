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
    <div className="col-span-full flex flex-col gap-6 md:grid md:grid-cols-subgrid md:gap-x-6 lg:flex lg:flex-col lg:gap-6 lg:col-span-4 min-w-0 overflow-hidden">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={imageSrc}
          width={5000}
          height={5000}
          alt={imageAlt}
          priority
          className="object-cover w-full h-auto aspect-square md:aspect-auto md:h-[160px] lg:h-[328px] bg-text-grey-light"
        />
      </div>

      <div className="col-span-6 lg:col-span-3 flex flex-col gap-3 justify-between min-w-0">
        <div className="min-w-0">
          <p className="p1-bold break-words">{name}</p>
          <p className="p2 break-words" style={{ color: 'var(--color-black-60)' }}>{role}</p>
        </div>
        <p className="p2 break-words">{bio}</p>
      </div>
    </div>
  );
}
