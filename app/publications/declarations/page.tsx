import declarationsPath from "./declarations.json"; 
import DeclarationSection from "@/components/custom/declarations-section";

export default function declarations(){
    return(
        <div className="bg-[#f9f9f9] mt-24 flex flex-col">
            <h1 className="text-2xl font-semibold m-6 mb-0">Declarations and Blogposts</h1>
            <DeclarationSection items={declarationsPath}/>
        </div>
    )
}