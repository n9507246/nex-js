import Image from "next/image"
import classes from "./PostCard.module.css"
import Link from "next/link"


const PostCard = async ({data}) => {

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.imgContainer}>
          <Image src='https://i.pinimg.com/originals/d0/fb/de/d0fbde1f87000927d7d70f910965060c.jpg' alt="" fill className={classes.img}/>
        </div>
        <span className={classes.date}>01.01.2024</span>
      </div>
      <div className={classes.bottom}>
        <h1 className={classes.title}>{data.title}</h1>
        <p className={classes.desc}>{data.body}</p>
      </div>
      <Link className={classes.link} href={`/blog/${data.id}`}>READ MORE</Link>
    </div>
  )
}

export default PostCard