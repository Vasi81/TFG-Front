# etapa de compilación
FROM node:14.18 as build-stage
WORKDIR /app
COPY package*.json ./
COPY . .
RUN ng build

# etapa de producción
FROM nginx:1.13.12-alpine as production-stage
COPY ./defaultv.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]