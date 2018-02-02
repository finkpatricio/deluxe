FROM node:8.9.4
EXPOSE 9091
WORKDIR /index
COPY package.json /index
RUN npm install
COPY . /index
COPY build/ /app/build/
COPY build/static/ /app/build/static/
COPY build/static/css/ /app/build/static/css/
COPY build/static/js/ /app/build/static/js/
RUN npm run build prod
RUN ls -l
RUN ls -l build
RUN ls -l build/static
RUN ls -l build/static/css
RUN ls -l build/static/js
CMD ["npm", "start"]
