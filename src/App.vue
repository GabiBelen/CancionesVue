<template >

 <h1 class=" container-fluid text-center fw-bolder letra"><span>  Letras de Canciones</span></h1>
  <div class="container-fluid">
   <div class="row ">
     <div class="col-4">
       <form @submit.prevent="">
         <div class=" ">
            <h4 class="mb-3 letra text-center mt-5" ><span>  Nombre del Artista:</span></h4>
           <input class="form-control m-3 input-center" type="text" v-model="artista"/>
           <h4 class="mb-3 letra text-center mt-5"><span> Nombre de la Canción:</span>  </h4>
           <input class="form-control m-3 input-center" type="text" v-model="cancion"/>
         </div>


         <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-white mt-5 center letra text-center" type="button">Buscar Canción</button>
  </div>

       
       </form>
     </div>
<p class="letra m-5 fs-4 fst-italic lh-lg">{{ letra }}</p>

     
   </div>
  </div>
</template>

<script>
import { consumirCanciones } from "./api";
import Error from './components/Error.vue';

export default {
  name: "App",
  components: {},
  data () {
    return {
      artista: "",
      cancion: "",
      letra: "",
    };
    
  },
  methods: {
    async submit() {
      console.log('Se ejecuta el método submit')

    //ejemplo 1 promesa
      consumirCanciones(this.artista, this.cancion).then( letra => console.log(letra.lyrics));
      return letra;

      //ejemplo 2
      //const letraCancion = await consumirCanciones(this.artista, this.cancion);
     // console.log(letraCancion);
    }
  }
}
</script>

<style scoped>
.container-fluid {
 border: 0 auto;
 background-color: #dc3545;

}

.letra {
  width: 100;
  font-family: 'Special Elite', cursive;
  color: #ffc107; 
  justify-content: center;

}

h1 {
  padding: 40px;
  
  background-color: #dc3545;
}

p {

  font-family: #ffc107; 
}

button {
  background-color: #dc3545;
  align-content: center;
  border-width: 2px;
  border-color:#ffc107;
}

</style>
