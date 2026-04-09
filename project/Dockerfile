FROM node:18

WORKDIR /app

COPY yogiapp/package*.json ./
RUN npm install

COPY yogiapp .

EXPOSE 3000

CMD ["npm", "start"]