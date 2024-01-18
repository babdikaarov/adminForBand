import { useLocation } from "react-router-dom";
import styles from "./style.module.css";

const BandPage = () => {
  let page = "https://coolband.netlify.app";
  const { pathname } = useLocation();
  if (pathname === "/cool_show_band") {
    page = "https://coolband.netlify.app";
  } else {
    page = page + "/studio";
  }

  return (
    <div className={styles.div}>
      <iframe title="External Website" src={page} width="100%" height="100vh"></iframe>
    </div>
  );
};

export default BandPage;
