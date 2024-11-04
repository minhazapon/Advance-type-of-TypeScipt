
{

     ////assertion/////
     

     let tech = 'javaScript';
     (tech as string) 
     console.log(tech)


     //////interface


     interface river {

       r1: string,
       r2: string,
       r3: string,
       r4: string,

     }


     const allR: river = {

        r1: 'podda',
        r2: 'meghna',
        r3: 'jamuna', 
        r4: 'rupsha'

     }

     console.log(allR.r1, allR.r2, allR.r3, allR.r4)


     //////generics////// 


     type geneRics<T> = Array<T> 


     const GT: geneRics<string> = [ 'minhaz', 'abedin', 'apon' ] 

     console.log(GT)

     const AT: geneRics<number> = [12, 23, 35, 355] 
     
     console.log(AT)

     const ZZ: geneRics<boolean> = [ true ]

     console.log(ZZ)


     type gens<x, y> = [x, y] 

     const XYZ: gens<string, number> = [ 'apon', 2001 ] 

     console.log(XYZ)


     /////function in generic/////// 


     const fun = <T> ( f1: T, f2: T ) =>{

          const AF = { f1, f2 } 

          return AF

     }
     
     const FN = fun<string>('apon', 'react.js') 

     console.log(FN)



     /////mapped////// 

     type KhulnaDev = {

        jhe: string,
        jashore: string,
        kushitia: string

     }

     type allDis = {

       [ key in keyof KhulnaDev  ] : string
 

     }

     ////////////////condition///// 


     type con = number

     type Q1 = con extends number ? 'true' : 'false'


     ///////keyOf

     type S = {

        name: string, 
        address: string,
        location: string

     }

     const SSS: S = {

        name: 'minhazul abedin apon',
        address: 'bangladesh', 
        location: 'jheniadah'

     }

     type all = keyof S


     ////utility/////////  


     type FrontEndTech = {

           f1: 'js',
           f2: 'ts',
           f3: 'next.js',
           f4: 'redux',
           f5: 'react.js'

     }


     ///pick type//// 
     type p = Pick<FrontEndTech, 'f3'> 

     /////omit type//// 

     type O = Omit<FrontEndTech, 'f5'> 

     /////required types 

     type R = Required<FrontEndTech>

     //////partial types 

     type P = Partial<FrontEndTech>

     //////readOnly////// 

     type read = Readonly<FrontEndTech>





}