# # Use an official Node runtime as a parent image
# FROM node:20.14.0

# # Set the working directory
# WORKDIR /app

# # Copy package.json and yarn.lock
# COPY package.json yarn.lock ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Generate Prisma Client
# RUN npx prisma generate

# # Expose the application port
# EXPOSE 4000

# # Start the application
# CMD ["npm", "run", "start"]
# Use an official Node runtime as a parent image
FROM node:20.14.0

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 4000

# Start the application
CMD ["npm", "run", "start"]
