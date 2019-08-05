const request = require('request-promise');

export function getTodo(): Promise<any> {
    return request({
        uri: 'https://jsonplaceholder.typicode.com/todos/',
        json: true
      })
        .then((data:any) => {
          return JSON.stringify(data);
        })
        .catch((err:Error) => {
          console.log(err)
          return "error";
        })
}

