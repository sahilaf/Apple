import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { rightImg, watchImg } from "../utils";

import VideoCarosuel from "./VideoCarosuel";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useEffect(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      duration: 2,
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 80%",
        onEnter: () => gsap.to("#title", { opacity: 1, y: 0 ,duration: 2,stagger: 0.25}),
        onLeaveBack: () => gsap.to("#title", { opacity: 0, y: 20 }),
      },
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 80%",
        onEnter: () => gsap.to(".link", { opacity: 1, y: 0, stagger: 0.25,duration: 2 }),
        onLeaveBack: () => gsap.to(".link", { opacity: 0, y: 20 }),
      },
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarosuel />
      </div>
    </section>
  );
};

export default Highlights;
