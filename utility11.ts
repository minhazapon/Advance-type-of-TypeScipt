{


////pick types  


   type info = {
      
       name: string,
       number: number, 
       aponJavaScriptDeveloper: boolean

   }
   type allInfo = Pick< info, "name">


/////////omit types 

   type allTypes = Omit< info, "name" >


//////required types 

   type reTy  = Required<info> 


///////partial types 

    type part = Partial<info>

///////readOnly types 


    type PersonReadonly = Readonly<info> 


    const p1: PersonReadonly = {

       name: 'apon',
       number: 1950374409,
       aponJavaScriptDeveloper: true

    }

    console.log(p1.aponJavaScriptDeveloper, p1.name, p1.number)
























}