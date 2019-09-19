FROM node:10

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.0.1 -g --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]