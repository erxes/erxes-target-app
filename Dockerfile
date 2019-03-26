FROM node:8-slim as build-deps
WORKDIR /erxes-target-app/
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN cp .env.sample .env
RUN yarn build

FROM nginx:stable-alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /erxes-target-app/build /usr/share/nginx/html
COPY start-nginx.sh /start-nginx.sh
ENTRYPOINT [ "sh", "/start-nginx.sh" ]
