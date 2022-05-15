import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from "firebase/firestore/lite"

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