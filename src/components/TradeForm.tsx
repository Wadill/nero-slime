import React, { useState } from 'react';
import { TradeInput } from '../types';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const TradeForm: React.FC<{ onSubmit: (trade: TradeInput) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<TradeInput>({
    tradingPair: '',
    entryPrice: 0,
    entryReasoning: '',
    takeProfitPrice: 0,
    takeProfitReasoning: '',
    stopLossPrice: 0,
    stopLossReasoning: '',
    positionSize: 0,
    timeFrame: 'scalping',
    leverage: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'entryPrice' || name === 'takeProfitPrice' || name === 'stopLossPrice' || name === 'positionSize' || name === 'leverage'
        ? parseFloat(value) || 0
        : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.tradingPair || formData.entryPrice <= 0 || formData.positionSize <= 0) {
      toast.error('Please fill in all required fields with valid values.');
      return;
    }
    onSubmit(formData);
    toast.success('Trade submitted for AI analysis!');
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-deep-blue p-6 rounded-lg shadow-lg space-y-4 max-w-lg w-full"
    >
      <h2 className="text-xl font-semibold text-neon-green">Enter Trade Details</h2>
      <div>
        <label className="block text-sm font-medium text-light-gray">Trading Pair</label>
        <input
          type="text"
          name="tradingPair"
          value={formData.tradingPair}
          onChange={handleChange}
          placeholder="e.g., BTC/USDT"
          className="mt-1 w-full p-2 bg-dark-navy text-white rounded-md focus:ring-neon-green focus:border-neon-green"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-light-gray">Entry Price</label>
        <input
          type="number"
          name="entryPrice"
          value={formData.entryPrice}
          onChange={handleChange}
          placeholder="e.g., 50000"
          className="mt-1 w-full p-2 bg-dark-navy text-white rounded-md focus:ring-neon-green focus:border-neon-green"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-light-gray">Entry Reasoning</label>
        <textarea
          name="entryReasoning"
          value={formData.entryReasoning}
          onChange={handleChange}
          placeholder="Why is this a good entry point?"
          className="mt-1 w-full p-2 bg-dark-navy text-white rounded-md focus:ring-neon-green focus:border-neon-green"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-light-gray">Take Profit Price</label>
        <input
          type="number"
          name="takeProfitPrice"
          value={formData.takeProfitPrice}
          onChange={handleChange}
          placeholder="e.g., 55000"
          className="mt-1 w-full p-2 bg-dark-navy text-white rounded-md focus:ring-neon-green focus:border-neon-green"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-light-gray">Take Profit Reasoning</label>
        <textarea
          name="takeProfitReasoning"
          value={formData.takeProfitReasoning}
          onChange={handleChange}
          placeholder="Why this profit target?"
          className="mt-1 w-full p-2 bg-dark-navy text-white rounded-md focus:ring-neon-green focus:border-neon-green"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-light-gray">Stop Loss Price</label>
        <input
          type="number"
          name="stopLossPrice"
          value={formData.stopLossPrice}
          onChange={handleChange}
          placeholder="e.g., 48000"
          className="mt-1 w-full p-2 bg-dark-navy text-white rounded-md focus:ring-neon-green focus:border-neon-green"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-light-gray">Stop Loss Reasoning</label>
        <textarea
          name="stopLossReasoning"
          value={formData.stopLossReasoning}
          onChange={handleChange}
          placeholder="Why this stop loss level?"
          className="mt-1 w-full p-2 bg-dark-navy text-white rounded-md focus:ring-neon-green focus:border-neon-green"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-light-gray">Position Size (% of Portfolio)</label>
        <input
          type="number"
          name="positionSize"
          value={formData.positionSize}
          onChange={handleChange}
          placeholder="e.g., 5"
          className="mt-1 w-full p-2 bg-dark-navy text-white rounded-md focus:ring-neon-green focus:border-neon-green"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-light-gray">Time Frame</label>
        <select
          name="timeFrame"
          value={formData.timeFrame}
          onChange={handleChange}
          className="mt-1 w-full p-2 bg-dark-navy text-white rounded-md focus:ring-neon-green focus:border-neon-green"
        >
          <option value="scalping">Scalping</option>
          <option value="day">Day Trading</option>
          <option value="swing">Swing Trading</option>
          <option value="intraday">Intraday</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-light-gray">Leverage</label>
        <input
          type="number"
          name="leverage"
          value={formData.leverage}
          onChange={handleChange}
          placeholder="e.g., 5"
          className="mt-1 w-full p-2 bg-dark-navy text-white rounded-md focus:ring-neon-green focus:border-neon-green"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full px-4 py-2 bg-neon-green text-dark-navy rounded-lg font-semibold"
      >
        Analyze Trade
      </motion.button>
    </motion.form>
  );
};

export default TradeForm;