import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DraggableStars() {
    return (
      <>
        <motion.div
          className="absolute w-15 h-15 top-[40%] left-[75%] z-40 pointer-events-auto"
          animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
            rotate: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
          }}
          drag
          dragElastic={1}
          dragMomentum
          whileTap={{ scale: 1.5 }}
        >
          <Image src="/floating/main-card/star-1.png" alt="star-1" fill />
        </motion.div>
  
        <motion.div
          className="absolute w-10 h-10 top-[70%] right-[25%] z-40 pointer-events-auto"
          animate={{ y: [0, -20, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
            rotate: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
          }}
          drag
          dragElastic={1}
          dragMomentum
          whileTap={{ scale: 1.5 }}
        >
          <Image src="/floating/main-card/star-2.png" alt="star-2" fill />
        </motion.div>
  
        <motion.div
          className="absolute w-20 h-20 top-[30%] left-[25%] z-40 pointer-events-auto"
          animate={{ y: [0, 20, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
            rotate: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
          }}
          drag
          dragElastic={1}
          dragMomentum
          whileTap={{ scale: 1.5 }}
        >
          <Image src="/floating/main-card/star-3.png" alt="star-3" fill />
        </motion.div>
      </>
    );
  }
  