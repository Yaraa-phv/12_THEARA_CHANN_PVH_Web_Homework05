
export default async function BookDetail(){
  const res = await fetch(`${process.env.NEXR_PUBLIC_BASE_URL}/book/[bookId]`)
  const bookDetail = await res.json();

  // console.log("Data of Book : ",bookData);
  return bookDetail;
  
}