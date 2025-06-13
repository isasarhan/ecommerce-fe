import { Footer } from "@/components/common/footer";
import Navbar from "@/components/common/navbar";


export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mx-32">
        {children}
      </div>
      <Footer />
    </>
  )
}
