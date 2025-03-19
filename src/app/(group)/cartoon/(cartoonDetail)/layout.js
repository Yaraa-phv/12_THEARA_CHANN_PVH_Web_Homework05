import "@/styles/globals.css";
export default function SubLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className="w-full h-screen bg-red-900">
    //     {children}
    //     {/* <App/> */}
    //   </body>
    // </html>
    <main className="w-full h-screen bg-red-900">
      {children}
    </main>
  );
}