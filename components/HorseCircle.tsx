import { motion } from 'motion/react';
import horseImage from 'figma:asset/816504923edbaa22221dce50c69d6e1f281dc2e3.png';

const horsePositions = [
  { angle: 0, delay: 0 },
  { angle: 45, delay: 0.1 },
  { angle: 90, delay: 0.2 },
  { angle: 135, delay: 0.3 },
  { angle: 180, delay: 0.4 },
  { angle: 225, delay: 0.5 },
  { angle: 270, delay: 0.6 },
  { angle: 315, delay: 0.7 },
];

export function HorseCircle() {
  const radius = 130; // 원의 반지름

  return (
    <div className="relative w-[300px] h-[300px]">
      {/* 회전하는 이미지 */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transformOrigin: '50% 50%'
        }}
      >
        <img src={horseImage} alt="Running horse" className="w-[300px] h-[300px] object-contain" />
      </motion.div>
    </div>
  );
}