import { useContext, useRef, useState } from "react";
import axios from "axios";




import { FolderContext } from "../FolderContext";

const FileContainer = () => {
  const { folderId, toggleFileCreated } = useContext(FolderContext) || {};

  const fileInputRef = useRef<HTMLInputElement>(null); // Declare the fileInputRef variable
  const userId = localStorage.getItem("user");

  const [fileUpload, setFileUpload] = useState<any>(null);



  const handleChange = () => {
    const file = fileInputRef.current?.files?.[0]; // Add null check for files property
    setFileUpload(file);
  };

  const handleSub = async () => {
    if (fileUpload === null) {

      return;
    }

    const finalFolderId = folderId === "" ? userId : folderId;
    console.log(finalFolderId);

    console.log(folderId);

    if (fileUpload.size < 100000000000) {
      try {
      
        const formData = new FormData();


        formData.append("file", fileUpload);
        formData.append("fileName", fileUpload?.name ?? "");

        formData.append("folderId", finalFolderId ?? "");


        const data = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/file/createFiles`,
          formData
        );

        toggleFileCreated && toggleFileCreated();
        console.log(data);

        setTimeout(() => {}, 2000);
      } catch (error) {
        console.log(error, "erroe232e2-------r");
        // setError("Please upload again");
      }
    }
  };

  return (
    <div className=" px-4  ">

      <div className="flex mb-4 items-center gap-4 flex-col md:flex-row">
        <span className="mr-2 ml-4  mt-2 text-xl md:mb-4">Upload photo</span>
        <br />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleChange}
          accept=".jpg,.jpeg,.png,.pdf" // Accepts JPEG, PNG images and PDF files
        />
        <button
          className="border-none p-2 -ml-6 bg-green-400 rounded-md cursor-pointer mb-2 md:mb-0 contain w-fit"
          onClick={handleSub}
        >
          Upload
        </button>
      </div>
      {/* {uploading ? "Photo uploading" : ""} */}

      <p className="mb-4 text-gray-500">
        Please upload picture which has size less than 5MB
      </p>
      {/* <div className="flex flex-wrap gap-6 relative">
      {dbFile.map((db) => (
        <div className="relative" key={db._id}>
          <div className="absolute bg-black bg-opacity-80 py-2 flex justify-between cursor-pointer">
            <span className="text-white" onClick={(e) => handleDelete(e, db._id)}>delete</span>
          </div>
          <img className="shadow-lg h-80 w-80 object-cover md:h-60 md:w-60" src={db.file} />
        </div>
      ))}
    </div> */}
    </div>
  );
};

export default FileContainer;
