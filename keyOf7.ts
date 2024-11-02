{

     
       type keydataZ = {

          name: string, 
          country: string  , 
          FavFood: string  ,
          skill: string

       }


       const allKey: keydataZ ={

          
            name: 'minhazul abedin apon',
            country: 'bangladesh',
            FavFood: 'beef',
            skill: 'software developer'
            
       }


       type allInfo = keyof keydataZ 
       
       console.log(allKey)


 



}