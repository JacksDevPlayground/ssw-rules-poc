import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import { Toaster } from "sonner";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col md:max-w-4xl lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-4 min-h-screen">
          <div className="flex-1">
            <Header />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
