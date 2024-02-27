import PostCard from "@/components/postCard/postCard";
import classes from "./blog.module.css";

const posts = [
  {title:'title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et possimus deleniti vel voluptatibus ea suscipit veritatis repudiandae, vitae a accusamus officiis accusantium dignissimos? Laboriosam omnis quae quia assumenda sapiente!', slug: 'asss-hole', img: 'https://i.pinimg.com/originals/d0/fb/de/d0fbde1f87000927d7d70f910965060c.jpg', createdAt:"01.01.2024"},
  {title:'title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et possimus deleniti vel voluptatibus ea suscipit veritatis repudiandae, vitae a accusamus officiis accusantium dignissimos? Laboriosam omnis quae quia assumenda sapiente!', slug: 'asss-hole', img: 'https://i.pinimg.com/originals/d0/fb/de/d0fbde1f87000927d7d70f910965060c.jpg', createdAt:"01.01.2024"},
  {title:'title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et possimus deleniti vel voluptatibus ea suscipit veritatis repudiandae, vitae a accusamus officiis accusantium dignissimos? Laboriosam omnis quae quia assumenda sapiente!', slug: 'asss-hole', img: 'https://i.pinimg.com/originals/d0/fb/de/d0fbde1f87000927d7d70f910965060c.jpg', createdAt:"01.01.2024"},
  {title:'title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et possimus deleniti vel voluptatibus ea suscipit veritatis repudiandae, vitae a accusamus officiis accusantium dignissimos? Laboriosam omnis quae quia assumenda sapiente!', slug: 'asss-hole', img: 'https://i.pinimg.com/originals/d0/fb/de/d0fbde1f87000927d7d70f910965060c.jpg', createdAt:"01.01.2024"},
]

const BlogPage = () => {

  return (
    <div className={classes.container}>
      {posts.map((post) => (
        <div className={classes.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;