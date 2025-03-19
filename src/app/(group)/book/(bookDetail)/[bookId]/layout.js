import "@/styles/globals.css";
// export default function SubLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="w-full h-screen bg-red-900">
//         {children}
//         {/* <App/> */}
//       </body>
//     </html>
//   );
// }

import Head from 'next/head';

export default function SubLayout({ children }) {
  return (
    <>
      <Head>
        <body className="w-full h-screen bg-red-900" />
      </Head>
      {/* <html lang="en"> */}
        <main className="w-full h-screen bg-red-900">
          {children}
        </main>
      {/* </html> */}
    </>
  );
}
