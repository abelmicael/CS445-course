window.onload=function(){
    document.getElementById('btn').addEventListener('click', function(){
        document.getElementById('wrapper').innerHTML=null
        fetcher()
    });

}


async function fetcher(){
     let result = await fetch('https://randomuser.me/api/?results=5' )
     let temp = await result.json()
     console.log(temp.results)
     renderEmp(temp.results)
}

function renderEmp(temp){
    const TempDiv = document.getElementById('wrapper');
   
    for(let i=0; i<temp.length; i++){
        let temps = temp[i];
        let x = `
  
            <div class="col-4">
                <img src= ${temps.picture.large}>
            </div>
            <div class="col-8">
                <p>${temps.name.first +" "+temps.name.last}</p>
                <p >Gender : ${ temps.gender}</p>
                <p> ${temps.email}</p>
            </div>
            
     `

        let newDiv = document.createElement('div');
        newDiv.innerHTML =x;
        newDiv.classList ='row';
        TempDiv.appendChild(newDiv)
    
    }

  
    
}