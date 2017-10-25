import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Channel {
  id: ID!                # "!" denotes a required field
  name: String
}

type Query {
  channels: [Channel]    # "[]" means this is a list of channels
}
# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new channel to the list of channels
  addChannel(name: String!): Channel
}
type Subscription {
  messageAdded(channelId: ID!): Message
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
//const schema = makeExecutableSchema({ typeDefs });

// addMockFunctionsToSchema({ schema });

export { schema };