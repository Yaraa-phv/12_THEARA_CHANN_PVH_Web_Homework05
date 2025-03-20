export default async function BookCategory(){
  const res = await fetch(`${process.env.NEXR_PUBLIC_BASE_URL}/book_category`)
  const bookCate = await res.json();

  // console.log("Data of Book : ",bookCate);
  return bookCate;  
  
}