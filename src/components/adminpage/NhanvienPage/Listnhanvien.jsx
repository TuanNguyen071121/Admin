import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from "../../../context/UserContext";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {listStaff} from "../../../services/productAction";
import db from "../../../db";
const Listnhanvien =(props)=>{
     const { state, dispatch } = React.useContext(UserContext);
     const [form_product,setform_product]=useState({});
    const [staffs, setStaff]=useState([]);
        useEffect(()=>{
    refresh();
    },[])

    const handleInput=(event)=>{
    setform_product({
        ...form_product,
        [event.target.name]: event.target.value
    });
}

const refresh=async()=>{
  const d=await listStaff();

  setStaff(d)


}
const deleteProduct = async (id) => {
    const conn = db.collection("staff").doc(id);
    await conn.delete();  
    alert("Xóa nhân viên thành công!")
    refresh();  
}
        return(
            
                        <div className="col-10 content">
            <div className="row mt-3 mb-3 header_content">
                <div className="col-4"> </div>
                <div className="col-4 click_content"> <NavLink to="/addnhanvien">Thêm Nhân Viên</NavLink></div> 
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
                                                        <h1 className="fw-bold mb-0 text-black"> Danh Sách Nhân Viên</h1>
                                                        <h6 className="mb-0 text-muted">{staffs.length} items</h6>
                                                    </div>
                                                    <hr className="my-4"/>
                                                    {
                                                        staffs.map((e,k) => {
                                                            return(
                                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img src={e.thumbnail}
                                                                className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="text-muted">Tên</h6>
                                                            <h6 className="text-black mb-0">{e.name}</h6>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="text-muted">Tuổi</h6>
                                                            <h6 className="text-black mb-0">{e.age}</h6>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="text-muted">SĐT</h6>
                                                            <h6 className="text-black mb-0">{e.phone}</h6>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="text-muted">Địa Chỉ</h6>
                                                            <h6 className="text-black mb-0">{e.add}</h6>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="text-muted">Lương</h6>
                                                            <h6 className="text-black mb-0">{e.salary}</h6>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="text-muted">Chức Vụ</h6>
                                                            <h6 className="text-black mb-0">{e.position}</h6>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <button type="button"className="col-1 btn btn-link" data-bs-toggle="modal" data-bs-target={`#exampleModal-${e.id}`}>
                                                                <i className=" bi bi-pencil-square"></i>
                                                        </button>
                                                        <div  className="modal fade" id={`exampleModal-${e.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${e.id}`} aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-scrollable">
                                                            <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Sửa thông tin nhân viên </h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                        <form method="post" onSubmit={async(event)=> {
                                                                                 event.preventDefault();
                                                                                 
                                                                                    const id = e.id;
                                                                                    const conn = db.collection("staff").doc(id);
                                                                                    await conn.update(form_product);  
                                                                                    alert("Lưu thành công!");
                                                                                    refresh();  
                                                                            }} >
                                                            
                                                       
                                                    <hr className="my-4"/>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Tên Nhân Viên</label>
                                                            <input type="text" className="form-control" onChange={handleInput} id="exampleFormControlInput1" name="name" placeholder={e.name}/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Mã Nhân Viên</label>
                                                            <input type="text" className="form-control" onChange={handleInput} id="exampleFormControlInput1" name="code" placeholder={e.code}/>
                                                        </div>
                                                        
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Địa chỉ</label>
                                                            <input type="text" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="add" placeholder={e.add}/>
                                                        </div>
                                                        
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Tuổi</label>
                                                            <input type="number" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="age" placeholder={e.age}/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">SĐT</label>
                                                            <input type="number" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="phone" placeholder={e.phone}/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Lương</label>
                                                            <input type="number" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="salary" placeholder={e.salary}/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Ảnh nhân viên</label>
                                                            <input type="text" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="thumbnail" placeholder={e.thumbnail}/>
                                                        </div>
                                                        
                                                        
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content" >Chức Vụ</label>
                                                            <input type="text" onChange={handleInput} className="form-control" id="exampleFormControlInput1" name="position" placeholder={e.position}/>
                                                        </div>
                                                        
                                                    <hr className="my-4"/>
                                                        <button type="sumbit" className="btn btn-outline-secondary" data-bs-dismiss="modal">Lưu</button>
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
export default Listnhanvien;