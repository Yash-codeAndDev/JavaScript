const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (val) => console.log(val))

/*
function printItem(item){
    console.log(item)
}
coding.forEach(printItem)
*/

coding.forEach((val , index , arr) => {
    console.log(val,index,arr)
})

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js",
    },
    {
        languageName : "Python",
        languageFileName : "py",
    },
    {
        languageName : "Java",
        languageFileName : "java",
    },
    {
        languageName : "C++",
        languageFileName : "cpp",
    },
]

myCoding.forEach( (obj) => {
    console.log(obj.languageName,"-",obj.languageFileName)
})

