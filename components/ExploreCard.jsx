"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn } from "@/utils/motion";

const ExploreCard = ({ index, active, handleClick, id, imgUrl, title }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10] " : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? <h3></h3> : ""}
    </motion.div>
  );
};

export default ExploreCard;
