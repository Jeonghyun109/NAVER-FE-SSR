import styles from "./index.module.scss";
import { PropsWithChildren } from "react";
import Header from "@components/common/header";
import Footer from "@components/common/footer";

export default function Container({ children }: PropsWithChildren<{}>) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
}
