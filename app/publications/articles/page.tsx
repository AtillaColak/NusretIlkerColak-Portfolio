import declarationsPath from "./articles.json"; 
import DeclarationSection from "@/components/custom/declarations-section";

export default function articles(){
    return(
        <div className="bg-[#f9f9f9] mt-24 flex flex-col">
            <h1 className="text-2xl font-semibold m-6 mb-0">Articles</h1>
            <DeclarationSection items={declarationsPath}/>
        </div>
    )
}