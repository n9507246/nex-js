import Image from "next/image";
import classes from "./contact.module.css";

const ContactPage = () => {

  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <Image src="/contact.png" alt="" fill className={classes.img} />
      </div>
      <div className={classes.formContainer}>
        <form action="" className={classes.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;