export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}
