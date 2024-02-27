# Stage 1: Building the Next.js application
FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Setup NGINX and Node.js in the same stage
FROM nginx:alpine

# Install Node.js
RUN apk add --no-cache nodejs npm

# Create app directory and copy built files from the builder stage
WORKDIR /usr/src/app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Optionally, if you have custom server-side code like a custom server.js
# COPY --from=builder /app/server.js ./server.js

# Copy the NGINX configuration file
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Replace the default NGINX site configurations
RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 3000

# Start NGINX and the Next.js application using a custom entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
CMD ["npm","run", "start"]
# ENTRYPOINT ["/entrypoint.sh"]
