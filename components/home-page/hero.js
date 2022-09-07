import Image from "next/image";
import classes from "./hero.module.css";
function Hero(params) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/eric.png"
          alt="Dummy profile image"
          width={400}
          height={400}
        ></Image>
      </div>
      <h1>Hi, Im Eric</h1>
      <p>Will teach you some stuff</p>
    </section>
  );
}

export default Hero;
