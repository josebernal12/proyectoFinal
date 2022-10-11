const button = document.querySelector(".boton");

button.addEventListener("click", (e) => {
  console.log("click");
  console.log(e)
});

// import axios from "./axios.js";

// const body = document.body;
// let infoProduct;
// const createHtml = () => {
//   const html = `
//       <h1 class="mt-5"> Products</h1>
//       <hr>

//       <table class="table">
//           <thead>
//               <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Price</th>
//                   <th scope="col">Stock</th>
//               </tr>
//           </thead>
//           <tbody>
//           </tbody>
//       </table>
//       `;

//   const div = document.createElement("div");
//   div.innerHTML = html;
//   body.appendChild(div);
//   infoProduct = document.querySelector("tbody");
// };
// createHtml()

// const getProducts = async () => {
//   try {
//     const response = await axios.get("api/products");
//     return response;
//   } catch (error) {
//     console.log(error)
//   }
// };

// const createProduct = (product) => {
//   const html = `

//   <td scope="col"> ${product.name}</td>
//   <td scope="col"> ${product.price}  </td>
//   <td scope="col"> ${product.stock}  </td>
// `;
//   const tr = document.createElement("tr");
//   tr.innerHTML = html;
//   infoProduct.append(tr);
// };

// export const init = () => {
//     createHtml()
// };

// init()

// ;


