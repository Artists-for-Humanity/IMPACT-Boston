import Link from 'next/link';

export interface MediaCardProps {
  outlet: string;
  description: string;
  href: string;
  linkText?: string;
}

export default function MediaCard({ outlet, description, href, linkText = 'Read more' }: MediaCardProps) {
  return (
    <div
      className="col-span-full lg:col-span-4 flex flex-col justify-between p-4 md:p-6 lg:p-8 lg:min-h-[371px] lg:items-start lg:[flex:1_0_0] lg:self-stretch"
      style={{ border: '1px solid var(--Line-Divider, #DDD)' }}
    >
      <div className="flex flex-col gap-3">
        <p className="sub-1">{outlet}</p>
        <p className="p2">{description}</p>
      </div>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p2 underline"
      >
        {linkText}
      </Link>
    </div>
  );
}
