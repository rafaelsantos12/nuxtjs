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
    
        name:'',

        data(){
            return{
                title:'',
                services: []
            }
        },
        
        head(){
            return{
                title: this.title,
                meta:[
                    {hid: 'description', name: 'description', content: 'Minha descrição de serviços'}
                ],
                bodyAttrs:{
                    class: 'bg-gray-400'
                }
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
        
        
        created(){
            this.getTitle()
        },

        methods:{
            getTitle(){
                setTimeout(()=>{
                    this.title ='Serviços'
                },3000)
            }
        },

}   
</script>