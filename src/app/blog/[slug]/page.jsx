import Image from "next/image";
import classes from "./singlePost.module.css";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,{ next:{revalidate:3600}})
  if(!res.ok) throw new Error('Somefing went wrong')
  return res.json()
}


const SinglePostPage = async ({params}) => {

  const postData = await getData(params.slug)

  return (
    <div className={classes.container}>
      <div className={classes.imgContainer} >
        <Image src='https://i.pinimg.com/originals/d0/fb/de/d0fbde1f87000927d7d70f910965060c.jpg' alr='' fill />
      </div>
      <div className={classes.textContainer}>
        <h1 className={classes.title}>{postData.title}</h1>
        <div className={classes.detail}>
          <Image className={classes.avatar} width={50} height={50} src='/avatar.jpg' alt="" />
          <div className={classes.detailText}>
            <span className={classes.detailTitle}>Author</span>
            <span className={classes.detailValue}>Jhon doe</span>
          </div>
          <div className={classes.detailText}>
            <span className={classes.detailTitle}>Published</span>
            <span className={classes.detailValue}>11.11.1111</span>
          </div>
        </div>
        <div className={classes.content}>
          {postData.body}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;