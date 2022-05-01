# Build image
FROM node:14-alpine AS build

ARG CLIENT_ID
ARG API_URL

ENV CLIENT_ID=$CLIENT_ID
ENV API_URL=$API_URL

WORKDIR /build

RUN apk add curl bash

RUN yarn config set --home enableTelemetry 0
COPY package.json yarn.lock /build/
COPY ./.env.sample /build/.env
# Install only the production dependencies
RUN yarn install --production --frozen-lockfile

# Cache these modules for production
RUN cp -R node_modules/ prod_node_modules/

# Install development dependencies
RUN yarn install --frozen-lockfile

COPY . /build
RUN yarn next telemetry disable
RUN yarn build

############## Production image ###################

FROM node:14-alpine AS production
WORKDIR /app

# Copy cached dependencies
COPY --from=build /build/prod_node_modules ./node_modules

COPY --from=build /build/.env ./.env

COPY --from=build /build/yarn.lock /build/package.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
COPY --from=build /build/next.config.js ./next.config.js

# USER node

EXPOSE 3001
CMD ["yarn", "start"]