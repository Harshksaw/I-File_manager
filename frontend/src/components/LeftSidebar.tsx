
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LeftSideBar: React.FC = () => {
    const handleUpload = () => {
        // Handle file upload logic here
    };

    const handleAddFolder = () => {
        // Handle add folder logic here
    };

    return (
        <div className="sidebar p-10  w-full">


                <Button variant="contained" onClick={handleUpload}>Contained</Button>
                <Button variant="outlined" onClick={handleAddFolder}>Outlined</Button>


        </div>
    );
};

export default LeftSideBar;