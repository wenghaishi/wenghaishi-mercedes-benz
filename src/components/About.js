import React from "react";
import classes from "./About.module.css";
import CircularCarousel from "./CircularCarousel";

const About = () => {

  const carouselImages = ["logo192.png","prompt.png","logo192.png","logo192.png"]
  return (
    <div className={classes.main}>
      <h1 className={classes.mainText}>
        The iconic SL has been transformed from 'super-light' to 'superb
        luxurious', and in SL55 form, packs plenty of firepower, too.
        <br />
        <br />
        Electric cars, EVs, zero emissions, sustainability, eco-friendliness.
        We're constantly bombarded with terms like these that we're literally
        drowning in eco-consciousness. Internal combustion engines and fossil
        fuels are bad and must be phased out.
        <br />
        <br />
        The intentions are good, but they are becoming suffocating.
        Ever-tightening emission regulations have quietened the voices of
        high-performance machines. Driving and admiring 'traditional' sports
        cars feels like a crime. But every now and then, a car like the
        Mercedes-Benz SL comes along.
        <br />
        <br />
        Yes, it goes fast, attracts attention, and takes a big chunk out of your
        savings. In SL55 form, it is the first brand-new SL in Singapore that
        costs over $1 million ($1,002,888 to be exact), its price inflated by
        the heftier taxes levied on super-luxury cars.
        <br />
        <br />
        Price tag and vehicle dynamics are just the tip of the iceberg, though.
        It is no ordinary sports car, for the SL's true purpose is to refresh a
        petrolhead's soul.
      </h1>
      <CircularCarousel images={carouselImages} />
    </div>
  );
};

export default About;