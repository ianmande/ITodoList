import { ReactNode } from 'react';
import Header from '../header/Header';
import { ToastContainer } from 'react-toastify';
import { useDarkMode } from '../../hooks/useDarkMode';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <main className="max-w-[var(--screen-desktop)] w-full min-h-screen min-w-max mx-auto relative px-6 md:px-0">
      <Header />

      <div className="grid gap-10 max-w-2xl md:mx-auto relative z-10 -bottom-12 md:-bottom-20">
        {children}
        <div className="h-6"></div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? 'dark' : 'light'}
        limit={3}
      />
    </main>
  );
};
