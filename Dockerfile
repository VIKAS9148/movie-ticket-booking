# ---- Stage 1: Build React App ----
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build production bundle
RUN npm run build


# ---- Stage 2: Serve with NGINX ----
FROM nginx:alpine

# Copy build output to NGINX HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
