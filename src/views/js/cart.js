const body = document.body

let infoCart;

const createHtml = () => {
  const html = `
       
    <h1 class="mt-5">Cart</h1>
    <hr>

    <table class="table">
        <thead>
            <tr>
                
                <th scope="col">Email</th>
                <th scope="col">Order</th>
                
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
}

const getCart = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/carts`
    );
    console.log(response.data.response)
    return response.data.response
  } catch (error) {
    console.log("hollaa", error);
  }
};
const createCart = (response) => {

  const html = `
    
    <td  scope="col"> ${response.email}</td>
    <td scope="col"> ${JSON.stringify(response.order)} </td>
    
    
  `;
  const tr = document.createElement("tr");
  tr.innerHTML = html;
  infoProduct.append(tr);
};


const init = async () => {
  createHtml()
  const cart = await getCart()
  // console.log(cart)
  for (const car of cart) {
    console.log(car)
    createCart(car)

  }
  // getProducts()
}

init()

