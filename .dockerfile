# Use a lightweight Node.js image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Copy the app code
COPY . .

# Build the app (if necessary)
# RUN npm run build

# Expose the app's port
EXPOSE 3000

# Define the startup command
CMD [ "node", "app.js" ]
