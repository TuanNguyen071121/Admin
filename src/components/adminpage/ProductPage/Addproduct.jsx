import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from "../../../context/UserContext";

import db from "../../../db";
const Addproduct=()=>{
 const [product,setProduct]=useState({});
     const [form_product,setform_product]=useState({});

 const formSubmit=async(e)=>{
    e.preventDefault();
    const conn = db.collection("product");
            await conn.add(form_product);  
            alert("Thêm sản phẩm thành công")
            this.refresh();  
 };  
 const handleInput=(event)=>{
        console.log(event)
        form_product[event.target.name] = event.target.value;
        setProduct(
            form_product
        ) 
 }


        return(
             <div className="col-10 content">
               
            <div className="row container_content mt-3">
                <section className="h-100 h-custom" >

                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card card-registration card-registration-2">
                                    <div className="card-body p-0">
                                        <div className="row g-0">
                                            <div className="col-lg-12">
                                                <div className="p-5">
                                                    <div className="d-flex justify-content-between align-items-center mb-5">
                                                        <h1 className="fw-bold mb-0 text-black"> Add Products</h1>
                                                        
                                                    </div>
                                                    <hr className="my-4"/>
                                                    <form method="post" onSubmit={formSubmit}>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Tên Sản Phẩm</label>
                                                            <input type="text" onChange={handleInput} className="form-control" name="name"id="exampleFormControlInput1" placeholder="Nhập Tên"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Mã Sản Phẩm</label>
                                                            <input type="text" onChange={handleInput} className="form-control" name="code" id="exampleFormControlInput1" placeholder="Nhập Mã sản Phẩm"/>
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
                                                            <input type="number" onChange={handleInput} className="form-control"  name="qty" id="exampleFormControlInput1" placeholder=""/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giá Nhập</label>
                                                            <input type="number" onChange={handleInput} className="form-control"  name="entryprice" id="exampleFormControlInput1" placeholder="_vnd"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giá Gốc</label>
                                                            <input type="number" onChange={handleInput} className="form-control" name="price" id="exampleFormControlInput1" placeholder="_vnd"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giảm Giá</label>
                                                            <input type="number" onChange={handleInput} className="form-control" name="sale" id="exampleFormControlInput1" placeholder="%"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giá Bán</label>
                                                            <input type="number" onChange={handleInput} className="form-control" name="finalprice" id="exampleFormControlInput1" placeholder="_vnd"/>
                                                        </div>
                                                        
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Ảnh Sản phẩm</label>
                                                            <input type="text"onChange={handleInput} className="form-control" name="thumbnail" id="exampleFormControlInput1" placeholder="Nhập địa chỉ hình ảnh"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Màu Sắc</label>
                                                             <input onChange={handleInput} type="text" className="form-control" name="color" id="exampleFormControlInput1" placeholder="Nhập Màu"/>
                                                            
                                                            
                                                        </div>

                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Giới Thiệu Về sản Phẩm</label>
                                                            <textarea onChange={handleInput} className="form-control" name="introduce" id="exampleFormControlTextarea1" rows="3" placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Size</label>
                                                             <input type="text" onChange={handleInput} className="form-control" name="size" id="exampleFormControlInput1" placeholder="Nhập Size"/>
                                                            
                                                            
                                                        </div>

                                                    
                                                    
                                                    <hr className="my-4"/>
                                                        <button type="submit"   className="btn btn-outline-secondary">Thêm Sản Phẩm</button>
                                                        </form>
                                                    
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
export default Addproduct;