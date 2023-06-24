# STAGE 1
FROM node:12.13-alpine As development

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --development

COPY . .
RUN npm run build

# STAGE 2
FROM node:12.13-alpine as production
ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production

COPY . .
COPY --from=development /usr/src/app/dist ./dist

EXPOSE 8000
CMD ["npm", "start"]