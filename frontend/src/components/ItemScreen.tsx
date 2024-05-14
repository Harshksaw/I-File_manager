import React, { useContext, useEffect } from 'react'
import FolderContainer from './FolderContainer'


import axios from 'axios';
import { FolderContext } from '../FolderContext';
import FileBox from './FileBox';



const ItemScreen = () => {
    const user = localStorage.getItem('user');



    const [folderData, setFolderData] = React.useState([]);
    const [fileData, setFileData] = React.useState([]);
    const { folderCreated, folderId, fileChange } =
        useContext(FolderContext) || {};

    const finalFolderId = folderId === '' ? user : folderId;

    // console.log(user);

    useEffect(() => {
        const fetchData = async () => {
            const responseFolder = await
                axios.get(`${process.env.REACT_APP_API_URL}/api/folder/getFolder/${user}`);


            // console.log(responseFolder.data);

            setFolderData(responseFolder.data);

        }
        const fetchFileData = async () => {


            const responseFile = await axios.get(`${process.env.REACT_APP_API_URL}/api/file/getFiles/${finalFolderId}`);

            console.log(responseFile.data);

            setFileData(responseFile.data);
        }

        fetchData();
        fetchFileData();

    }, [folderCreated, folderId, fileChange])




    return (
        <div className="flex flex-col md:flex-row   h-screen  ">
            <div className=" md:w-1/3 bg-red-100  md:max-w-xs px-5 md:px-2  overflow-y-scroll md:pb-32 flex-1 ">

                {
                    folderData.map((folder: any) => {
                        return <FolderContainer
                            folderName={folder.folderName} folderUID={folder._id}
                            key={folder._id} />
                    })
                }

            </div>

            <div className=" md:w-2/3  overflow-y-scroll  overflow-x-hidden p-5
                        md:pb-32 flex-1 grid grid-cols-2 md:grid-cols-3 gap-10 items-center h-fit ">
                {
                    fileData.map((file: any) => {
                        return <FileBox fileData={file} key={file._id} />
                    })
                }

            </div>
        </div>




    )
}

export default ItemScreen


