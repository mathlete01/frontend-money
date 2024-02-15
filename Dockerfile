# Use an official Node runtime as a parent image
FROM node:16.13.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your app's source code
COPY . .

# Build your app
RUN npm run build

# Install serve to serve your static files
RUN npm install -g serve

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run serve when the container launches
CMD ["serve", "-s", "build", "-l", "3000"]
