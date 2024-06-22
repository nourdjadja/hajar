import '@/app/ui/global.css';
import Navbar from './ui/Navbar';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-black p-10 text-cyan-100'>
        <Navbar/>
        <div className="bg-blue">
          <h1>Create</h1>
        </div>
        {children}</body>
    </html>
  );
}