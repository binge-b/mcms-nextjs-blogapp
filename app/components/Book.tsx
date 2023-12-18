"use client";

import Image from "next/image";
import Link from "next/link";
import { BookType } from "../types/types";

type BookProps = {
    book: BookType;
};

// eslint-disable-next-line react/display-name
const Book = ({ book }: BookProps) => {
  return (
    <>
      <div className="shadow my-4 flex flex-col">
        <div className="hover:opacity-75 duration-300">
          <Image
            priority
            src={book.thumbnail.url}
            alt={book.title}
            width={1280}
            height={710}
            className="h-2/5 w-full object-cover"
          />
          <div className="bg-gray-100 flex flex-col justify-start p-6">
                <h2 className="text-sky-950 text-3xl font-bold hover:text-sky-800 py-3 px-3">
                {book.title}
                </h2>
                <div className="py-3 px-3">
                <span className="text-sm text-red-500">updated:{new Date(book.updatedAt).toLocaleString()}</span>
                </div>
                {/* <p className="text-xl pb-3 text-pink-600">stack: Nextjs</p> */}
                <Link href="#" className="text-sky-950">{book.content}</Link>
                {/* <Link href={`/book/${book.contentId}`}>記事を読む</Link> */}
                {/* 記事詳細ページに遷移できない件↑ */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
