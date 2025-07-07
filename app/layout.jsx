// app/layout.jsx
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react'; // ✅ use react for JS-based projects

export const metadata = {
  title: 'LeadGenius | B2B Lead Generation',
  description: 'Verified email lists, cold email outreach & research services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900">
        {children}
        <Analytics /> {/* ✅ Add this line to enable analytics */}
      </body>
    </html>
  );
}

