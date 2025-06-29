import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CinematicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);
      
      if (target.hasAttribute('data-cursor-text')) {
        setCursorVariant('text');
      } else if (target.hasAttribute('data-cursor-view')) {
        setCursorVariant('view');
      } else if (target.hasAttribute('data-cursor-play')) {
        setCursorVariant('play');
      } else {
        setCursorVariant('hover');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      scale: 1,
      opacity: 1,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      opacity: 0.8,
    },
    text: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      scale: 1,
      opacity: 0.6,
    },
    view: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      scale: 1,
      opacity: 0.7,
    },
    play: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      scale: 1,
      opacity: 0.7,
    },
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-electric rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={variants[cursorVariant as keyof typeof variants]}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
          mass: 0.5,
        }}
      />
      
      {/* Cursor ring */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] border border-electric/30 rounded-full ${
          cursorVariant === 'hover' ? 'w-10 h-10' :
          cursorVariant === 'text' ? 'w-16 h-16' :
          cursorVariant === 'view' ? 'w-12 h-12' :
          cursorVariant === 'play' ? 'w-12 h-12' :
          'w-6 h-6'
        }`}
        animate={{
          x: mousePosition.x - (
            cursorVariant === 'hover' ? 20 :
            cursorVariant === 'text' ? 32 :
            cursorVariant === 'view' ? 24 :
            cursorVariant === 'play' ? 24 :
            12
          ),
          y: mousePosition.y - (
            cursorVariant === 'hover' ? 20 :
            cursorVariant === 'text' ? 32 :
            cursorVariant === 'view' ? 24 :
            cursorVariant === 'play' ? 24 :
            12
          ),
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      />
      
      {/* Cursor text */}
      {cursorVariant === 'text' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] text-xs text-electric font-mono"
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y - 10,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.6,
          }}
        >
          READ
        </motion.div>
      )}
      
      {cursorVariant === 'view' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] text-xs text-electric font-mono"
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y - 10,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.6,
          }}
        >
          VIEW
        </motion.div>
      )}
      
      {cursorVariant === 'play' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] text-xs text-electric font-mono"
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y - 10,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.6,
          }}
        >
          PLAY
        </motion.div>
      )}
    </>
  );
};

export default CinematicCursor;