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

        display(data)
        
    }
    catch(error){
        console.error('There is a problem with the fetch operation:', error);
    }
}

function display(posts){
    const postsList = document.getElementById('postList')
    posts.forEach((post) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>Title: ${post.title}</strong> <p>Body: ${post.body}</p>`;
        postsList.appendChild(li)
    })

}

fetchData()