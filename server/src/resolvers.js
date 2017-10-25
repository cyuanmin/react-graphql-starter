import { PubSub, withFilter } from 'graphql-subscriptions';

const channels = [{
    id: 1,
    name: 'soccer',
  }, {
    id: 2,
    name: 'baseball',
  }];
  
  let nextId = 3;
  const pubsub = new PubSub();

  export const resolvers = {
    Query: {
      channels: () => {
        return channels;
      },
    },
    Mutation: {
      addChannel: (root, args) => {
        const newChannel = { id: nextId++, name: args.name };
        channels.push(newChannel);
        return newChannel;
      },
      addMessage: (root, { message }) => {
        const channel = channels.find(channel => channel.id === message.channelId);
        if(!channel)
          throw new Error("Channel does not exist");
  
        const newMessage = { id: String(nextMessageId++), text: message.text };
        channel.messages.push(newMessage);
        pubsub.publish('messageAdded', { messageAdded: newMessage, channelId: message.channelId });
        return newMessage;
      }
    }
  };