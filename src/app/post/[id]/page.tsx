import Post from "@/components/Post";
import { posts } from "@/lib/posts"
import { notFound } from "next/navigation"

type Props = { params: { id: string } }

export default function Page({ params: { id } }: Props) {
  const post = posts.find(post => post.id === parseInt(id))

  if (!post) notFound();

  return <div className="flex justify-center items-center mt-28">
    <Post key={post.id} user={post.user} title={post.title} description={post.description} id={post.id} likes={post.likes} />
  </div>
}
