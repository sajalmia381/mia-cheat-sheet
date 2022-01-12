FROM node:16.13.1-alpine
WORKDIR /app
ADD package*.json ./
# RUN npm install
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
  then npm install; \
  else npm install --only=production; \
  fi
ADD . .
EXPOSE 8000
CMD ["node" "index.js"]