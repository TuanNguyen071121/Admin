import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default class EditBlog extends React.Component{
    render(){
        return(
            
       <div className="col-10 content">
                            <div class="row container_content mt-3">
                        <section class="h-100 h-custom">
                    
                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col-12">
                                    <div class="card card-registration card-registration-2">
                                        <div class="card-body p-0">
                                            <div class="row g-0">
                                                <div class="col-lg-12">
                                                    <div class="p-5">
                                                        <div class="d-flex justify-content-between align-items-center mb-5">
                                                            <h1 class="fw-bold mb-0 text-black"> Sửa Blog</h1>
                    
                                                        </div>
                                                        <hr class="my-4" />
                                                        <div class="mb-3">
                                                            <label for="exampleFormControlInput1" class="form-label tille_content">Tille Blog</label>
                                                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                                                placeholder="Nhập Tên" />
                                                        </div>

                                                        <div class="mb-3">
                                                            <label for="exampleFormControlInput1"
                                                                class="form-label tille_content">Thể Loại</label>
                                                            <select class="form-select" aria-label="Default select example">
                                                                <option selected>Thể Loại Blog</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="formFileSm" class="form-label tille_content">Ảnh Bìa Blog</label>
                                                            <input class="form-control form-control-sm" id="formFileSm" type="file" />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="formFileSm" class="form-label tille_content">Ảnh Dùng Trong Blog</label>
                                                            <input class="form-control form-control-sm mb-3" id="formFileSm" type="file" />
                                                            <input class="form-control form-control-sm mb-3" id="formFileSm" type="file" />
                                                            <input class="form-control form-control-sm mb-3" id="formFileSm" type="file" />
                                                            <input class="form-control form-control-sm mb-3" id="formFileSm" type="file" />
                                                            <input class="form-control form-control-sm mb-3" id="formFileSm" type="file" />

                                                        </div>
                                                        
                                                        <div class="mb-3">
                                                            <label for="exampleFormControlTextarea1" class="form-label tille_content">Đoạn 1</label>
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                                placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleFormControlTextarea1" class="form-label tille_content">Đoạn 1</label>
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleFormControlTextarea1" class="form-label tille_content">Đoạn 2</label>
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleFormControlTextarea1" class="form-label tille_content">Đoạn 3</label>
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleFormControlTextarea1" class="form-label tille_content">Đoạn 4</label>
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleFormControlTextarea1" class="form-label tille_content">Đoạn 5</label>
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Thêm Giới Thiệu"></textarea>
                                                        </div>
                                                        
                    
                    
                    
                    
                                                        <hr class="my-4" />
                                                        <button type="button" class="btn btn-outline-secondary">Lưu Blog</button>
                    
                    
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