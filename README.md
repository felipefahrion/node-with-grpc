# Nodejs with gRPC and REST

## About
This project is about an evaluation between REST and gRPC.

You can see in this project two big packages that provides the REST and gRPC implementation based on ```grpc-js ``` and ```Express```. 

## Execution
To execute this project: 

gRPC Server: 

```
npm run server
```

REST: 

```
npm run rest
```

## Manual Test
To test on Postman foloow this link: https://blog.postman.com/postman-now-supports-grpc/ 

## Performance Test

The main goal of this project is collect metrics from an evaluation between gRPC and REST. With that, to test it we used ```ghz``` to test RPC requests and ```autocannon``` to test REST calls. 

Sample of ghz commnand:
```
ghz -c 100 -n 100 --insecure \
  --proto ./src/grpc/config/news.proto \
  --call NewsService.GetAllNews \
  -d '{}' \
  localhost:50051

```

Sample of autocannon command: 
```
autocannon -a 10000 -c 5 -m POST -b "{"titie": "News y", "body": "Essa é uma noticia fake", "postImage":"teste.jpg"}"
localhost:3000/create
```