import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import { useEffect, useRef } from "react";

import chartImg from "./assets/Frame 893.png";
import chartImg2 from "./assets/Group 6421.png";
import chartImg3 from "./assets/Frame 934.svg";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const headingRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const subTextRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const otherImageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const ellipseRefs = useRef<(SVGElement | null)[]>([]);
  const imageRef = useRef(null);

  useEffect(() => {
    headingRef.current.forEach((heading) => {
      if (heading) {
        const text = new SplitType(heading, {
          types: "chars,words",
        });

        const tl = gsap.timeline();

        tl.fromTo(
          text.chars,
          { color: "#BABABA" },
          {
            color: "#000000",
            stagger: 1,
            duration: 1,

            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              end: "top 50%",
              scrub: 3,
            },
          }
        );
      }
    });

    subTextRef.current.forEach((subtext) => {
      if (subtext) {
        const text = new SplitType(subtext, {
          types: "chars,words",
        });

        const tl = gsap.timeline();

        tl.fromTo(
          text.chars,
          { opacity: 0, scale: 0, y: -20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            animationDuration: 1,
            stagger: 1,
            duration: 1,

            scrollTrigger: {
              trigger: subtext,
              start: "top 80%",
              end: "top 50%",
              scrub: 3,
            },
          }
        );
      }
    });

    otherImageRefs.current.forEach((image, index) => {
      if (image) {
        gsap.fromTo(
          image,
          { x: index === 0 ? 800 : -800 },
          {
            x: 0,
            scrollTrigger: {
              trigger: image,
              start: "top 80%",
              end: "top 50%",
              scrub: 3,
            },
          }
        );
      }
    });

    const ellipseTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    ellipseRefs.current.forEach((ellipse) => {
      if (ellipse) {
        ellipseTimeline.fromTo(
          ellipse,
          { opacity: 0.3, scale: 0.5, transformOrigin: "center" },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            transformOrigin: "center",
            stagger: 0.3,
          }
        );
      }
    });

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.3 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 3,
          },
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen90">
      <h1
        className="sectionHeading"
        id="aiSolutions"
        ref={(el) => (headingRef.current[0] = el)}
      >
        Simplify Your Finances With AI
      </h1>

      <p
        className="sectionSubHeading"
        ref={(el) => (subTextRef.current[0] = el)}
      >
        Empower your finance with Artificial Intelligence. Seamlessly track
        expenses and investment.
      </p>

      <img
        className="mt-5 md:w-3/4 mx-auto"
        src={chartImg}
        alt="charts"
        ref={imageRef}
      />

      <div
        className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-0 pt-20"
        id="features"
      >
        <div className="md:w-1/2">
          <h1
            className=" text-2xl md:text-3xl xl:text-4xl font-
          bold mb-5 lg:w-[427px]"
            ref={(el) => (headingRef.current[1] = el)}
          >
            Personalized Investment Recommendation
          </h1>

          <p className=" lg:w-2/3" ref={(el) => (subTextRef.current[1] = el)}>
            Stay ahead of the market with our data-driven recommendations to
            help you navigate the market with confidence and precision with
            low-risk picks, achieving your investment objectives and to enhance
            your portfolio’s performance.
          </p>
        </div>

        <img
          className="md:w-1/2"
          src={chartImg2}
          alt="cards"
          ref={(el) => (otherImageRefs.current[0] = el)}
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0 pt-20">
        <img
          className="md:w-1/2"
          src={chartImg3}
          alt="cards"
          ref={(el) => (otherImageRefs.current[1] = el)}
        />

        <div className="md:w-1/3">
          <h1
            className="md:w-[250px] text-2xl md:text-3xl xl:text-4xl mb-5 font-bold"
            ref={(el) => (headingRef.current[2] = el)}
          >
            Portfolio Diversification
          </h1>

          <p ref={(el) => (subTextRef.current[2] = el)}>
            Optimize your investment portfolio with strategic diversification.
            Our expertly crafted approach spreads risk across various asset
            classes, ensuring stability and maximizing returns tailored to your
            financial goals and risk tolerance.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 pt-20">
        <div className="md:w-1/3">
          <h1
            className=" text-2xl md:text-3xl xl:text-4xl font-bold mb-5"
            ref={(el) => (headingRef.current[3] = el)}
          >
            Security & Privacy
          </h1>

          <p ref={(el) => (subTextRef.current[3] = el)}>
            Your security and privacy are our top priorities. Rest assured
            knowing that our platform employs state-of-the- art encryption,
            stringent security protocols. and strict privacy measures to
            safeguard your sensitive financial data and information.
          </p>
        </div>

        <svg
          className="md:w-1/2"
          width="100%"
          height="100%"
          viewBox="0 0 644 624"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            ref={(el) => (ellipseRefs.current[0] = el)}
            cx="322.5"
            cy="311.5"
            rx="287"
            ry="278.5"
            fill="#CBCACA"
            fillOpacity="0.1"
          />
          <ellipse
            ref={(el) => (ellipseRefs.current[1] = el)}
            cx="322.5"
            cy="312"
            rx="237"
            ry="230"
            fill="#CBCACA"
            fillOpacity="0.1"
          />
          <ellipse
            ref={(el) => (ellipseRefs.current[2] = el)}
            cx="322.5"
            cy="311.5"
            rx="196"
            ry="191.5"
            fill="#E3E3E3"
            fillOpacity="0.1"
          />
          <circle
            ref={(el) => (ellipseRefs.current[3] = el)}
            cx="322.5"
            cy="312"
            r="152"
            fill="#D3CACA"
            fillOpacity="0.1"
          />
          <circle
            ref={(el) => (ellipseRefs.current[4] = el)}
            cx="322.5"
            cy="312"
            r="119"
            fill="url(#paint0_linear_897_1507)"
            fillOpacity="0.1"
          />
          <path
            d="M320.744 278.12C321.109 277.857 321.548 277.715 321.998 277.715C322.448 277.715 322.887 277.857 323.252 278.12C325.089 279.446 329.218 281.869 334.387 283.952C339.558 286.037 345.592 287.715 351.281 287.715C351.849 287.715 352.394 287.94 352.796 288.342C353.198 288.744 353.424 289.289 353.424 289.857V312.006C353.424 312.926 353.367 313.837 353.261 314.743C352.257 313.055 350.838 311.652 349.138 310.669V291.935C343.384 291.58 337.618 289.877 332.784 287.926C328.244 286.097 324.401 283.997 321.998 282.446C319.598 283.997 315.752 286.097 311.215 287.926C306.378 289.877 300.615 291.583 294.858 291.935V312.006C294.858 319.063 298.881 326.072 304.547 331.669C310.087 337.143 316.838 340.909 322.001 341.929C322.97 341.731 323.925 341.467 324.858 341.137V343.429C324.858 344.163 324.949 344.875 325.124 345.555C324.181 345.84 323.261 346.06 322.364 346.217L321.998 346.28L321.629 346.217C315.329 345.117 307.629 340.74 301.535 334.72C295.438 328.695 290.572 320.655 290.572 312.006V289.857C290.572 289.289 290.798 288.744 291.2 288.342C291.602 287.94 292.147 287.715 292.715 287.715C298.404 287.715 304.438 286.037 309.612 283.952C314.778 281.866 318.907 279.443 320.744 278.12ZM334.858 323.429V320.572C334.858 318.298 335.761 316.118 337.368 314.511C338.976 312.903 341.156 312 343.429 312C345.703 312 347.883 312.903 349.49 314.511C351.098 316.118 352.001 318.298 352.001 320.572V323.429H353.429C354.945 323.429 356.398 324.031 357.47 325.103C358.542 326.174 359.144 327.628 359.144 329.143V343.429C359.144 344.944 358.542 346.398 357.47 347.469C356.398 348.541 354.945 349.143 353.429 349.143H333.429C331.914 349.143 330.46 348.541 329.389 347.469C328.317 346.398 327.715 344.944 327.715 343.429V329.143C327.715 327.628 328.317 326.174 329.389 325.103C330.46 324.031 331.914 323.429 333.429 323.429H334.858ZM339.144 320.572V323.429H347.715V320.572C347.715 319.435 347.264 318.345 346.46 317.541C345.656 316.738 344.566 316.286 343.429 316.286C342.293 316.286 341.203 316.738 340.399 317.541C339.595 318.345 339.144 319.435 339.144 320.572ZM347.715 336.286C347.715 335.149 347.264 334.059 346.46 333.256C345.656 332.452 344.566 332 343.429 332C342.293 332 341.203 332.452 340.399 333.256C339.595 334.059 339.144 335.149 339.144 336.286C339.144 337.423 339.595 338.513 340.399 339.316C341.203 340.12 342.293 340.572 343.429 340.572C344.566 340.572 345.656 340.12 346.46 339.316C347.264 338.513 347.715 337.423 347.715 336.286Z"
            fill="black"
          />
          <defs>
            <linearGradient
              id="paint0_linear_897_1507"
              x1="322.5"
              y1="193"
              x2="322.5"
              y2="431"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#726C6C" />
              <stop offset="1" stopColor="#A6A4A4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Section2;
