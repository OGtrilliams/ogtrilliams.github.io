import "./ProfileCard.css";

// const [openBtn, setOpenBtn] = useState("fa-plus");

const handleClick = () => {
  let btn = document.querySelector(".card-btn");
  let btnIcon = btn.querySelector("i");
  let cardSlide = document.querySelector(".card-slide");

  cardSlide.classList.toggle("show");

  if (btnIcon.classList.contains("fa-plus")) {
    btnIcon.classList.replace("fa-plus", "fa-minus");
  } else {
    btnIcon.classList.replace("fa-minus", "fa-plus");
  }
};

const ProfileCard = () => {
  return (
    <>
      <div className="page-width pcard-pg">
        <div className="card">
          <div className="card-top">
            <div className="card-text">
              <h2>trilliams</h2>
              <p>Frontend Developer</p>
            </div>
            <div className="card-btn">
              <i className="fas fa-plus" onClick={handleClick}></i>
            </div>
          </div>
          <div className="card-bottom">
            <div className="box">
              <h5>Projects</h5>
              <p>30</p>
            </div>
            <div className="box">
              <h5>Clients</h5>
              <p>20</p>
            </div>
            <div className="box">
              <h5>Rating</h5>
              <p>4.8</p>
            </div>
          </div>
          <div className="card-slide">
            <p>Learn more about me:</p>
            <div className="social-icons">
              <a
                href="https://linkedin.com/in/trilliams"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/OGtrilliams"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://etsy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-etsy"></i>
              </a>
              <a
                href="https://mastodon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-mastodon"></i>
              </a>
              <a
                href="https://tiktok.com/trilliams"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://bsky.app/profile/stilltrill.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-bluesky"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
