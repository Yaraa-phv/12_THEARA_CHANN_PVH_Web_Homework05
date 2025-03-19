// import Image from "next/image";
// import styles from "../page.module.css";

import BookCards from "@/components/BookCards";
// import BookData from "@/service/BookData";
import BookDetail from "@/service/BookDetail";


export default async function BookPage() {

  const data = await BookDetail();
  // console.log("data : ", data);

  return (
    <>
    <div className="grid grid-cols-4">
      {data.payload.map((book) => (
        <div key={book?.id}>
          <BookCards book = {book}/>
        </div>
      ))}
    </div>
    </>
  )
}