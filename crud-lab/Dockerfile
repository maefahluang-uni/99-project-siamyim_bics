FROM node:7.7-alpine

# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps
RUN mkdir -p /opt/bics_lab-app && cp -a /tmp/node_modules /opt/bics_lab

# Setup workdir
WORKDIR /opt/bics_lab-app
COPY . /opt/bics_lab-app

# run
EXPOSE 3000
CMD ["npm", "start"]
