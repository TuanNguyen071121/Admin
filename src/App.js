import React, { useContext, useEffect, useReducer } from "react";
import { UserContext, UserProvider } from './context/UserContext';
import logo from './logo.svg';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import store from "./context/store";
import reducer from "./context/productReducer"



import ListProductPage from './components/adminpage/ProductPage/ListProductPage';
import Addproduct from './components/adminpage/ProductPage/Addproduct';
import BanHang from './components/adminpage/BanHang/BanHang';
import Listnhanvien from './components/adminpage/NhanvienPage/Listnhanvien';
import Addnhanvien from './components/adminpage/NhanvienPage/Addnhanvien';
import HomePage from './components/adminpage/Homepage/Homepage';
import Chart from './components/adminpage/ThuNhapPage/Chart';
import BlogPage from './components/adminpage/BlogPage/Blogpage';
import AddBlog from './components/adminpage/BlogPage/Addblog';
import Editproduct from './components/adminpage/ProductPage/Editproduct';
import Editnhanvien from './components/adminpage/NhanvienPage/Editnhanvien';
import EditBlog from './components/adminpage/BlogPage/Editblog';


function App() {
  const localState = localStorage.getItem("state")
    ? JSON.parse(localStorage.getItem("state"))
    : store;
  const [state, dispatch] = useReducer(reducer, localState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <UserProvider value={{ state, dispatch }}>
      <>
           <div>
    <Header></Header>
    <div className='row'>
      <Sidebar> </Sidebar>
      <Routes>
        <Route path='/products' element={<ListProductPage></ListProductPage>}/>
        <Route path='/banhang' element={<BanHang></BanHang>}/>
        <Route path='/products' element={<ListProductPage></ListProductPage>}/>
        <Route path='/addproduct' element={<Addproduct></Addproduct>}/>
        <Route path='/editproduct' element={<Editproduct></Editproduct>}/>
        <Route path='/nhanvien' element={<Listnhanvien></Listnhanvien>}/>
        <Route path='/addnhanvien' element={<Addnhanvien></Addnhanvien>}/>
        <Route path='/editnhanvien' element={<Editnhanvien></Editnhanvien>}/>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='/chart' element={<Chart></Chart>}/>
        <Route path='/blog' element={<BlogPage></BlogPage>}/>
        <Route path='/addblog' element={<AddBlog></AddBlog>}/>
        <Route path='/editblog' element={<EditBlog></EditBlog>}/>
      </Routes>
    </div>

    
   </div>
      </>
    </UserProvider>
  );
}

export default App;