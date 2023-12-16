import Label from '../label/label';
import Image from 'next/image';
import Link from 'next/link';

interface VinylProps {
  image: string;
  label: string;
  link: string;
}

const Vinyl: React.FC<VinylProps> = ({ image, label, link }) => {
  return (
    <div className="basis-[calc(50%-8px)] relative mb-3">
      <div className="aspect-square flex items-center justify-center active:scale-95 active:bg-text-80 transition">
        <Link href={link}>
          <Image
            src={image}
            fill
            alt={label}
            className="object-cover rounded-full"
          />
          <Label label={label}></Label>
        </Link>
      </div>
    </div>
  );
};

export default Vinyl;
