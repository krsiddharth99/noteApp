import "./globals.css";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Notes App</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Notes Application for users" />
        <meta name="keywords" content="notes app crud" />
        <meta name="author" content="Siddharth" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="images/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
