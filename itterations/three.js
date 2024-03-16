const myObject= {
    js :'javascript',
    cpp :'C++',
    rb : 'ruby',
    swift : "swift apple",
}


for (const key in myObject) {
    console.log(key)
}
for (const key in myObject) {
    console.log(myObject[key])
}

const programming = ['js','rb', 'py','java', 'cpp']
// print index of array
for (const key in programming) {
    console.log(key, '- ', programming[key])

}

/*

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('FR' , "France")

cannot itterate map using for in
for (const key in map) {
    console.log(key)
}
*/