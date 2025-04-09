import "./Socials.css";
import "../Functions/Stars.css";
import fire_robot from "../../assets/fire-robot.png";
import blacktocat from "../../assets/blacktocats.png";
import bsky_logo from "../../assets/Bluesky_logo.svg";
import chunkicorn from "../../assets/chunky-unicorn.png";
import capybara from "../../assets/capybara-with-berries.png";
import youtube_logo from "../../assets/yt-logo.png";
import tiktok_icon from "../../assets/tiktok_logo_social.png";
function Socials() {
  // const clr = document.querySelector("input");
  const btn = document.querySelector("button");

  // clr.addEventListener("input", (ev) => {
  //   btn.style.setProperty("--clr", ev.target.value);
  // });

  setTimeout(() => {
    btn.classList.add("over");
    setTimeout(() => {
      btn.classList.remove("over");
    }, 2500);
  }, 500);

  return (
    <>
      <h1>Sticker Sheet</h1>
      <div className="sticker-sheet">
        <div className="sticker-code hvr-curl-top-right">
          I &lt;3 <br />
          Coding
        </div>
        <div className="sticker-gh hvr-curl-top-right">
          <a
            href="https://github.com/OGtrilliams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={blacktocat} alt="Github" />
          </a>
        </div>
        <div className="tiktok-sticker hvr-curl-top-right rainbow">
          <span className="tik">
            <a
              href="https://tiktok.com/OGtrilliams"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok_icon} className="tiktok-icon" />
            </a>
          </span>
        </div>

        <div className="linkedin-sticker hvr-curl-top-right">
          <a
            href="https://linkedin.com/in/trilliams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in fa-border fa-3x"></i>
          </a>
        </div>
        <div className="sticker-css hvr-curl-top-right" id="web">
          HTML &amp; CSS
        </div>

        <div className="sticker-robots hvr-curl-top-right">
          <p>
            Robots Are <br />{" "}
            <i className="fa-solid fa-robot fa-duotone fa-3xl"></i>
            <br /> Our Friends
          </p>
        </div>
        <div className="sticker-bsky sparkles">
          <a
            href="https://bsky.app/profile/stilltrill.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={bsky_logo} className="sticker-bsky-logo " />
            <span className="sticker-bsky-txt">Bluesky</span>
          </a>
        </div>

        <div className="fire-bot-sticker hvr-curl-top-right" id="firebot">
          <img src={fire_robot} alt="" height="180" />
          <span id="firetext">ROBOTS</span>
        </div>
        <div className="chunky-uni hvr-curl-top-right">
          <span id="chunk-uni-text">Chunky Unicorn</span>
          <img src={chunkicorn} height="175" alt="" />
        </div>

        <div className="capybara hvr-curl-top-right" id="guineafriend">
          <img src={capybara} alt="Guineafriend" height="180" />
          <span id="guinea-txt">
            Your guinea-friend <br /> until the end
          </span>
        </div>

        <div className="yt-sticker hvr-curl-top-right">
          <a
            href="https://youtube.com/OGtrilliams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube_logo} alt="Youtube" height="150" />
          </a>
        </div>

        <div className="twitch-sticker hvr-curl-top-right">
          <a
            href="https://twitch.com/OGtrilliams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-twitch fa-inverse"
              data-fa-mask="fa-solid fa-comment"
            ></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Socials;
