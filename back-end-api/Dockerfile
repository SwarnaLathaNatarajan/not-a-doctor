FROM mhart/1.15.2-alpine
WORKDIR /back-end-api
COPY package*.json /back-end-api/
RUN npm install
COPY . /back-end-api/
EXPOSE 9000
CMD ["npm", "start"]
