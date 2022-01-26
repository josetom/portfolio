import Header from '@/components/layouts/Header';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-white dark:bg-gray-800 min-h-screen">
      <Header></Header>
      {children}
    </div>
  );
}
