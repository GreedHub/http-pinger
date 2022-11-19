FROM node:alpine

ENV PORT="3000" \
    SERVERS=""

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]
