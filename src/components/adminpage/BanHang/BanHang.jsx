import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from "../../../context/UserContext";
import { NavLink } from "react-router-dom";
import {listOrder,listProducts} from "../../../services/productAction";
const Order =(props)=>{
     const { state, dispatch } = React.useContext(UserContext);
    const [order,setOrder]=useState([]);
    const [products,setProducts]=useState([]);
        useEffect(()=>{
    refresh();
    },[])
    
    
const refresh=async()=>{
  const f=await listOrder();
  const g=await listProducts();
    setProducts(g)
  setOrder(f)
}

        return(
            
            <div className="col-10 content">
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
                                                        <h1 className="fw-bold mb-0 text-black"> Danh Sách Đơn Hàng</h1>
                                                        <h6 className="mb-0 text-muted">3 items</h6>
                                                    </div>
                                                    <hr className="my-4"/>
                                                    {
                                                        order.map((e,k) => {
                                                            console.log(e.products)
                                                            return(
                                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                        
                                                        <div className="col">
                                                            <h6 className="text-muted">Mã đơn hàng</h6>
                                                            <h6 className="text-black mb-0">{e.id}</h6>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="text-muted">Tên khách hàng</h6>
                                                            <h6 className="text-black mb-0">{e.name}</h6>
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
                                                            <h6 className="text-muted">mail</h6>
                                                            <h6 className="text-black mb-0">{e.mail}</h6>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="text-muted">Tổng thanh toán</h6>
                                                            <h6 className="text-black mb-0">{e.price}</h6>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="text-muted">Trạng thái</h6>
                                                            <select class="col form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                            <option selected>{e.status}</option>
                                                                    <option value="1">Xác nhận</option>
                                                                        <option value="2">Giao Hàng</option>
                                                                        <option value="3">Hủy</option>
                                                        </select>
                                                        </div>
                                                        
                                                        
                                                        <button type="button" class="col-1 btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i class=" bi bi-pencil-square"></i>
                                                        </button>
                                                        
                                                        <div style={{minWidth:"1000px !important"}} class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div  class="modal-dialog modal-dialog-centered">
                                                            <div class="modal-content"  >
                                                            <div class="modal-header">
                                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Thông tin sản phẩm</h1>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                {/* {
                                                                e?.products.map((t,l) => {
                                                                    console.log(e)
                                                                 return(
                                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                                        <img src={t.thumbnail}
                                                                            className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                                        <h6 className="text-muted">Tên sản phẩm</h6>
                                                                        <h6 className="text-black mb-0">{t.name}</h6>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2 ">
                                                                        <h6 className="text-muted">Số Lượng</h6>
                                                                        <h6 className="text-black mb-0">{t.qty}</h6>
                                                                    </div>
                                                                </div>
                                                                   )
                                                                      })
                                                                    } */}
                                                            </div>
                                                            
                                                            </div>
                                                        </div>
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
export default Order;