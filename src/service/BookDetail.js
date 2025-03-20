// export default async function BookDetail(id) {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`);
//   const data = await res.json();
//   console.log("Data Detail : ", data);
  
//   if (!res.ok) throw new Error("Failed to fetch book details");
//   return data;
// }

export default async function BookDetail(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`);
  if (!res.ok) throw new Error("Failed to fetch book details");
  return await res.json();
}
