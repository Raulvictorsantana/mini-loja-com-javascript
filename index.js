

const itens= [
    {
        id:0,
        nome:"sapato",
        img: 'imagem.jpg',
        quantidade:0
    },
    {
        id:1,
        nome:"camiseta",
        img:"imagem.jpg",
        quantidade: 0
    },

    {
        id:2,
        nome:"bone",
        img:"imagem.jpg",
        quantidade:0
    },

    {
        id:3,
        nome:"celular",
        img:"imagem.jpg",
        quantidade:0
    },
    

]

function iniciar (){
 let conteinerprodutos = document.getElementById('container');
     itens.map ((tudo)=>{
     conteinerprodutos.innerHTML+=`
        <div class="produto-singla"> 
        <img src 
        ="`+tudo.img+`">
       
        <p> `+tudo.nome+` </p>
        <a key = "`+tudo.id+`" href="#"> adicionar ao carrinho </a>
        </div>
    `;
   
 });
 
}
iniciar ()

atualizarCarrinho =()=>{
    console.log(itens)
};

var links = document.getElementsByTagName('a');

for( var i= 0; i<links.length; i++){
    links[i].addEventListener("click",function(){
        let key =this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
};



 