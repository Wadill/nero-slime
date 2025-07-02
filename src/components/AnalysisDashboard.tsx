import React from 'react';
import { AIInsight } from '../types';
import { motion } from 'framer-motion';

const mockInsights: AIInsight[] = [
  {
    type: 'whale',
    title: 'Whale Accumulation Detected',
    description: 'Large token transfers from known whale wallets detected in last 24h. Similar patterns preceded 15-25% price increases within 3-7 days.',
    impact: 'bullish',
    probability: 0.75,
  },
  {
    type: 'liquidity',
    title: 'DeFi Liquidity Analysis',
    description: 'Liquidity decreasing while trading volume increasing, indicating potential price volatility incoming.',
    impact: 'neutral',
    probability: 0.65,
  },
  {
    type: 'news',
    title: 'Positive News Sentiment',
    description: 'Major exchange announced token listing, combined with oversold technicals, suggesting a 40-60% price increase within 48h.',
    impact: 'bullish',
    probability: 0.70,
  },
];

const AnalysisDashboard: React.FC = () => {
  return (
    <div className="mt-8 w-full max-w-4xl">
      <h2 className="text-xl font-semibold text-neon-green mb-4">AI-Powered Trade Analysis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockInsights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-deep-blue p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
            <p className="text-sm text-light-gray mt-2">{insight.description}</p>
            <div className="mt-4 flex justify-between">
              <span className={`text-sm font-medium ${insight.impact === 'bullish' ? 'text-neon-green' : insight.impact === 'bearish' ? 'text-red-500' : 'text-yellow-500'}`}>
                Impact: {insight.impact.charAt(0).toUpperCase() + insight.impact.slice(1)}
              </span>
              <span className="text-sm font-medium text-light-gray">Probability: {(insight.probability * 100).toFixed(0)}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnalysisDashboard;