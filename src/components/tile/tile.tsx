import { Label } from '@components/label';
import Image from 'next/image';
import Link from 'next/link';

interface TileProps {
  image: string;
  label: string;
  link: string;
}

const Tile: React.FC<TileProps> = ({ image, label, link }) => {
  return (
    <div className="w-full relative mb-4">
      <div className="aspect-[3/2] flex items-center justify-center active:scale-95 active:bg-text-80 transition ">
        <Link href={link}>
          <Image
            src={image}
            fill
            alt={label}
            className="object-cover rounded-3xl"
          />
          <Label label={label} full></Label>
        </Link>
      </div>
    </div>
  );
};

export default Tile;
