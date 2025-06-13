import { Footer } from "@/components/common/footer";
import Navbar from "@/components/common/navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="lg:my-20 my-10">
        {children}
      </div>
      <Footer />
    </>
  )
}
