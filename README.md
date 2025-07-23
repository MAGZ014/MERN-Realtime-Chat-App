# MERN-Realtime-Chat-App

Aplicación de chat en tiempo real construida con el stack MERN (MongoDB, Express, React, Node.js) y WebSockets.

## Características

- Autenticación de usuarios (registro e inicio de sesión)
- Chat en tiempo real entre usuarios
- Interfaz moderna y responsiva
- Gestión de perfiles de usuario
- Soporte para múltiples salas de chat
- Notificaciones instantáneas
- Carga de imágenes de perfil

## Tecnologías

- **Backend:** Node.js, Express, MongoDB, Socket.io
- **Frontend:** React, Vite, Axios
- **Autenticación:** JWT
- **Almacenamiento de imágenes:** Cloudinary

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/MAGZ014/MERN-Realtime-Chat-App.git
   ```

2. Instala dependencias en backend y frontend:

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Configura las variables de entorno en ambos proyectos (`.env`).

## Variables de entorno

### Backend (`backend/.env`)

```
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=tu_secreto_jwt
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
PORT=5000
```

Reemplaza los valores con tus credenciales y configuraciones correspondientes.

4. Inicia el backend:

   ```bash
   npm start
   ```

5. Inicia el frontend:
   ```bash
   npm run dev
   ```

## Uso

- Accede a la aplicación desde tu navegador en `http://localhost:5173`
- Regístrate o inicia sesión para comenzar a chatear
