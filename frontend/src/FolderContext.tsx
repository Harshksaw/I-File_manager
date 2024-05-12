// src/store/FolderContext.tsx
import { createContext, useState, ReactNode } from 'react';

interface FolderContextProps {
    folderId: string | null;
    setFolder: (newFolderId: string | null) => void;
}

// Create a context
export const FolderContext = createContext<FolderContextProps | undefined>(undefined);

// Create a provider component
export const FolderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [folderId, setFolderId] = useState<string | null>(null);

    // Function to set the folderId
    const setFolder = (newFolderId: string | null) => {
        setFolderId(newFolderId);
    };

    return (
        <FolderContext.Provider value={{ folderId, setFolder }}>
            {children}
        </FolderContext.Provider>
    );
};
