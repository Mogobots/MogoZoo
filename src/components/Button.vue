<template>
    <button class="Button" @click="saludar"></button>
</template>

<script>
export default{
    name: 'Button',
    methods:{
        saludar(){
            console.log(Welcome)
        }
    }
}

</script>

<style scoped>
.Button {
    
}
</style>