# dockerize-webdriverio

## Run it

```
docker-compose build .
```

```
docker-compose up .
```

## Run locally

```
npm i (yarn -i)

docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome

npm test (yarn test)
```