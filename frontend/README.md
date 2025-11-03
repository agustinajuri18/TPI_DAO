GoField - Frontend (estático)
=================================

Archivos:
- `index.html` - página principal (hero, botones, modales)
- `styles.css` - estilos
- `app.js` - lógica JS mínima (modales y fetch a `/api/canchas`)
- `assets/` - coloca aquí `logo.png` y `hero.jpg`
	- Asegurate de usar exactamente los nombres: `logo.png` (preferible PNG transparente) y `hero.jpg` (o `hero.png`).

Cómo probar localmente (sin instalar nada):
1. Copia la carpeta `frontend/assets` con las imágenes `logo.png` y `hero.jpg`.
2. Abre `frontend/index.html` directamente en tu navegador.

Servir con Flask (recomendado para integración con backend):
1. Copia el contenido de `frontend/` dentro de `backend/static/` o configura Flask para servir la carpeta `frontend`.
2. Accede a `http://localhost:5000/static/index.html` o sirve `index.html` desde una ruta.

Notas:
- `app.js` hace una petición a `/api/canchas`. Asegurate de que el backend esté corriendo y que las rutas sean accesibles.
- Los formularios de login y reserva son placeholders; podés conectarlos a los endpoints reales cuando estén listos.
 
Si las imágenes no se muestran, comprobá:
1. Que los archivos existan en `frontend/assets/` con los nombres correctos.
2. Si servís desde Flask, que los archivos estén en `backend/static/assets/` (la ruta final será `/static/assets/logo.png`).
3. Abrí la consola del navegador (F12) y revisá errores 404 para ver la ruta exacta buscada.
