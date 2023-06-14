import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import {listProducts} from "../../../services/productAction";
import db from "../../../db";
const ListProductPage =(props)=>{
    const { state, dispatch } = React.useContext(UserContext);
    const [products, setProducts]=useState([]);
    useEffect(()=>{
  refresh();
},[])

     const [form_product,setform_product]=useState({});

//  const formSubmit=async(g)=>{
//     g.preventDefault();
//     const id = ;
//     const conn = db.collection("product").doc(id);
//     await conn.update(form_product);  
//     refresh();  
//     // console.log(e.id)
//  }; 
const handleInput=(event)=>{
    setform_product({
        ...form_product,
        [event.target.name]: event.target.value
    });
}
const deleteProduct = async (id) => {
    const conn = db.collection("product").doc(id);
    await conn.delete();  
    alert("Xóa sản phẩm thành công!")
    refresh();  
}

const refresh=async()=>{
  const t=await listProducts();

  setProducts(t)


}
    
        return(
            
                        <div className="col-10 content">
            <div className="row mt-3 mb-3 header_content">
                <div className="col-4"> </div>
                <div className="col-4 click_content"> <NavLink to="/addproduct">Thêm Sản Phẩm</NavLink></div> 
                <div className="col-4"></div>
            </div>
            <div className="row container_content">
                <section className="h-100 h-custom">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card card-registration card-registration-2" >
                                    <div className="card-body p-0">
                                        <div className="row g-0">
                                            <div className="col-lg-12">
                                                <div className="p-5">
                                                    <div className="d-flex justify-content-between align-items-center mb-5">
                                                        <h1 className="fw-bold mb-0 text-black">Products List</h1>
                                                        <h6 className="mb-0 text-muted">{products.length} items</h6>
                                                    </div>
                                                    <hr className="my-4"/>
                                                    {
                                                        products.map((e,k) => {
                                                            
                                                            return(
                                                           <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img src={e.thumbnail}
                                                                className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <h6 className="text-muted">{e.type}</h6>
                                                            <h6 className="text-black mb-0">{e.name}</h6>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 ">
                                                            <h6 className="text-muted">Số Lượng</h6>
                                                            <h6 className="text-black mb-0">{e.qty}</h6>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 ">
                                                            <h6 className="text-muted">Giá bán</h6>
                                                            <h6 className="text-black mb-0">{e.finalprice}</h6>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            
                                                    <button type="button"className="col-1 btn btn-link" data-bs-toggle="modal" data-bs-target={`#exampleModal-${e.id}`}>
                                                                <i className=" bi bi-pencil-square"></i>
                                                        </button>

                                                        <div  className="modal fade" id={`exampleModal-${e.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${e.id}`} aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-scrollable">
                                                            <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Sửa sản phẩm {e.id}</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                        <form method="post" onSubmit={async(event)=> {
                                                                                 event.preventDefault();
                                                                                    const id = e.id;
                                                                                    const conn = db.collection("product").doc(id);
                                                                                    await conn.update(form_product);  
                                                                                    alert("Lưu thành công")
                                                                                    refresh();  
                                                                            }} >
                                                            
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Tên Sản Phẩm</label>
                                                            <input type="text" onChange={handleInput} className="form-control" name="name"id="exampleFormControlInput1" placeholder={e.name}/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Mã Sản Phẩm</label>
                                                            <input type="text" onChange={handleInput} className="form-control" name="code" id="exampleFormControlInput1" placeholder={e.code}/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Loại</label>
                                                            <select onChange={handleInput} className="form-select" name="type" aria-label="Default select example">
                                                                <option selected>Chọn Loại Sản Phẩm</option>
                                                                <option value="accessory">Accesory</option>
                                                                <option value="shoes">Shoes</option>
                                                                <option value="3">clothes</option>
                                                            </select>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Số Lượng Nhập</label>
                                                            <input type="number" onChange={handleInput} className="form-control"  name="qty" id="exampleFormControlInput1" placeholder={e.qty}/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giá Nhập</label>
                                                            <input type="number" onChange={handleInput} className="form-control"  name="entryprice" id="exampleFormControlInput1"placeholder={e.entryprice}/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giá Gốc</label>
                                                            <input type="number" onChange={handleInput} className="form-control" name="price" id="exampleFormControlInput1" placeholder={e.price}/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giảm Giá</label>
                                                            <input type="number" onChange={handleInput} className="form-control" name="sale" id="exampleFormControlInput1" placeholder={e.sale}/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giá Bán</label>
                                                            <input type="number" onChange={handleInput} className="form-control" name="finalprice" id="exampleFormControlInput1" placeholder={e.finalprice}/>
                                                        </div>
                                                        
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Ảnh Sản phẩm</label>
                                                            <input type="text"onChange={handleInput} className="form-control" name="thumbnail" id="exampleFormControlInput1" placeholder={e.thumbnail}/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Màu Sắc</label>
                                                             <input onChange={handleInput} type="text" className="form-control" name="color" id="exampleFormControlInput1" placeholder={e.color}/>
                                                            
                                                            
                                                        </div>

                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Giới Thiệu Về sản Phẩm</label>
                                                            <textarea onChange={handleInput} className="form-control" name="introduce" id="exampleFormControlTextarea1" rows="3" placeholder={e.introduce}></textarea>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Size</label>
                                                             <input type="text" onChange={handleInput} className="form-control" name="size" id="exampleFormControlInput1" placeholder={e.size}/>
                                                            
                                                            
                                                        </div>

                                                    
                                                    
                                                    <hr className="my-4"/>
                                                        <button type="submit"   className="btn btn-outline-secondary" data-bs-dismiss="modal">Lưu</button>
                                                        </form>
                                                            </div>
                                                            {/* <div className="modal-footer">
                                                                
                                                                <button type="button" className="btn btn-primary">Save changes</button>
                                                            </div> */}
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                           <i className="bi bi-x" onClick={() => deleteProduct(e.id)}></i>
                                                        </div>
                                                    </div>
                                                            )
                                                        })
                                                        }
                                                     
                                                    
                                                    
                                                   
                
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
            
        );
    }
    export default ListProductPage;
