"use client"
import { Button, Card, Divider, Link } from "@heroui/react"
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Book, Book1, Eye, Happyemoji, Home, Smileys } from "iconsax-react";
export default function CartoonCardDetail({ cartoon }) {

  const items = [
    {
      id: 1,
      title: "Home",
      src: <Home size="18" color="#C81D25"/>,
      href: `/`
    },
    {
      id: 2,
      title: "Old School Cartoons",
      src: <Happyemoji size="18" color="#C81D25"/> ,
      href: `/cartoon`,
    },
    {
      id: 3,
      title: "Book Category",
      src: <Smileys size="18" color="#C81D25"/> ,
      href: `/cartoonDetail/${cartoon.id}`,
    },
  ]

  // const click = () => {

  // }

  return (
    <>
      <div className="sm:w-[90%] sm:h-[90%] self-center relative">
        <div className="sm:h-[25%] ">
          <Breadcrumbs>
            {items.map((item) => (
              <BreadcrumbItem key={item.id}>
                
                <Link href={item.href} className="text-[#087E8B] gap-2">{item.src} {item.title} </Link>
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
        </div>

        <Card className="w-[220px] h-[300px] absolute right-12 top-3 z-10  shadow-xl">
          <img
            src={cartoon.image}
            alt={cartoon.ct_title}
            className="w-full h-full object-cover rounded-lg"
          />
        </Card>

        <div className="p-5 bg-[#F5F7F8] rounded-xl sm:w-full sm:h-fit">
          <div className="sm:w-full sm:h-[35%] pt-12">
          <h1 className="font-bold text-xl pl-4 pb-2">{cartoon.ct_title}</h1>
            <p className="text-lg pl-4 pb-2">
             by <span className="font-bold text-[#087E8B]"> {cartoon.ct_creator}</span>
            </p>
            <div className="flex gap-3 pl-4 text-[#087E8B]"><Eye size="15" color="#087E8B" className="self-center"/> {cartoon.view_count} times | {cartoon.published_year}</div>
          </div>
          <div className="pt-5">
          
            <p className="text-xs text-justify p-4">
              {cartoon.ct_description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}