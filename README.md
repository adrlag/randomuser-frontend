# Prueba técnica frontend

Este proyecto es una prueba técnica para evaluar conocimientos en **Vite + React + TypeScript**.  
El objetivo es consumir datos desde la [randomuser.me](https://randomuser.me/), mostrarlos en una tabla y añadir funcionalidades básicas como la eliminación el filtrado y restauración original de los datos.

---

## Requisitos

- Node.js **22 (LTS)** o superior

---

## Instalación y ejecución

Clonar el repositorio e instalar dependencias:

```bash
git clone https://github.com/adrlag/randomuser-frontend.git
cd randomuser-frontend
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

La aplicación se abrirá en [http://localhost:5173](http://localhost:5173).

---

## Funcionalidades implementadas

- **Obtener datos**: se recuperan 100 registros desde la API [randomuser.me](https://randomuser.me/).  
- **Mostrar datos en formato tabla**: cada fila incluye foto, nombre, email, país y teléfono.  
- **Eliminar filas**: se puede eliminar un usuario de la tabla.  
- **Restaurar estado inicial**: permite recuperar todos los usuarios eliminados sin volver a llamar a la API.  
- **Filtrar por país**: input de búsqueda que filtra usuarios en tiempo real según el país.  

---

## Tecnologías utilizadas

- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  

---

## Convenciones de commits

Este proyecto sigue [Conventional Commits](https://www.conventionalcommits.org/).
  
Commits:  
- `chore(init): crear proyecto con Vite + React + TS`
- `feat(api): recuperar y mostrar 100 usuarios en una tabla`
- `feat(ui): permitir la eliminar usuarios de la tabla`
- `feat(state): restaurar la lista original de usuarios`
- `feat(filter): filtrar usuarios por país`
- `docs(readme): añadir instrucciones de instalación y uso`

---

## Autor

- Adrián Lage Gil ([@adrlag](https://github.com/adrlag))

---