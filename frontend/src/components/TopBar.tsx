



import axios from 'axios';
import { Button } from './Button';

const TopBar = () => {

    const URL = 'http://localhost:3000'

    const userId = localStorage.getItem('user');

    console.log(userId);
   


    const handleUpload = () => {
        // Handle file upload logic here
    };

    const handleAddFolder = async () => {

        try {
            const res = await axios.post(`${URL}/api/folder/createFolder`, 
            { folderName: `folder2333`, owner: userId });

            console.log('Folder created23', res);

        } catch (error) {
            console.log(error);


        }

        // Handle add folder logic here

    };

    return (
        <div className="sidebar p-10  w-full">


            <Button  label={"Add FOLDER"} onClick={handleAddFolder} />



        </div>
    );
};

export default TopBar;