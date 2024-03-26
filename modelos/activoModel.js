// activoModel.js
class Activo {
    constructor(id, numeroSerie, numeroInventario, tipo, descripcion, ubicacionId, responsableId, imagen) {
      this.id = id;
      this.numeroSerie = numeroSerie;
      this.numeroInventario = numeroInventario;
      this.tipo = tipo;
      this.descripcion = descripcion;
      this.ubicacionId = ubicacionId;
      this.responsableId = responsableId;
      this.imagen = imagen;
    }
  }
  
  module.exports = Activo;
  
