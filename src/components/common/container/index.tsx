import styles from "./index.module.scss";
import Header from "../header";
import Footer from "../footer";

export default function Container() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.children}>Hello, World!</div>
      <Footer />
    </div>
  );
}
