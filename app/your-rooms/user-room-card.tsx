"use client";
import {Button} from "@/components/ui/button";
import Link  from 'next/link';
import {Room} from '@/db/schema';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { GithubIcon, TrashIcon } from "lucide-react";
import { TagsList } from "@/components/tags-list";
import { splitTags } from "@/lib/utils";
import { deleteRoomAction } from "./actions";

export function UserRoomCard ({room} : {room : Room}){
    return (
    <Card>
    <CardHeader>
      <CardTitle>{room.name}</CardTitle>
      <CardDescription>{room.description}</CardDescription>
    </CardHeader>
    <CardContent className = "flex flex-col gap-4">
      <TagsList tags={splitTags(room.tags)} />
      {room.githubRepo &&(
        <Link
        href ={room.githubRepo}
        className ="flex items-center gap-2"
        target ="_blank"
        rel ="noopener noreferrer">
          <GithubIcon/>
          GitHub Project
        </Link>
      )}
    </CardContent>
    <CardFooter className="flex gap-2">
      <Button asChild>
        <Link href ={`/rooms/${room.id}`}>Join Room</Link>
      </Button>

    <AlertDialog>
  <AlertDialogTrigger asChild>
  <Button variant={"destructive"} >
        <TrashIcon className="w-4 h-4 mr-2"/> Delete Room
    </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your Room
        and remove any data associated with it.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={() =>{
        deleteRoomAction(room.id);
      }}>Yes,Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

   </CardFooter>
  </Card>
    );
  }