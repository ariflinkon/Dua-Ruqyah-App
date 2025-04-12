// app/layout.js or app/layout.tsx
import './globals.css';
import { SettingsProvider } from '@/components/SettingsContext';

export const metadata = {
  title: 'Dua Ruqyah App',
  description: 'App to browse and search for Duas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SettingsProvider>
          {children}
        </SettingsProvider>
      </body>
    </html>
  );
}
