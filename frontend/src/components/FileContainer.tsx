import { useEffect, useReducer, useState } from "react";
import axios from "axios";


import { useNavigate, useParams } from "react-router-dom";
// import { url } from "../utils/url";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FileContainer = () => {
  // const [files,setFiles] = useState(null)
  // const[gets,setGet] = useState(null)

  const { folderId } = useParams();

  const [file, setFile] = useState(null);

  const [selectImg, setSelectImage] = useState("");
  const [fileName, setFileName] = useState(null);

  const [dbFile, setDbFile] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [err, setError] = useState("");

  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  // const handleSubmit = async(e)=>{
  //   e.preventDefault()
  //   const formData  = new FormData()

  //   formData.append("file",files)
  //   const result = await axios.post("http://localhost:9000/filesUp",formData,{
  //     headers:{
  //       "Content-Type":"multipart/form-data"
  //     }
  //   })

  // }
  // useEffect(()=>{
  //   getImage()
  // },[])

  // const handleFile = (e)=>{

  //   console.log(e.target.files[0])
  //   setFiles(e.target.files[0])
  // }

  // const getImage = async()=>{
  //   const result = await axios.get("http://localhost:9000/fileDown")
  //   console.log(result.data)
  //   setGet(result.data)
  // }match

  useEffect(() => {
    const getFiles = async () => {
      try {
        // const response = await axios.get(url + "/files/getfiles/" + folderId);

        // setDbFile(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFiles();
  }, [folderId, reducerValue]);

  const handleSub = async () => {
    setFileName(selectImg.name);
    
    if (selectImg.size < 10000000) {
      try {
        const load = toast.loading("Photo uploading", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        const formData = new FormData();
        setUploading(true);
        
        formData.append("file", selectImg);
        formData.append("upload_preset", "dsrtkzf0");
        const data = await axios.post(
          "https://api.cloudinary.com/v1_1/dgoksuam1/image/upload",
          formData
        );
        // setFile(data.data.secure_url);

        console.log(data);

        // await axios.post("http://localhost:9000/files/createFiles/"+url).then((response)=>{
        //   console.log("data saveed")
        // })

        setTimeout(async () => {
          if (folderId) {
            // const response = await axios.post(url + "/files/createFiles", {
            //   file: data.data.secure_url,
            //   fileName: selectImg.name,
            //   folderId,
            // });
            console.log(response);
            setUploading(false);
            toast.dismiss(load);
            toast.success("Photo uploaded", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });

            forceUpdate();
          } else {
            alert("Error occur while uploading file");
          }
        }, 1000);
      } catch (error) {
        console.log(error.message);

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

  const handleDelete = async (e, id) => {
    e.preventDefault();

    try {
      const conformation = confirm("Do you want to delete this photo??");
      if (conformation) {
        const response = await axios.delete(
          `https://dull-puce-chicken-hat.cyclic.cloud/files/deleteFile/${id}`
        );
        toast.success("Photo deleted", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(response);
        setTimeout(() => {
          forceUpdate();
        }, 3000);
      } else {
        toast.warning("Process cancelled", {
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
    } catch (error) {
      console.log(error);
    }
  };

  // const handleFile = async()=>{

  //   const result = await uploadFile(selectImg, {
  //     publicKey: '81db13eaa3038936b020',
  //     store: 'auto',
  //     metadata: {
  //       subsystem: 'uploader',
  //       pet: 'cat'
  //     }
  //   })
  //   console.log(`URL: ${file.cdnUrl}`)
  // }

  return (
    <div className=" px-10 ">
    <ToastContainer />
    <div className="flex mb-8 items-center gap-6 flex-col md:flex-row">
      <span className="mr-4 text-xl md:mb-4">Upload photo</span>
      <br />
      <input
        className="w-60 mr-8 mb-2 md:mb-0"
        type="file"
        onChange={(e) => {
          setSelectImage(e.target.files[0]);
        }}
      />
      <button className="border-none py-2 bg-sky-400 rounded-md cursor-pointer mb-2 md:mb-0" onClick={handleSub}>Upload</button>
    </div>
    {uploading ? "Photo uploading" : ""}
    {err && err}
    <p className="mb-4 text-gray-500">Please upload picture which has size less than 5MB</p>
    <div className="flex flex-wrap gap-6 relative">
      {dbFile.map((db) => (
        <div className="relative" key={db._id}>
          <div className="absolute bg-black bg-opacity-80 py-2 flex justify-between cursor-pointer">
            <span className="text-white" onClick={(e) => handleDelete(e, db._id)}>delete</span>
          </div>
          {/* <img className="shadow-lg h-80 w-80 object-cover md:h-60 md:w-60" src={db.file} /> */}
        </div>
      ))}
    </div>
  </div>
  );
};

export default FileContainer;
