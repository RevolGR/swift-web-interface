import { useMemo } from "react";
import styles from "./ApplicationManagerContainer.module.css";

const ApplicationManagerContainer = ({
  loginpagefeaturesiconImageUrl,
  loginpagefeaturesdescText,
  loginpagefeaturestitleText,
  propLeft,
}) => {
  const applicationManagerContainerStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={styles.applicationManagerContainer}
      style={applicationManagerContainerStyle}
    >
      <div className={styles.applicationManagerContainer1} />
      <img
        className={styles.reactIconsriridatabase2fill}
        alt=""
        src={loginpagefeaturesiconImageUrl}
      />
      <div className={styles.accessToAll}>{loginpagefeaturesdescText}</div>
      <div className={styles.applicationManager}>
        {loginpagefeaturestitleText}
      </div>
    </div>
  );
};

export default ApplicationManagerContainer;
