// import Image from "next/image";
// import styles from "../page.module.css";

import BookCards from "@/components/BookCards";
import FilterCategory from "@/components/DropDownMenu";

import { Button, Divider, Dropdown, DropdownTrigger, Link } from "@heroui/react";
// import { useEffect, useState } from "react";
// import BookDetail from "@/service/BookDetail";


export default async function BookPage() {

  // const data = await BookDetail();
  // console.log("data : ", data);

  // const [bookCate, setBookCate] = useState[null]
  // useEffect(() => {
  //   fetch(`${process.env.NEXR_PUBLIC_BASE_URL}/book`).then(res => res.json()).then(data => {
  //     console.log(data.res);
  //   })
  // }, []);

  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book_category`)
  const bookCate = await result.json();
  // console.log("Book Cate : ", bookCate);


  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book`)
  const bookData = await res.json();
  // console.log("Book Data : ", bookData);


  return (
    <>
      <div className="sm:w-full sm:h-[100%]">
        <div className="sm:w-full sm:h-[15%]">
          <div className="sm:w-[96%] sm:h-[100%] pt-5 pl-5">
            <div className="flex justify-between">
              <Button className="sm:bg-[#cecdcd] pl-5 pr-5">
                <Link href="/book" className="text-[#087E8B] font-bold">
                  All Book
                </Link>
              </Button>

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Select by category</Button>
                </DropdownTrigger>
                {bookCate.payload.map((category) => (
                  <div key={category?.id}>
                    <FilterCategory category={category} />
                  </div>

                ))}
              </Dropdown>


            </div>
            <div className="pb-2">
              <Divider className="my-4 text-[#087E8B]" />
            </div>

          </div>

        </div>

        <div className="grid grid-cols-2 sm:w-full sm:h-[85%] overflow-auto">
          {bookData.payload.map((book) => (
            <div key={book?.id} className="pl-10 pt-10 h-[400px]">
              <BookCards book={book} />
            </div>
          ))}
        </div>



      </div>
    </>
  )
}