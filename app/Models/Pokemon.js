
export class Pokemon{
constructor(data){
  this.height = data.height
  this.name = data.name
  this.nickname = data.name
  this.species = data.species
  this.img = data.img
  this.id = data.id
  this.index = data.index
  }
}

// get Template() {
//   return `
//   <div class="bg-light shadow p-4">
//     <div class="text-center">
//     <img src="${this.img} alt=${this.name}>
//       <h2>${this.name}</h2>
//       <h4>Height: ${this.height} | Weight: ${this.weight} | Species: ${this.species}</h4>
//     </div>
//     <p>${this.description}</p>
//     <div class="d-flex justify-content-between align-items-baseline">
//       ${this.Button}
//     </div>
//   </div>
//   `
// }