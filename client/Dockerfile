# Stage: Development
FROM node:20.14.0
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package*.json yarn.lock ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application in development mode
CMD ["yarn", "dev"]
