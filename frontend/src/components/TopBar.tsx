


import Button from '@mui/material/Button';
import axios from 'axios';

const TopBar = () => {

    const URL = 'http://localhost:3000'

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token_id = user._id;
    console.log(token_id);


    const handleUpload = () => {
        // Handle file upload logic here
    };

    const handleAddFolder = async () => {

        try {



            const res = await axios.post(`${URL}/api/folder/createFolder`, 
            { folderName: `folder${i}`, owner: token_id });

            console.log('Folder created', res);

        } catch (error) {
            console.log(error);


        }

        // Handle add folder logic here

    };

    return (
        <div className="sidebar p-10  w-full">


            <Button variant="contained" onClick={handleAddFolder}>Add Folder</Button>



        </div>
    );
};

export default TopBar;