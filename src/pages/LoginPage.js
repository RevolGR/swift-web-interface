import { useCallback } from "react";
import TwitterFollowers from "../components/TwitterFollowers";
import YoutubeSubs from "../components/YoutubeSubs";
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
        <img
          className={styles.bgRightSide}
          alt=""
          src="../bg-right-side@2x.png"
        />
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
      <div className={styles.topTextContainer}>
        <div className={styles.swiftBotInterface}>SwiFT BOT INTERFACE</div>
        <b className={styles.newerfasterbetter}>#NEWERFASTERBETTER</b>
      </div>
      <div className={styles.poweredByContainer}>
        <div className={styles.swiftBotInterface}>
          <span className={styles.poweredBy}>{`Powered by `}</span>
          <span className={styles.teamSwift}>TEAM SWIFT</span>
        </div>
      </div>
      <img
        className={styles.worldPictureContainer}
        alt=""
        src="../world-picture-container@2x.png"
      />
      <div className={styles.twitterContainer}>
        <div className={styles.roundBoxTwitter} />
        <div className={styles.iconBoxTwitter} />
        <img
          className={styles.reactIconsriritwitterfill}
          alt=""
          src="../reacticonsriritwitterfill.svg"
        />
        <TwitterFollowers />
        <div className={styles.twitterFollowers}>Twitter Followers</div>
      </div>
      <div className={styles.youtubeContainer}>
        <div className={styles.roundBoxYoutube} />
        <div className={styles.iconBoxYoutube} />
        <img
          className={styles.reactIconsririyoutubefill}
          alt=""
          src="../reacticonsririyoutubefill.svg"
        />
        <YoutubeSubs />
        <div className={styles.youtubeSubscribers}>YouTube Subscribers</div>
      </div>
      <div className={styles.projectSchedulerContainer}>
        <div className={styles.projectSchedulerContainer1} />
        <img
          className={styles.reactIconsimimclock}
          alt=""
          src="../reacticonsimimclock.svg"
        />
        <div className={styles.soon}>Soon!</div>
        <div className={styles.projectScheduler}>Project Scheduler</div>
      </div>
      <div className={styles.meetingCalendarContainer}>
        <div className={styles.projectSchedulerContainer1} />
        <img
          className={styles.reactIconsimimcalendar}
          alt=""
          src="../reacticonsimimcalendar.svg"
        />
        <div className={styles.soon}>Soon!</div>
        <div className={styles.meetingCalendar}>Meeting Calendar</div>
      </div>
      <div className={styles.applicationManagerContainer}>
        <div className={styles.projectSchedulerContainer1} />
        <img
          className={styles.reactIconsimimclock}
          alt=""
          src="../reacticonsriridatabase2fill.svg"
        />
        <div className={styles.accessToAll}>
          Access to all past applications
        </div>
        <div className={styles.applicationManager}>Application Manager</div>
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
