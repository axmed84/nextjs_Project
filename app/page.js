import Image from "next/image";
import Link from "next/link";

// export const revalidate = 3600
export default async function Home() {

  const posts = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-store"})

  const postsData = await posts.json()

  

  return (
    <main>
     <h1>Hi from th Page</h1>
     <span className="font-bold">Current Time {new Date().toLocaleTimeString()}</span>
     {
      postsData.map(post=>(
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} className="list-item">{post.title}</Link>
        </div>
      ))
     }
    </main>
  );
}
