"use client";

import { Badge, badgeVariants } from "./ui/badge";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";


export function TagsList({ tags }: { tags: string[] }) {
  const router = useRouter();
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
       <Button
        onClick={() =>{
          router.push(`/?search=${tag}`);
        }}
        className={cn(badgeVariants())}
        key ={tag}>
            {tag}
        </Button>
      ))}
    </div>
  );
}