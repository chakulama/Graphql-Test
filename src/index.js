import { GraphQLServer } from 'graphql-yoga'

//Type definitions(schema -data structures)
const typeDefs= `
     type Query {
         greeting(name:String):String
         add(a:Float!,b:Float):Float!
               me:Persona!
               post:Post!
                }


     type Persona{
        username:String!,
        password:String!,
        rol:String!,
        puntos:Int!
     }  
     type Post{
        Id:ID!,
        title:String!,
        body:String!,
        published:Boolean!
     }            

`



//resolvers(setr of functions)
const resolvers={
    Query:{       
        me()
        {
            return {
                username:'Binod',
                password:'BBB',
                rol:'Student',
                puntos:10

            } 
        },
        post()
        {
            return {
                Id:'aaa',
        title:'Graphql',
        body:'Building first api',
        published:false
            } 

        },

      greeting(parent,args)
      {
        console.log(args)
        if (args.name)
        { return "HELLO: "+args.name}
        else
        {return "HELLO AAAAA !"} 
        
      },
      add(parent, args){
          return args.a + args.b
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