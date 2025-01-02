export const metadata = {
  title: 'Highway Bistro',
  description: 'Welcome to The Highway Bistro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
