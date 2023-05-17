import React from "react";
import nikhilImg from "../../assets/images/nikhil.jpeg";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ========== hero left content ========== */}
          <div className="w-full md:basis-1/2">
            <h4
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[15px]"
            >
              welcome
            </h4>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-6"
            >
              I am NIKHILANANDA GOSWAMI <br /> SOFTWARE DEVELOPER
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-out duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i> Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smailTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-13 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-command-fill"></i>
              </span>
              An enthusiastic fresher with highly motivated and leadership
              skills , Hardworking College Student seeking employment. Always
              willing to innovate the new things which can improve the existing
              technology. I consider my self a responsible and orderly person. I
              am looking foward for my first work experience.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow Me:
              </span>
              <span className="text-smallTextColor text-[15px] font-[600]">
                <i class="ri-youtube-fill"></i>
              </span>
              <span className="text-smallTextColor text-[15px] font-[600]">
                <i class="ri-github-fill"></i>
              </span>
              <span className="text-smallTextColor text-[15px] font-[600]">
                <i class="ri-linkedin-box-fill"></i>
              </span>
              <span className="text-smallTextColor text-[15px] font-[600]">
                <i class="ri-facebook-fill"></i>
              </span>
              <span className="text-smallTextColor text-[15px] font-[600]">
                <i class="ri-instagram-line"></i>
              </span>
            </div>
          </div>
          {/* ========== hero left end ========== */}
          {/* ========== person img   ========== */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={nikhilImg} alt="nikhi" />
            </figure>
          </div>
          {/* ========== person img end ========== */}
          {/* ========== person img content right ========== */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:jutify-end md:text-end">
            <div className="md-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                I am a freshers
              </h4>
            </div>
            <div className="md-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={15} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
            <div className="md-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>
          </div>
          {/* ========== person img content right end========== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
