# Getting started
Clone the repo and start hacking.

```sh
yarn
yarn prisma migrate save --experimental
yarn prisma migrate up --experimental
yarn prisma generate
```

# Benchmark
The benchmark is done using [hyperfine](https://github.com/sharkdp/hyperfine).

# Issues

## Zombie process
```
node scripts/zombie.js
```

## Other issues
- Restart engine on panic: https://github.com/prisma/prisma/issues/2100
- Fails inside node cluster: https://github.com/prisma/prisma-client-js/issues/632

# Versions

```
➜  node -v
v11.15.0

➜  npm -v
6.7.0

➜  prisma --version
@prisma/cli          : 2.0.0-beta.1
Current platform     : debian-openssl-1.1.x
```