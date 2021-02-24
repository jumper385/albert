FROM node:14 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:14 as deps
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --production

FROM node:14
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/__sapper__ ./__sapper__
COPY --from=build /app/static ./static

EXPOSE 3000
CMD ["node", "__sapper__/build"]