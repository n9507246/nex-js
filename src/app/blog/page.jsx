import PostCard from "@/components/postCard/postCard";
import classes from "./blog.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10",{ next:{revalidate:3600}})
  if(!res.ok) throw new Error('Somefing went wrong')
  return res.json()
}

const BlogPage = async () => {

  const posts = await getData()

  return (
    <div className={classes.container}>
      {posts.map((post) => (
        <div className={classes.post} key={post.id}>
          <PostCard data={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;