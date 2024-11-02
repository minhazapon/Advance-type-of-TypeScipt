{



    interface ObjType {

        name: string,
        number:number,
        address: string,
        country: string
    }
    
    const info: ObjType = {

        name: 'minhazul abedin apon',
        number: 1950374409,
        address: 'jheniadah',
        country: 'bangladesh'
    }


    console.log(info.name)
    console.log(info.number)
    console.log(info.address)
    console.log(info.country)



    ///////array in interface///////


    interface ArrayNumber {

       [ index: number ] : number

    }
    const classRoll: ArrayNumber = [ 1, 2, 345, 45,356, 245, 456, 564 ] 

    console.log(classRoll[3])


    //////function in interface////////



    interface allNumber {

       (numberS1: number, numberS2: number): number

    }
    const all: allNumber = ( numberS1, numberS2 ) => numberS1 + numberS2
    
    const a = all(12, 23)
    console.log(a)







}