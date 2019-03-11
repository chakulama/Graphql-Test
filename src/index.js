import { GraphQLServer } from 'graphql-yoga'
import db  from './db'

import Query from './resolvers/Query.js'
import Mutation from './resolvers/Mutation.js'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers :{
        Query,
        Mutation
    },
    context:{
        db

    }
})

server.start(()=>{
    console.log('The serve is up!')
})
