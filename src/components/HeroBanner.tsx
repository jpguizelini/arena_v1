import Image from 'next/image';

interface HeroBannerProps {
    src: string;
    alt: string;
    className?: string;
}

export default function HeroBanner({ src, alt, className = "aspect-4/3 lg:aspect-15/7" }: HeroBannerProps) {
  return (
    <section className={`relative w-full ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill 
        priority
        className="object-cover object-center"
      />
    </section>
  );
}