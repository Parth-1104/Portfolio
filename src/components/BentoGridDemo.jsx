import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import assets from "../assets/assets.js";

import ThreeD from "./ThreeD";
import { div } from "framer-motion/client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// AnimatedGridItem: Animates each grid block as it scrolls into view
function AnimatedGridItem({ children, index, className }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.12,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <AnimatedGridItem key={i} index={i} className={i === 3 || i === 6 ? "md:col-span-2" : ""}>
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
          />
        </AnimatedGridItem>
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem]  rounded-xl bg-[#F3F3F3]"></div>
);
const items = [
  {
    title: "",
    description: "",
    header: (
      <div>
      <p className="mt-2 mb-2 text-2xl font-bold text-neutral-600 dark:text-[#222222]">
        About Me
      </p>
      <div>
          <p className="mt-2 mb-2 text-[20px] font-medium text-neutral-800 dark:text-[#7B7B7B]">I am specialized in turning complex problem in elegent solution .My approach blendscreativity with strategic thinking to deliver design that not only look great but works seamlessly.Ready to start your next project? </p>
      </div>

      <div className="text-[14px] font-bold text-neutral-600 dark:text-[#222222]">
      <h1 className="mt-[80px]">My Socials:</h1>
      </div>
      <div className="flex gap-5 items-center mt-5">
       
  <a href="https://www.linkedin.com/in/parth-singh427/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-10 h-10" />
  </a>
  <a href="https://github.com/Parth-1104" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-10 h-10" />
  </a>
  <a href="https://leetcode.com/u/Parth__1104/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg" alt="LeetCode" className="w-10 h-10" />
  </a>
  {/* <a href="https://codeforces.com/profile/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://sta.codeforces.com/s/97768/images/codeforces-logo-with-telegram.png" alt="Codeforces" className="w-35 h-10" />
  </a> */}
</div>
      </div>
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "",
    description: "",
    header: (
      <div>
      <p className="mt-2 mb-2 text-3xl font-bold  text-neutral-600 dark:text-[#222222]">
Skills
      </p>
      <div>
      <ul className="list-disc pl-6 space-y-2 text-1xl text-[17px] text-neutral-600 dark:text-black">
      <li>Strong foundation in data science with hands-on experience in ML, DL, and generative AI.</li>
  <li>Developed full-stack web apps using React.js, Node.js, Express, and MongoDB.</li>
  <li>Built predictive models and data pipelines using Python, scikit-learn, and Pandas.</li>
  <li>Worked on neural networks for image classification and NLP using TensorFlow and PyTorch.</li>
  <li>Currently exploring generative AI — using GPT APIs and diffusion models to build intelligent, user-driven apps.</li>
</ul>



      </div>
      </div>
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "",
    description: "",
    header: (
      <div>
        <p className="mt-2 mb-2 text-2xl font-bold text-neutral-600 dark:text-[#222222]">
          Achievements
        </p>
        <div>
          <ul className="list-disc pl-6 space-y-2 text-[18px] font-medium text-neutral-600 dark:text-black">
            <li>
              <span className="font-semibold text-black">5+</span> US-based clients served with tailored solutions
            </li>
            <li>
              <span className="font-semibold text-black">7</span> hackathons participated, fostering innovation and teamwork
            </li>
            <li>
              <span className="font-semibold text-black">Top 10</span> team in Microsoft Innovate Hackathon
            </li>
          </ul>
        </div>
      </div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  
  {

    header:(
      <div>
         <p className="mt-2 mb-2 text-2xl font-bold text-neutral-600 dark:text-[#222222]">
        Tech Stack:
      </p>
      

<div className="flex flex-wrap justify-center items-center gap-6 p-5">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="w-10 h-10" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit-learn" className="w-10 h-10" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-10 h-10" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="w-10 h-10" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-10 h-10 bg-white rounded p-1" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-10 h-10" />
  <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI" className="w-18 h-10" />

  
</div>
</div>


    )

  },
  
  {
    title: "B.Tech,Computer Science",
    description: "2023-2027",
    header: (
      <img src="	https://www.bennett.edu.in/wp-content/uploads/2025/01/NAAC-Logo-2025-webp-1.webp" alt="" />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  
];
