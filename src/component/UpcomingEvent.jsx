import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pict from "../assets/comingSoon.jpg";
import event1 from "../assets/upcom/Sweet&Spicy.jpeg";

const events = [
  {
    id: 1,
    title: "Sweet & Spicy Food Festival",
    place: "Paradise Walk serpong",
    desc: "Collaboration with Snow Ice Kingdom",
    image: event1,
    link: "",
    time: "20 june - 20 july",
  },
  {
    id: 2,
    title: "",
    place: "",
    desc: "",
    image: "",
    link: "",
    time: "",
  },
  {
    id: 3,
    title: "",
    place: "",
    desc: "",
    image: "",
    link: "",
    time: "",
  },
];

export default function UpcomingEvents() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="relative flex flex-col items-center pb-19"
      id="upcoming"
    >
      <div className="section-title">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5 "
          data-aos="fade-up"
        >
          Upcoming Events
        </h2>
        <div data-aos="zoom-in" data-aos-delay="200">
          <hr className="header-line rounded-full border-hidden" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8">
        {events.map((eventt, index) => (
          <div key={eventt.id} data-aos="fade-up" data-aos-delay={index * 150}>
            <div className="upcom-event group rounded-xl overflow-hidden bg-white w-[90vw] sm:w-[45vw] lg:w-[30vw] xl:w-[25vw] ">
              <div className="h-50 relative overflow-hidden flex items-center justify-center">
                {eventt.time ? (
                  <span className="text-sm text-white font-medium rounded-sm absolute right-2 top-2 z-10 bg-[#ff4545] px-4 py-1">
                    {eventt.time}
                  </span>
                ) : (
                  ""
                )}
                <img
                  src={eventt.image ? eventt.image : pict}
                  className="w-full h-full object-cover bg-orange-400 group-hover:scale-115"
                  alt=""
                />
              </div>
              <div className="upcom-info p-6 pt-0 border-solid border-3 border-[#363636] rounded-b-xl border-t-transparent">
                <h1 className="pt-4 text-xl group-hover:text-white font-semibold">
                  {eventt.title ? eventt.title : "Coming Soon . ."}
                </h1>
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      className="group-hover:fill-[#ff4d4d]"
                      fill="#f2bb22"
                      d="M10 2C6.69 2 4 4.69 4 8c0 2.02 1.17 3.71 2.53 4.89c.43.37 1.18.96 1.85 1.83c.74.97 1.41 2.01 1.62 2.71c.21-.7.88-1.74 1.62-2.71c.67-.87 1.42-1.46 1.85-1.83C14.83 11.71 16 10.02 16 8c0-3.31-2.69-6-6-6m0 2.56a3.44 3.44 0 1 1 0 6.88a3.44 3.44 0 0 1 0-6.88"
                    />
                  </svg>
                  <h3 className="group-hover:text-white">
                    {eventt.place ? eventt.place : "Location"}
                  </h3>
                </div>
                <p
                  className="my-3 text-[15px] line-clamp-6 letter-spacing-wider overflow-hidden group-hover:text-white"
                  style={{ scrollbarColor: "transparent transparent" }}
                >
                  {eventt.desc}
                </p>
                <button className="py-2 px-4 font-medium rounded-full text-[14.4px] text-white cursor-pointer hover:ms-1">
                  <a href="#contact">More Info</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
