import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aparna</h1>
        <p className={styles.description}>
        Enthusiastic IT graduate passionate about coding and technology, looking to leverage my technical skills in a
        dynamic environment. Seeking a position to apply my technical skills and contribute to innovative projects while
        advancing my career in IT industry.
        </p>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>Technical Skills</h2>
        <ul className={styles.skillsList}>
          <li>React</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>Java</li>
          <li>C++</li>
        </ul>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
