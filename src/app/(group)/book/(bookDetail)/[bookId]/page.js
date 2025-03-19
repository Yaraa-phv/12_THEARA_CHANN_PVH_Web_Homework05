import BookCardDetail from "@/components/BookCardDetail";
import BookDetail from "@/service/BookDetail"

export default async function BookPageID() {

  const bk_detail = await BookDetail();

  return (
    <>
    <div className="text-3xl font-bold">
      {bk_detail.payload.map((book) => (
        <div key={book?.id}>
          <BookCardDetail book = {book}/>
        </div>
      ))}
    </div>
    </>
  )
}