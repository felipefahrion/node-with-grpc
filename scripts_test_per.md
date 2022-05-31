## Script de teste grpc com ghz

## gRPC Create
### Script para 100
```
  ghz -c 1 -n 100 --insecure \
  --proto ./src/grpc/config/news.proto \
  --call NewsService.CreateNews \
  -d '{
        "title": "News X",
        "body": "Essa é uma noticia fake",
        "postImage": "teste.jpg"
    }' \
  -O html \
  localhost:50051 > out_html_grpc_create_100.html

```

### Script para 1000
```
  ghz -c 1 -n 100 --insecure \
  --proto ./src/grpc/config/news.proto \
  --call NewsService.CreateNews \
  -d '{
        "title": "News X",
        "body": "Essa é uma noticia fake",
        "postImage": "teste.jpg"
    }' \
  -O html \
  localhost:50051 > out_html_grpc_create_1000.html
```

### Script para 10000
```
  ghz -c 1 -n 1000 --insecure \
  --proto ./src/grpc/config/news.proto \
  --call NewsService.CreateNews \
  -d '{
        "title": "News X",
        "body": "Essa é uma noticia fake",
        "postImage": "teste.jpg"
    }' \
  -O html \
  localhost:50051 > out_html_grpc_create_10000.html
```

## gRPC GetAll
### Script para 100
```
  ghz -c 1 -n 100 --insecure \
  --proto ./src/grpc/config/news.proto \
  --call NewsService.GetAllNews \
  -d '{}' \
  -O html \
  localhost:50051 > out_html_grpc_100.html

```

### Script para 1000
```
  ghz -c 1 -n 100 --insecure \
  --proto ./src/grpc/config/news.proto \
  --call NewsService.GetAllNews \
  -d '{}' \
  -O html \
  localhost:50051 > out_html_grpc_1000.html
```

### Script para 10000
```
  ghz -c 1 -n 1000 --insecure \
  --proto ./src/grpc/config/news.proto \
  --call NewsService.GetAllNews \
  -d '{}' \
  -O html \
  localhost:50051 > out_html_grpc_10000.html
```











## gRPC GetNewsById
### Script para 100
```
  ghz -c 1 -n 100 --insecure \
  --proto ./src/grpc/config/news.proto \
  --call NewsService.GetNewsById \
  -d '{"id": "4"}' \
  -O html \
  localhost:50051 > out_html_grpc_100.html

```

### Script para 1000
```
  ghz -c 1 -n 100 --insecure \
  --proto ./src/grpc/config/news.proto \
  --call NewsService.GetNewsById \
  -d '{"id": "4"}' \
  -O html \
  localhost:50051 > out_html_grpc_1000.html
```

### Script para 10000
```
  ghz -c 1 -n 1000 --insecure \
  --proto ./src/grpc/config/news.proto \
  --call NewsService.GetNewsById \
  -d '{"id": "4"}' \
  -O html \
  localhost:50051 > out_html_grpc_10000.html
```





## Script de teste rest 

  artillery quick --count 20 --num 10 http://localhost:3000/getAll

  ou 

  rodar comando npm run per-rest