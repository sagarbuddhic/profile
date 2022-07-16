// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";
import "./App.css";
import * as styles from "./App.style";
import sagar from "./SAGAR_3.jpg";

// comment
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0, when: "beforeChildren" },
  },
};

const variantsChildren = {
  hidden: { opacity: 0 },
  visible: (index) => {
    const list = 4;
    let divide = index / list;
    if (divide > 1) {
      divide -= Math.floor(divide);
    }

    const delay = 2 + 0.4 * (divide * list);
    return {
      opacity: 1,
      transition: {
        delay,
      },
    };
  },
};

const name = "SAGAR BUDDHI";

function App() {
  return (
    <div css={styles.container}>
      <div css={styles.banner}>
        <div css={styles.imageWrapper}>
          <motion.img
            animate={{ x: 40, y: 40, rotate: 180 }}
            transition={{ duration: 1 }}
            // variants={variants}
            // drag
            // dragConstraints={{
            //   top: -10,
            //   left: -10,
            //   right: 100,
            //   bottom: 50,
            // }}
            // dragElastic={1}
            css={styles.circle}
            src={sagar}
            alt="sagar"
          ></motion.img>
          <span css={styles.name}>
            {[...name].map((char, index) => {
              return (
                <span
                  aria-hidden="true"
                  key={index}
                  css={styles.nameLetters(index)}
                >
                  {char}
                </span>
              );
            })}
          </span>
        </div>
      </div>
      <div css={styles.content}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          css={styles.linksContainer}
        >
          <a
            href="https://stackoverflow.com/users/2951503/sagar-buddhi"
            css={styles.links}
            type="button"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variantsChildren}
              css={styles.button}
              custom="1"
            >
              Stackoverflow
            </motion.div>
          </a>
          {/* <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsChildren}
            css={styles.button}
            custom="2"
          >
            <a
              href="https://www.linkedin.com/in/sagar-buddhi-7a187037/"
              css={styles.links}
              type="button"
            >
              Linkedin
            </a>
          </motion.div> */}
          <a
            href="https://github.com/sagarbuddhic"
            type="button"
            css={styles.links}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variantsChildren}
              css={styles.button}
              custom="3"
            >
              Github
            </motion.div>
          </a>
          <a
            href="https://www.canva.com/design/DADot2ZYU-4/wZKoRsqNk1jMER9MkEgfKg/view?utm_content=DADot2ZYU-4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            type="button"
            css={styles.links}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variantsChildren}
              css={styles.button}
              custom="4"
            >
              Resume
            </motion.div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
