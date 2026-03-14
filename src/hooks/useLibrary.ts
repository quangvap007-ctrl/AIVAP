import { useState, useCallback, useEffect } from 'react';
import { LibraryItem } from '../types';
import { addLibraryItemToDB, getAllLibraryItemsFromDB, deleteLibraryItemFromDB } from '../services/dbService';

export const useLibrary = () => {
  const [library, setLibrary] = useState<LibraryItem[]>([]);
  const [justSavedId, setJustSavedId] = useState<string | null>(null);

  const loadLibrary = useCallback(async () => {
    try {
      const items = await getAllLibraryItemsFromDB();
      setLibrary(items);
    } catch (e) {
      console.error('Failed to load library from DB', e);
    }
  }, []);

  useEffect(() => {
    loadLibrary();
  }, [loadLibrary]);

  const addImageToLibrary = useCallback(async (imageData: string, prompt: string) => {
    const newItem: LibraryItem = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      imageData,
      prompt,
    };
    
    try {
      await addLibraryItemToDB(newItem);
      await loadLibrary(); // Refresh state from DB
      setJustSavedId(newItem.id);
      setTimeout(() => setJustSavedId(null), 2000);
    } catch (e) {
      console.error('Failed to add library item to DB', e);
    }
  }, [loadLibrary]);

  const removeImageFromLibrary = useCallback(async (id: string) => {
    try {
      await deleteLibraryItemFromDB(id);
      await loadLibrary(); // Refresh state from DB
    } catch (e) {
      console.error('Failed to delete library item from DB', e);
    }
  }, [loadLibrary]);

  return { library, addImageToLibrary, removeImageFromLibrary, justSavedId };
};
