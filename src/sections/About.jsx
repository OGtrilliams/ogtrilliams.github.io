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
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="/images/withgoggy.png"
          alt="trilliams"
          className="w-md rounded-3xl grayscale transition-[150ms] duration-[ease] opacity-80 hover:opacity-100;"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
