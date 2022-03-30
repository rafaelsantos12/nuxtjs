<template>
    <div>
       <h1 class="text-lg font-bold">
            Serviços
        </h1>
        <NuxtLink to="/servicos/marketing-digital">Marketing</NuxtLink>
        <NuxtLink to="/servicos/desenvolvimento">Desenvolvimento</NuxtLink>
        <br><br>
        
        <div v-if="$fetchState.pending">
            <p>CARREGANDO...</p>
        </div>
        <div v-else>
            <div  v-for="service in services" :key="services.id" 
            class="border-b border-gray-400 py-4"
            >
                {{service.username}}
            </div>
        </div>
       


        <NuxtChild />
               
    </div>
</template>


<script>
export default {
        
        data(){
            return{
                services: []
            }
        },

        async fetch(){


            this.services = await this.$axios.$get('https://jsonplaceholder.typicode.com/users?_limit=4');
            /* await new Promise( ( resolve) => {
                
                setTimeout(()=>{
                    resolve()
                }, 3000)
            });
 */
                console.log(this);
        },
}   
</script>