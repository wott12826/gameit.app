import { WalletAppProviders } from './providers';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <link rel="icon" href="/site_logo.png" />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          as="script"
        />
      </head>
      <body>
        <WalletAppProviders>{children}</WalletAppProviders>
      </body>
    </html>
  );
} 