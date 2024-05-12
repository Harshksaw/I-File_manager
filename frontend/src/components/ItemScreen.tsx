import React, { useEffect } from 'react'
import FolderContainer from './FolderContainer'
import FileContainer from './FileContainer'

import axios from 'axios';


const ItemScreen = (props: Props) => {

    const [folderData, setFolderData] = React.useState([]);
    const user = localStorage.getItem('user');

    console.log(user);
   



    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get(`http://localhost:3000/api/folder/getFolder/${user}`);
            console.log(response.data);
            setFolderData(response.data);
        }
        fetchData();

    }, [])




    return (
        <div className="flex flex-col md:flex-row   h-screen ">
            <div className=" md:w-1/3 bg-red-100  overflow-y-scroll">

                {
                    folderData.map((folder: any) => {
                        return <FolderContainer folderName={folder.folderName} folderUID={folder._id} key={folder._id} />
                    })
                }
               
                



            </div>
            
            <div className=" md:w-2/3 bg-blue-100">
                <FileContainer />
            </div>
        </div>
    )
}

export default ItemScreen


