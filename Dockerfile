FROM node:18-alpine

WORKDIR /frontend

COPY . .

RUN rm .env
RUN mv env.prod .env
RUN npm install

RUN npm run build

EXPOSE 3000

CMD npm run start