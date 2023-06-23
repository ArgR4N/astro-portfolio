import { useEffect, useState } from "react";
import { BsGithub  } from "react-icons/bs/index.js";
import { fetchReadme } from "@varandas/fetch-readme";

export default function ReadmeComp() {
  const [readme, setReadme] = useState("");

  useEffect(() => {
    (async () => {
        const readme = await fetchReadme({
          username: 'argr4n',
          repository: 'argr4n'
        })
        console.log(readme)  
        setReadme(readme)
      })()
  }, []);

  return (
      <section
        style={{ backgroundColor: "#E4FDE1" }}
        className="w-[100vw] h-[92vh] lg:h-[93.5vh] *absolute   *left-animated flex flex-col items-center inset-0 top-[4.5vh] justify-center gap-8  bg-blue-200"
      >
        { readme }
      </section>

  );
}
