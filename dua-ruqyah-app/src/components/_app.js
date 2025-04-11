import { SettingsProvider } from './SettingsContext';

export default function RootLayout({ children }) {
  return (
    <SettingsProvider>
      {children}
    </SettingsProvider>
  );
}
