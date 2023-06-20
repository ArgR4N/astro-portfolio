import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import {
  BsHammer,
  BsPeopleFill,
  BsEnvelopeFill,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import "../../styles/global.css";

const OPTIONS = [
  { text: "Background", link: "#background" },
  { text: "Projects", icon: "", link: "#projects" },
  { text: "Teamwork", icon: "", link: "#teamwork" },
  { text: "Contact", icon: "", link: "#contact" },
  { text: "Get my Cv!", icon: "", link: "" },
];
//all type of hand emojis, other symbols
const EMOJIS = [
//  { text: "👋", animation: "oscilation" },
  { text: "🤚", animation: "idle" },
//  { text: "🖐", animation: "idle" },
//  { text: "✋", animation: "idle" },
  { text: "🖖", animation: "" },
  { text: "👌", animation: "idle" },
//  { text: "🤏", animation: "oscilation" },
  { text: "🤞", animation: "idle" },
  { text: "🤟", animation: "tremble " },
  { text: "🤘", animation: "tremble" },
  { text: "🤙", animation: "idle" },
];

export default function Header() {
  const [selectedEmoji, setSelectedEmoji] = useState(EMOJIS[Math.floor(Math.random() * EMOJIS.length)]);

  useEffect(() => {
    setTimeout(() => {
      let randomEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
      while(randomEmoji == selectedEmoji){
        randomEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
      }
      setSelectedEmoji(randomEmoji);
    }, 15000);
  }, [selectedEmoji]);

  return (
    <header style={{"backgroundColor":"#F45B69"}} className="text-gray-900 top-0 inset-x-0  fixed flex items-center justify-evenly h-[8vh] lg:h-[6.5vh]">
      <section className="w-1/6">
        <a href="" className="text-3xl flex items-center justify-center gap-5 w-100"> 
            <div className={`${selectedEmoji.animation} opacity-0 hover:opacity-100 duration-100 text-2xl  flex justify-center items-center`}>{selectedEmoji.text}</div>
            <h1 className="text-2xl" >Ramiro Reinaldo</h1>
        </a>
      </section>
      <section className=" w-2/3 text-gray-900 text-md  justify-center  items-center gap-5 lg:gap-20 hidden md:flex ">
        {OPTIONS.map((option) => (
          <a
            href={`${option.link}`}
            target={option.link[0] === "#" ? "" : "_blank"}
            className="flex items-center justify-center gap-1 hover:rotate-[2deg] duration-100 hover:underline cursor-pointer"
          >
            {option.icon && <option.icon />}
            <p className=" ">{option.text}</p>
          </a>
        ))}
      </section>
      <section>
        
      </section>
    </header>
  );
}
