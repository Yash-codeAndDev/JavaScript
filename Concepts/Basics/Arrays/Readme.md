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
* Concat and Spread Operator creates shallow copy
<div style="display: flex; gap: 10px;">
    <div style="flex: 1;">

```javascript
    let arr = [1,2]
    let dummy_arr = [4,5, [8,9]]
    final_arr = arr.concat(dummy_arr) 
    console.log(final_arr) //[ 1, 2, 4, 5, [ 8, 9 ] ]
    dummy_arr[2][1] = 10
    console.log(dummy_arr) // [ 4, 5, [ 8, 10 ] ]
    console.log(final_arr) // [ 1, 2, 4, 5, [ 8, 10 ] ]

</div>
<div style="flex: 1;">
        let arr = [1,2]
    let dummy_arr = [4,5, [8,9]]
    final_arr = arr.push(...dummy_arr) 
    console.log(final_arr) //[ 1, 2, 4, 5, [ 8, 9 ] ]
    dummy_arr[2][1] = 10
    console.log(dummy_arr) // [ 4, 5, [ 8, 10 ] ]
    console.log(final_arr) // [ 1, 2, 4, 5, [ 8, 10 ] ]

</div>
</div>
```
