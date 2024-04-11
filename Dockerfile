FROM node:19.7-slim
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3007
CMD ["npm", "run", "start"]