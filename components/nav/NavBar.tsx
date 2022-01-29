import { useRouter } from 'next/router';
import { Route } from '@/additional';
import NavItem from '@/components/nav/NavItem';

type NavBarProps = {
  routes: Route[];
};

export default function NavBar({ routes }: NavBarProps) {
  const router = useRouter();
  return (
    <>
      {routes.map((route) => (
        <NavItem
          key={route.name}
          name={route.name}
          link={route.link}
          isSelected={route.link === router.asPath}
        ></NavItem>
      ))}
    </>
  );
}
