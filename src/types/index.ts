export interface TradeInput {
  tradingPair: string;
  entryPrice: number;
  entryReasoning: string;
  takeProfitPrice: number;
  takeProfitReasoning: string;
  stopLossPrice: number;
  stopLossReasoning: string;
  positionSize: number;
  timeFrame: 'scalping' | 'day' | 'swing' | 'intraday';
  leverage: number;
}

export interface AIInsight {
  type: 'whale' | 'liquidity' | 'volume' | 'technical' | 'news' | 'regulatory';
  title: string;
  description: string;
  impact: 'bullish' | 'bearish' | 'neutral';
  probability: number;
}