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
//card name: The Noodle Art of Savory - verso de carta, mas gigante... pensar se usa.