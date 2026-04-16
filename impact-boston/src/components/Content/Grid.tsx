import Grid from '@/components/common/Grid';
import Image from 'next/image';

interface MemberProps {
    imageSrc: string;
    imageAlt: string;
    name: string;
    role: string;
    bio: string;
}

interface GridContentProps {
  title: string;
  description: string[];
  className?: string;
  members?: MemberProps[];
}

export default function GridContent({
  title,
  description,
  className = '',
  members,
}: GridContentProps ) {
  return (
    <div className={`mx-4 md:mx-8 lg:mx-36 py-8 md:py-10 lg:py-18 ${className}`}>
      <Grid>
          <h3 className="h3 col-span-full lg:col-span-6 ">{title}</h3>
          {description.map((para, idx) => (
            <p className="p2 pb-2 col-span-full" key={idx}>{para}</p>
          ))}
          {members?.map((member,idx) => (
            <div className='col-span-full md:grid md:grid-cols-subgrid lg:flex lg:flex-col lg:col-span-4' >
                <div className='col-span-2'>
                 <div 
              style={{
              height: '8px',
              width: '100%',
              background: 'linear-gradient(to right, #E36A38 0%, #E36A38 22%, #874E9F 22%, #874E9F 86%, #462458 86%, #462458 100%)',
                }}></div>
                 <Image
                    src={member.imageSrc}
                    width={5000}
                    height={5000}
                    alt={member.imageAlt}
                    priority={true}
                    className='mb-6 md:mbe-0 object-cover w-full height-auto bg-text-grey-light'
                    style={{ aspectRatio: '1 / 1', width: '100%', height: 'auto'}}
                    />

                    </div>
                <div className="col-span-6 lg:col-span-3">
                <p className="p1-bold">{member.name}</p>
                <p className="p2 mb-3">{member.role}</p>
                <p className="p2">{member.bio}</p>
          </div>
            </div>

          ))}
      </Grid>
    </div>
  );
}