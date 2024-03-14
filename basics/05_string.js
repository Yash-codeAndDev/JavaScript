const s1 = "Yash"
console.log(s1)

const s2 = new String("Yash Khati")
console.log(s2[0])
console.log(s2.__proto__) // use in browser console for more clear understanding


console.log(s2.length)
console.log(s2.toUpperCase())
console.log(s2.charAt(3));
console.log(s2.indexOf("h"))

const newString = s2.substring(0,7)
console.log(newString)

const trimString = "  Hello   "
console.log(trimString)
console.log(trimString.trim())


const url = "Https://yash.com/yash%20khati"
console.log(url.replace("%20","-"))
console.log(url.includes("yash"))

const strToArray = new String("yash-kk-khati")
console.log(strToArray.split('-'))

const strToArray2 = new String("yash-kk-khati-Graphic-Era")
console.log(strToArray2.split('-',2))





