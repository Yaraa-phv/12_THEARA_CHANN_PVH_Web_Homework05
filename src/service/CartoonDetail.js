export async function CartoonDetail(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon/${id}`);
  if (!res.ok) throw new Error("Failed to fetch cartoon details");
  return await res.json();
}