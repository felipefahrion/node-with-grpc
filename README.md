# Nodejs with gRPC

This project contains a test for gRPC in Nodejs

To execute this project: 

Terminal 1: 

```
npm run server
```

Terminal 2: 

```
npm run client
```

To test on Postman foloow this link: https://blog.postman.com/postman-now-supports-grpc/ 

Test perfomance to this project and use this tool: https://dev.to/hiisi13/easy-ways-to-load-test-a-grpc-service-1dm3

```
ghz -c 100 -n 10000000 --insecure \
  --proto ./news.proto \
  --call NewsService.GetAllNews \
  -d '{}' \
  localhost:50051

```

Things to pay attention: 
 
- use npm, not yarn. 
- ```.proto``` project root 

