

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:mt-15 mt-10">
      {children}
    </div>
  )
}
