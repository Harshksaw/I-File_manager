# I-

\Backend Documentation
The backend is built with Express.js, a popular Node.js web application framework. It consists of several routers, each handling a specific set of routes related to a particular functionality.

Routers
Testing Router (/testing)
This router is used for testing purposes. The specific routes and their functionalities would depend on the implementation in ../tests.

Authentication Router (/auth)
This router handles all authentication-related routes. Typically, this would include routes for user registration, login, logout, and possibly others like password reset.

Folder Router (/folder)
This router is responsible for handling all routes related to folders. This could include creating a new folder, retrieving a folder, updating a folder's details, and deleting a folder.

File Router (/file)
This router handles all routes related to files. This could include uploading a new file, retrieving a file, updating a file's details, and deleting a file.

Usage
To use any of these routes, you would send a HTTP request to the server with the appropriate method (GET, POST, PUT, DELETE, etc.) and the route. For example, to create a new folder, you might send a POST request to /folder.

Please note that the specific routes and their functionalities would depend on the implementation in each router file (authRouter.js, folderRouter.js, fileRouter.js, etc.).
Folder API Endpoints
GET /
Returns a success message indicating that the server is up and running.

Function: None

Example Response:

}
GET /getFolder/:owner
Retrieves the folder(s) owned by the specified owner.

Function: getFolder

Parameters:

owner: The owner of the folder(s).
POST /createFolder
Creates a new folder.

Function: createFolder

PUT /editFolder/:id
Edits the details of a specific folder.

Function: editFolder

Parameters:

id: The ID of the folder to edit.
DELETE /deleteFolder/:id
Deletes a specific folder.

Function: deleteFolder

Parameters:

id: The ID of the folder to delete.
Please note that the exact structure of the request and response bodies may vary depending on your implementation. Also, the specific functionality of each endpoint will depend on the implementation of the corresponding function in the folder.controller file.