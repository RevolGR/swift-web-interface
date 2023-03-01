import { useCallback } from "react";
import Apibutton from "../components/Apibutton";
import YoutubeSubscribersNum from "../components/YoutubeSubscribersNum";
import TwitterFollowersNum from "../components/TwitterFollowersNum";
import styles from "./Website.module.css";

const Website = () => {
  const onYoutubeFrameClick = useCallback(() => {
    window.open("https://www.youtube.com/@TeamSwiFT_RL");
  }, []);

  return (
    <div className={styles.website}>
      <nav className={styles.navbar} id="navbar">
        <div className={styles.navbarFrame}>
          <img
            className={styles.swiftLogoBlack1Icon}
            alt=""
            src="../swift-logo-black-1@2x.png"
          />
          <b className={styles.newerfasterbetter}>#NEWERFASTERBETTER</b>
        </div>
      </nav>
      <div className={styles.body}>
        <div className={styles.loginButton}>
          <div className={styles.loginHeaderFrameParent}>
            <div className={styles.loginHeaderFrame}>
              <div className={styles.header}>
                <div className={styles.login}>Login</div>
              </div>
            </div>
            <div className={styles.loginButton1}>
              <div className={styles.loginToYour}>
                Login to your Discord Account
              </div>
              <img
                className={styles.lightMiddleGreen}
                alt=""
                src="../light-middle-green.svg"
              />
              <Apibutton />
            </div>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.lightTopWhiteWrapper}>
            <img
              className={styles.lightTopWhite}
              alt=""
              src="../light-top-white.svg"
            />
          </div>
          <div className={styles.header1}>
            <div className={styles.header2}>
              <div className={styles.swiftBotWeb}>SwiFT BoT WeB IntErFacE</div>
              <div className={styles.newerfasterbetter1}>
                #NEWERFASTERBETTER
              </div>
            </div>
            <button className={styles.arrowFrame}>
              <img
                className={styles.arrowFrameChild}
                alt=""
                src="../arrow-1@2x.png"
              />
            </button>
          </div>
          <div className={styles.featuresFrameParent}>
            <div className={styles.featuresFrame}>
              <button className={styles.applicationFrame}>
                <div className={styles.applicationManagerContainer}>
                  <div className={styles.applicationManagerContainerChild} />
                  <div className={styles.applicationManager}>
                    Application Manager
                  </div>
                  <div className={styles.accessToAll}>
                    Access to all past applications
                  </div>
                  <img
                    className={styles.reactIconsimimdatabase}
                    alt=""
                    src="../reacticonsimimdatabase.svg"
                  />
                </div>
              </button>
              <button className={styles.meetingCalendarFrame}>
                <div className={styles.applicationManagerContainer}>
                  <div className={styles.meetingCalendarContainerChild} />
                  <div className={styles.meetingCalendar}>Meeting Calendar</div>
                  <div className={styles.soon}>Soon!</div>
                  <img
                    className={styles.reactIconsimimcalendar}
                    alt=""
                    src="../reacticonsimimcalendar.svg"
                  />
                </div>
              </button>
              <button className={styles.projectSchedulerFrame}>
                <div className={styles.applicationManagerContainer}>
                  <div className={styles.meetingCalendarContainerChild} />
                  <div className={styles.meetingCalendar}>
                    Project Scheduler
                  </div>
                  <div className={styles.soon}>Soon!</div>
                  <img
                    className={styles.reactIconsimimcalendar}
                    alt=""
                    src="../reacticonsimimclock.svg"
                  />
                </div>
              </button>
            </div>
            <div className={styles.worldPicture}>
              <img
                className={styles.worldPictureContainer12x1Icon}
                alt=""
                src="../worldpicturecontainer12x-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.lightMiddleGreenWrapper}>
            <img
              className={styles.lightMiddleGreen1}
              alt=""
              src="../light-middle-green1.svg"
            />
          </div>
          <div className={styles.poweredByTextParent}>
            <div className={styles.poweredByText}>
              <div className={styles.poweredByTeamContainer}>
                <span>
                  <b>Powered by</b>
                  <span className={styles.span}>{` `}</span>
                </span>
                <span className={styles.teamSwift}>TEAM SWIFT</span>
              </div>
            </div>
            <div className={styles.socialsFrame}>
              <button
                className={styles.youtubeFrame}
                onClick={onYoutubeFrameClick}
              >
                <div className={styles.youtubeSubscribersContainer}>
                  <div className={styles.youtubeSubscribersContainerChild} />
                  <div className={styles.youtubeSubscribersContainerItem} />
                  <img
                    className={styles.reactIconsimimyoutube}
                    alt=""
                    src="../reacticonsimimyoutube.svg"
                  />
                  <img
                    className={styles.reactIconsioioiospeople}
                    alt=""
                    src="../reacticonsioioiospeople.svg"
                  />
                  <YoutubeSubscribersNum />
                  <b className={styles.youtubeSubscribers}>
                    YouTube Subscribers
                  </b>
                </div>
              </button>
              <button className={styles.twitterFrame}>
                <div className={styles.youtubeSubscribersContainer}>
                  <div className={styles.youtubeSubscribersContainerChild} />
                  <div className={styles.youtubeSubscribersContainerItem} />
                  <TwitterFollowersNum />
                  <b className={styles.youtubeSubscribers}>Twitter Followers</b>
                  <img
                    className={styles.reactIconsioioiospeople}
                    alt=""
                    src="../reacticonsioioiospeople.svg"
                  />
                  <img
                    className={styles.reactIconsimimtwitter}
                    alt=""
                    src="../reacticonsimimtwitter.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.sprayPaint}>
            <img
              className={styles.spray072Icon}
              alt=""
              src="../spray07-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
