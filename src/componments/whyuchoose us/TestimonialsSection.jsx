"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
// import { motion } from "motion/react";

export const TestimonialsSection = (props) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, role }, i) => (
              <div
                className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                key={i}
              >
                <div className="font-medium tracking-tight leading-5">  {role}</div>
                <div className="flex items-center gap-2 mt-5">
                  
                  <div className="flex flex-col">
                    
                    <div className="leading-5 opacity-60 tracking-tight">
                     {text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
      
    </div>
  );
};
