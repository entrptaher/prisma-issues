## Getting started
Clone the repo and start hacking.

```sh
yarn
yarn prisma migrate save --experimental
yarn prisma migrate up --experimental
yarn prisma generate
```

## Benchmark
All of the the benchmark on this repo is done using [hyperfine](https://github.com/sharkdp/hyperfine).

## Versions

```
Database: sqlite
Node Version: v11.15.0
Npm Version: 6.7.0
Prisma: 2.0.0-beta.1
Platform : debian-openssl-1.1.x
Hyperfine: hyperfine 1.9.0
```

# Issues

## Zombie process: 
- Issue link: https://github.com/prisma/prisma-client-js/issues/635
- Script Path: [scripts/zombie.js](/scripts/zombie.js#L17)

## Fails inside node cluster
- Issue link: https://github.com/prisma/prisma-client-js/issues/632
- Script Path: [scripts/cluster.js](/scripts/cluster.js)