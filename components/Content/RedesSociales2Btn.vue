<template>
  <div class="flotante pa-1 pb-1" :style="{backgroundColor:ColorFloat}" justify="end" align="start" >
    <a class="PaginaWeb ma-1" :style="{backgroundColor:Color}"  href="https://anapinashop.com/" target="_blank" > </a>
    <a class="Instagram ma-1" :style="{backgroundColor:Color}"  href="https://www.instagram.com/anapinaofficial/" target="_blank"> </a>
  </div>
</template>
<script>
export default {
    props:{
      Color:{
            type: String,
            required: true
        },
        ColorFloat:{
            type: String,
            required: true
        },
      }
    }
</script>