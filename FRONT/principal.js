const autbtns = document.getElementById('autbtns');
autbtns.addEventListener('click', () => {
    let usertx = document.getElementById('user').value;
    let passwordtxt = document.getElementById('passwords').value;
    let data = {
        username: usertx,
        password: passwordtxt
    }
    fetch('http://localhost:3000/api/login', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(re => {
            if (re.status == 200) {
                let accessdiv = document.getElementById('accedio')
                accessdiv.style.display = 'block'
                let divini = document.getElementById('inicio')
                divini.style.display = 'none'
            } else {
                let detalles = document.getElementById('detalleslog')
                detalles.innerHTML = 'Usuario o contraseña incorrecto'
            }
        })
        .catch(err => {
            console.log(err)
        })
});
const listc = document.getElementById('menuclient');
listc.addEventListener('click', () => {
    let clientdiv = document.getElementById('client')
    if (clientdiv.style.display == 'none') {
        clientdiv.style.display = 'block'
    } else {
        clientdiv.style.display = 'none'
    }
});

const menuprod = document.getElementById('menuprocuct');
menuprod.addEventListener('click', () => {
    let productdiv = document.getElementById('product')
    if (productdiv.style.display == 'none') {
        productdiv.style.display = 'block'
    } else {
        productdiv.style.display = 'none'
    }
});

const menuempl = document.getElementById('menuempledos');
menuempl.addEventListener('click', () => {
    let empldiv = document.getElementById('empleados')
    if (empldiv.style.display == 'none') {
        empldiv.style.display = 'block'
    } else {
        empldiv.style.display = 'none'
    }
});

const mnufactura = document.getElementById('menufacturas');
mnufactura.addEventListener('click', () => {
    let facturediv = document.getElementById('facturasg')
    if (facturediv.style.display == 'none') {
        facturediv.style.display = 'block'
    } else {
        facturediv.style.display = 'none'
    }
});

const addclient = document.getElementById('addclient');
addclient.addEventListener('click', () => {
    let nombre = document.getElementById('nameclient').value
    let celular = document.getElementById('celclient').value
    let correo = document.getElementById('mailclient').value
    let datos = {
        nombre: nombre,
        celular: celular,
        correo: correo
    }
    fetch('http://localhost:3000/api/clientes', {
            method: 'post',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(re => {
            if (re.status == 200) {
                let detalles = document.getElementById('detailclients')
                detalles.innerHTML = 'Movimiento hecho con exito'
            } else {
                let detalles = document.getElementById('detailclients')
                detalles.innerHTML = 'Error-Datos invalidos'
            }
        })
        .catch(err => {
            console.log(err)
        })
});

const delclientbtn = document.getElementById('delclientbtn');
delclientbtn.addEventListener('click', () => {
    let eliminarcliente = document.getElementById('delclient').value
    let datos = {
        clientee: eliminarcliente
    }
    fetch('http://localhost:3000/api/clientes', {
            method: 'delete',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(re => {
            if (re.tipo == 200) {
                let detalles = document.getElementById('detailclients')
                detalles.innerHTML = 'Movimiento hecho con exito'
            } else {
                let detalles = document.getElementById('detailclients')
                detalles.innerHTML = 'Error-Datos invalidos'
            }
        })
        .catch(err => {
            console.log(err)
        })
});

const addproduct = document.getElementById('addproduct');
addproduct.addEventListener('click', () => {
    let codigop = document.getElementById('codproduct').value
    let nombrep = document.getElementById('nameproduct').value
    let cantidadp = document.getElementById('cantidadproduct').value
    let datos = {
        codigo: codigop,
        nombre: nombrep,
        cantidad: cantidadp
    }
    fetch('http://localhost:3000/api/productos', {
            method: 'post',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(re => {
            if (re.status == 200) {
                let detalles = document.getElementById('detallesp')
                detalles.innerHTML = 'Movimiento hecho con exito'
            } else {
                let detalles = document.getElementById('detallesp')
                detalles.innerHTML = 'Error-Datos invalidos'
            }
        })
        .catch(err => {
            console.log(err)
        })
})

const delproductbtn = document.getElementById('delproductbtn');
delproductbtn.addEventListener('click', () => {
    let eliminar = document.getElementById('delproduct').value
    let datas = {
        eliminar: eliminar
    }
    fetch('http://localhost:3000/api/productos', {
            method: 'delete',
            body: JSON.stringify(datas),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(re => {
            if (re.status == 200) {
                let detalles = document.getElementById('detallesp')
                detalles.innerHTML = 'Movimiento hecho con exito'
            } else {
                let detalles = document.getElementById('detallesp')
                detalles.innerHTML = 'Error-Datos invalidos'
            }
        })
        .catch(err => {
            console.log(err)
        })
})

const listproduct = document.getElementById('listproduct')
listproduct.addEventListener('click', () => {
    fetch('http://localhost:3000/api/productos', {
            method: 'get'
        })
        .then(re => {
            if (re.status == 200) {
                let detalles = document.getElementById('detallesp')
                detalles.innerHTML = 'Movimiento hecho con exito'
            } else {
                let detalles = document.getElementById('detallesp')
                detalles.innerHTML = 'Error-Datos invalidos'
            }
        })
        .catch(err => {
            console.log(err)
        })
});



const addempleado = document.getElementById('addempleado')
addempleado.addEventListener('click', () => {
    let nombre = document.getElementById('nameempleado').value
    let celular = document.getElementById('celempleado').value
    let correo = document.getElementById('mailempleado').value
    let cargo = document.getElementById('cargo').value
    let sueldo = document.getElementById('sueldo').value
    let data = {
        nombre: nombre,
        celular: celular,
        correo: correo,
        cargo: cargo,
        salario: sueldo
    }
    fetch('http://localhost:3000/api/empleados', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(re => {
            if (re.status == 200) {
                let detalles = document.getElementById('detallesempleados')
                detalles.innerHTML = 'Movimiento hecho con exito'
            } else {
                let detalles = document.getElementById('detallesempleados')
                detalles.innerHTML = 'Error-Datos invalidos'
            }
        })
        .catch(err => {
            console.log(err)
        })
});

const delempleadobtn = document.getElementById('delempleadobtn');
delempleadobtn.addEventListener('click', () => {
    let del = document.getElementById('delempleado').value
    let dat = {
        eliminar: del
    }
    fetch('http://localhost:3000/api/empleados', {
            method: 'delete',
            body: JSON.stringify(dat),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(re => {
            if (re.status == 200) {
                let detalles = document.getElementById('detallesempleados')
                detalles.innerHTML = 'Movimiento hecho con exito'
            } else {
                let detalles = document.getElementById('detallesempleados')
                detalles.innerHTML = 'Error-Datos invalidos'
            }
        })
        .catch(err => {
            console.log(err)
        })
});

const listempleados = document.getElementById('listempleados')
listempleados.addEventListener('click', () => {
    fetch('http://localhost:3000/api/empleados', {
            method: 'get'
        })
        .then(re => {
            if (re.status == 200) {
                let detalles = document.getElementById('detallesempleados')
                detalles.innerHTML = 'Movimiento hecho con exito'
            } else {
                let detalles = document.getElementById('detallesempleados')
                detalles.innerHTML = 'Error-Datos invalidos'
            }
        })
        .catch(err => {
            console.log(err)
        })
});

const addfacture = document.getElementById('addfacture');
addfacture.addEventListener('click', () => {
    let cliente = document.getElementById('idcliente').value
    let empleado = document.getElementById('idempleado').value
    let precio = document.getElementById('precio').value
    let numerop = document.getElementById('numproductos').value
    let prod = []
    for (let i = 1; i <= numerop; i++) {
        let temp = document.getElementById(`nombre${i}`).value;
        let temp2 = document.getElementById(`cantidad${i}`).value;
        prod.push({ nombre: temp, cantidad: temp2 })
    }
    let data = {
        cliente: cliente,
        empleado: empleado,
        precio: precio,
        productos: prod
    }

    fetch('http://localhost:3000/api/facturas', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(re => {
            if (re.status == 200) {
                let detalles = document.getElementById('detallesfacturas')
                detalles.innerHTML = 'Movimiento hecho con exito'
            } else {
                let detalles = document.getElementById('detallesfacturas')
                detalles.innerHTML = 'Error-Datos invalidos'
            }
        })
        .catch(err => {
            console.log(err)
        })
});

const mproductos = document.getElementById('mproductos');
mproductos.addEventListener('click', () => {
    let nprod = document.getElementById('numproductos').value;
    let nproductos = document.getElementById('divdepend');
    for (let i = 1; i <= nprod; i++) {

        nproductos.innerHTML += `
        <br><br><label for="nombre${i}">Nombre:</label>
        <input type="text" id="nombre${i}" name="nombre" placeholder="Inserte nombre"><br>
        <label for="cantidad${i}">Edad:</label>
        <input type="number" id="cantidad${i}" name="cantidad" placeholder="Inserte edad"><br>
        `
    }
});

const listfactures = document.getElementById('listfactures');
listfactures.addEventListener('click', () => {
    fetch('http://localhost:3000/api/facturas', {
            method: 'get'
        })
        .then(re => {
            if (re.status == 200) {
                let detalles = document.getElementById('detallesfacturas')
                detalles.innerHTML = 'Movimiento hecho con exito'
            } else {
                let detalles = document.getElementById('detallesfacturas')
                detalles.innerHTML = 'Error-Datos invalidos'
            }
        })
        .catch(err => {
            console.log(err)
        })
});

const deletefactura = document.getElementById('deletefactura')
deletefactura.addEventListener('click', () => {
    let elim = document.getElementById('delfactura').value
    let data = {
        eliminar: elim
    }
    fetch('http://localhost:3000/api/facturas', {
            method: 'delete',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(re => {
            if (re.status == 200) {
                let detalles = document.getElementById('detallesfacturas')
                detalles.innerHTML = 'Movimiento hecho con exito'
            } else {
                let detalles = document.getElementById('detallesfacturas')
                detalles.innerHTML = 'Error-Datos invalidos'
            }
        })
        .catch(err => {
            console.log(err)
        })
})