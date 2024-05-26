# Arrays

* JavaScript Array Properties :
    - JavaScript arrays are resizable and can contain a mix of different data types.
    - JavaScript arrays are zero-indexed
```javascript

    const arr = ["Yash","Ayush",23,21,true]
    const dummy_arr = arr

    dummy_arr.push("Rohit")

    console.log(arr) //[ 'Yash', 'Ayush', 23, 21, true, 'Rohit' ]
    console.log(dummy_arr) //[ 'Yash', 'Ayush', 23, 21, true, 'Rohit' ]
    /*
        both arr and dummy_arr points to same array
    */
```

* Empty values in Arrays:
```javascript        
    let arr = [1,'A', 'B']
    arr[6] = "Yash"
    arr.forEach((item,index) => {
        console.log(`item : ${item} ,  index : ${index}`)
    })
    /*
        item : 1 ,  index : 0
        item : A ,  index : 1
        item : B ,  index : 2
        item : Yash ,  index : 6
    */
    
    console.log(arr)// [ 1, 'A', 'B', <3 empty items>, 'Yash' ]
```
* Splice() VS Slice()
    -   splice() modifies the original array by removing elements and returns an array containing the removed elements.
    ```javascript
        
        /*
            splice(startIndx, numberOfElements)
        */
        let arr = [3 ,4,'A',['p','q',12],'C',10]
        let spliced_arr = arr.splice(2,4) 
        console.log("Spliced Array : ",spliced_arr) //[ 'A', [ 'p', 'q', 12 ], 'C', 10 ]
        console.log("Original Array : ",arr) // [ 3, 4 ]

    ```


    - slice() returns a shallow copy of a portion of the array into a new array without modifying the original array.
    ```javascript

        /*
            slice(startIndx, endIndx)
        */
        let arr = [3 ,4,'A',['p','q',12],'C',10]
        let sliced_arr = arr.slice(1,4)
        console.log("Sliced Array : ",sliced_arr) // [ 4, 'A', [ 'p', 'q', 12 ] ]
        console.log("Original Array : ",arr) // [ 3, 4, 'A', [ 'p', 'q', 12 ], 'C', 10 ]
    ```

* Concat() VS push()
```javascript

    let arr = ["Yash",23,true]
    let dummy_arr = ["Iron Man","Hulk"]
    arr.push(dummy_arr)
    console.log(arr) //[ 'Yash', true, 'Rohit', [ 'Iron Man','Hulk' ]]


    arr = ['Yash', 23, true, 'Rohit' ]
    dummy_arr = ["Iron Man","Hulk"]
    final_array = arr.concat(dummy_arr) // concat() return new array
    console.log(final_array) // [ 'Yash', 23, true, 'Rohit', 'Iron Man', 'Hulk' ]

```
* Concat() and Spread Operator creates shallow copy
    
    ```javascript
    let arr = [1,2]
    let dummy_arr = [4,5, [8,9]]
    final_arr = arr.concat(dummy_arr) 
    console.log(final_arr) //[ 1, 2, 4, 5, [ 8, 9 ] ]
    dummy_arr[2][1] = 10
    console.log(dummy_arr) // [ 4, 5, [ 8, 10 ] ]
    console.log(final_arr) // [ 1, 2, 4, 5, [ 8, 10 ] ]
    ```
    ```javascript
    let arr = [1,2]
    let dummy_arr = [4,5, [8,9]]
    final_arr = arr.push(...dummy_arr) 
    console.log(final_arr) //[ 1, 2, 4, 5, [ 8, 9 ] ]
    dummy_arr[2][1] = 10
    console.log(dummy_arr) // [ 4, 5, [ 8, 10 ] ]
    console.log(final_arr) // [ 1, 2, 4, 5, [ 8, 10 ] ]
    ```

* flat() 
    - flat() creates a new flattened array from the original array.
    - You can specify the depth to control how deep the flattening goes.
    - It removes empty slots (undefined) from the array.
    ```javascript    
        let arr = [1, 2, [ 3, 4], 5, [6, , [ 7, 8], 9]]
        console.log("Original Arr : ",arr)

        let newArr = arr.flat()
        console.log("Flattened Arr (default depth 1) : ",newArr) // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9 ]

        newArr = arr.flat(Infinity)
        console.log("Flattened Arr depth infinity : ",newArr) //  [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ```