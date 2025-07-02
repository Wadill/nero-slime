import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import TradeForm from './components/TradeForm';
import AnalysisDashboard from './components/AnalysisDashboard';
import { TradeInput } from './types';

const App: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleWalletConnect = (address: string) => {
    setWalletAddress(address);
  };

  const handleTradeSubmit = (trade: TradeInput) => {
    console.log('Trade Submitted:', trade);
    // In a real app, this would trigger AI analysis via API or smart contract
  };

  return (
    <div className="min-h-screen bg-dark-navy">
      <Header onConnect={handleWalletConnect} />
      <main className="container mx-auto p-4 flex flex-col items-center">
        <TradeForm onSubmit={handleTradeSubmit} />
        <AnalysisDashboard />
      </main>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
};

export default App;