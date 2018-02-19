FROM node:9.5-alpine as builder
WORKDIR /etherwallet
ADD . /etherwallet
RUN apk add --update git python make g++ libnotify
RUN npm install -g gulp-cli
RUN npm install
RUN npm run dist


FROM nginx
COPY --from=builder  /etherwallet/dist /usr/share/nginx/html
