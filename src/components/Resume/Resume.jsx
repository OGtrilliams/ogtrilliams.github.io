import "./js/custom.jsx";
// import headshot from "../../assets/image.jpg";
import headshot from "/images/image.jpg";

const text = [
  `My career has taken me from supporting large-scale cloud infrastructure to creating technical tutorials, developing interactive training tools, and building web-based solutions using JavaScript, HTML, and CSS.`,
];

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
      <section>
        <div className="r-container flex flex-row max-w-4xl" data-aos="fade-right">
          <div className="section max-h-80">
            <h2 className="text-2xl mb-5">Education</h2>
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
            <h2 className="text-2xl mb-5">Experience</h2>
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
    </>
  );
};

export default Resume;
