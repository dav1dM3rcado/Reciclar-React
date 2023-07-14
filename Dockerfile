# Utiliza una imagen base de Node.js para la construcción de la aplicación
FROM node:14-alpine as build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de configuración del proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .



# Construye la aplicación React
RUN npm run build

# Utiliza una imagen base ligera de Nginx para servir la aplicación construida
FROM nginx

# Copia los archivos de construcción de la aplicación en la ubicación adecuada del servidor Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expone el puerto 80 para que se pueda acceder a la aplicación
EXPOSE 80

# Inicia el servidor Nginx cuando el contenedor se ejecute
CMD ["nginx", "-g", "daemon off;"]
