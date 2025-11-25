# Build Stage
# ---
FROM node:22-alpine AS builder
WORKDIR /opt/app

COPY package*.json ./
RUN npm ci --omit=optional
COPY . .
RUN npm run build
RUN rm -rf node_modules && npm ci --omit=dev --ignore-scripts

# Run Stage
# ---
FROM gcr.io/distroless/nodejs22-debian12

USER nonroot

COPY --chown=nonroot:nonroot --from=builder /opt/app /opt/app
WORKDIR /opt/app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
ENV PATH=/opt/node_app/node_modules/.bin:$PATH

CMD ["dist/main.js"]
