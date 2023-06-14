import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import db from "../../../db";
import UserContext from "../../../context/UserContext";
const AddBlog =(props)=>{
 const [blog,setBlog]=useState({});
     const [form_product,setform_product]=useState({});

 const formSubmit=async(e)=>{
    e.preventDefault();
    const conn = db.collection("blog");
            await conn.add(form_product);  
            alert("Thêm blog thành công")
            this.refresh();  
            
 };  
 const handleInput=(event)=>{
        console.log(event)
        form_product[event.target.name] = event.target.value;
        setBlog(
            form_product
        ) 
 }
        return(
            
       <div className="col-10 content">
                            <div className="row container_content mt-3">
                        <section className="h-100 h-custom">
                    
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12">
                                    <div className="card card-registration card-registration-2">
                                        <div className="card-body p-0">
                                            <div className="row g-0">
                                                <div className="col-lg-12">
                                                    <div className="p-5">
                                                        <div className="d-flex justify-content-between align-items-center mb-5">
                                                            <h1 className="fw-bold mb-0 text-black"> Thêm Blog</h1>
                    
                                                        </div>
                                                        <hr className="my-4" />
                                                        <form method="post" onSubmit={formSubmit}>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Tille Blog</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" name="title" onChange={handleInput}
                                                                placeholder="Nhập Tên" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Mã Blog</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" name="code" onChange={handleInput}
                                                                placeholder="Nhập Mã sản Phẩm" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1"
                                                                className="form-label tille_content">Thể Loại</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" name="typeblog" onChange={handleInput}
                                                                placeholder="Nhập Mã sản Phẩm" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Ảnh Bìa Blog</label>
                                                            <input className="form-control form-control-sm" name="avatar" id="formFileSm" type="text" onChange={handleInput} />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Ảnh Dùng Trong Blog</label>
                                                             <input className="form-control form-control-sm" name="picture1" id="formFileSm" type="text" onChange={handleInput} />
                                                             <input className="form-control form-control-sm" name="picture2" id="formFileSm" type="text" onChange={handleInput} />
                                                              <input className="form-control form-control-sm" name="picture3" id="formFileSm" type="text" onChange={handleInput} />
                                                               <input className="form-control form-control-sm" name="picture4" id="formFileSm" type="text" onChange={handleInput} />
                                                                <input className="form-control form-control-sm" name="picture5" id="formFileSm" type="text" onChange={handleInput} />

                                                        </div>
                                                        
                                             
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Đoạn 1</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="par1" onChange={handleInput} placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Đoạn 2</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="par2" onChange={handleInput} placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Đoạn 3</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="par3" onChange={handleInput} placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Đoạn 4</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="par4" onChange={handleInput} placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Đoạn 5</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="par5" onChange={handleInput} placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        
                    
                    
                    
                    
                                                        <hr className="my-4" />
                                                        <button type="sumbit" className="btn btn-outline-secondary">Thêm Blog</button>
                    
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
export default AddBlog;