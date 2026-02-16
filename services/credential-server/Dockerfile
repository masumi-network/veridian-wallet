FROM node:21.5.0 AS builder
WORKDIR /app
RUN apt update -qq && apt install -y build-essential && apt clean
# Configure npm for better timeout handling
RUN npm config set fetch-timeout 600000 && \
    npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000
# Copy package files first for better caching
COPY package*.json ./
# Install dependencies with retries (including devDependencies for build)
RUN npm install --legacy-peer-deps || npm install --legacy-peer-deps
# Copy rest of the code
COPY . .
# Build the project
RUN npm run build
CMD [ "npm", "start" ]
