"use client"

import React from "react";
import { Button, Link } from "@heroui/react";
import { Airplane, Book, Camera, Code, EmojiHappy, Home, Music, PlayCircle, Setting, Stickynote, Video } from "iconsax-react";

export default function SideBar() {
  const menu = [
    {
      id: 1,
      name: "Home",
      src: <Home size="18" color="#C81D25" />,
      href: "/",
    },
    {
      id: 2,
      name: "Book Categories",
      src: <Book size="20" color="#C81D25" />,
      href: "/book",
    },
    {
      id: 3,
      name: "Old-School Cartoons",
      src: <EmojiHappy size="18" color="#C81D25" />,
      href: "/cartoon",
    },
    {
      id: 4,
      name: "Movies & TV Shows",
      src: <Video size="18" color="#C81D25" />,
      href: "/",
    },
    {
      id: 5,
      name: "Music",
      src: <Music size="18" color="#C81D25" />,
      href: "/",
    },
    {
      id: 6,
      name: "Photography",
      src: <Camera size="18" color="#C81D25" />,
      href: "/",
    },
    {
      id: 7,
      name: "Sports & Fitness",
      src: <PlayCircle size="18" color="#C81D25" />,
      href: "/",
    },
    {
      id: 8,
      name: "Technology & Gadgets",
      src: <Code size="18" color="#C81D25" />,
      href: "/",
    },
    {
      id: 9,
      name: "Travel & Exploration",
      src: <Airplane size="18" color="#C81D25" />,
      href: "/",
    },
    {
      id: 10,
      name: "Writing & Journaling",
      src: <Stickynote size="18" color="#C81D25" />,
      href: "/",
    },
  ]
  return (
    <>
      <div className="sm:w-full sm:h-screen bg-[#F5F7F8]">
        <div className="sm:w-full sm:h-[30%] flex flex-col justify-center space-y-1 cursor-pointer">
          <img src="https://i.pinimg.com/736x/f8/84/18/f884185429452b27cb25cdd5cc0ccf51.jpg" className="sm:w-[40%] rounded-[50%] self-center shadow-xl"></img>
          <p className="font-bold text-center text-xl">Yaraa</p>
          <p className="font-normal text-center text-sm text-[#087E8B]">Yaraa@gmail.com</p>
        </div>
        <div className="sm:h-[55%] p-3 space-y-1">
          {menu.map((item) => {
            return (
              <Button key={item.id}
                className="w-full flex bg-[#F5F7F8] hover:bg-[#c4c3c3] h-7 text-xs justify-start items-center"
              >
                {item.src}
                <Link href={item.href} className="text-xs text-[#0B3954]">{item.name}</Link>
              </Button>
            )
          })}

        </div>
        <div className="sm:h-[15%] flex p-3 space-y-1">
          <Button className="w-full bg-[#c4c3c3] hover:bg-[#c4c3c3] h-8 text-xs text-[#0B3954] justify-start self-center"
          >
            <Setting size="20" color="#0B3954" />
            <p className="">Setting</p>
          </Button>
        </div>
      </div>
    </>
  )
}