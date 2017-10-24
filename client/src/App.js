import React, { Component } from 'react';
import logo from './apollo-logo.svg';
import './App.css';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface // <-- this line is new!
} from 'react-apollo';

import { 
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
 import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
 import { typeDefs } from './schema';
 import AddChannel from './components/AddChannel';
 import ChannelsListWithData from './components/ChannelsListWithData';
 //////////////////////////
 // Mock added
 const schema = makeExecutableSchema({ typeDefs });
 //addMockFunctionsToSchema({ schema });
 //const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });
 /////////////////////////
 const networkInterface = createNetworkInterface({ 
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  //networkInterface: mockNetworkInterface
    networkInterface: networkInterface
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
         <div className="App">
           <div className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h2>Welcome to Apollo</h2>
           </div>
           <ChannelsListWithData />
         </div>
       </ApolloProvider>
    );
  }
}

export default App;
