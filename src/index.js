import { GraphQLServer } from 'graphql-yoga'

//Type definitions(schema -data structures)
const typeDefs= `
     type Query {
                id: ID!,
                username:String!,
                password:String!,
                rol:String!,
                puntos:Int!
                }
`

//resolvers(setr of functions)
const resolvers={
    Query:{
        
       
        username(){
            return 'Binod'
        },
        password(){
            return 'aaa'
        },
        rol(){
            return 'Student'
        },
        puntos(){
            return 21
        }

    }
}




const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log('The serve is up!')
})