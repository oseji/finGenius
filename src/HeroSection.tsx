import leftArrow from "./assets/left arrow.png";
import rightArrow from "./assets/right arrow.png";
import logo1 from "./assets/Logo 1.png";
import logo2 from "./assets/Logo 2.png";
import logo3 from "./assets/Logo 3.png";
import logo4 from "./assets/Logo 4.png";
import logo5 from "./assets/Logo 5.png";
import logo6 from "./assets/Logo 6.png";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div>
        <h1 className="w-heroHeading mx-auto text-center font-bold text-5xl capitalize mt-20">
          revolutionize your investments with AI-powered management
        </h1>

        <p className="text-center mx-auto mt-5 text-sm font-light">
          Gain unparalled insights, optimize investments, achieve your wealth
          goals, and take control of your finances.
        </p>

        <button className="px-4 py-2 rounded-lg block mx-auto mt-5 border border-slate-500">
          Get Started
        </button>
      </div>

      <div>
        <div className="flex flex-row items-center justify-center gap-5 mt-20">
          <img src={leftArrow} alt="left arrow" />

          <p className="capitalize text-xs">trusted by various top companies</p>

          <img src={rightArrow} alt="right arrow" />
        </div>

        <div className="heroLogoGrp">
          <img src={logo1} alt="brand logo" className="heroLogo" />
          <img src={logo2} alt="brand logo" className="heroLogo" />
          <img src={logo3} alt="brand logo" className="heroLogo" />
          <img src={logo4} alt="brand logo" className="heroLogo" />
          <img src={logo5} alt="brand logo" className="heroLogo" />
          <img src={logo6} alt="brand logo" className="heroLogo" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;