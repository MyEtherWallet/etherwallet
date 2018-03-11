FROM node:9.5-alpine as builder
RUN apk add --update git python make g++ libnotify openssl
RUN npm install -g gulp-cli

# SSL self-signed certificate for localhost.
RUN openssl genrsa -des3 -passout pass:x -out server.pass.key 2048 && \
    openssl rsa -passin pass:x -in server.pass.key -out server.key && \
    openssl req -new -key server.key -out server.csr -subj "/C=US/ST=California/L=California/O=localhost/OU=localhost/CN=localhost" && \
    openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt

WORKDIR /etherwallet
ADD . /etherwallet
RUN npm install
RUN npm run dist


FROM nginx

RUN echo "server {\
  listen 443 ssl; \
  ssl on;\
  ssl_certificate     /opt/ssl/server.crt;\
  ssl_certificate_key /opt/ssl/server.key;\
  ssl_session_timeout 5m; \
  ssl_session_cache shared:SSL:10m; \
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2; \
  ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH'; \
  ssl_prefer_server_ciphers on; \
  server_name localhost; \
  location / { \
    root   /usr/share/nginx/html; \
    index  index.html index.htm; \
  }\
  error_page   500 502 503 504  /50x.html;\
  location = /50x.html {\
    root   /usr/share/nginx/html;\
  }\
}" > /etc/nginx/conf.d/ssl.conf

COPY --from=builder  /etherwallet/dist /usr/share/nginx/html
COPY --from=builder  /server.crt /opt/ssl/server.crt
COPY --from=builder  /server.key /opt/ssl/server.key

EXPOSE 80
EXPOSE 443
