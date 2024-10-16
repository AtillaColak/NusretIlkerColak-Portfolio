import BookSection from "@/components/custom/book-section";
import books from "./books.json"; 

export default function Books(){
    return(
        <div className="bg-[#f9f9f9] mt-24 flex flex-col">
            <h1 className="text-2xl font-semibold m-6">Book Section</h1>
            <BookSection books={books}/> 
        </div>
    )
}