
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
interface FileBoxProps {
  fileData: any;
}
import { Document, Page } from "react-pdf";
import { FolderContext } from "../FolderContext";

const FileBox: React.FC<FileBoxProps> = ({ fileData }: FileBoxProps) => {
const [isOpen, setIsOpen] = useState(false);
const [isDeleting, setIsDeleting] = useState(false);
const { fileChange, toggleFileCreated } = useContext(FolderContext) || {};

const openModal = () => {
    setIsOpen(true);
    console.log(fileChange , "fileChange")
    toggleFileCreated && toggleFileCreated();
 console.log(fileChange)
 
};

const closeModal = () => {
    setIsOpen(false);
};



 



  const handleDeleteFile = async () => {
    try {
      setIsDeleting(true);
      const response = await axios.delete(
        `http://localhost:3000/api/file/deleteFile/${fileData._id}`
      );
    //   console.log(response.data);
      console.log(fileChange , "fileChange")
      await toggleFileCreated();
      console.log(fileChange)
      
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center rounded-lg shadow-md m-2 w-full cursor-pointer hover:bg-gray-400
      bg-gray-200 p-5 border border-x-black
      ">
        <div
          className="text-2xl text-gray-700 hover:text-white hover:scale-110"
          
          onClick={openModal}
        >
          <div className="text-lg font-semibold">{fileData.fileName}</div>
        </div>
        <div
          className="mt-2 text-3xl text-gray-700 hover:text-red-500 hover:scale-150"
          onClick={handleDeleteFile}
        >
          <MdDelete />
        </div>
      </div>

      {isDeleting && (
        <div className="toast fixed bottom-0 right-0 m-4 bg-gray-800 text-white py-2 px-4 rounded-lg">
          Deleting...
        </div>
      )}

      {isOpen && (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="modal-content bg-white p-4">
            {fileData.fileUrl.endsWith(".pdf") ? (
              <Document file={`${fileData.fileUrl}:fl_attachment`}>
                <Page pageNumber={0} />
                200
              </Document>
            ) : (
              <img src={fileData.fileUrl} alt="Image" />
            )}
            <button
              onClick={closeModal}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FileBox;
