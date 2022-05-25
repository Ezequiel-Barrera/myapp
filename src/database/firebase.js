import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, Timestamp, getDocs, addDoc } from "firebase/firestore/lite"
//import { data } from "../services/getData"

const firebaseConfig = {
    apiKey: "AIzaSyCeBJSEiUO-sHCNkiirK7NTNudtQu0lK7w",
    authDomain: "influencezone2020.firebaseapp.com",
    databaseURL: "https://influencezone2020.firebaseio.com",
    projectId: "influencezone2020",
    storageBucket: "influencezone2020.appspot.com",
    messagingSenderId: "794776554124",
    appId: "1:794776554124:web:14885aad167564162f09a9"
};

const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);

export default firestoreDB;

// obtener todos los items de la DB
// async-await === sugar synax para promises

export async function getAllItems() {
    // obtenemos la referencia a la coleccion de items
    const miColeccion = collection(firestoreDB, 'products');
    // obtenemos todos los items
    /*getDocs(miColeccion).then(result => miVariable = result)*/
    const productsSnap = await getDocs(miColeccion);

    return productsSnap.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
}


// obtener todos los item de una categoria
export async function getItemsByCategory(categoriaid) {
    const miColeccion = collection(firestoreDB, 'products');
    const queryProduct = query(miColeccion, where("categoria", "==", categoriaid))
    const productsSnap = await getDocs(queryProduct);
    return productsSnap.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
}


// obtener un solo item segun el ID para pasar a Item Detail
export async function getItem(id) {
    const miColeccion = collection(firestoreDB, 'products');   
    const productRef = doc(miColeccion, id);
    const productSnap = await getDoc(productRef);
    return {
        ...productSnap.data(),
        id: productSnap.id
    }
}

export async function createBuyOrder(orderData) {
    const buyTimestamp = Timestamp.now();
    const orderWithDate = {
        ...orderData, 
        date: buyTimestamp
    };

    const miColeccion = collection(firestoreDB, "buyOrders");
    const orderDoc = await addDoc(miColeccion, orderWithDate);

    console.log('orden lista con el ID: ', orderDoc.id)
}

/*
const data = [
    {
        image:
            "https://images-na.ssl-images-amazon.com/images/I/616VM20%2BAzL.__AC_SY300_SX300_QL70_ML2_.jpg",
        title: "Ryzen 5900x",
        descripcion: "este es el primer producto",
        categoria: "Procesadores",
        price: "73000",
        stock: "4",
    },
    {
        image: "https://i.blogs.es/588c7d/amd6/original.jpeg",
        title: "Ryzen 5800x",
        descripcion: "este es el segundo producto",
        categoria: "Procesadores",
        price: "58000",
        stock: "10",
    },
    {
        image:
            "https://http2.mlstatic.com/D_NQ_NP_884972-MLA40182457265_122019-O.jpg",
        title: "Ryzen 2200G",
        descripcion: "este es el tercero producto",
        categoria: "Procesadores",
        price: "22000",
        stock: "5",
    },
    {
        image:
            "https://app.contabilium.com/files/explorer/20302/Productos-Servicios/concepto-4886285.jpg",
        title: "Rade 6800XT",
        descripcion: "este es el cuarto producto",
        categoria: "Placas-de-video",
        price: "280000",
        stock: "3",
    },
    {
        image: "https://m.media-amazon.com/images/I/81U5H5c0jyL._AC_SL1500_.jpg",
        title: "Rade 6900XT",
        descripcion: "este es el quinto producto",
        categoria: "Placas-de-video",
        price: "305000",
        stock: "15",
    },
    {
        image:
            "https://s3-sa-east-1.amazonaws.com/saasargentina/0q6tMtEfaFFScGS5Wuhn/imagen",
        title: "RTX 3080",
        descripcion: "este es el sexto producto",
        categoria: "Placas-de-video",
        price: "320000",
        stock: "1",
    },
    {
        image:
            "https://http2.mlstatic.com/D_NQ_NP_963530-MLA46418767025_062021-O.jpg",
        title: "RTX 3070",
        descripcion: "este es el séptimo producto",
        categoria: "Placas-de-video",
        price: "200000",
        stock: "3",
    },
    {
        image:
            "https://s3-sa-east-1.amazonaws.com/saasargentina/0q6tMtEfaFFScGS5Wuhn/imagen",
        title: "RTX 3020",
        descripcion: "este es el octavo producto",
        categoria: "Placas-de-video",
        price: "10000",
        stock: "10",
    },
];

export async function dataToFirebase() {
    const miColeccion = collection(firestoreDB, 'products');

    data.forEach((item) => {
        const newDoc = doc(miColeccion);
        setDoc(newDoc, item)
        .then(() => {
            console.log("Document written with id: ", newDoc.id)})
        .catch(err => {
            console.error("Error adding document; ", err);
        });
    })
}
*/