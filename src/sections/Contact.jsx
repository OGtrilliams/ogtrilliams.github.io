import React from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import ContactForm from "../components/ContactForm";
import { socials } from "../constants";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Contact = () => {
  const text = `Got a question, comment or project Idea?
    We would love to hear from you and discus further!`;
  const items = [
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  });
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You dream it, I code it."}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        <div className="contact-container">
          <ContactForm />
        </div>

        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col gap-10"></div>
        </div>
      </div>

      {/* <Marquee items={items} className="text-white bg-transparent" /> */}
    </section>
  );
};

export default Contact;
