"use client"
import { useRouter } from "next/navigation"

export default function Header(){
    const router = useRouter()
    return (<>
        <div className="bg-black border-b border-white text-white w-screen h-28 z-10 absolute top-0">
            <div className="relative h-full flex gap-x-4">
                <img className="h-[6rem] pl-2 my-auto" src="https://picsum.photos/200"/>
                <p className="text-white my-auto px-1 mx-4 text-3xl">URGARDEN.JO</p>
                <button className="border border-green-400 h-fit my-auto p-1 rounded-sm hover:bg-white/30" onClick={()=>{router.push("/dashboard")}}>I am a button</button>
            </div>
        </div>
    </>)
}