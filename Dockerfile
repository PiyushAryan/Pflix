FROM node:20-alpine

WORKDIR /Mind

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm" , "run" , "dev" ]