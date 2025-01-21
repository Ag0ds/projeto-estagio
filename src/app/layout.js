import "./globals.css";

export const metadata = {
  title: "Projeto-Seuboné",
  description: "Seu-boné projeto",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googlebot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="cab antialiased">
        <header className="header">
          <div className="logo">
            <img src="logo.svg" alt="Logo" />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
