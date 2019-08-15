FROM oracle/graalvm-ce:latest

RUN mkdir -p /nodeApp

COPY app.js /nodeApp/app.js
COPY lib /nodeApp/lib
COPY package*.json /nodeApp/

WORKDIR /nodeApp

RUN npm install

EXPOSE 8999

CMD ["npm", "start"]

