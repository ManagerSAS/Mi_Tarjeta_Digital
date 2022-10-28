<template>
  <div  >
    <div justify="center" align="center">
      <div >
        <nuxt-img format="webp" quality="70" fit="cover" loading="lazy"  class="d-block d-sm-block d-md-none fotoManager" :src="Foto" width="200" alt="" srcset=""/>
        <nuxt-img format="webp" quality="70" fit="cover" loading="lazy" class="d-none d-lg-block d-xl-none fotoManager" :src="Foto" width="30%"/>
        <nuxt-img format="webp" quality="70" fit="cover" loading="lazy" class="d-none d-md-block d-lg-none fotoManager" :src="Foto"  width="450"/>
        <nuxt-img format="webp" quality="70" fit="cover" loading="lazy" class="d-none d-xl-block fotoManager" :src="Foto" width="30%"/>
      </div>
    </div>
    <div justify="center" align="center" width="100%" style="position:absolute; top:-0em" class="bannerPrincipal" >
    </div>
  </div>
</template>
<script>
export default {
    props:{
        Foto:{
            type: String,
            required: true
        },
    }
}
</script>



