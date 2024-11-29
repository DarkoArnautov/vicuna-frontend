"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import useMeasure from "react-use-measure";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

// Skeleton Component for the loading state
const SkeletonPartner = () => (
  <div className="w-32 h-8 bg-gray-400 animate-pulse mx-2 rounded-xl" />
);

const ScrollingPartners = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  //   const containerRef = useRef<HTMLDivElement>(null);
  //   const [width, setWidth] = useState(0);

  // Fetch images from the API
  useEffect(() => {
    const fetchPartners = async () => {
      const route = "https://strapi.blah.baby/api/partners?populate=*";
      try {
        const response = await fetch(route);
        const data = await response.json();
        const mappableData = data.data;

        // Map the fetched data to the Partner interface
        const fetchedPartners = mappableData.map((partner: any) => ({
          id: partner.id,
          name: partner.name,
          logo: partner.logo.url,
        }));

        setPartners(fetchedPartners);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    fetchPartners();
  }, []);

  // Calculate the container width
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    // if (containerRef.current) {
    //   setWidth(containerRef.current.scrollWidth);
    // }

    const finalPosition = -width / 3 - 32; // divide by # of sets of partners, subtract gap 24 - 48. 32 is best I found

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => controls.stop();
  }, [xTranslation, width]);

  const displayedPartners = [...partners, ...partners, ...partners];

  return (
    <>
      {loading ? (
        <div className="flex items-center gap-24">
          {/* Render Skeletons while loading */}
          {[...Array(5)].map((_, index) => (
            <SkeletonPartner key={index} />
          ))}
        </div>
      ) : (
        // <motion.div
        //   className="flex items-center gap-8 md:gap-24"
        //   ref={containerRef}
        //   initial={{ x: 100 }}
        //   animate={{ x: -width }}
        //   transition={{
        //     ease: "linear",
        //     duration: 10,
        //     repeat: Infinity,
        //     repeatType: "loop",
        //     repeatDelay: 0,
        //     // duration: (width / (partners.length || 1)) * 0.01,
        //   }}
        // >
        <motion.div
          className="flex items-center gap-24"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {/* Render the partners and double them for smooth scrolling */}
          {displayedPartners.map((partner, index) => (
            <div key={index} className="flex flex-row gap-4 items-center">
              <div className="relative size-8 shrink-0">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-xl text-black text-nowrap">{partner.name}</p>
            </div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default ScrollingPartners;
