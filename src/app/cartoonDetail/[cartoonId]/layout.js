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
        <div className="bg-gray-200 w-full h-screen">
      {/* <h1 className="text-2xl font-bold">Book Details</h1> */}
      {children}
    </div>
    </>
  );
}
