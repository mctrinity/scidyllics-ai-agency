### **📌 Scidyllics Docker Setup Guide**
This guide will help you **set up `docker-compose.yml` for both frontend and backend** and configure **Docker networking** to ensure both services can communicate.

---

## **✅ 1. Create a Docker Network**
Before running the services, create a **Docker network** to connect the frontend and backend:
```bash
docker network create scidyllics-network
```
🔹 This network ensures that both services can communicate inside Docker.

---

## **✅ 2. Create `docker-compose.yml` for the Backend**
Inside the **backend repository (`scidyllics-backend`)**, create a `docker-compose.yml` file:
```yaml
services:
  backend:
    build: .
    container_name: fastapi-backend
    ports:
      - "8000:8000"
    env_file:
      - .env
    networks:
      - scidyllics-network

networks:
  scidyllics-network:
    external: true  # ✅ Connects to the existing network
```
🔹 **Why this works?**
- The **backend runs inside `scidyllics-network`**.
- **`env_file: - .env`** ensures environment variables (e.g., API keys) are loaded.

---

## **✅ 3. Create `docker-compose.yml` for the Frontend**
Inside the **frontend repository (`scidyllics-frontend`)**, create a `docker-compose.yml` file:
```yaml
services:
  frontend:
    build: .
    container_name: nextjs-frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://fastapi-backend:8000  # ✅ Use the backend container name
    networks:
      - scidyllics-network

networks:
  scidyllics-network:
    external: true  # ✅ Connects frontend to the same network
```
🔹 **Why this works?**
- **`NEXT_PUBLIC_API_URL=http://fastapi-backend:8000`** ensures that Next.js communicates with FastAPI inside Docker.
- The **frontend connects to `scidyllics-network`**, allowing it to reach `fastapi-backend`.

---

## **✅ 4. Run the Containers in the Correct Order**
Since the **frontend depends on the backend**, start the backend first.

### **Start the Backend**
```bash
cd path/to/scidyllics-backend
docker-compose up --build -d
```
✅ This **runs FastAPI in detached mode** (`-d` means "run in the background").

### **Start the Frontend**
```bash
cd path/to/scidyllics-frontend
docker-compose up --build
```
✅ This **builds and runs Next.js**, connected to `scidyllics-network`.

---

## **✅ 5. Verify That Everything Works**
### **Check Running Containers**
Run:
```bash
docker ps
```
✅ Expected output:
```
CONTAINER ID   IMAGE              PORTS                    NAMES
abcd1234       nextjs-frontend    0.0.0.0:3000->3000/tcp   nextjs-frontend
xyz98765       fastapi-backend    0.0.0.0:8000->8000/tcp   fastapi-backend
```

### **Test Backend API**
Try calling the backend from **inside the frontend container**:
```bash
docker exec -it nextjs-frontend curl -X POST "http://fastapi-backend:8000/api/chat/" -H "Content-Type: application/json" -d '{"message": "Hello"}'
```
✅ If you get a response like:
```json
{"reply": "Hello! How can I help you?"}
```
Then **the frontend successfully communicates with the backend**. 🎉

---

## **🔥 Final Summary**
| Step | Command |
|------|---------|
| **1️⃣ Create a Docker network** | ✅ `docker network create scidyllics-network` |
| **2️⃣ Set up `docker-compose.yml` for backend** | ✅ `cd scidyllics-backend && nano docker-compose.yml` |
| **3️⃣ Set up `docker-compose.yml` for frontend** | ✅ `cd scidyllics-frontend && nano docker-compose.yml` |
| **4️⃣ Start the backend first** | ✅ `docker-compose up --build -d` |
| **5️⃣ Start the frontend** | ✅ `docker-compose up --build` |
| **6️⃣ Verify running containers** | ✅ `docker ps` |
| **7️⃣ Test backend API from frontend** | ✅ `docker exec -it nextjs-frontend curl -X POST "http://fastapi-backend:8000/api/chat/" -H "Content-Type: application/json" -d '{"message": "Hello"}'` |

🚀 **Now your frontend and backend are fully connected inside Docker!** Let me know if you need further improvements! 🔥🔥🔥

