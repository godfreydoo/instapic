import useSWR from 'swr';

export const fetcher = (url) => fetch(url).then((r) => r.json());

export const useUser = () => {
  const { data, mutate } = useSWR('/api/user', fetcher);
  const loading = !data;
  const user = data?.user;
  return [user, { mutate, loading }];
};