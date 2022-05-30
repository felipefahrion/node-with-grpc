import grpc from 'k6/net/grpc';
import { check, sleep } from 'k6';

const client = new grpc.Client();
client.load(['./'], 'news.proto');

export default () => {
    client.connect('localhost:50051');

    const response = client.invoke('NewsService/getBGetAllNewsyId', {});

    check(response, {
      'status is OK': (r) => r && r.status === grpc.StatusOK,
    });

    console.log(JSON.stringify(response.message));

    client.close();
    sleep(1);
  };