const consultUsers = quantity => {
    return new Promise ((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open('GET',`https://randomuser.me/api/?results=${quantity}`,true)
        xhr.onload = () => {
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText).results)
            }else{
                reject(xhr.responseText)
            }
        }
        xhr.onerror = error => console.error(error)
        xhr.send()
    })
}
consultUsers(10)
    .then(
        response => printResponse(response),
    )
    .catch(error => {
        console.error(new Error(error))
    })
const printResponse = elements =>{
    console.log(elements)
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        let html = `<ul class='user'>
                        <li> <b>Name:</b> ${element['name']['last']}, ${element['name']['first']}</li>  
                        <li><img src="${element['picture']['large']}"></li>  
                        <li> <b>Country:</b> ${element['location']['country']}</li>                           
                        <li> <b>Email:</b> ${element['email']}</li>
                    </ul>`            
        document.querySelector('div.data').innerHTML += html
    }
}