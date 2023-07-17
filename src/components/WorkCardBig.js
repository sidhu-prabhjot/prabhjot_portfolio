import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import styles from "./styles.module.css";

export default function App(props) {
  const {
    title,
    color,
    link,
    linkText,
    start,
    end,
    point1,
    point2,
    point3,
    tools,
  } = props;

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div
      className={styles.container}
      onClick={() => set((state) => !state)}
      style={{ position: "relative" }} // Add this line
    >
      <animated.div
        className={`${styles.c} ${styles.front}`}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: `${color}`,
        }}
      >
        <p>{title}</p>
      </animated.div>
      <animated.div
        className={`${styles.c} ${styles.back}`}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: `4px solid ${color}`,
          flexDirection: "column",
        }}
      >
        <div className={styles.backContainer}>
          <div className={styles.backInfoContainer}>
            <p className={styles.backInfoText}>
              Further Look:{" "}
              <a className={styles.workLink} href={link}>
                {linkText}
              </a>
            </p>
            <p className={styles.backInfoText}>Start Date: {start}</p>
            <p className={styles.backInfoText}>End Date: {end}</p>
          </div>
          <div className={styles.backPointsContainer}>
            <p className={styles.backInfoText}>{point1}</p>
            <p className={styles.backInfoText}>{point2}</p>
            <p className={styles.backInfoText}>{point3}</p>
          </div>
        </div>
        <div className={styles.toolsListContainer}>
          <p className={styles.toolItem}>Tools: </p>
          {tools?.map((item, index) => (
            <p key={index} className={styles.toolItem}>
              {item}
            </p>
          ))}
        </div>
      </animated.div>
    </div>
  );
}
