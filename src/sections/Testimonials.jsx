"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const theredColumn = testimonials.slice(6, 9);

  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-white">
      <div className="container">
        <div className="flex items-center flex-col">
          <div className="text-center flex items-center flex-col w-fit md:w-[700px]">
            <span className="feature">Version 2.0 is here</span>
            <h1 className="title">What our users say</h1>
            <p className="description">
              From intuitive design to powerful features, our app has become an
              essential tool for users around the world.
            </p>
          </div>

          <div className="flex gap-8 mask-image-testimonials my-4">
            <div className="flex flex-col gap-4 translate-y-4">
              {firstColumn.map((item) => (
                <div className="card" key={item.username}>
                  <p className="text-lg font-medium">{item.text}</p>

                  <div className="flex gap-2 mt-2">
                    <Image
                      src={item.imageSrc}
                      alt={item.name + "'s Image"}
                      width={64}
                      height={64}
                    />
                    <div className="">
                      <h4 className="font-bold">{item.name}</h4>
                      <span>{item.username}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div animate className="hidden md:flex flex-col gap-2 translate-y-8">
              {secondColumn.map((item) => (
                <div className="card" key={item.username}>
                  <p className="text-lg font-medium">{item.text}</p>

                  <div className="flex gap-2 mt-2">
                    <Image
                      src={item.imageSrc}
                      alt={item.name + "'s Image"}
                      width={64}
                      height={64}
                    />
                    <div className="">
                      <h4 className="font-bold">{item.name}</h4>
                      <span>{item.username}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div animate className="hidden lg:flex flex-col gap-3 translate-y-6">
              {theredColumn.map((item) => (
                <div className="card" key={item.username}>
                  <p className="text-lg font-medium">{item.text}</p>

                  <div className="flex gap-2 mt-2">
                    <Image
                      src={item.imageSrc}
                      alt={item.name + "'s Image"}
                      width={64}
                      height={64}
                    />
                    <div className="">
                      <h4 className="font-bold">{item.name}</h4>
                      <span>{item.username}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
