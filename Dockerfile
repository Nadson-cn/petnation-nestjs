FROM node:14 as builder 

WORKDIR /

COPY . /

RUN npm install \
    && npm run build \
    && npm prune --production

FROM node:14 

ENV NODE_ENV production

WORKDIR / 

COPY --from=builder /package.json /
COPY --from=builder /node_modules/ /node_modules/
COPY --from=builder /dist/ /dist
COPY --from=builder /tsconfig.build.json /
COPY --from=builder /ormconfig.json /
COPY --from=builder /tsconfig.json / 
COPY --from=builder /src/ /src
