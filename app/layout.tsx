import '../styles/globals.css';

import { Navbar } from 'src/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
