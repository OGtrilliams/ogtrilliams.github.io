import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const About = () => {
  const text = `Turning Ideas into Interactive Experiences`;
  const imgRef = useRef(null);
  const aboutText = `Hi, I'm trilliams. I am a JavaScript developer and technical professional with a strong background in problem-solving, content creation, and client-focused support. With over a decade of experience in technical environments and community-driven projects, I bring both code and communication skills to every project I work on.

  What I do best:
  
🛠️ Build responsive, user-friendly web applications with JavaScript, HTML, and CSS

🔀 Translate complex ideas into elegant, functional code

👩🏿‍💻 Collaborate effectively with cross-functional teams and stakeholders

✍🏿 Write clear documentation and create resources to support users and fellow developers`;
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"JavaScript Developer -&- Problem Solver"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60 relative">
        <img
          ref={imgRef}
          src="/images/withgoggy.png"
          alt="trilliams"
          className="w-md rounded-3xl transition-[150ms] duration-[ease] grayscale"
        />

        <section className="hero-buttons absolute bottom-0 left-3">
          <div
            className="left flex-[1_1_45%] min-w-[300px]"
            data-aos="fade-left"
          >
            <div className="social-icons flex gap-2.5 mt-5">
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

            <div className="info flex flex-row relative content-center ml-2 pt-3">
              <i className="fa-solid fa-check p-2 mr-2.5 text-white bg-green-700 rounded-4xl text-3xl"></i>{" "}
              <span className="text-xl w-50">Available for hire</span>
            </div>
          </div>
        </section>

        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>

      <div className="resume flex relative">
        <section className="service-section max-w-[1200px] text-center m-auto px-0 py-20">
          <h1 className="r-heading" data-aos="zoom-in">
            WHAT I DO
          </h1>

          <div
            className="service-container flex justify-center flex-wrap gap-5;"
            data-aos="fade-right"
          >
            <div className="service-card">
              <div className="icon-box">
                <i className="fa-solid fa-code"></i>
              </div>
              <p className="mt-5">Web Development</p>
            </div>

            <div className="service-card active">
              <div className="icon-box">
                <i className="fa-brands fa-product-hunt"></i>
              </div>
              <p className="mt-5">Product Design</p>
            </div>
            <div className="service-card">
              <div className="icon-box">
                <i className="fa-brands fa-uikit"></i>
              </div>
              <p className="mt-5">UI/UX Design</p>
            </div>

            <div className="service-card">
              <div className="icon-box">
                <i className="fa-brands fa-sketch"></i>
              </div>
              <p className="mt-5">React Framework </p>
            </div>
            <div className="service-card">
              <div className="icon-box">
                <i className="fa-brands fa-js"></i>
              </div>
              <p className="mt-5">JavaScript</p>
            </div>

            <div className="service-card">
              <div className="icon-box">
                <i className="fa-brands fa-react"></i>
              </div>
              <p className="mt-5">Mobile Development</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
