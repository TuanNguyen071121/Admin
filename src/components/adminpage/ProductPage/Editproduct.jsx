import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
const Editproduct =(props)=>{

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
                                                        <h1 className="fw-bold mb-0 text-black"> Edit Products</h1>
                                                        
                                                    </div>
                                                    <hr className="my-4"/>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Tên Sản Phẩm</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nhập Tên"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Loại</label>
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>Chọn Loại Sản Phẩm</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Số Lượng Nhập</label>
                                                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giá Nhập</label>
                                                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="_vnd"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giá Gốc</label>
                                                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="_vnd"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giảm Giá</label>
                                                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="%"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Giá Bán</label>
                                                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="_vnd"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Ảnh Sản Phẩm</label>
                                                            <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Màu Sắc</label>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                <label className="form-check-label" for="flexCheckDefault">
                                                                    Màu 1
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                <label className="form-check-label" for="flexCheckDefault">
                                                                    Màu 2
                                                                </label>
                                                            </div>
                                                            
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                <label className="form-check-label" for="flexCheckDefault">
                                                                    Màu 3
                                                                </label>
                                                            </div>
                                                            
                                                            
                                                        </div>

                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Giới Thiệu Về sản Phẩm</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        

                                                    
                                                    
                                                    <hr className="my-4"/>
                                                        <button type="button" className="btn btn-outline-secondary">Lưu</button>
                
                                                    
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
export default Editproduct;