import React, { useState, createContext } from 'react';

// Define the shape of the context
interface FolderContextProps {
  folderId: string | null;
  setFolder: (newFolderId: string | null) => void;
  folderCreated: boolean;
  toggleFolderCreated: () => void;
  fileChange: boolean; // Add the 'fileChange' property
  toggleFileCreated: () => void; // Add the 'toggleFileCreated' method
}

// Create the context
export const FolderContext = createContext<FolderContextProps | undefined>(undefined);

// Create the provider component
export const FolderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [folderId, setFolderId] = useState<string | null>("");
  const [folderCreated, setFolderCreated] = useState<boolean>(false);
  const [fileChange, setFileChange] = useState<boolean>(false);

  const setFolder = (newFolderId: string | null) => {
    setFolderId(newFolderId);
  };

  const toggleFolderCreated = () => {
    setFolderCreated((prev) => !prev);
  };

  const toggleFileCreated = () => {
    setFileChange((prevfile) => !prevfile);
  };

  return (
    <FolderContext.Provider value={{ folderId, setFolder, folderCreated, 
    toggleFolderCreated , fileChange,toggleFileCreated }}>
      {children}
    </FolderContext.Provider>
  );
};