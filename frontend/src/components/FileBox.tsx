import React, { useState } from 'react';

interface FileBoxProps {
    fileData: any
}import { Document, Page } from 'react-pdf';


const FileBox: React.FC<FileBoxProps> = ({ fileData } : FileBoxProps) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(fileData);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>

            <div className="bg-gray-200 p-5 rounded-lg shadow-md m-2  w-full  "
                onClick={openModal}

            >
                <div className="text-lg font-semibold">{fileData.fileName}</div>
                <div className="mt-2 text-sm text-gray-500">File</div>
            </div>
            {isOpen && (
                <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
                    <div className="modal-content bg-white p-4">
                        {fileData.fileUrl.endsWith('.pdf') ? (
                          <Document file={`${fileData.fileUrl}:fl_attachment`}>
                          <Page pageNumber={0} />
                      </Document>
                        ) : (
                            <img src={fileData.fileUrl} alt="Image" />
                        )}
                        <button onClick={closeModal} 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Close Modal
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default FileBox;