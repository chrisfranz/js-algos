const functions = [];

for (let i = 0; i < 5; i++) {
    const a = i * 2;
    functions.push(() => console.log(a))
}

functions.forEach(f => f())


// function MyObject(fn, ln) {
//     let fname = fn,
//         lname = ln
        
//     const getFullName = () => {
//         return [fname, lname].join(" ")
//     }

//     const setFirstName = first => {
//         fname = first
//     }
//     const setLastName = last => {
//         lname = last
//     }

//     return {
//         getFullName,
//         setFirstName,
//         setLastName
//     }
// }

// const thisFunc = new MyObject();

// console.log('THIS FUNC: ', thisFunc)

// thisFunc.setFirstName('Nick')
// thisFunc.setLastName('Jonas')
// const name = thisFunc.getFullName();
// console.log('NAME: ', name)
