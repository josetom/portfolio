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
      name: 'Blog',
      link: '/blog',
      title: "Jose Tom's Blog",
    },
  ],
};

let RouteMap: RoutesMapType = { nav: {} };

Routes.nav.forEach((route) => (RouteMap.nav[route.link] = route));

export { Routes, RouteMap };
