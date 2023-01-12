'use client'
import Header from "./Header";
export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Todo App</title>

      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}