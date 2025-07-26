# build the application
FROM node:18-alpine AS builder

# install dependencies
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

# copy package files
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# install dependencies based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# copy the rest of the files
COPY . .

# build the application
RUN npm run build

# production image
FROM node:18-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# copy built application from builder
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# environment variables (override these in docker-compose or runtime)
ENV NODE_ENV production
ENV PORT 3000
ENV HOSTNAME 0.0.0.0

EXPOSE 3000

CMD ["node", "server.js"]