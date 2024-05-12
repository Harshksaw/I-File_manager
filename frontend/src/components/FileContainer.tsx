import { useContext, useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";


import { useNavigate, useParams } from "react-router-dom";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FolderContext } from "../FolderContext";

const FileContainer = () => {
  const fileInputRef = useRef();
  const userId = localStorage.getItem('user');


  const { folderId } = useContext(FolderContext);

  const [file, setFile] = useState(null);


  const [fileUpload, setFileUpload] = useState(null);



  const [err, setError] = useState("");

  const handleChange = (e) => {
    const file = fileInputRef.current.files[0];
    setFileUpload(file);

  }


  const handleSub = async () => {
   
    if (fileUpload === null) {
      setError("Please upload a file");
      return;
    }

    const finalFolderId = folderId === '' ? userId : folderId;
    console.log(finalFolderId);
    console.log(userId);
    console.log(folderId);


    
    if (fileUpload.size < 100000000000) {
      try {
        // const load = toast.loading("Photo uploading", {
        //   position: "bottom-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark",
        // });
        const formData = new FormData();
        // setUploading(true);
        
        formData.append("file", fileUpload );
        formData.append("fileName", fileUpload.name );

        formData.append("folderId",finalFolderId );

        const data = await axios.post(
          "http://localhost:3000/api/file/createFiles",
          formData
        );
        // setFile(data.data.secure_url);

        console.log(data);


    

         
      } catch (error) {
        console.log(error.message , "erroe232e2-------r");
        setError("Please upload again");

      }
    } else {
      toast.error("Picture size is greater than 5MB", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      
    }
  };

 

  return (
    <div className=" px-5  ">
    <ToastContainer />
    <div className="flex mb-8 items-center gap-6 flex-col md:flex-row">
      <span className="mr-4 text-xl md:mb-4">Upload photo</span>
      <br />
      <input 
                type="file" 
                ref={fileInputRef} 
                onChange={ handleChange} 
                accept=".jpg,.jpeg,.png,.pdf" // Accepts JPEG, PNG images and PDF files
            />
      <button className="border-none py-2 bg-sky-400 rounded-md cursor-pointer mb-2 md:mb-0" onClick={handleSub}>Upload</button>
    </div>
    {/* {uploading ? "Photo uploading" : ""} */}
    {/* {err && err} */}
    <p className="mb-4 text-gray-500">Please upload picture which has size less than 5MB</p>
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
