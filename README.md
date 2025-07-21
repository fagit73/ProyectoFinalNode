# API de Gestión de Productos - Node.js y Firebase

## Descripción
API REST para administrar productos con operaciones CRUD. Usa Node.js, Express, Firebase Firestore y autenticación JWT.

## Tecnologías
- Node.js
- Express
- Firebase Firestore
- JWT
- dotenv


## Configuración
1. Ejecutar `npm install`.
2. Crear archivo `.env` con las variables de Firebase y JWT_SECRET.
3. Ejecutar con `npm run dev`.
4. Acceder en `http://localhost:3001`.

## Endpoints
- `POST /auth/login` — login con email: `proyectonode@gmail.com` y password: `1978faus`. Devuelve token JWT.
- `GET /api/products` — lista productos.
- `GET /api/products/:id` — obtiene producto por ID.
- `POST /api/products/create` — crea producto (requiere token).
- `DELETE /api/products/:id` — elimina producto (requiere token).

## Uso
Usar token JWT en header `Authorization: Bearer <token>` para rutas protegidas.

## Notas
- Manejo de errores 401, 403, 404, 400, 500.
- Base de datos en Firebase Firestore.

---

Proyecto Final Node JS 2005.

**Alumno:** Fausto Carlos De Laval





