const Subscription ={
    count:{
        subscribe(parent ,args,{pubsub},info){

            let count =0

            setInterval(()=>{
                count ++
                pubsub.publish('count',{
                   count })
            },1000)
            return pubsub.asyncIterator('count')

        }
    },
    persona:{
        subscribe(parent ,args,{db,pubsub},info){
           
           
           // pubsub.publish(`persona ${args.data.username}`,{persona})
            //console.log(pubsub.asyncIterator(`persona ${username}`,{persona}))
            
            return pubsub.asyncIterator('persona')

        }

    }

}
export {Subscription as default}