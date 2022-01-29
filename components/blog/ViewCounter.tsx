import useSWR from 'swr';

import { fetcher } from '@/lib/utils';
import { Views } from '@/additional';

export default function ViewCounter({ slug }: { slug: string }) {
  const { data } = useSWR<Views>(`/api/blog/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
}
