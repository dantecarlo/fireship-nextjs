import '../styles/globals.css';

import { Navbar } from 'src/components/Navbar';
import Toast from 'src/components/Toast';
import { ContextProvider } from 'src/context/Context.provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body>
        <Toast />
        <Navbar />
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
