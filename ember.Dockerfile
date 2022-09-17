
FROM node:lts-alpine3.16

RUN npm install -g ember-cli 
WORKDIR /opt
RUN ember new ember-quickstart --lang en
RUN cd ember-quickstart &&\
    ember generate route scientists &&\
    ember generate component people-list

RUN cd /opt/ember-quickstart && npm install --save-dev blockly

# cd ember-quickstart && ember serve
EXPOSE 4200

