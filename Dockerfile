# Use an official Node runtime as a parent image
FROM node:16.13.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install any dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your app's source code
COPY . .

# Expose port 3000 to the outside once the container has launched
EXPOSE 3000

# Start the development server with hot reload
CMD ["npm", "start"]
