// import { LISTPRODUCTS } from "../../contants/productsContants";
import db from "../db"


// export function ListProducts(payload) {
//   console.log(987)
//   return {
//     type: LISTPRODUCTS,
//     payload: payload,
//   };
// }

export const listProducts =async (limit) => {
  
    try {
      const collectionRef = db.collection('product');
      const snapshot = await collectionRef.limit(limit).get();
      const data = snapshot.docs.map((doc) => doc.data());
      return data;
      
      // dispatch({ type: 'LISTPRODUCTS', payload: data });
    } catch (error) {
      // dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      return [];
    }

};
export const listStaff =async (limit) => {
  
    try {
      const collectionRef = db.collection('staff');
      const snapshot = await collectionRef.limit(limit).get();
      const data = snapshot.docs.map((doc) => doc.data());
      return data;
      
      // dispatch({ type: 'LISTPRODUCTS', payload: data });
    } catch (error) {
      // dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      return [];
    }

};
export const listBlog =async (limit) => {
  
    try {
      const collectionRef = db.collection('blog');
      const snapshot = await collectionRef.limit(limit).get();
      const data = snapshot.docs.map((doc) => doc.data());
      return data;
      
      // dispatch({ type: 'LISTPRODUCTS', payload: data });
    } catch (error) {
      // dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      return [];
    }

};

export const listCategories =async () => {
  
  try {
    const collectionRef = db.collection('categories');
    const snapshot = await collectionRef.get();
    const data = snapshot.docs.map((doc) => doc.data());
    return data;
    
    // dispatch({ type: 'LISTPRODUCTS', payload: data });
  } catch (error) {
    // dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    return [];
  }

};
export const listOrder =async (limit) => {
  
    try {
      const collectionRef = db.collection('order');
      const snapshot = await collectionRef.limit(limit).get();
      const data = snapshot.docs.map((doc) => doc.data());
      return data;
      
      // dispatch({ type: 'LISTPRODUCTS', payload: data });
    } catch (error) {
      // dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      return [];
    }

};
// export const updateStatus = async (limit, statusUpdates) => {
//   try {

//     // Get a reference to the order with the specified ID
//     const orderRef = db.collection("orders").doc(limit);

//     // Update the status of the order with the new value
//     await orderRef.update(statusUpdates);

//     // Return the updated order
//     const updatedOrder = await orderRef.get();
//     return updatedOrder.data();
//   } catch (error) {
//     console.error("Error updating status of order:", error);
//     return null;
//   }
// };


// export const addCart =(payload)=>{
//   return{
//     type: ADDCART,
//     payload: payload
//   }
// }