import { useCallback } from "react";
import YoutubeSubscribersContainer from "../components/YoutubeSubscribersContainer";
import ApplicationManagerContainer from "../components/ApplicationManagerContainer";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const onLoginButtonClick = useCallback(() => {
    window.location.href = "http://google.com";
  }, []);

  const onLogoClick = useCallback(() => {
    window.open("http://google.com");
  }, []);

  return (
    <div className={styles.loginPage}>
      <div className={styles.background}>
        <img
          className={styles.bgLeftSide}
          alt=""
          src="../bg-left-side@2x.png"
        />
        <div className={styles.bgRightSide} />
      </div>
      <YoutubeSubscribersContainer
        socialMediaImageUrl="../reacticonsririyoutubefill.svg"
        socialMediaSubs="youtube-subs"
        socialMediaSubsText="YouTube Subscribers"
        youtubeSubsLeft="753px"
      />
      <YoutubeSubscribersContainer
        socialMediaImageUrl="../reacticonsriritwitterfill.svg"
        socialMediaSubs="twitter-followers"
        socialMediaSubsText="Twitter Followers"
        youtubeSubsLeft="1090px"
        propMargin="0"
      />
      <ApplicationManagerContainer
        loginpagefeaturesiconImageUrl="../reacticonsriridatabase2fill.svg"
        loginpagefeaturesdescText="Access to all past applications"
        loginpagefeaturestitleText="Application Manager"
        propLeft="753px"
      />
      <ApplicationManagerContainer
        loginpagefeaturesiconImageUrl="../reacticonsimimclock.svg"
        loginpagefeaturesdescText="Soon!"
        loginpagefeaturestitleText="Project Scheduler"
        propLeft="1205px"
      />
      <ApplicationManagerContainer
        loginpagefeaturesiconImageUrl="../reacticonsimimcalendar.svg"
        loginpagefeaturesdescText="Soon!"
        loginpagefeaturestitleText="Meeting Calendar"
        propLeft="979px"
      />
      <img
        className={styles.worldPictureContainer}
        alt=""
        src="../world-picture-container@2x.png"
      />
      <div className={styles.poweredByContainer}>
        <div className={styles.poweredByTeamContainer}>
          <span className={styles.poweredBy}>{`Powered by `}</span>
          <span className={styles.teamSwift}>TEAM SWIFT</span>
        </div>
      </div>
      <div className={styles.topTextContainer}>
        <div className={styles.poweredByTeamContainer}>SwiFT BOT INTERFACE</div>
        <b className={styles.newerfasterbetter}>#NEWERFASTERBETTER</b>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.loginWholeBorder} />
        <div className={styles.loginToYour}>Login to your Discord Account</div>
        <b className={styles.loginText}>Login</b>
        <button className={styles.loginButton} onClick={onLoginButtonClick}>
          <div className={styles.loginRoundButton} />
          <div className={styles.loginButtonText}>Login</div>
          <img
            className={styles.reactIconsriridiscordfill}
            alt=""
            src="../reacticonsriridiscordfill.svg"
          />
        </button>
      </div>
      <div className={styles.navbarCointainer}>
        <nav className={styles.navbarBorder} id="nav-bar" />
        <button className={styles.logo} onClick={onLogoClick} />
        <h1 className={styles.logoText} id="brand-name">
          #NEWERFASTERBETTER
        </h1>
      </div>
    </div>
  );
};

export default LoginPage;
