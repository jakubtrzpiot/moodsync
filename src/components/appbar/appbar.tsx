import Link from 'next/link';
import { Circle } from '@components/circle';

interface MenuElement {
  slug: string;
  element: React.ReactNode;
}

interface AppBarProps {
  logo: string | React.ReactNode;
  elements: MenuElement[];
}

const AppBar: React.FC<AppBarProps> = ({ logo, elements }) => {
  return (
    <div className="py-4 pr-5 pl-4 flex justify-between items-center">
      <h2 className="text-lg font-medium">{logo}</h2>
      <div className="flex gap-[3px]">
        {elements.map((el, index) => (
          <Link href={el.slug} key={index}>
            <Circle>{el.element}</Circle>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppBar;
