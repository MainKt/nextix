import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { HeartIcon } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback } from "./ui/avatar"

type Prop = {
  title: string,
  description: string,
  id: number,
  user: string
}

export default function Post({
  title, description, id, user
}: Prop) {
  console.log(title)
  return (
    <Link href={`/post/${id}`}>
      <Card className="w-[80vw]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            <Link href={`/user/${user}`} className="flex items-center gap-2">
              <Avatar>
                <AvatarFallback>{user.split(/(?=[A-Z])/).map(s => s.at(0) ?? "")}</AvatarFallback>
              </Avatar>
              {user}
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-1.5">{description}</div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <HeartIcon className="text-rose-700" /> {Math.floor(Math.random() * 100) + 1}
        </CardFooter>
      </Card>
    </Link>
  )
}

