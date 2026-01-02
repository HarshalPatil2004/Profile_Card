import "./globals.css";

export const metadata = {
  title: "Profilo",
  description: "It's a Simple Profile Card Project which captures my basic Deatails with a 3D Card Rotation Animation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
