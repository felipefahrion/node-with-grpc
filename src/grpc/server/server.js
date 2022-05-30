const grpc = require("@grpc/grpc-js")
const news = require('../../../db/news')
const gRPCPackegeDefinition = require('../config/packageDefinition')

const newsProto = grpc.loadPackageDefinition(gRPCPackegeDefinition);

const server = new grpc.Server();

server.addService(newsProto.NewsService.service, {
  getAllNews: (_, callback) => {
    callback(null, news)
  },
  getNewsById: (_, callback) => {
    callback(null, news)
  },
  createNews: (_, callback) => {
    callback(null, news)
  },
  deleteNewsById: (_, callback) => {
    callback(null, news)
  }
});

server.bindAsync(
  'localhost:50051',
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server running at localhost:50051");
    server.start();
  }
);