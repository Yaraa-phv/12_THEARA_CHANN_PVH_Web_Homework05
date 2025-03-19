
export default async function BookData(){
  const res = await fetch(`${process.env.NEXR_PUBLIC_BASE_URL}/book`)
  const bookData = await res.json();

  // console.log("Data of Book : ",bookData);
  return bookData;
  
}