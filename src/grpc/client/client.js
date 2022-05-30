const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

const gRPCPackegeDefinition = require('../config/packageDefinition')

const NewsService = grpc.loadPackageDefinition(gRPCPackegeDefinition).NewsService;

const client = new NewsService(
  "127.0.0.1:50051",
  grpc.credentials.createInsecure()
);

client.getAllNews({}, (error, news) => {
    if (!error) console.log(error); 
      console.log(news);
  });