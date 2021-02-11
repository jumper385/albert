FROM node:14
WORKDIR /api
COPY package*.json .
RUN yarn install
RUN yarn add nodemon
COPY . . 
EXPOSE 3000
CMD ["yarn","nodemon"]