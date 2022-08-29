/**
 * URL general del API
 */
const API_LOGIN_URL= "https://codeqr-generate.herokuapp.com/api"

/**
 * Obtener el codigo QR a partir del id del usuario, EL METODO ESTA ESTATICO, DEBE RECIBIR EL ID DEL USUARIO COMO PARAMETRO
 * @param {Number}user
 * @return {JSON}qr_code
 */
async function getQRCode(){
    let data={
        user:"1"
    }
    
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
        mode:"no-cors",
    }
    try{
    const response= await fetch(`${API_LOGIN_URL}/code/historial/`,options)
    
    const dataResponse= await response.json()
    console.log(dataResponse)
    }catch(err){
        console.log(err)
    }
    
}

/**
 * Hacer login en el aplicativo, EL METODO ESTA ESTATICO, DEBE RECIBIR EL USERNAME Y PASSWORD COMO PARAMETRO
 * @param {String} username
 * @param {String} password
 * @return {JSON} usuario
 */
async function getLogin(){
    let data={
        username:"noexisto",
        password:"123"
    }
    
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }
    try{
    const response= await fetch(`${API_LOGIN_URL}/auth/login`,options)
    
    const dataResponse= await response.json()
    console.log(dataResponse)
    }catch(err){
        console.log(err)}
}

/**
 * Registrarse en el aplicativo, EL METODO ESTA ESTATICO, DEBE RECIBIR EL USERNAME Y PASSWORD COMO PARAMETRO
 * @param {String} username
 * @param {String} password
 * @param {String} email
 * @param {String} name
 * @return {JSON} usuario
 */
async function register(){
    let data={
        username:"yeison7",
        password:"123",
        email:"yeison@hotmail.com",
        name:"yeison"
    }
    
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }
    try{
    const response= await fetch(`${API_LOGIN_URL}/auth/register`,options)
    
    const dataResponse= await response.json()
    console.log(dataResponse)
    }catch(err){
        console.log(err)
    }
}

/**
 * Generar codigo qr en el aplicativo, EL METODO ESTA ESTATICO, DEBE RECIBIR LA DIRECCION URL DEL SITIO WEB Y EL ID DEL USUARIO COMO PARAMETRO
 * @param {String} url
 * @param {Number} user
 * @return {JSON} codigos
 */
async function generateQR(){
    let data={
        url:"yeison7",
        user:"ID DEL USUARIO AQUI",
    }
    
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }
    try{
    const response= await fetch(`${API_LOGIN_URL}/code/`,options)
    
    const dataResponse= await response.json()
    console.log(dataResponse)
    }catch(err){
        console.log(err)
    }
}


//getQRCode();
//getLogin();
//register();
//generateQR();



