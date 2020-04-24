FROM mhart/alpine-node:8.11.4
WORKDIR /back-end-api
COPY package*.json /back-end-api/
RUN npm install
COPY . /back-end-api/
EXPOSE 9000
CMD ["npm", "start"]