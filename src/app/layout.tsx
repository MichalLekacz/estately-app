import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Navbar } from '../app/components/Navbar';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jakarta',
});

export const metadata = {
  title: 'Estatery',
  description: 'Buy, rent or sell your property easily',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-[var(--font-jakarta)]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
