import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";


export function TagsList({ tags }: { tags: string[] }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <Badge className="w-fit" key ={tag}>
            {tag}
        </Badge>
      ))}
    </div>
  );
}

export function splitTags(tags : string){
    if(!tags) return [];
    return tags.split(",").map((tag) => tag.trim());
}