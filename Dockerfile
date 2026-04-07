# Stage 1: Build the static files
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and lock files
COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./

# Install dependencies (using pnpm as seen in your files)
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN pnpm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine AS runner

# Copy the static export from the builder stage to Nginx's default public folder
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]