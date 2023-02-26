import { useMemo } from "react";
import styles from "./YoutubeSubscribersContainer.module.css";

const YoutubeSubscribersContainer = ({
  socialMediaImageUrl,
  socialMediaSubs,
  socialMediaSubsText,
  youtubeSubsLeft,
  propMargin,
}) => {
  const youtubeContainerStyle = useMemo(() => {
    return {
      left: youtubeSubsLeft,
    };
  }, [youtubeSubsLeft]);

  const youtubeSubsStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={styles.youtubeContainer} style={youtubeContainerStyle}>
      <div className={styles.roundBoxYoutube} />
      <div className={styles.iconBoxYoutube} />
      <img
        className={styles.reactIconsririyoutubefill}
        alt=""
        src={socialMediaImageUrl}
      />
      <div className={styles.youtubeSubs} style={youtubeSubsStyle}>
        {socialMediaSubs}
      </div>
      <div className={styles.youtubeSubscribers}>{socialMediaSubsText}</div>
    </div>
  );
};

export default YoutubeSubscribersContainer;
