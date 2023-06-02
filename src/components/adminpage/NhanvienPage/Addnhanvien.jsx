import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default class Addnhanvien extends React.Component{
    render(){
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
                                                    <hr className="my-4"/>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Tên Nhân Viên</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nhập Tên Nhân Viên"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Mã Nhân Viên</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nhập Mã Nhân Viên"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Mật Khẩu Đăng nhập</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nhập Mật Khẩu"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Địa chỉ</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nhập Địa Chỉ"/>
                                                        </div>
                                                        
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Tuổi</label>
                                                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">SĐT</label>
                                                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Lương</label>
                                                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="_vnd"/>
                                                        </div>
                                                        
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Ảnh Nhân Viên</label>
                                                            <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Chức Vụ</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nhập Chức Vụ"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Phân Quyền</label>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                <label className="form-check-label" for="flexCheckDefault">
                                                                    Quyền 1
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                <label className="form-check-label" for="flexCheckDefault">
                                                                    Quyền 2
                                                                </label>
                                                            </div>
                                                            
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                <label className="form-check-label" for="flexCheckDefault">
                                                                    Quyền 3
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                <label className="form-check-label" for="flexCheckDefault">
                                                                    Quyền 3
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                <label className="form-check-label" for="flexCheckDefault">
                                                                    Quyền 3
                                                                </label>
                                                            </div>
                                                            
                                                            
                                                        </div>
                                                    <hr className="my-4"/>
                                                        <button type="button" className="btn btn-outline-secondary">Thêm Nhân Viên</button>
                
                                                    
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
}   