FROM node:22.18-alpine

WORKDIR /app

COPY package*.json ./

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3521

CMD ["npm", "start"]