

import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div 
        className="flex justify-center items-center h-screen" 
        style={{
            backgroundImage: 'url(https://media.giphy.com/media/l3vRnoppYtfEbemBO/giphy.gif)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
    >

        <div className='h-96 w-96 bg-blue-100 rounded-md flex flex-col justify-center items-center  gap-5 p-2'>


                <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to <span style={{ color: '#FF4500' }}>File Manager</span></h1>
                <p className="text-gray-700">
                    File Manager is an online storage and file management application that allows you to securely store, organize, and manage your files. With its user-friendly interface and robust features, File Manager ensures a seamless and convenient file management experience.
                </p>
                {/* Add your file manager application content here */}
                <div className="flex justify-between mt-4 gap-5">
                    <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-md">Sign Up</Link>

                    <Link to="/signin" className="px-4 py-2 bg-blue-500 text-white rounded-md">Sign In</Link>
                </div>
        </div>

         
        </div>
    );
};

export default Home;