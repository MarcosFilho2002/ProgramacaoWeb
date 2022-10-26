//https://ygoprodeck.com/api-guide/

let container = document.querySelector('.aleatorio');
document.querySelector('.cartaAleatoria').addEventListener('click', async () =>{
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
    console.log(json);
    let li = document.createElement('li');
    let p = document.createElement('p');
    let img = document.createElement('img');
    //li.innerHTML = json.data.name;
    let texto = document. createTextNode(json.data.name);
    p.appendChild(texto);
    li.appendChild(p);
    img.src = json.data.card_images[0].image_url_small;
    li.appendChild(img);
    container.appendChild(li);
});



let container2 = document.querySelector('.cartaInput');
document.querySelector('.cartaNome').addEventListener('click', async () =>{
    let cardName = document.querySelector('.cardName').value;
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name='+cardName);
    console.log(cardName);
    console.log(json);
    let li = document.createElement('li');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let texto = document. createTextNode(json.data.data[0].name);
    p.appendChild(texto);
    li.appendChild(p);
    img.src = json.data.data[0].card_images[0].image_url_small;
    li.appendChild(img);
    container2.appendChild(li);
});


document.querySelector('.verso-carta').addEventListener('click', async () =>{
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
    document.querySelector('.verso-carta').src = json.data.card_images[0].image_url_small;
});
document.querySelector('.verso-carta2').addEventListener('click', async () =>{
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
    document.querySelector('.verso-carta2').src = json.data.card_images[0].image_url_small;
});
document.querySelector('.verso-carta3').addEventListener('click', async () =>{
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
    document.querySelector('.verso-carta3').src = json.data.card_images[0].image_url_small;
});
document.querySelector('.verso-carta4').addEventListener('click', async () =>{
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
    document.querySelector('.verso-carta4').src = json.data.card_images[0].image_url_small;
});
document.querySelector('.verso-carta5').addEventListener('click', async () =>{
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
    document.querySelector('.verso-carta5').src = json.data.card_images[0].image_url_small;
});
document.querySelector('.verso-carta6').addEventListener('click', async () =>{
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
    document.querySelector('.verso-carta6').src = json.data.card_images[0].image_url_small;
});
document.querySelector('.verso-carta7').addEventListener('click', async () =>{
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
    document.querySelector('.verso-carta7').src = json.data.card_images[0].image_url_small;
});
document.querySelector('.verso-carta8').addEventListener('click', async () =>{
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
    document.querySelector('.verso-carta8').src = json.data.card_images[0].image_url_small;
});

//Search
document.querySelector(".cardName")
.addEventListener("keyup", async () => {
    let busca = this.value;
    let cardname = document.querySelector(".cardName").value;
    let cartas = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then(function (response) {
        console.log(response.data.data);
        console.log(response.data.data[0].name);
        let tamanhoArray = response.data.data.length;
        const todasCartas = [];
        for(let i = 0; i < tamanhoArray; i++){
            todasCartas.push(response.data.data[i].name);
        }
        console.log(todasCartas);
        todasCartas.filter((cardname) =>{
            const valorMinusculo = valor.toLowerCase();  
            const cidadeMinusculo = valor.toLowerCase();
        })
    })
    .catch(function(error){
        console.log('Error: '+error);
    });
    
    /*console.log(cidades[0].innerHTML.search(busca));
    for(let i = 0; i < cidades.length; i++){
        if (cidades[i].innerHTML.search(busca) >= 0) {
            cidades[i].style.display = "block";
        }else{
            cidades[i].style.display = "none";
        }
    }
    */
});
/*
function autoComplete(cidade) {
    const destino = ['Salvador', 'Vitória', 'Maceió', 'Ceará','Rio Branco','Macapá', 'Porto Velho', 'Olinda','Aracaju','Capitólio','São Paulo', 'Paraty'];        
    return destino.filter((valor) => {                
        const valorMinusculo = valor.toLowerCase()                
        const cidadeMinusculo = cidade.toLowerCase()                
        return valorMinusculo.includes(cidadeMinusculo)          
    })   
}  
const campo = document.querySelector('.campo')  
const sugestoes = document.querySelector('.sugestoes')  
campo.addEventListener('input', ({ target }) => {      
    const dadosDoCampo = target.value      
    if(dadosDoCampo.length) {         
        const autoCompleteValores = autoComplete(dadosDoCampo)         
        sugestoes.innerHTML = 
        `${autoCompleteValores.map((value) => {     
            return ( `<li>${value}</li>`)
        })
        .join('')}
        `
    }}
);
*/





//https://reqres.in

let token = localStorage.getItem('token');

if(token === 'QpwL5tke4Pnpja7X4'){
    let conteudoApi = document.querySelector('.conteudo-api');
    conteudoApi.style.display = 'block';
    let containerCartas = document.querySelector('.container-cartas');
    containerCartas.style.display = 'block';
}

//console.log(token);


document.querySelector('.login').addEventListener('click', ()=>{
    let containerLogin = document.querySelector('.container-login');
    containerLogin.style.display = 'block';
});

document.querySelector('.btn-fechar').addEventListener('click', ()=>{
    let containerLogin = document.querySelector('.container-login');
    containerLogin.style.display = 'none';
    document.querySelector('.input-email').value = '';
    document.querySelector('.input-senha').value = '';
});

async function login(email,senha){
    let json = await axios.post('https://reqres.in/api/login',
        {
            "email": email,
            "password": senha
        })
        .then(function (response) {
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
            let conteudoApi = document.querySelector('.conteudo-api');
            conteudoApi.style.display = 'block';
            let containerCartas = document.querySelector('.container-cartas');
            containerCartas.style.display = 'block';
            let containerLogin = document.querySelector('.container-login');
            containerLogin.style.display = 'none';

        })
        .catch(function(error){
            console.log('Error: '+error.response.data.error);
            let erro = error.response.data.error;
            console.log(erro);
            if(erro == 'user not found'){
                let alerta = document.querySelector('.alerta-bd');
                alerta.style.display = 'block';
            }
            /*
            if (erro === 'Missing password') {
                let alerta = document.querySelector('.alerta-senha');
                alerta.style.display = 'block';
                console.log('entrei no if')
                document.querySelector('.input-senha').value = '';
            }
            if (erro === 'Missing email or username') {
                let alerta = document.querySelector('.alerta-email');
                alerta.style.display = 'block';
                console.log('entrei no if')
                document.querySelector('.input-email').value = '';
                document.querySelector('.input-senha').value = '';
            }
            */
            
        });
};

document.querySelector('.input-email').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-tres');
    alerta.style.display = 'none';
});
document.querySelector('.input-senha').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-tres');
    alerta.style.display = 'none';
});

document.querySelector('.input-email').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-email');
    alerta.style.display = 'none';
});

document.querySelector('.input-senha').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-senha');
    alerta.style.display = 'none';
});

document.querySelector('.input-email').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-bd');
    alerta.style.display = 'none';
});
document.querySelector('.input-senha').addEventListener('keyup', (event)=>{
    let alerta = document.querySelector('.alerta-bd');
    alerta.style.display = 'none';
});


document.querySelector('.btn-entrar').addEventListener('click', ()=>{
    let email = document.querySelector('.input-email').value;
    let senha = document.querySelector('.input-senha').value;

    console.log("Email: "+email.length+" Senha: "+senha.length);

    if(email.length === 0){
        let alerta = document.querySelector('.alerta-email');
        alerta.style.display = 'block';
        console.log('entrei no if')
        document.querySelector('.input-email').value = '';
        document.querySelector('.input-senha').value = '';

    }else if(senha.length === 0){
        let alerta = document.querySelector('.alerta-senha');
        alerta.style.display = 'block';

    }else if(email.length < 3 || senha.length < 3){
        let alerta = document.querySelector('.alerta-tres');
        alerta.style.display = 'block';
        //document.querySelector('.input-email').value = '';
        //document.querySelector('.input-senha').value = '';
    }else{
        login(email,senha);
    }
    
    let form = document.querySelector('.form-login');
    form.addEventListener('submit', () =>{
        login(email,senha);
        
    });
});