const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "./news.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const NewsService = grpc.loadPackageDefinition(packageDefinition).NewsService;

const client = new NewsService(
  "127.0.0.1:50051",
  grpc.credentials.createInsecure()
);

client.getAllNews({}, (error, news) => {
    if (!error) console.log(error); 
      console.log(news);
  });