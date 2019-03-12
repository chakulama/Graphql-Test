import { GraphQLServer } from 'graphql-yoga'
import { PubSub, withFilter } from 'graphql-subscriptions';
import db from './db'

import Query from './resolvers/Query.js'
import Mutation from './resolvers/Mutation.js'
import Subscription from './resolvers/Subscription.js'

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers :{
        Query,
        Mutation,
        Subscription
    },
    context://which helps to share across files
    {
        db,
        pubsub

    }
})

server.start(()=>{
    console.log('The serve is up!')
})
