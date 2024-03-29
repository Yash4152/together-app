import {Button} from "@/components/ui/button";
import Link  from 'next/link';
import { getUserRooms } from "../data-access/rooms";
import { UserRoomCard } from "./user-room-card";
import { unstable_noStore } from "next/cache";


export default async function yourRoomsPage() {
    unstable_noStore();
  const rooms = await getUserRooms();
  return (
    <main className="min-h-screen p-20">
      <div className ="flex justify-between items-center mb-12">
      <h1 className="text-4xl"> Your Together Room</h1>
      <Button asChild>
        <Link href ="/create-room">Create Room</Link>
      </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
    { rooms.map((room)=>{
      return <UserRoomCard key ={room.id} room ={room} />;
    })
  }
  </div>
    </main>
  );
}