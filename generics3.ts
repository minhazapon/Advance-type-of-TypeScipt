{



    type genericsType<T> = Array<T> 



    const num: genericsType<number> = [ 122, 34, 4556, 566, 345, 565  ] 

    console.log(num) 

    const name: genericsType<string> = [ 'js', 'ts', 'react' ] 

    console.log(name)

    const isRight: genericsType<boolean> = [ true, false ]

    console.log(isRight)
    


    const allUse: genericsType<{ name: string, age: number, profession: string }> = [ {

        
          name: 'apon',
          age: 23,
          profession: 'programmer'
 
    } ]
    
    console.log(allUse)
    

    type geneRics<x, y> = [ x, y ]
    
    
    const value : geneRics< string, number > = [ 'bangladesh', 1971  ] 

    console.log(value)


}