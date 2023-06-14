import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from "../../../context/UserContext";
import { NavLink } from "react-router-dom";
import {listBlog} from "../../../services/productAction";
import db from "../../../db";
const BlogPage =(props)=>{
         const { state, dispatch } = React.useContext(UserContext);
              const [form_product,setform_product]=useState({});
            const handleInput=(event)=>{
    setform_product({
        ...form_product,
        [event.target.name]: event.target.value
    });
}

    const [blogs, setBlog]=useState([]);
        useEffect(()=>{
    refresh();
    },[])
const deleteProduct = async (id) => {
    const conn = db.collection("blog").doc(id);
    await conn.delete();  
    alert("Xóa Blog thành công!")
    refresh();  

}
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
                                                                                    const conn = db.collection("blog").doc(id);
                                                                                    await conn.update(form_product);  
                                                                                    alert("lưu thành công")
                                                                                    refresh();  
                                                                            }} >
                                                            
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Tille Blog</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" name="title" onChange={handleInput}
                                                                placeholder={e.title} />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label tille_content">Mã Blog</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" name="code" onChange={handleInput}
                                                                placeholder={e.code} />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1"
                                                                className="form-label tille_content">Thể Loại</label>
                                                            <input type="text" className="form-control" id="exampleFormControlInput1" name="typeblog" onChange={handleInput}
                                                                placeholder={e.typeblog} />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Ảnh Bìa Blog</label>
                                                            <input className="form-control form-control-sm" name="avatar" id="formFileSm" type="text" onChange={handleInput} placeholder={e.avatar} />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="formFileSm" className="form-label tille_content">Ảnh Dùng Trong Blog</label>
                                                             <input className="form-control form-control-sm" name="picture1" id="formFileSm" type="text" onChange={handleInput} placeholder={e.picture1}  />
                                                             <input className="form-control form-control-sm" name="picture2" id="formFileSm" type="text" onChange={handleInput} placeholder={e.picture2} />
                                                              <input className="form-control form-control-sm" name="picture3" id="formFileSm" type="text" onChange={handleInput} placeholder={e.picture3} />
                                                               <input className="form-control form-control-sm" name="picture4" id="formFileSm" type="text" onChange={handleInput} placeholder={e.picture4} />
                                                                <input className="form-control form-control-sm" name="picture5" id="formFileSm" type="text" onChange={handleInput} placeholder={e.picture5} />

                                                        </div>
                                                        
                                             
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Đoạn 1</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="par1" placeholder={e.par1} onChange={handleInput} ></textarea>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Đoạn 2</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="par2"  placeholder={e.par2} onChange={handleInput} ></textarea>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Đoạn 3</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="par3"  placeholder={e.par3} onChange={handleInput} ></textarea>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Đoạn 4</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="par4" placeholder={e.par4} onChange={handleInput}></textarea>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlTextarea1" className="form-label tille_content">Đoạn 5</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="par5"  placeholder={e.par5} onChange={handleInput}></textarea>
                                                        </div>
                                                        
                    
                    
                    
                    
                                                        <hr className="my-4" />
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
                                                        
                                                        </div>
                                                            )
                                                        })
                                                        }
                                                    

                   
        </div>
            
        );
    }
    export default BlogPage;