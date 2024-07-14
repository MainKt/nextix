import Post from "@/components/Post";
import { posts } from "@/lib/posts";

export default function Page() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center mt-28 mb-20">
      {posts.map(post =>
        <Post key={post.id} user={post.user} title={post.title} description={post.description} id={post.id} />
      )}
    </div>
  )
}
