import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from "../../../context/UserContext";
import { NavLink } from "react-router-dom";
import {listBlog} from "../../../services/productAction";
const BlogPage =(props)=>{
         const { state, dispatch } = React.useContext(UserContext);
    const [blogs, setBlog]=useState([]);
        useEffect(()=>{
    refresh();
    },[])

const refresh=async()=>{
  const f=await listBlog();

  setBlog(f)


}
        return(
            
       <div className="col-10 content">
            <div className="row mt-3 mb-3 header_content">
                <div className="col-4"> </div>
                <div className="col-4 click_content"> <NavLink to="/addblog">Thêm Blog</NavLink></div> 
                <div className="col-4"></div>
            </div>

                    {
                                                        blogs.map((e,k) => {
                                                            return(
                                                        <div className="card mb-3">
                                                        
                                                        <div className="card-body row">
                                                            <div className="col-2">
                                                                <img  className="card-img-top" src={e.avatar} alt="Card image cap"/>
                                                            </div>
                                                            <div className="col-8">
                                                            <h5 className="card-title">{e.title}</h5>
                                                            <p className="card-text">{e.par1}</p>
                                                            <p className="card-text"><small className="text-muted">Last updated {e.date}</small></p>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <a href="#!" className="text-muted"><i class="bi bi-pencil-square"></i></a>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <a href="#!" className="text-muted"><i className="bi bi-x"></i></a>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                            )
                                                        })
                                                        }
                                                    

                   
        </div>
            
        );
    }
    export default BlogPage;