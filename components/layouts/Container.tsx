import ToggleTheme from '@/components/ToggleTheme';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-800 h-screen lg:overflow-hidden">
      <ToggleTheme></ToggleTheme>
      {children}
    </div>
  );
}
