import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import {listProducts} from "../../../services/productAction";
const ListProductPage =(props)=>{
    const { state, dispatch } = React.useContext(UserContext);
    const [products, setProducts]=useState([]);
    useEffect(()=>{
  refresh();
},[])

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
                                                        <h6 className="mb-0 text-muted">3 items</h6>
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
            
                                                            <NavLink to="/Editproduct " className="text-muted"><i class="bi bi-pencil-square"></i></NavLink>
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
    export default ListProductPage;
