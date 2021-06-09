FROM node:14

WORKDIR /client

COPY client/package*.json ./

RUN npm install

COPY ./docker/client/docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]