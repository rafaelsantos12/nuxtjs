<template>
    <div>
       <h1 class="text-lg font-bold">
            Produtos
        </h1>
        <NuxtLink to="/produtos/produto-a">Produto A</NuxtLink>
        <NuxtLink to="/produtos/produto-b">Produto B</NuxtLink>
        <br>
        <br>
        
        <div v-for=" produtos in products" :key="products.id" class=" border-b border-gray-400 py-3">
            {{produtos.title}}
        </div>
        <br>
        <p>lorem lorem lorem lorem</p>
    </div>
</template>


<script>
export default {
    
    data(){
        return{

        }
    },
    
    async asyncData( { $axios }){

        

        const products = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=3')
        
        
        /* await new Promise( ( resolve)=> {
            setTimeout( () =>{
                resolve();

                console.log('Promise resolvida');
            }, 3000)
        }) */

         return {
            /*  produtos: [
                
                {name: 'produto 1'},
                {name: 'produto 2'},

             ], */
            products
         }   

    }

}
</script>