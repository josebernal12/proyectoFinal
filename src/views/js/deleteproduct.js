// import axios from "axios"

export async function deleteProduct() {
    Swal.fire({
        title: 'Estas Seguro?',
        text: "No te falta nada mas?",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Comprarlo!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            const response = await axios.delete('http://localhost:8080/api/product')


            Swal.fire(
                'Borrado!',
                'te llegara un mensaje al whatsapp.',
                'success'
            )
            location.reload()
        }


    })



}
