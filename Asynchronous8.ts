{


      const promiseMethod = () : Promise<string> =>{

           return new Promise<string> ((resolve, reject) =>{

              const data: string = 'lets do it' 

              if(data){
                 resolve(data)
              } else{
                 reject('func is fail')
              }

           })
      }

      const showData = async () =>{         
        const data : string = await promiseMethod();
        console.log(data)

      }

      showData()

    
}