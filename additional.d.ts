export type Profile = {
  name: string;
  designation: string | JSX.Element;
  description: string;
  image: string;
  social: Social[];
  website: string;
};

export type Social = {
  type: string;
  url: string;
  icon: JSX.Element;
};

export type Route = {
  name: string;
  link: string;
  title: string;
};

export type Views = {
  total: number;
};
