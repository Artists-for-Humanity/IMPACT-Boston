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
    <div className="col-span-full md:grid md:grid-cols-subgrid lg:flex lg:flex-col lg:col-span-4">
      <div className="col-span-2">
        <div
          style={{
            height: '8px',
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
          className="mb-6 md:mb-0 object-cover w-full h-auto bg-text-grey-light"
          style={{ aspectRatio: '1 / 1', width: '100%', height: 'auto' }}
        />
      </div>

      <div className="col-span-6 lg:col-span-3">
        <p className="p1-bold">{name}</p>
        <p className="p2 mb-3">{role}</p>
        <p className="p2">{bio}</p>
      </div>
    </div>
  );
}
