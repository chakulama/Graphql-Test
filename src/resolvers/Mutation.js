const Mutation ={
    createPersona(parent,args,{db},info){
    
        const usernameTaken=db.personas.some(personas=>
            personas.username===args.data.username)
           
       if (usernameTaken)
       {
           throw new Error('Username is taken.')
       }

       const persona={
          ...args.data
       }
       console.log(usernameTaken)
       console.log(persona)
       db.personas.push(persona)
       
       return db.personas
      
    },

    deletePersona(parent,args,{db},info){

        const userIndex= db.personas.findIndex((persona)=>persona.username=== args.username)
        if (userIndex ===-1)
        {
            throw new Error('Persona not found')
        }
        const deletePersona=db.personas.splice(userIndex,1)

        return deletePersona[0]
    },

    updatePersona(parent,args,{db},info)
    {
        
    const persona= db.personas.find((persona)=>persona.username===args.username)
   
if (!persona){
    throw new Error("Persona not found")
}


if (typeof args.data.puntos==='number'){

    persona.puntos=args.data.puntos
    
}

return persona
    }
   
}

export {Mutation as default}