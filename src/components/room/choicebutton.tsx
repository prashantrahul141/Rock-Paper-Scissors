import type { FC } from 'react';
import { motion } from 'framer-motion';

const ChoiceButton: FC<{ color: string; icon: string; disabled: boolean }> = ({
  color,
  icon,
  disabled,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 1.09 }}
      transition={{ type: 'spring', duration: 1 }}
      className={`relative cursor-pointer rounded-full border-8 bg-themePrimary-50/95 ${color} p-12 ${
        disabled ? 'opacity-60' : 'opacity-100'
      }`}>
      <div className='absolute transition-all duration-200 ease-in-out'>
        <span className='absolute -translate-x-1/2 -translate-y-1/2 text-3xl'>
          {icon}
        </span>
      </div>
    </motion.div>
  );
};
export default ChoiceButton;
