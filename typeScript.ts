{
   
     
      ///assertion

      let riverName = 'podda';
      (riverName as string)
      console.log(riverName)


      ///////interface 

      interface foodZ {

         food1: string,
         food2: string,
         food3: string,
         food4: string,

      }

      const allFood: foodZ = {
          
           food1: 'biriyani',
           food2: 'beef kabab',
           food3: 'beef and khecuri',
           food4: 'beef haleem'

      }

      console.log(allFood.food1, allFood.food2, allFood.food3, allFood.food4)


      //////generics



      type generics<T> = Array<T> 

      const num1: generics<number> = [ 111, 22, 333, 44, 55, 66 ] 

      console.log(num1)

      const name: generics<string> = [ 'bangladesh', 'india', 'pakistan', 'afganistan' ] 

      console.log(name) 

      const jsIsNotLanguage: generics< boolean > = [ false ] 

      console.log(jsIsNotLanguage)


      type GRics<x, y> = [x , y]

      const company: GRics<string, number> = [ 'toptal', 11] 

      console.log(company)


      ///////interfcaeWithGenerics/////// 


      interface AllSkill<T> {

          s1: T,
          s2: T,
          s3: T,
          s4: T,
          s5: T,
          s6: T
   
      }
      const skill: AllSkill<string> = {

         s1: 'js',
         s2: 'ts',
         s3: 'react',
         s4: 'next',
         s5: 'redux',
         s6: 'DSA'
            
      }
      console.log(skill.s1, skill.s2, skill.s3, skill.s4, skill.s5, skill.s6)


      //////function typeScript


      const allMath = <T> ( mathZ:T, mathZ2: T, mathZ3: T ) =>{

           const all = { mathZ, mathZ2, mathZ3 }

           return all

      }

      const MZ = allMath<number>(12, 2, 45) 

      console.log(MZ)


      //////keyOf/////// 


      type value = {

          name: string,
          address: string,
          profession: string

      }

      const valZ: value = {

          name: 'minhazul abedin apon',
          address: 'bangladesh',
          profession: 'software developer'

      }


      type all = keyof value 

      
      //conditionalTypes

      type B1 = number 

      type C1 = B1 extends number ? true : false


      /////mapped in typeScript////


      type CompanyName = {

          t1: 'toptal',
          t2: 'facebook',
          t3: 'amazon',
          t4: 'microsoft',

      }


      type allIn = {

         [ key in keyof CompanyName ] : string

      }

      const com: allIn = {

        t1: 'toptal',
        t2: 'facebook',
        t3: 'amazon',
        t4: 'microsoft',
      }


      console.log(com.t1, com.t2, com.t3, com.t4)


      /////utility/////
 
      //////pick
      type food = {
         

         food1: 'burger',
         food2: 'pizza',
         food3: 'haleem',
         food4: 'beef kabab'


      } 

      type f1 = Pick< food, "food1" >

      ////omit types////


      type o1 = Omit<food, "food2">


      //////required/// 

      type reType = Required<food>


      ///////partial/////


      type par = Partial<food>


      /////readonly types////// 


      type read = Readonly<food>

      const r1: read = {

        food1: 'burger',
        food2: 'pizza',
        food3: 'haleem',
        food4: 'beef kabab'

      }


      console.log(r1.food1, r1.food2, r1.food3, r1.food4)


    /////utility/////







    



}