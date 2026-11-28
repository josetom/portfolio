import { Route } from '@/additional';

type RoutesType = {
  nav: Route[];
};

type RoutesMapType = {
  nav: {
    [key: string]: Route;
  };
};

const Routes: RoutesType = {
  nav: [
    {
      name: 'Home',
      link: '/',
      title: 'Jose Tom',
    },
    {
      name: 'Writing',
      link: '/blog',
      title: 'Writing · Jose Tom',
    },
  ],
};

let RouteMap: RoutesMapType = { nav: {} };

Routes.nav.forEach((route) => (RouteMap.nav[route.link] = route));

export { Routes, RouteMap };
