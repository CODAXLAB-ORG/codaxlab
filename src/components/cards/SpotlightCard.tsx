import React, { useState, useRef, useEffect, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {}

export const SpotlightCard: React.FC<PropsWithChildren<SpotlightCardProps>> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({ x: ev.clientX - rect.left, y: ev.clientY - rect.top });
    };

    cardRef.current?.addEventListener('mousemove', updateMousePosition);

    return () => {
      cardRef.current?.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative max-h-96  md:max-w-82 w-full rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 overflow-hidden shadow-lg"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
        animate={{
          opacity: 1,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
