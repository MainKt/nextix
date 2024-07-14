import Post from "@/components/Post";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { posts } from "@/lib/posts"
import { users } from "@/lib/users"
import { notFound } from "next/navigation";

type Props = { params: { username: string } }

export default function Page({ params: { username } }: Props) {
  const userPosts = posts.filter(post => post.user.toLowerCase() == username.toLowerCase());

  if (userPosts.length == 0) notFound()

  const user = users.find(user => user.user.toLowerCase() == username.toLowerCase())

  return <div className="flex flex-col gap-3 justify-center items-center mt-14">
    <div className="flex gap-7 m-16 p-4 w-[80vw]">
      <Avatar className="size-32">
        <AvatarFallback className="text-3xl">{user?.user.split(/(?=[A-Z])/).map(s => s.at(0) ?? "")}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-xl mb-3">{user?.user}</p>
        <p>{user?.bio}</p>
      </div>
    </div>
    {userPosts.map(post =>
      <Post key={post.id} user={post.user} title={post.title} description={post.description} id={post.id} />
    )}
  </div>
}

function toTitleCase(str: string) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
    return match.toUpperCase();
  });
}
