import { useEffect, useState } from "react";
import { InputElement } from "../InputElement/InputElement";

interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  genre: string;
  isbnNo: string;
  pages: number;
  totalCopies: number;
  availableCopies: number;
}

export function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await fetch("http://localhost:3001/books", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setBooks(data.items);
        } else {
          alert("Failed to fetch books");
          console.log("Failed to fetch books");
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="bg-custom-dark-green p-5 min-h-screen">
      <div className="bg-white p-10 min-h-screen">
        <InputElement inputType="text" label="" placeholder="Search" />
        <div>
          {books.map((book) => (
            <div key={book.id}>{book.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
