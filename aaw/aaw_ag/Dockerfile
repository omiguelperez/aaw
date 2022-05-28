FROM node:carbon-slim

# Create app directory
WORKDIR /aaw_ag

# Install app dependencies
COPY package.json /aaw_ag/
RUN npm install

# Bundle app source
COPY . /aaw_ag/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
