import React, { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    " Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "Get in Touch",
    "Get in Touch",
    "Get in Touch",
    "Get in Touch",
    "Get in Touch",
  ];

  useGSAP(() => {
    containerRef.current,
      {
        ScrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      };
  });

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center min-h-screen gap-12 mt-16 justify-between"
    >
      <Marquee items={items} />

      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          "Let's build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span>
          <br /> web application <span className="text-gold">together.</span> ''
        </p>
      </div>

      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
