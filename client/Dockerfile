# Stage 1: Builder
FROM node:20.14.0 AS builder
WORKDIR /app

# Copy and install dependencies using Yarn
COPY package*.json ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Runtime
FROM node:20.14.0
WORKDIR /app

# Copy built application from the builder stage
COPY --from=builder /app ./

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]