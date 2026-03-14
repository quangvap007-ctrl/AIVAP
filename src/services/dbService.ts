import type { HistoryItem, LibraryItem, SourceImage } from '../types';
import { dataUrlToSourceImageSync } from '../utils';

const DB_NAME = 'AIComplexDB';
const HISTORY_STORE_NAME = 'history';
const LIBRARY_STORE_NAME = 'library';
const DB_VERSION = 2;

let db: IDBDatabase;

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.error('Database error:', request.error);
      reject('Database error');
    };

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const dbInstance = (event.target as IDBOpenDBRequest).result;
      if (!dbInstance.objectStoreNames.contains(HISTORY_STORE_NAME)) {
        dbInstance.createObjectStore(HISTORY_STORE_NAME, { keyPath: 'id' });
      }
      if (!dbInstance.objectStoreNames.contains(LIBRARY_STORE_NAME)) {
        dbInstance.createObjectStore(LIBRARY_STORE_NAME, { keyPath: 'id' });
      }
    };
  });
};

const repairSourceImage = (img: SourceImage | null | undefined): SourceImage | null => {
  if (!img) return null;
  if (!img.base64 || !img.mimeType) {
    const repaired = dataUrlToSourceImageSync(img.dataUrl);
    if (repaired) {
      return { ...img, ...repaired };
    }
  }
  return img as SourceImage;
};

export const addHistoryItemToDB = async (item: HistoryItem): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([HISTORY_STORE_NAME], 'readwrite');
    const store = transaction.objectStore(HISTORY_STORE_NAME);
    const request = store.put(item);

    request.onsuccess = () => resolve();
    request.onerror = () => {
        console.error('Error adding item to DB:', request.error);
        reject(request.error);
    };
  });
};

export const getAllHistoryItemsFromDB = async (): Promise<HistoryItem[]> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([HISTORY_STORE_NAME], 'readonly');
    const store = transaction.objectStore(HISTORY_STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      // Sort by timestamp descending
      const sortedHistory = (request.result as HistoryItem[]).sort((a, b) => b.timestamp - a.timestamp);
      
      // Repair old items missing base64/mimeType
      const repairedHistory = sortedHistory.map(item => ({
        ...item,
        sourceImage: repairSourceImage(item.sourceImage),
        sourceImage2: repairSourceImage(item.sourceImage2),
        referenceImage: repairSourceImage(item.referenceImage)
      }));

      resolve(repairedHistory);
    };
    request.onerror = () => {
        console.error('Error getting all items from DB:', request.error);
        reject(request.error);
    };
  });
};

export const clearHistoryFromDB = async (): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([HISTORY_STORE_NAME], 'readwrite');
    const store = transaction.objectStore(HISTORY_STORE_NAME);
    const request = store.clear();

    request.onsuccess = () => resolve();
    request.onerror = () => {
        console.error('Error clearing DB:', request.error);
        reject(request.error)
    };
  });
};

export const trimHistoryInDB = async (maxItems: number): Promise<void> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([HISTORY_STORE_NAME], 'readwrite');
        const store = transaction.objectStore(HISTORY_STORE_NAME);
        const countRequest = store.count();

        countRequest.onsuccess = () => {
            const count = countRequest.result;
            if (count > maxItems) {
                const getAllRequest = store.getAll();
                getAllRequest.onsuccess = () => {
                    const items = getAllRequest.result as HistoryItem[];
                    items.sort((a, b) => a.timestamp - b.timestamp); // oldest first
                    const itemsToDelete = items.slice(0, count - maxItems);
                    
                    const deleteTransaction = db.transaction([HISTORY_STORE_NAME], 'readwrite');
                    const deleteStore = deleteTransaction.objectStore(HISTORY_STORE_NAME);
                    
                    itemsToDelete.forEach(item => deleteStore.delete(item.id));
                    
                    deleteTransaction.oncomplete = () => resolve();
                    deleteTransaction.onerror = () => reject(deleteTransaction.error);
                };
            } else {
                resolve();
            }
        };
        countRequest.onerror = () => reject(countRequest.error);
    });
};

// --- Library Functions ---

export const addLibraryItemToDB = async (item: LibraryItem): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([LIBRARY_STORE_NAME], 'readwrite');
    const store = transaction.objectStore(LIBRARY_STORE_NAME);
    const request = store.put(item);

    request.onsuccess = () => resolve();
    request.onerror = () => {
        console.error('Error adding item to Library DB:', request.error);
        reject(request.error);
    };
  });
};

export const getAllLibraryItemsFromDB = async (): Promise<LibraryItem[]> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([LIBRARY_STORE_NAME], 'readonly');
    const store = transaction.objectStore(LIBRARY_STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      const sortedLibrary = (request.result as LibraryItem[]).sort((a, b) => b.timestamp - a.timestamp);
      resolve(sortedLibrary);
    };
    request.onerror = () => {
        console.error('Error getting all items from Library DB:', request.error);
        reject(request.error);
    };
  });
};

export const deleteLibraryItemFromDB = async (id: string): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([LIBRARY_STORE_NAME], 'readwrite');
    const store = transaction.objectStore(LIBRARY_STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => resolve();
    request.onerror = () => {
        console.error('Error deleting item from Library DB:', request.error);
        reject(request.error)
    };
  });
};
