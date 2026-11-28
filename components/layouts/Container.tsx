import Header from '@/components/layouts/Header';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0b0d12] dark:text-gray-100">
      <div className="pointer-events-none absolute inset-0 dark:bg-[radial-gradient(circle_at_top,_rgba(158,217,212,0.14),_transparent_45%)]" />
      <Header></Header>
      {children}
    </div>
  );
}
