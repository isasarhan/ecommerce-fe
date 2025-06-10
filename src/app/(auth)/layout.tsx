

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:my-20 my-10">
      {children}
    </div>
  )
}
