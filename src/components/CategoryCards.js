"use client"

import { Button, Card, Divider, Link, Image } from "@heroui/react";
import { ArchiveBook } from "iconsax-react";

export default function CategoryCards() {

  const card = [
    {
      id: 1,
      title: "Book",
      src: "https://i.pinimg.com/736x/fe/89/42/fe894258fbab81cdf00ff2ec721c620b.jpg",
      href: "/book",
      trailer: "View All Available Books",
    },
    {
      id: 2,
      title: "Cartoon",
      src: "https://i.pinimg.com/736x/c7/04/3f/c7043f34c4a6776880e0751fe4acec5b.jpg",
      href: "/cartoon",
      trailer: "View All Available Cartoons",
    },
  ]

  return (
    <>
      <div className="sm:w-full sm:h-[100%]">
        <div className="sm:w-full sm:h-[15%]">
          <div className="sm:w-[96%] sm:h-[100%] m-5">
            <Button className="sm:bg-[#cecdcd] pl-5 pr-5">
              <Link href="/" className="text-[#087E8B] font-bold">
                HomePage
              </Link>
            </Button>
            <Divider className="my-4" />
          </div>
        </div>


        <div className="flex justify-around pl-5 pr-5">
          {card.map((item) => {
            return (
              <Card
                key={item.id}
                className="w-[35vh] sm:h-[50vh] mt-12">
                <Link href={item.href} className="group relative block">
                  
                  <img
                    alt=""
                    src={item.src}
                    className="absolute inset-0 object-cover transition-opacity group-hover:opacity-50"
                  />
                  <div className="justify-between absolute top-1 ml-1 z-10 size-10">
                        <Button
                          className="text-xs text-[#087E8B] rounded-lg bg-white"
                          color="#087E8B"
                          size="sm"
                        >
                          <ArchiveBook size="15" color="#C81D25" />
                          {item.title}
                        </Button>
                      </div>

                  <div className=" p-4 sm:p-6 lg:p-8">
                      <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <h1 className="text-4xl font-bold text-center text-[#000000] pt-[50%]">
                          {item.trailer}
                        </h1>
                      </div>
                    {/* </div> */}
                  </div>
                </Link>
              </Card>
            )
          })}

        </div>
      </div>

    </>
  )
}