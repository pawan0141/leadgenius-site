export const metadata = {
  title: "LeadGenius - B2B Lead Generation",
  description: "Helping businesses reach decision-makers with verified leads and cold email outreach.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}
