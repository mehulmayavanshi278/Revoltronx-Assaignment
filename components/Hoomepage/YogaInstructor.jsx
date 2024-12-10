import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function YogaInstructor() {
  const { ref, inView } = useInView({ threshold: 0.4 }); // Trigger when 40% of the section is visible

  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const bottomAnimation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      leftAnimation.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
      rightAnimation.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
      bottomAnimation.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
    } else {
      leftAnimation.start({ x: -100, opacity: 0 });
      rightAnimation.start({ x: 100, opacity: 0 });
      bottomAnimation.start({ y: 100, opacity: 0 });
    }
  }, [inView, leftAnimation, rightAnimation, bottomAnimation]);

  return (
    <div ref={ref}>
      <div className="relative">
        {/* Decorative Image */}
        <div className="absolute w-[300px] right-0 top-[-150px] z-0">
          <img
            className="w-full"
            src="https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/main-home-offset-img-2.png"
            alt=""
          />
        </div>

        {/* Content Section */}
        <div className="pt-[50px] lg:px-[100px] md:px-[50px] px-[40px]">
          <div className="md:grid relative z-10  lg:overflow-visible overflow-hidden xl:grid-cols-[500px,500px] lg:grid-cols-[500px,400px] grid-cols-2 gap-x-3">
            {/* Left Image */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={leftAnimation}
              className="md:w-[400px] relative z-10 w-full md:mx-0 mx-auto"
            >
              <img
                className="w-full object-cover rounded-s-full shadow-lg"
                src="https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/07/h1-img-new.jpg"
                alt=""
              />
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={rightAnimation}
              className="relative"
            >
              <div className="md:mt-[100px] mt-[40px]">
                <h1 className="text-[30px] font-[450]">Embully Burton</h1>
                <p className="text-[25px] font-[400] mt-3">Yoga Instructor</p>
                {/* Last Paragraph */}
                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={bottomAnimation}
                  className="text-[20px] font-[350] mt-3"
                >
                  lobortis elementum nibh tellus molestie. Turpis nunc eget
                  lorem dolor sed. Varius duis at consectetur lorem donec massa
                  sapien faucibus. Quis imperdiet massa tincidunt nunc. Vitae
                  sapien pellentesque habitant morbi tristique senectus et
                  netus.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YogaInstructor;
