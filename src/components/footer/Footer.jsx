import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>My example</div>
      <div className={classes.text}>
        My example project © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;