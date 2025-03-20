// import BookCardDetail from "@/components/BookCardDetail";
// import BookDetail from "@/service/BookDetail";

// export default async function BookPageID({ params }) {

//   const res = await fetch(`https://nextjs-homework005.vercel.app/api/book/${params}`);
//   const { bookId } = await params;
//   console.log("bookId:", bookId);

//   const bk_detail = await res.json({id: bookId});

//   // Fetch book details
//   // const bk_detail = await BookDetail(id);
//   console.log("Detail Book:", bk_detail);

//   // Check if payload exists and is an array
//   // const books = bk_detail?.payload;
//   // if (!Array.isArray(books)) {
//   //   return <div className="text-2xl text-red-500">No book details available</div>;
//   // }

//   return (
//     <>
//       <div className="text-3xl font-bold">
//         Book Details:
//         {bk_detail.params.map((book) => (
//           <div key={book?.id}>
//             <BookCardDetail book={book} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import BookCardDetail from "@/components/BookCardDetail";
import BookDetail from "@/service/BookDetail"

export default async function BookPageID({params}) {

  const bookId = (await params).bookId;
  // console.log("bookId:", bookId); 
  const bk_detail = await BookDetail(bookId);
  // console.log("Detail Book:", bk_detail);

  return (
    <>
    <div className="">
      <div className="sm:w-full sm:h-screen flex justify-center overflow-auto">
        <BookCardDetail book={bk_detail.payload}/>
      </div>
        </div>
    </>
  )
}
