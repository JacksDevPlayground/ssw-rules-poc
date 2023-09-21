import Header from '@components/layout/header';
import '../../styles.css';
import Footer from '@components/layout/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex-1">
        <div className="border-b-2">
          <Header />
        </div>
        <main className='p-4'>{children}</main>
      </div >
      <Footer />
    </section>


  );
}
