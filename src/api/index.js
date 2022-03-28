const consumirCanciones = async (artista, cancion) => {
  try {
    const data = await fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`);
    const letra = await data.json();
    return letra;
  } catch (error) {
    //<div class="alert alert-info text-center" role="alert">
   // El nombre del artista o el nombre de la  canción no son correctos. Por favor intenta nuevamente.
  //</div>
  console.log(error);
   }
  }

module.exports = {
  consumirCanciones 
}