import Link from 'next/link';
import { classNames } from '@/lib/utils';

type NavItemProps = {
  link: string;
  name: string;
  isSelected?: boolean;
};

export default function NavItem({ link, name, isSelected }: NavItemProps) {
  let className = classNames(
    isSelected
      ? 'font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900'
      : 'font-normal text-gray-600 dark:text-gray-400',
    'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
  );

  return (
    <Link href={link} passHref>
      <a className={className}>{name}</a>
    </Link>
  );
}
