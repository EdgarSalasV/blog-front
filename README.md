## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About

En la carpeta "/pages" están las rutas que nos direccionan a las vistas (se eligió modularizarlos 
en la carpeta "/views" para no interferir con el uso especial de Next JS de la carpeta "pages"). 

El componente que implemente el layout general de la aplicación y el contexto global se encuentra
en la carpeta "/views/page".

Para el caso de las vistas de "/blogs" y "/blogs/id" se está consumiendo las apis del servidor
con el proyecto de lb4.

En la carpeta views se encuentra los componentes que serán usados desde los pages/*