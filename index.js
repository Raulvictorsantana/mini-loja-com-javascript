const itens= [
    {
        id:0,
        nome:"sapato",
        img:"no-imagem",
        quantidade:0
    },
    {
        id:1,
        nome:"camiseta",
        img:"no-imagem.jpg",
        quantidade: 0
    },

    {
        id:2,
        nome:"bone",
        img:"no-imagem.jpg",
        quantidade:0
    },

    {
        id:3,
        nome:"celular",
        img:"no-imagem.jpg",
        quantidade:0
    },

]

function iniciar (){
 let conteinerprodutos = document.getElementById('container');
     itens.map ((tudo)=>{
     conteinerprodutos.innerHTML+=`
        <div class="produto-singla"/> 
        img scr "`+tudo.img+`" />
        <p> `+tudo.nome+` </p>
        <a key = "`+tudo.id+`" href=""> adicionar ao carrinho </a>
        </div>
    `;
   
 });
}
iniciar ()
 