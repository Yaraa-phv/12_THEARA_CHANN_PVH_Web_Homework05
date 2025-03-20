import { Button, Card, Divider, Link } from "@heroui/react"
import { Eye } from "iconsax-react"

export default function CartoonCards({ cartoon }) {


  return (
    <>
      <div className="w-[40vh] sm:h-[55vh]">
        <Card
          className="w-full h-full">
          <Link href={`/cartoonDetail/${cartoon.id}`} className="group block">
            <img
              alt=""
              src={cartoon?.image}
              className="absolute inset-0 object-cover transition-opacity group-hover:opacity-50"
            />
          </Link>
        </Card>
      </div>

      <div className="w-[40vh] sm:h-[55vh] pl-5 pr-5 text-center">
          <h1 className="font-bold text-sm">{cartoon.ct_title}</h1>
          <div className="flex gap-2 justify-center text-xs">
            <Eye size="15" color="#0B3954" /> {cartoon.view_count} times | {cartoon.published_year}
          </div>
        </div>
    </>
  )
}