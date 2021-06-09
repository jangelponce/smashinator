FROM node:14

WORKDIR /server

# COPY server/package*.json ./

# RUN npm install

COPY ./docker/server/docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]