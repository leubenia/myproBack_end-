FROM node:latest
WORKDIR /app/src
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .
EXPOSE 4000

CMD [ "npm", "start" ]