
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#000D2E]">
      <main className="flex flex-1 w-full mr-auto flex-row items-end py-32 px-16 bg-white dark:bg-[#000D2E]" style={{ alignItems: "flex-end" }} >
      
        <Image
          
          src="/claudinho.jpeg"
          alt="claudinho.jpeg"
          width={600}
          height={600}
          
          priority
        />

          <div className="flex flex-col justify-between h-[500px]">
    
    <div>
      <h1 className="text-4xl font-bold text-white"> Brainy! 
        Seu assistente de IA para conquistar sua aprovação. </h1>
      <p className="text-zinc-400">Pratique redação, revise conteúdos e chegue no dia do vestibular preparado.</p>
    </div>
    



       <div className="flex flex-col gap-4">
          <a className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="/redacao" onClick={() => router.push("/redacao")}>
            Redação
         
          </a>
          <a className="flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-white hover:bg-white/10"
            href="/mural">
            Mural
          </a>
        </div>
        </div>

      </main>
  
    </div>
  );
}

