const grpc = require("@grpc/grpc-js")
const newsList = require('../../../db/news')
const gRPCPackegeDefinition = require('../config/packageDefinition')

const newsProto = grpc.loadPackageDefinition(gRPCPackegeDefinition);

const server = new grpc.Server();

server.addService(newsProto.NewsService.service, {
  getAllNews: (_, callback) => {
    callback(null, newsList)
  },

  getNewsById: ({ request: { id } }, callback) => {
    const news = newsList.news.find((e) => e.id === id)

    if (!news) return callback(new Error('Not found'), null)

    callback(null, news)
  },

  createNews: ({ request: {title, body, postImage } }, callback) => {

    const news = newsList.news.find((e) => e.title === title)
    
    if (news) return callback(new Error('Not found'), null)

    const newNews = {
      id: (newsList.news.length + 1).toString(),
      title: title,
      body,
      postImage
    }

    newsList.news.push(newNews)

    callback(null, newNews)
  },
  
  deleteNewsById: ({ request: { id } }, callback) => {

    const newsIndex = newsList.news.findIndex((e) => e.id === id)

    if (newsIndex > -1) {
      newsList.news.splice(newsIndex, 1);
    }

    callback(null, newsList)
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