# File Storage Application

This application is a file storage service built with React.js for the frontend and Express.js for the backend. It allows users to manage files and folders.

## Features

### User Authentication

- **Sign Up:** Users can create an account by providing a valid email address and password.
- **Sign In:** Existing users can sign in using their registered email and password.

### File Manager

- **File Upload:** Users can upload images and PDFs.
- **Create Folder:** Users can create new folders to organise their files.
- **Delete File/Folder:** Users can delete files and folders.
- **Move File:** Users can move files to different folders.
- **Rename File/Folder:** Users can rename files and folders.
- **View Files:** Users can preview uploaded images and PDFs.

## Installation

Clone the repository:

```bash
git clone https://github.com/Harshksaw/I-File_manager

npm install

npm start

VITE_APP_URL=http://localhost:3000

# Backend Setup

The backend of this application is built with Express.js. Here are the steps to set it up:

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Harshksaw/I-File_manager.git
   cd I-File_manager/backend
   npm install
   npm start


   **.Create a .env file in the root directory of your backend project.**
    PORT=
    MONGODB_URI=
    NODE_ENV=
    KEY=
    CLOUD_NAME=
    API_KEY=
    API_SECRET


**Backend API**

This document describes the backend API for a file storage application. The backend is built with Express.js and consists of several routers, each handling specific functionalities.

**Routers**

* **Testing Router (`/testing`):** Used for testing purposes.
* **Authentication Router (`/auth`):** Handles user registration, login, logout, and potentially password reset.
* **Folder Router (`/folder`):** Manages folders (create, retrieve, update, delete).
* **File Router (`/file`):** Manages files (upload, retrieve, update, delete).

**Usage**

To use an API endpoint, send an HTTP request to the server with the appropriate method (GET, POST, PUT, DELETE) and the corresponding route.

**Folder API Endpoints**

* **GET /:** Returns a success message indicating the server is running.
* **GET /getFolder/:owner:** Retrieves folders owned by the specified user.
* **POST /createFolder:** Creates a new folder.
* **PUT /editFolder/:id:** Edits an existing folder.
* **DELETE /deleteFolder/:id:** Deletes a folder.

**Note:**

* The exact request and response formats may vary depending on the implementation.
* Specific functionalities depend on the corresponding controller file.
