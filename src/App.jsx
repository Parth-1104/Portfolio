import React from 'react';
import Hero from './components/hero';
import SplitText from './components/Text';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import { BentoGridDemo } from './components/BentoGridDemo';
import Projects from './components/Projects';
import LottieAnimation from './components/Scroll';
import Scroll from './components/Scroll';
import Loader from './components/Loader';
import Footer16 from './components/Footer';


const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time for background tasks
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#E3E3E3] min-h-screen w-full">
      <div className="relative w-full h-screen pt-[25vh]  flex items-center justify-center lg:justify-start lg:pl-[79vh]">
        <Hero />

        <div className='absolute lg:left-[35vw] top-[1rem] left-[50vw] lg:top-[1rem]  lg:ml-[15vh]  transform -translate-x-1/2  z-100 text-center w-[70%] '>
            <Navbar/>
        </div>
        <div className='hidden absolute lg:left-[35vw] top-[10rem] left-[50vw] lg:top-[40rem]   lg:ml-[-5vw]  transform -translate-x-1/2  z-100 text-center w-[70%] '>
            <Scroll/>
        </div>

        <div className="absolute top-[5rem] lg:top-[18rem] sm:top-10 lg:ml-[15vh] left-1/2 transform -translate-x-1/2 sm:left-10 sm:translate-x-0 z-10 text-center w-[90%] sm:w-auto">
  <SplitText
    text="Hello"
    className="text-[12vh] sm:text-5xl md:text-6xl lg:text-[27vh] font-semibold text-black"
    delay={100}
    duration={0.6}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    textAlign="center"
    onLetterAnimationComplete={handleAnimationComplete}
  />
</div>

        <motion.div
          className="absolute top-[13rem] left-[25vh] lg:top-[33rem]  lg:ml-[15vh]  transform -translate-x-1/2 sm:left-10 sm:translate-x-0 z-10 text-center w-[90%] sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[15px] sm:text-2xl md:text-3xl lg:text-2xl font-medium text-[#555555] ">
            It’s Parth — full-stack wizard with a data science twist.
          </p>
          
        </motion.div>

        <div className="absolute top-[93vh]  h-[7vh] w-full sm:h-[1vh] sm:w-[15vw] lg:h-[3vw] lg:w-[12vw] lg:left-[88vw] bg-[#E3E3E3]">
</div>


      </div>
      <div className="w-full px-4 py-12">
    
  </div>
  <div className=" sm:block w-full h-full ">
    <div id="about-me" className=''>
    <BentoGridDemo />
    </div>
  
</div>
<div id="projects">
<Projects />
</div>
    <div>
    <Footer16/>
    </div>
    
      
    </div>
  );
};

export default App;
