


import  { useContext, useState } from 'react';



import { FolderContext } from '../FolderContext';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from 'axios';


const FolderContainer = ({folderName, folderUID} : any) => {
  const [open, setOpen] = useState(false);
  const [rename, setRename] = useState('');



  const { folderId, setFolder, toggleFolderCreated } = useContext(FolderContext) || { folderId: '', setFolder: () => {} };

    console.log(folderId, folderUID);

const handleDelete = async () => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/folder/deleteFolder/${folderId}`);
    console.log(res);
    // handle success logic here
  } catch (error) {
    console.log(error);
    // handle error logic here
  }
};
  const handleEdit = async() => {
    try {
      console.log(folderId, folderUID);


      const res =   await axios.put(
        `${process.env.REACT_APP_API_URL}/api/folder/editFolder/${folderId}`,
        { rename }
      );
      console.log(res);

      toggleFolderCreated && toggleFolderCreated();
      setOpen(false);

    } catch (error) {
      console.log(error);
    } finally {
      setOpen(false);
    }
  };

  const randomColor = (): string => {
    const colors: string[] = ["bg-red-50", "bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-orange-50"];
    const randomIndex: number = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  
  // console.log(folderId);
  
  return (

      <div className={`folders flex items-center p-4 gap-2 m-2   
      ${folderUID === folderId ? "bg-rose-500" : randomColor()    } 
      justify-between rounded-lg relative`}
      onClick={()=> setFolder(folderUID)}
      >
        <div style={{ textDecoration: "none"}} >
          <button className=" hover:scale-110" >
            <p className=" w-36">{folderName}</p>
          </button>
        </div>
        <div className="crud flex gap-2 relative bg-ye">
          <button className="material-symbols-outlined" onClick={() => setOpen(!open)}>
            <MdEdit/>
          </button>
          {open && (


            <form className="absolute top-5 bg-red-200 p-4 z-10 shadow-md  right-0  rounded-md">
              <input
                type="text"
                placeholder="Change Name"
                value={rename}
                onChange={(e) => setRename(e.target.value)}
                className="p-4 mb-2 outline-none"
                />
              <button className="p-2 bg-skyblue-500 border-none cursor-pointer" 
              onClick={handleEdit}>Rename</button>
            </form>

          )}
          <button className="material-symbols-outlined" onClick={handleDelete}>

          </button>
        </div>
      </div>

  );
};


export default FolderContainer;
