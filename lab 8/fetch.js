
const { from } = rxjs; 
window.onload=function(){
  
        document.getElementById('btn').addEventListener('click', function(){
            document.getElementById('wrapper').innerHTML='';
            let x = document.getElementById('input').value;
            fetcher(x)
        })
}

async function fetcher(x){
     let result = await fetch('https://randomuser.me/api/?results='+x )
     let temp = await result.json()
     console.log(temp.results)
     renderEmp(temp.results)
}


  function renderEmp(temp){

    const TempDiv = document.getElementById('wrapper');
    from(temp)
    .subscribe(temps =>{

         let x = `
            <div class="col-4">
                <p >${temps.name.first +" "+temps.name.last}</p>
            </div>
            <div class="col-8">
                <b><p>Location</p></b>
                <p > ${ temps.location.street.number} ${temps.location.street.name}</p>
                <p> ${otemps.location.city} ${temps.location.state} ${temps.location.country} ${temps.location.postcode}</p>
            </div>
            
     `
     let newDiv = document.createElement('div');
     newDiv.innerHTML = x;
     newDiv.classList = 'row';
     TempDiv.appendChild(newDiv)
 
    })
}