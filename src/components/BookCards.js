import { Button, Card, Link } from "@heroui/react";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="w-[400px] h-[230px] relative">
      <Card className="w-[150px] h-[230px] absolute left-3 bottom-5 z-10  shadow-xl">
        <img
          src={book.image}
          alt={book.book_title}
          className="w-full h-full object-cover rounded-lg"
        />
      </Card>
      <div className="flex bg-[#dcdcdc] h-[100%] p-4 rounded-lg shadow-lg absolute top-12">


        <div className="w-[150px]">
        </div>

        <div className="w-2/3 h-[90%] pl-6 flex flex-col justify-between">
          <div className="h-[100%] ">
            <h2 className="text-lg font-bold text-gray-900 line-clime-1">{book.book_title}</h2>
            <p className="text-sm text-gray-700 mt-2 line-clamp-5">
              {book.description}
            </p>
          </div>
          <Button className="w-[150px] absolute left-3 bottom-5 rounded-3xl bg-blue-100 hover:bg-[#0B3954] transition">
          <Link href={`/bookDetail/${book.id}`} className="text-[#0B3954] hover:text-white">Read Full Article</Link>
        </Button>

        </div>
      </div>
    </div>
  );
};

export default BookCard;
