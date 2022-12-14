
const body = document.body;

let infoProduct;
const createHtml = () => {
  const html = `
       
        <h1 class="mt-5"> Products</h1>
        <hr>
    
        <table class="table">
            <thead>
                <tr>
                    
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Category</th>
                    <th scope="col">Agregar Al carrito</th>
                    <th scope="col">View</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        `;

  const div = document.createElement("div");
  div.innerHTML = html;
  body.appendChild(div);
  infoProduct = document.querySelector("tbody");
};
const getProducts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/products"
    );

    return response.data;
  } catch (error) {
    console.log("hollaa", error);
  }
};

const createProduct = ({ _id, name, price, stock, category }) => {

  const html = `
  
  <td  scope="col"> ${name}</td>
  <td scope="col"> ${price} </td>
  <td scope="col"> ${stock} </td>
  <td scope="col"> ${category.name} </td>
  <td>
    <a href="#" class="btn btn-primary mt-2">Agregar al Carrito</a>
  </td>
  <td>
  <a href="/templates/products/${_id}"  class="btn btn-primary mt-2"> View </a>

  </td>
  
`;
  const tr = document.createElement("tr");
  tr.innerHTML = html;
  infoProduct.append(tr);
};
const init = async () => {
  createHtml();
  const products = await getProducts();
  for (const product of products) {
    createProduct(product);
  }
};


init();
