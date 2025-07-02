import React from 'react';
import WalletConnect from './WalletConnect';
import { motion } from 'framer-motion';

const Header: React.FC<{ onConnect: (address: string) => void }> = ({ onConnect }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-deep-blue shadow-md">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-neon-green"
      >
        Nero-Slime
      </motion.div>
      <WalletConnect onConnect={onConnect} />
    </header>
  );
};

export default Header;