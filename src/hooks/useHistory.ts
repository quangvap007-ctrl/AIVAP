import { useState, useCallback, useEffect } from 'react';
import { HistoryItem } from '../types';
import { addHistoryItemToDB, getAllHistoryItemsFromDB, clearHistoryFromDB, trimHistoryInDB } from '../services/dbService';

export const useHistory = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const loadHistory = useCallback(async () => {
    try {
      const items = await getAllHistoryItemsFromDB();
      setHistory(items);
    } catch (e) {
      console.error('Failed to load history from DB', e);
    }
  }, []);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const addHistoryItem = useCallback(async (item: Omit<HistoryItem, 'timestamp' | 'id'>) => {
    const newItem: HistoryItem = {
      ...item,
      timestamp: Date.now(),
      id: Math.random().toString(36).substr(2, 9),
    };
    
    try {
      await addHistoryItemToDB(newItem);
      await trimHistoryInDB(50); // Keep only last 50 items
      await loadHistory(); // Refresh state from DB
    } catch (e) {
      console.error('Failed to add history item to DB', e);
    }
  }, [loadHistory]);

  const clearHistory = useCallback(async () => {
    try {
      await clearHistoryFromDB();
      setHistory([]);
    } catch (e) {
      console.error('Failed to clear history from DB', e);
    }
  }, []);

  return { history, addHistoryItem, clearHistory };
};
