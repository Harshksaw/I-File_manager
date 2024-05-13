# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container to /app


# Copy package.json and package-lock.json from the backend directory to the working directory
COPY backend/package*.json ./

# Install the application dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the backend application code to the working directory
COPY backend/ .

# Define the command to run the application
CMD [ "npm","run", "dev" ]

# Expose port 3000 for the application
EXPOSE 3000