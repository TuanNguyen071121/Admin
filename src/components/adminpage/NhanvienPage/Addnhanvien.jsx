import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import db from "../../../db";
import UserContext from "../../../context/UserContext";
const Addnhanvien =(props)=>{
 const [staff,setStaffs]=useState({});
     const [form_product,setform_product]=useState({});

 const formSubmit=async(e)=>{
    e.preventDefault();
    const conn = db.collection("staff");
            await conn.add(form_product);  
            alert("Thêm nhân viên thành công")
            this.refresh();  
 };  
 const handleInput=(event)=>{
        console.log(event)
        form_product[event.target.name] = event.target.value;
        setStaffs(
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
                                                        <h1 className="fw-bold mb-0 text-black"> Thêm Nhân Viên</h1>
                                                        
                                                    </div>
                                                    <form method="post" onSubmit={formSubmit}>
                                                    <hr className="my-4"/>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Tên Nhân Viên</label>
                                                            <input type="text" className="form-control" onChange={handleInput} id="exampleFormControlInput1" name="name" placeholder="Nhập Tên Nhân Viên"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Mã Nhân Viên</label>
                                                            <input type="text" className="form-control" onChange={handleInput} id="exampleFormControlInput1" name="code" placeholder="Nhập Mã Nhân Viên"/>
                                                        </div>
                                                        
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Địa chỉ</label>
                                                            <input type="text" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="add" placeholder="Nhập Địa Chỉ"/>
                                                        </div>
                                                        
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Tuổi</label>
                                                            <input type="number" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="age" placeholder=""/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">SĐT</label>
                                                            <input type="number" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="phone" placeholder=""/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Lương</label>
                                                            <input type="number" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="salary" placeholder="_vnd"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Ảnh nhân viên</label>
                                                            <input type="text" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="thumbnail" placeholder="link"/>
                                                        </div>
                                                        
                                                        
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Chức Vụ</label>
                                                            <input type="text" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="position" placeholder="Nhập Chức Vụ"/>
                                                        </div>
                                                        
                                                    <hr className="my-4"/>
                                                        <button type="sumbit" className="btn btn-outline-secondary">Thêm Nhân Viên</button>
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
export default Addnhanvien;