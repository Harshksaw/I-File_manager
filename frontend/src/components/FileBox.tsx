import axios from "axios";
import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
interface FileBoxProps {
  fileData: any;
}
import { Document, Page } from "react-pdf";
import { FolderContext } from "../FolderContext";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
const FileBox: React.FC<FileBoxProps> = ({ fileData }: FileBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { fileChange, toggleFileCreated } = useContext(FolderContext) || {};

  const openModal = () => {
    setIsOpen(true);
    console.log(fileChange, "fileChange");
    toggleFileCreated && toggleFileCreated();
    console.log(fileChange);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const handleEditFile = async () => {
  //   try {
  //     setIsDeleting(true);
  //     await axios.delete(
  //       `${process.env.REACT_APP_API_URL}/api/file/deleteFile/${fileData._id}`
  //     );

  //     console.log(fileChange , "fileChange");
  //     toggleFileCreated && toggleFileCreated();
  //     console.log(fileChange);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsDeleting(false);
  //   }
  // };
  const handleDeleteFile = async () => {
    try {
      toast("Deleting...", { type: "success" })
      setIsDeleting(true);
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/file/deleteFile/${fileData._id}`
      );

      console.log(fileChange, "==========fileChange");
      toggleFileCreated && toggleFileCreated();
      console.log(fileChange);

      

    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div
        className="flex justify-between items-center rounded-lg shadow-md m-2 w-full cursor-pointer hover:bg-gray-400
      bg-gray-200 p-5 border border-x-black
      "
      >
        <div
          className="text-2xl text-gray-700 hover:text-white hover:scale-110"
          onClick={openModal}
        >
          <div className="text-lg font-semibold">
            {fileData.fileName.slice(0, 10)}
          </div>
        </div>

        <div
          className="mt-2 text-3xl text-gray-700 hover:text-red-500 hover:scale-150"
          onClick={handleDeleteFile}
        >
          <MdDelete />
        </div>
      </div>



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
