{

 ///////generics in interface 


 interface Developer<T> {

    name: string,
    age: number,
    address: {
     district: string,
     country: string,
    },
    education: string,
    profession: string, 
    skills:{
       s1: T,
       s2: T,
       s3: T,
       s4: T,
       s5: T
    }
 }


 const aponTheDev: Developer<string> = {


    name: 'minhazul abedin',
    age: 1950374409,
    address: {
     district: 'jhenaidah',
     country: 'bangladesh',
    },
    education: 'life school',
    profession: 'software developer', 
    skills:{
       s1: 'js' ,
       s2: 'ts' ,
       s3: 'react' ,
       s4: 'next',
       s5: 'redux'
    }
 }
 console.log(aponTheDev.name)
 console.log(aponTheDev.address.country)
 console.log(aponTheDev.education)
 console.log(aponTheDev.profession)
 console.log(aponTheDev.skills.s2, aponTheDev.skills.s1, aponTheDev.skills.s3, aponTheDev.skills.s4, aponTheDev.skills.s5)




}