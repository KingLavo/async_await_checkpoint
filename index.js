// Task 02:
// Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
const awaitCall = async()=>{
    const data = await fetch(url)
    const result = await data.json()
    console.log(result)
 }

//  Task 03:
// Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message
async function  awaitCall() {
    try {
        const data = await fetch(url)
        const result = await data.json()
        console.log(result)        
    } catch (error) {
        console.log(error)
    }
    
}

//  Task 05:
// Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete.
const todoFetch = fetch(" https://jsonplaceholder.typicode.com/todos/1")
const storiesUrl = fetch("https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt")
 
const parallelCalls = ()=>{
        Promise.all([todoFetch, storiesUrl])
            .then( values =>{
                return Promise.all( values.map( val => val.json()))
            }).then(([todo, stories])=>{
                console.log(" Todo :",todo)
                console.log(" stories:", stories)
            })
            .catch( err => console.log( err))
}

parallelCalls()
