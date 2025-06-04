import "./Socials.css";
import "../Stickers/Stickers.css";
import {
  FaDev,
  FaEtsy,
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaTwitch,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";
import { FaBluesky, FaRobot } from "react-icons/fa6";
import fire_robot from "../../assets/fire-robot.png";
import blacktocat from "../../assets/blacktocats.png";
import bsky_logo from "../../assets/Bluesky_logo.svg";
import chunkicorn from "../../assets/chunky-unicorn.png";
import capybara from "../../assets/capybara-with-berries.png";
import youtube_logo from "../../assets/yt-logo.png";

function Socials() {
  const links = [
    {
      id: "gh",
      name: "Github",
      url: "https://github.com/OGtrilliams",
      icon: <FaGithub />,
      img: { blacktocat },
    },
    {
      id: "bsky",
      name: "Bluesky",
      url: "https://bsky.app/profile/stilltrill.bsky.social",
      icon: <FaBluesky />,
      img: { bsky_logo },
    },
    {
      id: "etsy",
      name: "Etsy",
      url: "https://etsy.com/OGtrilliams",
      icon: <FaEtsy />,
    },
    {
      id: "yt",
      name: "YouTube",
      link: "https://youtube.com/OGtrilliams",
      icon: <FaYoutube />,
    },
    {
      id: "li",
      name: "LinkedIn",
      link: "https://linkedin.com/in/trilliams",
      icon: <FaLinkedin />,
    },
    {
      id: "twitch",
      name: "Twitch",
      link: "https://twitch.com/OGtrilliams",
      icon: <FaTwitch />,
    },
    {
      id: "dev",
      name: "dev.to",
      link: "https://dev.to/OGtrilliams",
      icon: <FaDev />,
    },
    {
      id: "tt",
      name: "TikTok",
      link: "https://tiktok.com/OGtrilliams",
      icon: <FaTiktok />,
    },
  ];

  return (
    <>
      <h1>Sticker Sheet</h1>
      <div className="sticker-sheet">
        <div className="sticker-code">
          I &lt;3 <br />
          Coding
        </div>
        <div className="sticker-gh">
          <a
            href="https://github.com/OGtrilliams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={blacktocat} alt="Github" height="250" />
          </a>
        </div>
        <div className="sticker-css" id="web">
          HTML &amp; CSS
        </div>

        <div className="sticker-robots">
          <p>
            Robots Are <br />{" "}
            <i className="fa-solid fa-robot fa-duotone fa-3xl"></i>
            <br /> Our Friends
          </p>
        </div>

        <div className="heartsticker">
          <p>I</p>
          <div className="fa-heart blink">
            <FaHeart />
          </div>
          <p>U XR-2</p>
        </div>

        <div className="socials-loose">
          <div className="fire-bot-sticker" id="firebot">
            <img src={fire_robot} alt="" height="180" />
            <span id="firetext">ROBOTS</span>
          </div>
          <div className="chunky-uni">
            <span id="chunk-uni-text">Chunky Unicorn</span>
            <img src={chunkicorn} height="175" alt="" />
          </div>

          <div className="capybara" id="guineafriend">
            <img src={capybara} alt="Guineafriend" height="180" />
            <span id="guinea-txt">
              Your guinea-friend <br /> until the end
            </span>
          </div>
        </div>

        <div className="sticker-bsky">
          <a
            href="https://bsky.app/profile/stilltrill.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sticker-bsky-txt">
              <FaBluesky /> <br />
              Bluesky
            </span>
          </a>
        </div>
      </div>
      <div className="sticker-sheet-2">
        <div className="etsy-sticker">
          <a
            href="https://etsy.com/OGtrilliams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              {" "}
              <FaEtsy />
            </p>
          </a>
        </div>

        <div className="yt-sticker">
          <a
            href="https://youtube.com/OGtrilliams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube_logo} alt="Youtube" height="150" />
          </a>
        </div>
        <div className="linkedin-sticker">
          <i className="fa-brands fa-linkedin-in fa-border fa-3x"></i>
        </div>
        <div className="twitch-sticker">
          <i
            className="fa-brands fa-twitch fa-inverse"
            data-fa-mask="fa-solid fa-comment"
          ></i>
        </div>
      </div>

      <div className="socials">
        {links.map((l) => (
          <span key={l.id}>
            <div id={l.id}>
              <a href={l.link} target="_blank" rel="noopener noreferrer">
                <span className={`fa ${l.id}`}>
                  <img src={l.img} alt="" />
                  <p>{l.name}</p>
                </span>
              </a>
            </div>
          </span>
        ))}
      </div>
    </>
  );
}

export default Socials;
