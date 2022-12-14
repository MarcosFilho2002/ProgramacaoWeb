//https://ygoprodeck.com/api-guide/

let container = document.querySelector('.aleatorio');
document.querySelector('.cartaAleatoria').addEventListener('click', async () =>{
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
    //console.log(json);
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
async function carregaCartas(){
    let cartas = axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then(function (response) {
        //console.log(response.data.data);
        //console.log(response.data.data[0].name);
        let tamanhoArray = response.data.data.length;
        const todasCartas = [];
        for(let i = 0; i < tamanhoArray; i++){
            todasCartas.push(response.data.data[i].name);
        }

        todasCartas.forEach(element => {
            let select = document.querySelector("#cartas");
            select.append(new Option(element,element));
            //console.log(element);
        });
    });
};
carregaCartas();


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

document.querySelector('.registrar_menu').addEventListener('click', ()=>{
    let containerRegistrar = document.querySelector('.container-registrar');
    containerRegistrar.style.display = 'block';
});

document.querySelector('.btn-fechar').addEventListener('click', ()=>{
    let containerLogin = document.querySelector('.container-login');
    containerLogin.style.display = 'none';
    document.querySelector('.input-email').value = '';
    document.querySelector('.input-senha').value = '';
});

document.querySelector('.btn-fechar-registro').addEventListener('click', ()=>{
    let containerLogin = document.querySelector('.container-registrar');
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
            containerLogin.style.display = 'block';
            let containerSucesso = document.querySelector('.estado-login');
            containerSucesso.style.display = 'block';
            setTimeout( function() {
                let containerLogin = document.querySelector('.container-login');
                containerLogin.style.display = 'none';
                let containerSucesso = document.querySelector('.estado-login');
                containerSucesso.style.display = 'none';
              }, 2000 );
            document.querySelector('.input-email').value = '';
            document.querySelector('.input-senha').value = '';
        })
        .catch(function(error){
            console.log('Error: '+error.response.data.error);
            let erro = error.response.data.error;
            console.log(erro);
            if(erro == 'user not found'){
                let alerta = document.querySelector('.alerta-bd');
                alerta.style.display = 'block';
            }
            
            
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

    //console.log("Email: "+email.length+" Senha: "+senha.length);

    if(email.length === 0){
        let alerta = document.querySelector('.alerta-email');
        alerta.style.display = 'block';
        //console.log('entrei no if')
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

document.querySelector('.cartaNome').addEventListener('click',()=>{
    let input = document.querySelector('.cardName').value;

    if(input.length === 0){
        let aviso = document.querySelector('.aviso');
        aviso.textContent = 'O nome da carta n??o pode ser vazio!';
    }
    else{
        getCarta(input);
    }
});
let container2 = document.querySelector('.cartaInput');
/*
        document.querySelector('.cartaNome').addEventListener('click', async () =>{
            let cardName = document.querySelector('.cardName').value;
            let json = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name='+cardName);
            //console.log(cardName);
            //console.log(json);
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
*/
async function getCarta(cardName) {
    let json = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name='+cardName);
    //console.log(cardName);
    //console.log(json);
    let li = document.createElement('li');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let texto = document. createTextNode(json.data.data[0].name);
    p.appendChild(texto);
    li.appendChild(p);
    img.src = json.data.data[0].card_images[0].image_url_small;
    li.appendChild(img);
    container2.appendChild(li);
}

document.querySelector('.cardName').addEventListener('click',()=>{
    let aviso = document.querySelector('.aviso');
        aviso.textContent = '';
});