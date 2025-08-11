// import "./Resume.css";
import "./js/custom.jsx";
// import headshot from "../../assets/image.jpg";

const showMail = () => {
  const myEmail = document.querySelector(".hidemail");
  const placeHolder = document.querySelector(".showmail");

  myEmail.classList.toggle("hidden");
  placeHolder.classList.toggle("hidden");
};

const testimonialLoad = () => {
  const testimonials = document.querySelectorAll(".testimonial");
  let currentIndex = 0;
};

function goFwd() {
  document.getElementById("nextBtn").addEventListener("click", () => {
    testimonials[currentIndex].classList.remove("actiive");
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add("actiive");
  });
}
function goBack() {
  const prev = document.getElementById("prevBtn");
  prev.addEventListener("click", () => {
    testimonials[currentIndex].classList.remove("actiive");
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    testimonials[currentIndex].classList.add("actiive");
  });
}
const Resume = () => {
  return (
    <>
      <div className="container">
        <section className="hero">
          <a href="/resume.docx" className="download-btn">
            <i className="fa-solid fa-download"></i>&nbsp;Download CV
          </a>

          <div className="r-container headerContainer">
            <div className="hero-text" data-aos="fade-left">
              <h1>
                trilliams
                <br /> <span id="typing"></span>
              </h1>
              <p>
                Web Designer, JavaScript Developer, Community Manager and
                Developer Advocate
              </p>
              <div className="hero-buttons">
                <button className="commonBtn">
                  <span>Start Consulting</span>
                </button>
                <p className="status">
                  <span>
                    <i className="fa-solid fa-check"></i>
                  </span>
                  Available for Freelance{" "}
                </p>
              </div>
            </div>

            <div className="hero-image" data-aos="fade-right">
              <img src={headshot} alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="r-container">
            <div className="left" data-aos="fade-left">
              <h1 className="r-heading">About Me</h1>
              <p className="subtitle">This is a sentence.</p>

              <div className="social-icons">
                <button className="commonBtn">
                  <span>Download CV</span>
                </button>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-bluesky"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="info">
                <strong>Name:</strong> <span>trilliams</span>
              </div>
              <div className="info">
                <strong>Location: </strong> <span>New York, USA</span>
              </div>
              <div className="info">
                <strong>P.O. Box</strong>{" "}
                <span>#129, Syracuse, New York 13209</span>
              </div>
              <div className="info">
                <strong>Email</strong>{" "}
                <span>
                  <span className="showmail">
                    hello<i className="fa-solid fa-at"></i>
                    trilliams<i className="fa-solid fa-circle"></i> sh
                  </span>
                </span>
              </div>
              <div className="info">
                <strong>Freelance:</strong> <span>Available for hire</span>
              </div>
            </div>

            <div className="right" data-aos="fade-right">
              <div className="skill-box" data-percent="100">
                <div className="skill-content">
                  <div className="percent">75%</div>
                  <p>Graphic Design</p>
                </div>
                <svg>
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7f00ff" />
                      <stop offset="100%" stopColor="#e100ff" />
                    </linearGradient>
                  </defs>
                  <rect></rect>
                </svg>
              </div>

              <div className="skill-box" data-percent="25">
                <div className="skill-content">
                  <div className="percent">100%</div>
                  <p>Development</p>
                </div>
                <svg>
                  <rect></rect>
                </svg>
              </div>
              <div className="skill-box" data-percent="38">
                <div className="skill-content">
                  <div className="percent">68%</div>
                  <p>Marketing</p>
                </div>
                <svg>
                  <rect></rect>
                </svg>
              </div>
              <div className="skill-box" data-percent="73">
                <div className="skill-content">
                  <div className="percent">83%</div>
                  <p>Web Management</p>
                </div>
                <svg>
                  <rect x="2" y="2"></rect>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section">
          <small data-aos="zoom-in">WHAT WE DO</small>
          <h1 className="r-heading" data-aos="zoom-in">
            Our Services
          </h1>
          <br />
          <br />

          <div className="service-container" data-aos="fade-right">
            <div className="service-card">
              <div className="icon-box">
                <i className="fa-solid fa-code"></i>
              </div>
              <p>Web Development</p>
            </div>

            <div className="service-card actiive">
              <div className="icon-box">
                <i className="fa-brands fa-product-hunt"></i>
              </div>
              <p>Product Design</p>
            </div>
            <div className="service-card">
              <div className="icon-box">
                <i className="fa-brands fa-uikit"></i>
              </div>
              <p>UI/UX Design</p>
            </div>

            <div className="service-card">
              <div className="icon-box">
                <i className="fa-brands fa-sketch"></i>
              </div>
              <p>Mobile Development</p>
            </div>
            <div className="service-card">
              <div className="icon-box">
                <i className="fa-brands fa-js"></i>
              </div>
              <p>JavaScript</p>
            </div>

            <div className="service-card">
              <div className="icon-box">
                <i className="fa-brands fa-react"></i>
              </div>
              <p>React Framework</p>
            </div>
          </div>
        </section>

        <section className="timelineSection">
          <small data-aos="zoom-in">PROFESSIONAL EXPERIENCE</small>
          <h1 className="r-heading" data-aos="zoom-in">
            MY RESUME
          </h1>
          <div className="r-container" data-aos="fade-right">
            <div className="section">
              <h2>Education</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <h3>2003 to 2009</h3>
                  <p>Bachelors of Arts</p>
                  <div className="carrd">
                    <h4>University of the Incarnate Word</h4>
                    <p>Fashion Management</p>
                    <p>San Antonio, Texas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <h2>Experience</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <h3>2022 to 2024</h3>
                  <p>Technical Community Manager</p>
                  <div className="carrd">
                    <h4>Open Infrastructure Foundation</h4>
                    <p>Austin, Texas</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <h3>2021 to 2023</h3>
                  <p>Developer Advocate/Community Manager</p>
                  <div className="carrd">
                    <h4>Replicated</h4>
                    <p>Austin, Texas</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <h3>2017 to 2019</h3>
                  <p>Learning Architect/ Community Architect</p>
                  <div className="carrd">
                    <h4>Linux Academy</h4>
                    <p>Keller, Texas</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <h3>2011 to 2016</h3>
                  <p>Cloud Virtualization Engineer</p>
                  <div className="carrd">
                    <h4>RackSpace</h4>
                    <p>Windcrest, Texas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sliderSection">
          <div className="slider-container">
            <div className="sliderLeft" data-aos="fade-right">
              <h1>1M+ Satisfied Customers</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                laudantium, repellat, dolores mollitia cupiditate a atque
                dolorem ipsa ex dolorum distinctio eius ipsum aspernatur rerum
                dolore qui suscipit error ducimus!
              </p>
              {/* <div className="buttons">
              <button id="prevBtn">
                <span onClick={goBack()}> &#10094;</span>
              </button>
              <button id="nextBtn">
                <span onClick={goFwd()}>&#10095;</span>
              </button>
            </div> */}
            </div>

            <div className="sliderRight" data-aos="fade-left">
              <div className="testimonial actiive">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit odio sed veritatis nam veniam laudantium
                  exercitationem vero facilis, assumenda harum reiciendis
                  temporibus voluptatem ea possimus voluptate corporis
                  voluptates repellat quam. Numquam, eum adipisci.
                </p>
                <div className="author">
                  <div className="author-icon">
                    <i className="fa-solid fa-comments"></i>
                  </div>
                  <div className="author-info">
                    <h4>Sir Hairold B. Goggington III</h4>
                    <p>Branch Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="filter-section">
          <small data-aos="zoom-in">Our Work</small>
          <h2 className="r-heading" data-aos="zoom-in">
            Gallery
          </h2>
          <br />

          <div className="filters" data-aos="zoom-in">
            <button className="actiive" data-filter="all">
              All
            </button>
            <button data-filter="landing">Landing Page</button>
            <button data-filter="app">App Design</button>
            <button data-filter="saas">SaaS Product</button>
            <button data-filter="dashboard">Dashboard</button>
          </div>

          <div className="gallery" data-aos="fade-right">
            <div className="card" data-category="landing">
              <img src="./images/project-1.jpg" alt="" />
              <div className="card-body">
                <div className="card-title">SaaS Landing Page</div>
                <div className="card-category">Website Landing/Page</div>
                <button className="openModal">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </div>
            </div>

            <div className="card" data-category="dashboard">
              {/* <img src="./images/project-2.jpg" alt="" /> */}
              <div className="card-body">
                <div className="card-title">Education Platform</div>
                <div className="card-category">Website Landing/Page</div>
                <button className="openModal">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </div>
            </div>

            <div className="card" data-category="app">
              {/* <img src="./images/project-3.jpg" alt="" /> */}
              <div className="card-body">
                <div className="card-title">Education Platform</div>
                <div className="card-category">Website Landing/Page</div>
                <button className="openModal">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </div>
            </div>

            <div className="card" data-category="landing">
              <img src="./images/project-4.jpg" alt="" />
              <div className="card-body">
                <div className="card-title">SaaS Landing Page</div>
                <div className="card-category">Website Landing/Page</div>
                <button className="openModal">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </div>
            </div>

            <div className="card" data-category="saas">
              <img src="./images/project-5.jpg" alt="" />
              <div className="card-body">
                <div className="card-title">SaaS Landing Page</div>
                <div className="card-category">Website Landing/Page</div>
                <button className="openModal">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </div>
            </div>

            <div className="card" data-category="landing">
              <img src="./images/project-6.jpg" alt="" />
              <div className="card-body">
                <div className="card-title">SaaS Landing Page</div>
                <div className="card-category">Website Landing/Page</div>
                <button className="openModal">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="modal hidden" id="modal">
            <span className="close" id="closeModal">
              &times;
            </span>
            <img className="modal-content" id="modal-img" />
          </div>
        </section>

        <button id="backToTop">
          <i className="fa-solid fa-arrow-up"></i>
        </button>

        <div className="scripts">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
          <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
        </div>
      </div>
    </>
  );
};

export default Resume;
