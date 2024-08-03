import { FaArrowRight } from "react-icons/fa6";
import star from "../assets/star.png";
import spring from "../assets/spring.png";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="overflow-x-clip pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-b from-[#ffffff] to-[#d2dcff]">
      <div className="container">
        <div className="flex items-center justify-center w-full flex-col relative h-full">
          <div className="text-center flex items-center flex-col w-fit md:w-[700px]">
            <h1 className="title">Sign up for free today</h1>
            <p className="description">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <div className="flex gap-8 items-center mt-8">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                Learn More <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
            <Image src={star} alt="Star" height={250} className="hidden md:block absolute md:-left-48 xl:-left-8 2xl:left-24 -top-12"/>
            <Image src={spring} alt="Star" height={250} className="hidden md:block absolute md:-right-44 xl:right-32 -bottom-20"/>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
