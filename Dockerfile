FROM node:lts-alpine3.12

WORKDIR /src/app

COPY package.json .
RUN yarn install
COPY . .

EXPOSE 4000

CMD [ "yarn", "start" ]