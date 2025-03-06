# 1️⃣ Use official Node.js image
FROM node:18-alpine

# 2️⃣ Set the working directory inside the container
WORKDIR /app

# 3️⃣ Install curl and other necessary utilities
RUN apk add --no-cache curl

# 4️⃣ Copy package.json and package-lock.json from the frontend folder
COPY frontend/package.json frontend/package-lock.json ./

# 5️⃣ Install dependencies
RUN npm install

# 6️⃣ Copy the entire frontend project
COPY frontend ./

# 7️⃣ ✅ Copy `.env.local` from the ROOT directory instead of frontend
COPY ./.env.local .env.local

# 8️⃣ Build the Next.js app
RUN npm run build

# 9️⃣ Expose port 3000
EXPOSE 3000

# 🔟 Start the Next.js application
CMD ["npm", "run", "start"]
