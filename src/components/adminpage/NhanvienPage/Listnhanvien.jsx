import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from "../../../context/UserContext";
import { NavLink } from "react-router-dom";
import {listStaff} from "../../../services/productAction";
const Listnhanvien =(props)=>{
     const { state, dispatch } = React.useContext(UserContext);
    const [staffs, setStaff]=useState([]);
        useEffect(()=>{
    refresh();
    },[])

const refresh=async()=>{
  const d=await listStaff();

  setStaff(d)


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
                                                        <h6 className="mb-0 text-muted">3 items</h6>
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
                                                            <h6 className="text-black mb-0">{e.address}</h6>
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
                                                            <a href="#!" className="text-muted"><i class="bi bi-pencil-square"></i></a>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <a href="#!" className="text-muted"><i className="bi bi-x"></i></a>
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