




import { Button } from './Button';
import DialogModal from './DialogModal';
import { useContext, useState } from 'react';

import FileContainer from './FileContainer';
import { FolderContext } from '../FolderContext';

const TopBar = () => {



    const userId = localStorage.getItem('user');

    console.log(userId);

    const [open, setOpen] = useState(false)

    const { setFolder } = useContext(FolderContext) || {}; // Add null check



    return (
        <div className="sidebar p-5  w-full  flex "  onClick={()=>setFolder && setFolder('')}>

            <DialogModal open={open} setOpen={setOpen} />

            <div className='flex flex-col-reverse  md:flex-row  w-screen  items-center md:items-start'>
            <div className='md: mt-10 '>

            <Button label={"Add FOLDER"} onClick={() => setOpen(true)} />
            </div>

            <FileContainer />

            </div>
         






        </div>
    );
};

export default TopBar;