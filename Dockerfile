FROM node:12.16.1-alpine as angular
WORKDIR /app

COPY package.json /app/package.json
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alphine
VOLUME /var/cache/nginx
COPY --from=angular app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# docker build -t apphospital .
# docker run -p 8081:80 apphospital