import { useEffect, useState } from "react";
import {BsGithub, BsLinkedin} from "react-icons/bs/index.js";

function generalPresentation() {
  return (
    <div>
      <h1 className="text-5xl flex ">Hi there!</h1>
      <h1 className="text-5xl flex a ml-16">I´m Ramiro Reinaldo</h1>
      <h2 className="ml-32">a C. S. Student and Web Dev.</h2>
    </div>
  );
}

const presentationLinks = [
  {
    icon: BsGithub,
    link: "https://github.com/argr4n",
    color: "black",
  },
  {
    icon: BsLinkedin,
    link: "https://www.linkedin.com/in/ramiro-reinaldo-0366a3201",
    color: "blue-600",
  },
];

export default function Presentation() {
  const [presentationState, setPresentationState] = useState(true);

  setTimeout(() => {
    setPresentationState(false);
  }, 3000);

  useEffect(() => {
    setTimeout(() => {
      setPresentationState(!presentationState);
    }, 5000);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <section style={{"backgroundColor":"#E4FDE1"}} className="w-[100vw] h-[92vh] lg:h-[93.5vh] *absolute   *left-animated flex flex-col items-center inset-0 top-[4.5vh] justify-center gap-8  bg-blue-200">
        <div>
          <h1 className="text-5xl flex ">Hi there!</h1>
          <h1 className="text-5xl flex gap-2 ml-16 ">I´m <div className="name-animated cursor-pointer "> Ramiro Reinaldo</div></h1>
          <h2 className="ml-32">a Computer Science Student and Web Dev.</h2>
        </div>

        <div className=" flex items-center justify-center gap-12 text-2xl w-full">
          {presentationLinks.map((link) => (
            <a target="_blank" className={`hover:text-red-500 duration-100 cursor-pointer text-gray-900 no-underline`} href={link.link}>
              <link.icon
              className={`hover:text-red-500 duration-100 cursor-pointer text-gray-900`}
              />
            </a>
          ))}
        </div>
      </section>

{/*       <aside className="absolute rigth-animated  bg-red-200  inset-0 left-full top-[4.5vh]  flex-col gap-10  h-100 flex justify-center items-center">
        <h1 className="text-3xl">
          Thanks for being here! <br />{" "}
          <span className="text-sm">You are awsome! {"<3"} </span>
        </h1>
        <a href="#contact">Contact me!</a>
      </aside> */}
    </div>
  );
}
