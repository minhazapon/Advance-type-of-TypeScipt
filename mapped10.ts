{

   
    type skillInformation = {

         
         skill1: 'javaScript',
         skill2: 'react',
         skill3: 'next.js',
         skill4: 'redux',
         skill5: 'typeScript',
         skill6: 'express.js'
 
    }


    type allInOne = {

     [ key in keyof skillInformation ] : string

    }


    const all: allInOne = {

       skill1: 'javaScript',
       skill3: 'react',
       skill2: 'next.js',
       skill4: 'redux',
       skill5: 'typeScript',
       skill6: 'express.js'

    }

    console.log(all.skill1, all.skill2, all.skill3, all.skill4, all.skill5, all.skill6)











}