import axios from "axios";
import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
interface FileBoxProps {
  fileData: any;
  setFileToMove: any;
}
import { Document, Page } from "react-pdf";
import { FolderContext } from "../FolderContext";
import { CiExport } from "react-icons/ci";

const FileBox: React.FC<FileBoxProps> = ({ fileData ,  setFileToMove }: FileBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { fileChange, toggleFileCreated } = useContext(FolderContext) || {};

  const openModal = () => {
    setIsOpen(true);
    // console.log(fileChange, "fileChange");
    console.log(fileData)
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
      // toast("Deleting...", { type: "success" })

     


      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/file/deleteFile/${fileData._id}`
      );

      console.log(fileChange, "==========fileChange");
      toggleFileCreated && toggleFileCreated();
      console.log(fileChange);
} catch (error) {
      console.log(error);
    } finally {

    }
  };

  return (
    <>
      <div
   className={`flex justify-between items-center rounded-lg 
          bg-gray-200 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out
        w-50
        shadow-md m-2 w-full cursor-pointer hover:bg-gray-400
       p-5 border border-x-black
      `}
      >


        <div
          className="text-2xl text-gray-700 hover:text-white hover:scale-110"
          onClick={openModal}
        >
          <div className=" text-sm  md:text-md font-semibold">
            {fileData.fileName.slice(0, 7)}
          </div>
        </div>

        <div className="hover:text-green-500 hover:scale-150 text-xl font-bold" 
        onClick={() => setFileToMove((prevState: any) => ({...prevState , fileUID: fileData._id }))}>


        <CiExport />
        </div>

        <div
          className="mt-2 text-3xl text-gray-700 hover:text-red-500 hover:scale-150"
          onClick={handleDeleteFile}
        >
          <MdDelete />
        </div>
      </div>



      {isOpen && (
        <div className= {` fixed w-full h-full top-0 left-0 flex items-center justify-center`}>
          <div className="modal-content bg-white p-4  ">
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
