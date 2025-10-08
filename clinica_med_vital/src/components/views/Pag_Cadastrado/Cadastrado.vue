<template>
    <Main1Cadastrado/>
    <Sobre/>
    <Main2Cadastrado/>
</template>
<script>
import Sobre from '@/components/Sobre.vue';
import Main1Cadastrado from './Main1Cadastrado.vue';
import Main2Cadastrado from './Main2Cadastrado.vue';

export default{
    
    name: 'Cadastrado',
    components:{
        Main1Cadastrado,
        Main2Cadastrado,
        Sobre
    }
}

</script>

<style>

</style>