import Image from "next/image"
import classes from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        {post.img && <div className={classes.imgContainer}>
          <Image src={post.img} alt="" fill className={classes.img}/>
        </div>}
        <span className={classes.date}>{post.createdAt}</span>
      </div>
      <div className={classes.bottom}>
        <h1 className={classes.title}>{post.title}</h1>
        <p className={classes.desc}>{post.body}</p>
      </div>
      <div className={classes.link}>READ MORE</div>
    </div>
  )
}

export default PostCard