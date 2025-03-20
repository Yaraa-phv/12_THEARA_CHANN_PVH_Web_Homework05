"use client"
// import BookCategory from "@/service/BookCategory";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";

export default function FilterCategory({ category , genre}) {
  // const items = BookCategory();

  return (
    <DropdownMenu aria-label="Dynamic Actions">
      <DropdownItem>
        {category?.book_cate_name} || {genre?.cartoon_genre}
      </DropdownItem>
    </DropdownMenu>
    // <Dropdown>
    //    {/* <DropdownTrigger>
    // //     <Button variant="bordered">Select by category</Button>
    // //   </DropdownTrigger> */}
    //   <DropdownMenu aria-label="Dynamic Actions">
    //     <DropdownItem>
    //       {category?.book_cate_name || "No Category"}
    //     </DropdownItem>
    //   </DropdownMenu>
    // </Dropdown>
  );
}
