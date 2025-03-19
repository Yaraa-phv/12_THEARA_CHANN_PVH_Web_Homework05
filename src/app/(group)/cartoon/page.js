// import BookCards from "@/components/BookCards";
import CartoonCards from "@/components/CartoonCards";
import CartoonData from "@/service/CartoonData";


export default async function CartoonPage() {

  const data = await CartoonData();
  // console.log("data : ", data);

  return (
    <>
    <div className="grid grid-cols-4">
      {data.payload.map((cartoon) => (
        <div key={cartoon?.id}>
          <CartoonCards cartoon = {cartoon}/>
        </div>
      ))}
    </div>
    </>
  )
}