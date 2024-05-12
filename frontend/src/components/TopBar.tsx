



import axios from 'axios';
import { Button } from './Button';
import DialogModal from './DialogModal';
import { useState } from 'react';
import ItemScreen from './ItemScreen';
import FileContainer from './FileContainer';

const TopBar = () => {

    const URL = 'http://localhost:3000'

    const userId = localStorage.getItem('user');

    console.log(userId);

    const [open, setOpen] = useState(false)


    const handleUpload = () => {
        // Handle file upload logic here
    };


    return (
        <div className="sidebar p-10  w-full  flex ">

            <DialogModal open={open} setOpen={setOpen} />


            <Button label={"Add FOLDER"} onClick={() => setOpen(true)} />

            <FileContainer />






        </div>
    );
};

export default TopBar;