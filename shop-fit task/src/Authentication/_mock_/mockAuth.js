import {
    LOGIN_URL,
    ME_URL
  } from "../_redux_/authCrud";
  import userTableMock from "./usertableMock";
  
  export default function mockAuth(mock) {
    mock.onPost(LOGIN_URL).reply(({ data }) => {
      const { username, password } = JSON.parse(data);
  
      if (username && password) {
        const user = userTableMock.find(
          x =>
            x.username.toLowerCase() === username.toLowerCase() &&
            x.password === password
        );
  
        if (user) {
          return [200, { ...user, password: undefined }];
        }
      }
  
      return [400];
    });
  
    mock.onGet(ME_URL).reply(({ authToken }) => {
      // const { authToken } = JSON.parse(data);
      // const accessToken =
      // authToken &&
      // authToken.startsWith("Bearer ") &&
      // authToken.slice("Bearer ".length);
  
      if (authToken) {
        const user = userTableMock.find(x => x.accessToken === authToken);
  
        if (user) {
          return [200, { ...user, password: undefined }];
        }
      }
  
      return [401];
    });
    
  }
  