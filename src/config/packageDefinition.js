const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./news.proto";

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  };
  
const gRPCPackegeDefinition = protoLoader.loadSync(PROTO_PATH, options);

module.exports = gRPCPackegeDefinition