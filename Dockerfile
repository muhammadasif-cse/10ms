FROM node:20-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=deps /app/public ./public
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/next.config.js ./next.config.js
COPY --from=deps /app/tsconfig.json ./tsconfig.json

EXPOSE 3000

CMD ["npm", "start"]