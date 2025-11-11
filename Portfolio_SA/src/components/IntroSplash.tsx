import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface IntroSplashProps { 
  onComplete: () => void;
}

export const IntroSplash = ({ onComplete }: IntroSplashProps) => { 

  
  const PRIMARY_COLOR = '#00FFFF'; // Bright Cyan
  const BACKGROUND_COLOR = '#0A0A0A'; // Near-black background
  const TEXT_MUTED_COLOR = '#9CA3AF'; // Gray for muted text
  
  // Show for ~3.5s then auto-close
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const ORBIT_DOTS = 6;
  // SVG coordinates: Center is 160, 160. Radius for dots is 130.
  const orbitRadius = 130; 

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden font-inter`}
      // Replaced bg-background with concrete dark color
      style={{ backgroundColor: BACKGROUND_COLOR }} 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      aria-label="Splash screen"
      role="dialog"
      aria-modal="true"
    >
      {/* Faint animated grid background */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            // Replaced hsl(var(--primary) / 0.08) with explicit color and opacity (Hex 14 ≈ 8%)
            backgroundImage:
              `linear-gradient(${PRIMARY_COLOR}14 1px, transparent 1px), linear-gradient(90deg, ${PRIMARY_COLOR}14 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Drawn ring with orbiting dots */}
      <div className="relative w-[320px] h-[320px] flex items-center justify-center">
        <motion.svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          className="absolute"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        >
          <motion.circle
            cx="160"
            cy="160"
            r="140"
            fill="none"
            // Replaced hsl(var(--primary) / 0.35) with explicit color (Hex 59 ≈ 35%)
            stroke={`${PRIMARY_COLOR}59`}
            strokeWidth="2"
            pathLength={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />
          <circle
            cx="160"
            cy="160"
            r="120"
            fill="none"
            // Replaced hsl(var(--primary) / 0.15) with explicit color (Hex 26 ≈ 15%)
            stroke={`${PRIMARY_COLOR}26`}
            strokeDasharray="6 10"
            strokeWidth="1.5"
          />
        </motion.svg>

        {/* Orbiting dots */}
        <motion.div
          className="absolute inset-0"
          style={{ width: 320, height: 320 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: ORBIT_DOTS }).map((_, i) => {
            const angle = (i / ORBIT_DOTS) * Math.PI * 2;
            const x = 160 + orbitRadius * Math.cos(angle);
            const y = 160 + orbitRadius * Math.sin(angle);
            return (
              <span
                key={i}
                // Replaced bg-primary and dynamic shadow with explicit colors (Hex 99 ≈ 60%)
                className="absolute w-2 h-2 rounded-full"
                style={{ 
                  left: x, 
                  top: y, 
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: PRIMARY_COLOR,
                  boxShadow: `0 0 20px ${PRIMARY_COLOR}99` 
                }}
                aria-hidden
              />
            );
          })}
        </motion.div>

        {/* SA Monogram with shimmer */}
        <div className="relative z-10 flex items-center justify-center">
          <motion.span
            // Replaced custom font/gradient classes with explicit color and font
            className="text-[120px] md:text-[180px] font-bold leading-[0.9] select-none"
            style={{ 
              backgroundSize: '200% 200%',
              color: PRIMARY_COLOR, 
              fontFamily: 'monospace' // Approximation for font-space
            }}
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.span
              className="block"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            >
              SA
            </motion.span>
          </motion.span>

          {/* Soft glow pulse behind text */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              // Replaced hsl(var(--primary)/0.25) with explicit color (Hex 40 ≈ 25%)
              background:
                `radial-gradient(circle at center, ${PRIMARY_COLOR}40, transparent 60%)`,
            }}
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.06, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />
        </div>
      </div>

      <motion.div
        className="absolute bottom-24 w-full flex justify-center text-center"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.p
          // Replaced text-muted-foreground with explicit color
          className="text-xs md:text-sm tracking-[0.25em] uppercase font-inter"
          style={{ color: TEXT_MUTED_COLOR }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Preparing portfolio
        </motion.p>
      </motion.div>

      {/* Progress bar timed to auto-close */}
      <motion.div
        className="absolute bottom-0 left-0 h-1"
        // Replaced custom gradient classes (via-primary/60 is approx. Hex 99)
        style={{ backgroundImage: `linear-gradient(to right, ${PRIMARY_COLOR}, ${PRIMARY_COLOR}99, ${PRIMARY_COLOR})` }}
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 3.5, ease: 'easeInOut' }}
        aria-hidden
      />
    </motion.div>
  );
};

export default IntroSplash;