export const typeDefs = `
type Channel {
  id: ID!
  name: String
}
type Query {
  channels: [Channel]
}

type Subscription {
    messageAdded(channelId: ID!): Message
}
`;