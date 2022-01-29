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
      ? 'border-indigo-500 text-gray-900 dark:bg-gray-900 dark:text-white'
      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:px-3 dark:py-2 dark:rounded-md dark:border-none'
  );

  return (
    <Link href={link} passHref>
      <a className={className}>{name}</a>
    </Link>
  );
}
