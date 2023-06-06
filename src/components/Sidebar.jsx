import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
export default class Sidebar extends React.Component{
    render(){
        return(
            
               
        <div class="col-2 sidebar">
            <ul class="list-danhmuc">
                <li class="danhmuc mt-3 mb-3"><NavLink to="/"><i class="bi bi-house"></i> Trang Chủ</NavLink></li>
                <li class="danhmuc mt-3 mb-3"><NavLink to="/banhang"><i class="bi bi-basket2-fill"></i> Quản Lý Đơn Hàng</NavLink></li>
                <li class="danhmuc mt-3 mb-3"><NavLink to="/products"><i class="bi bi-card-list"></i> Quản Lý Sản Phẩm</NavLink></li>
                <li class="danhmuc mt-3 mb-3"><NavLink to="/nhanvien"><i class="bi bi-people-fill"></i> Quản Lý Nhân Viên</NavLink></li>
                <li class="danhmuc mt-3 mb-3"><NavLink to="/chart"><i class="bi bi-coin"></i> Quản Lý Thu Nhập</NavLink></li>
                <li class="danhmuc mt-3 mb-3"><NavLink to="/blog"><i class="bi bi-bookmark-dash"></i> Blog</NavLink></li>
                


            </ul>
        </div>
        
            
        );
    }
}