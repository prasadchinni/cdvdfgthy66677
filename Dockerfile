FROM node:8-alpine
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN yarn
CMD yarn deploy
