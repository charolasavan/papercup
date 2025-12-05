'use client';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null); // store scroll instance

  useEffect(() => {
    if (!scrollRef.current) return;

    // Delay to allow DOM painting
    setTimeout(() => {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1, // Optional: scrolling speed
        class: 'is-reveal', // Optional: class added when elements are revealed
      });
    }, 100); // 100ms delay works in most cases

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} >
      {children}
    </div>
  );
};

export default ScrollWrapper;