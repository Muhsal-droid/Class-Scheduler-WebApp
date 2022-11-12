import Navbar from './Navbar';
import Footer from './Footer';

interface PageProps {
    children: React.ReactNode
}

function Page({ children }:PageProps) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Page;
