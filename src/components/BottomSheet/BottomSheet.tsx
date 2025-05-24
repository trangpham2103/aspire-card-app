import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface BottomSheetProps {
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children }) => {
  const y = useMotionValue(0);
  const [minHeight, setMinHeight] = useState(300);
  const [maxHeight, setMaxHeight] = useState(900);

  useEffect(() => {
    const updateHeights = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Tablet: width >= 768px
      if (width >= 768) {
        setMinHeight(height * 0.45);
        setMaxHeight(height - 10);
      }
      // Mobile: width < 768px
      else {
        setMinHeight(300);
        setMaxHeight(height - 10);
      }
    };

    updateHeights();

    window.addEventListener('resize', updateHeights);

    return () => window.removeEventListener('resize', updateHeights);
  }, []);

  const handleDrag = () => {
    if (y.get() > 0) {
      y.set(0); // Prevent dragging below minimum height
    }
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: -(maxHeight - minHeight), bottom: 0 }}
      dragElastic={0.2}
      style={{
        y,
        height: minHeight,
        bottom: 0,
        position: 'fixed',
        width: '100%',
        background: 'white',
        borderRadius: '24px 24px 0 0',
      }}
      onDrag={handleDrag}
    >
      {children}
    </motion.div>
  );
};

export default BottomSheet;
