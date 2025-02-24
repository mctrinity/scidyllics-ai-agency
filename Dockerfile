# 1️⃣ Use official Node.js image
FROM node:18-alpine

# 2️⃣ Set the working directory inside the container
WORKDIR /app

# 3️⃣ Copy package.json and package-lock.json from the frontend folder
COPY frontend/package.json frontend/package-lock.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy the entire frontend project
COPY frontend ./

# 6️⃣ ✅ Copy `.env.local` from the ROOT directory instead of frontend
COPY ./.env.local .env.local


# 7️⃣ Build the Next.js app
RUN npm run build

# 8️⃣ Expose port 3000
EXPOSE 3000

# 9️⃣ Start the Next.js application
CMD ["npm", "run", "start"]
