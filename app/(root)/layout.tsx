import Header from "@/components/Shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[(url(/istockphoto-1060599978-612x612.jpg))]">
      <Header />
      {children}
    </div>
  );
}
