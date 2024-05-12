import React, { useEffect } from 'react'
import FolderContainer from './FolderContainer'
import FileContainer from './FileContainer'
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import { FolderContext } from '../FolderContext';
import axios from 'axios';
type Props = {}

const ItemScreen = (props: Props) => {
    const [folderData, setFolderData] = React.useState([]); 
    const user = JSON.parse(localStorage.getItem('user')  || '{}');

    const token_id = user._id;
    console.log(token_id);


    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get(`http://localhost:3000/api/folder/getFolder/${user}` );
            console.log(response.data);
        }
        fetchData();

    }, [])




    return (
        <div className="flex flex-col md:flex-row   h-screen ">
            <div className=" md:w-1/3 bg-red-100  ">
                <List

                    className='h-[50%] md:h-full '
                    sx={{
                        maxWidth: '100%',
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        '& ul': { padding: 0 },
                        '&::-webkit-scrollbar': {
                          display: 'none'
                        },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none'
                      }}
                    subheader={<li />}
                >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1, 1, 1].map((sectionId) => (
                        <li key={`section-${sectionId}`}>

                            <FolderContainer />

                        </li>
                    ))}
                </List>



            </div>
            
            <div className=" md:w-2/3 bg-blue-100">
                <FileContainer />
            </div>
        </div>
    )
}

export default ItemScreen


