FROM mhart/alpine-node:8.11.4
WORKDIR /front-end-app
COPY package*.json /front-end-app/
RUN npm install
COPY . /front-end-app/
EXPOSE 3000
CMD ["npm", "start"]
