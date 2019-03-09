import { GraphQLServer } from 'graphql-yoga'

//Type definitions(schema -data structures)
const typeDefs= `
     type Query {
                 me:Persona!
               personas(query:String):[Persona!]!
               post:Post!
                }

        type Mutation{
            createPersona(username:String!,password:String!,rol:String!, puntos:Int):[Persona!]!
        }

     type Persona{
        username:String!,
        password:String!,
        rol:String!,
        puntos:Int
     }  
     type Post{
        Id:ID!,
        title:String!,
        body:String!,
        published:Boolean!
     }            

`

//demo userdata
const personas=[{
    username:'Binod',
    password:'BBB',
    rol:'Student',
    puntos:10
},
{
    username:'Yelan',
    password:'CCC',
    rol:'Student',
    puntos:10
}
]

//resolvers(setr of functions)
const resolvers={
    Query:{  
       
        personas(parent,args,ctx,info){
            if (!args.query)
            {
                return  personas
            }
            return personas.filter(personas =>{
                return personas.rol.toLowerCase().includes(args.query.toLowerCase())
            })
        },

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

        }
      
    

    },
    Mutation :{
        createPersona(parent,args,ctx,info){
        
            const usernameTaken=personas.some(personas=>
                personas.username===args.username)
           if (usernameTaken)
           {
               throw new Error('Username is taken.')
           }




           const persona={
              ...args
           }
           personas.push(persona)
           console.log(personas)

           return personas
          
                

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