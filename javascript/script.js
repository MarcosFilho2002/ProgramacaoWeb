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
            alert('Login realizado com sucesso!');
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
            alert('Error: '+error.response.data.error);
            document.querySelector('.input-email').value = '';
            document.querySelector('.input-senha').value = '';
        });
};

document.querySelector('.btn-entrar').addEventListener('click', ()=>{
    let email = document.querySelector('.input-email').value;
    let senha = document.querySelector('.input-senha').value;

    console.log("Email: "+email.length+" Senha: "+senha.length);
    login(email,senha);
    if(email.length < 3 || senha.length < 3){
        alert('Email e senha devem ter no mínimo 3 caracteres cada!');
        document.querySelector('.input-email').value = '';
        document.querySelector('.input-senha').value = '';
    }
    
    let form = document.querySelector('.form-login');
    form.addEventListener('submit', () =>{
        login(email,senha);
        
    });
});