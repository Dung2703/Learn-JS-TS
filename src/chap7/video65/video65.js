console.log("video65")

const greeting = (name, callback) => {
    console.log(`Hello, ${name}!`)
    callback()
}

const hello = () => {
    console.log("learn callback...!")
}

const hi = () => {
    console.log("hi callback...!")
}

greeting("Dung", hello)
greeting("John", hi)    