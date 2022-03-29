<template>
    <div>
        <div class="bg-gray-100">
            <div class="container mx-auto flex items-center space-x-4 h-20 mb-10">
                    <NuxtLink :to="{name: 'a-empresa'}">A Empresa</NuxtLink>
                    <NuxtLink to="/servicos">Serviço</NuxtLink>
                    <NuxtLink to="/produtos">Produtos</NuxtLink>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>