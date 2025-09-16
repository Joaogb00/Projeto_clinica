<template>
   
<header>
    
    <div class="links">
        <img src="" alt="">
        <a href="#" class="elementos">Serviços</a>
        <a href="#" class="elementos">Equipe</a>
        <a href="#" class="elementos">Agendamento</a>
        <a href="#" class="elementos">Contato</a>
        </div>
 <a href="#" id="btn-solo">Agendar Consulta</a>
</header>
   
</template>

<script>
export default{
    name: 'Header',
    components:{

    },
    data(){
        return{
        
    }
    }
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
}
header {
    position: sticky;
    bottom: 1;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.5); /* fundo branco semi-transparente */
    backdrop-filter: blur(10px); /* efeito de blur */
   
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-bottom: 1000px;
}
.links{
    display: flex;
    flex-direction: row;
    
   
    gap: 20px;
    

}

.elementos{
    background-color: transparent;
    text-decoration: none;
    color: gray;
    padding: 10px;
    border-radius: 10px;
    transition: .5s;

}
.elementos:hover{
    background-color: rgb(196, 209, 250);
    text-decoration: none;
    color:  rgb(46, 137, 255);
    padding: 10px;
    border-radius: 10px;

    

}
#btn-solo{
    position: absolute;
    right: 0px;
    margin-right: 50px;
    text-decoration: none;
    color: white;
    background-color: rgb(0, 132, 255);
    padding: 10px;
    border-radius: 10px;
}

</style>