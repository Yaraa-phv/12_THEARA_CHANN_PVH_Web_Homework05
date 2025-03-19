
export default async function CartoonData(){
  const res = await fetch(`${process.env.NEXR_PUBLIC_BASE_URL}/cartoon`)
  const cartoonData = await res.json();

  // console.log("Data of Book : ",bookData);
  return cartoonData;
  
}