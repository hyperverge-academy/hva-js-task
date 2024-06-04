const url = 'https://jsonplaceholder.typicode.com/posts'

async function fetchData(){
    try{
        const response = await fetch(
            url,
            {
                method:'GET'
            }
        )
       
        const data = await response.json()
        console.log(data)
        
    }
    catch(error){
        console.error('There is a problem with the fetch operation:', error);
    }
}

fetchData()