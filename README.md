Sure, here is the modified markdown:

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
