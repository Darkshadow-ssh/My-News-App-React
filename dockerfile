FROM node:14

WORKDIR /newsapp

COPY . .

RUN npm install -g npm@6.14.14 --force

CMD ["npm","start"]