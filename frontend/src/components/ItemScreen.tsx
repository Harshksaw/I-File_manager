import React, { useContext, useEffect } from 'react'
import FolderContainer from './FolderContainer'
import FileContainer from './FileContainer'

import axios from 'axios';
import { FolderContext } from '../FolderContext';


const ItemScreen = (props: Props) => {

    const [folderData, setFolderData] = React.useState([]);
    const user = localStorage.getItem('user');

    console.log(user);
    const { folderCreated, toggleFolderCreated } = useContext(FolderContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3000/api/folder/getFolder/${user}`);
            console.log(response.data);
            setFolderData(response.data);
        }

        if (folderCreated) {
            fetchData();
            toggleFolderCreated();
        } else {
            fetchData();
        }
    }, [folderCreated])




    return (
        <div className="flex flex-col md:flex-row   h-screen  ">
            <div className=" md:w-1/3 bg-red-100  md:max-w-xs   overflow-y-scroll md:pb-32 flex-1 ">

                {
                    folderData.map((folder: any) => {
                        return <FolderContainer folderName={folder.folderName} folderUID={folder._id} key={folder._id} />
                    })
                }
               
                



            </div>
            
            <div className=" md:w-2/3 bg-blue-100 flex-1">
                {/* <FileContainer /> */}
            </div>
        </div>
    )
}

export default ItemScreen


