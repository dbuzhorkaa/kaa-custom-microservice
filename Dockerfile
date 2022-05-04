FROM node:16.15.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build
RUN npm ci --only=production

CMD ["node", "dist/index.js"]