


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  idF: string;
  f: {
    folderName: string;
  };
}


const FolderContainer = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [rename, setRename] = useState('');


 


  const handleDelete = () => {
    // handle delete logic here
  };


  
  const randomColor = (): string => {
    const colors: string[] = ["bg-red-50", "bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-orange-50"];
    const randomIndex: number = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (

      <div className={`folders flex items-center p-4 gap-2 m-2 ${randomColor()} justify-between rounded-lg relative`}>
        <Link to={'/'} style={{ textDecoration: "none"}}>
          <div className="fo">
            <p className=" w-36">{randomColor()}</p>
          </div>
        </Link>
        <div className="crud flex gap-2 relative bg-ye">
          <button className="material-symbols-outlined" onClick={() => setOpen(!open)}>
            <EditIcon/>
          </button>
          {open && (
            <form className="absolute top-0 bg-white p-4 z-10 shadow-md">
              <input
                type="text"
                placeholder="Change Name"
                value={rename}
                onChange={(e) => setRename(e.target.value)}
                className="p-4 mb-2 outline-none"
              />
              <button className="p-2 bg-skyblue-500 border-none cursor-pointer" onClick={handleEdit}>Rename</button>
            </form>
          )}
          <button className="material-symbols-outlined" onClick={handleDelete}>
            <DeleteIcon/>
          </button>
        </div>
      </div>

  );
};


export default FolderContainer;
