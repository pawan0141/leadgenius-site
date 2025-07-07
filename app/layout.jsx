// app/layout.jsx
import '../styles/globals.css';

export const metadata = {
  title: 'LeadGenius | B2B Lead Generation',
  description: 'Verified email lists, cold email outreach & research services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
