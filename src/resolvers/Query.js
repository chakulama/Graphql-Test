import db  from '../db'
const Query= {
    
    personas(parent,args,{db},info)
    {
        if (!args.query)
        {
            return  db.personas
        }
        return db.personas.filter(personas =>{
            return db.personas.rol.toLowerCase().includes(args.query.toLowerCase())
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
  
}

export {Query as default}