FROM node:7.7-alpine

# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps
RUN mkdir -p /opt/crud_lab-app && cp -a /tmp/node_modules /opt/crud_lab

# Setup workdir
WORKDIR /opt/crud_lab-app
COPY . /opt/crud_lab-app

# run
EXPOSE 3000
CMD ["npm", "start"]