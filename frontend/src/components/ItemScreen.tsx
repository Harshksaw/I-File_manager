import React from 'react'
import FolderContainer from './FolderContainer'
import FileContainer from './FileContainer'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
type Props = {}

const ItemScreen = (props: Props) => {



    return (
        <div className="flex flex-col md:flex-row   h-screen">
            <div className=" md:w-1/3 bg-red-100 ">
                <List
                    className='h-[50%] md:h-full'
                    sx={{

                        maxWidth: '100%',
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',

                        '& ul': { padding: 0 },
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