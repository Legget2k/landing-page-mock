# Use an official Node.js image as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

EXPOSE 3000

# Start your Astro application with 'npm run dev'
CMD ["npm", "run", "dev"]