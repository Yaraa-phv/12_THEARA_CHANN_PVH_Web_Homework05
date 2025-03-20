// import BookCards from "@/components/BookCards";
import CartoonCards from "@/components/CartoonCards";
import FilterCategory from "@/components/DropDownMenu";
// import CartoonData from "@/service/CartoonData";
import { Button, Divider, Dropdown, DropdownTrigger, Link } from "@heroui/react";


export default async function CartoonPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon`)
  const cartoonData = await res.json();

  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon_genre`)
  const cartoonCate = await result.json();

  // const data = await CartoonData();
  // console.log("data : ", data);

  return (
    <>
    <div className="sm:w-full sm:h-[100%]">
        <div className="sm:w-full sm:h-[15%]">
          <div className="sm:w-[96%] sm:h-[100%] pt-5 pl-5">
            <div className="flex justify-between">
              <Button className="sm:bg-[#cecdcd] pl-5 pr-5">
                <Link href="/cartoon" className="text-[#087E8B] font-bold">
                  Old School Cartoons
                </Link>
              </Button>

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Select by category</Button>
                </DropdownTrigger>
                {cartoonCate.payload.map((genre) => (
                  <div key={genre?.id}>
                    <FilterCategory genre={genre} />
                  </div>
                ))}
              </Dropdown>
            </div>
            <div className="pb-2">
              <Divider className="my-4 text-[#087E8B]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:w-full sm:h-[85%] overflow-auto">
        {cartoonData.payload.map((cartoon) => (
        <div key={cartoon?.id} className="pl-10 pt-10 h-[450px]">
          <CartoonCards cartoon = {cartoon}/>
        </div>
      ))}
        </div>
      </div>
    </>
  )
}