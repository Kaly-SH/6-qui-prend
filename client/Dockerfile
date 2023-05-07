FROM node:18.14.0

WORKDIR /app 

COPY package.json .
COPY package-lock.json .

RUN npm ci

EXPOSE 80

ENTRYPOINT [ "bash" ]