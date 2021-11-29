import styles from "./Row.module.css";
import Box from "../UI/header/Box";

const Row = (props) => {
  return (
    <div className={styles.row}>
      {[...Array(4).keys()].map((item, i) => (
        <Box>{i % 2 ?  "Multiple Words to continue" : "word"}</Box>
      ))}
    </div>
  );
};

export default Row;
