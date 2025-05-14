import type { Metadata } from 'next';
import { Roboto, Dancing_Script } from 'next/font/google'; // Import fonts for optimization
import './globals.css'; // Your global styles

// Configure the fonts (as an example, matching what was in globals.css)
// This setup with next/font helps optimize font loading.
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto', // CSS variable for easy use
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'], // Or other weights you use
  variable: '--font-dancing-script', // CSS variable
  display: 'swap',
});

// Define metadata for your application
export const metadata: Metadata = {
  title: 'Pure Home Real Estate', // Example title
  description: 'Find your dream property with Pure Home Real Estate. We connect people and properties perfectly.', // Example description
  keywords: 'real estate, property, buy, rent, sell, dubai, uae, pure home',
  // You can add more metadata here: openGraph, icons, etc.
  // Example for favicon:
  // icons: {
  //   icon: '/favicon.ico', // Place favicon.ico in your /public folder
  //   apple: '/apple-touch-icon.png', // Place apple-touch-icon.png in /public
  // },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased"> {/* font-sans will use Roboto via CSS variable */}
        {/*
          You could add a global Header or Footer here if they are consistent across ALL pages.
          For example:
          <GlobalHeader />
        */}
        {children}
        {/*
          <GlobalFooter />
        */}
      </body>
    </html>
  );
}