import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default class Header extends React.Component{
    render(){
        return(
            <section>
                <div className="row header">
        <div className="col-2 logo"></div>
        <div className="col-4 mb-2">
            <div className="row mt-2">
                <div className="col-1 icon mt-1"><i className="bi bi-search"></i></div>
                <div className="col-5"><input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search"/></div>
            </div>
            

                
                

        </div>
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="col-1"></div>
        <div className="col-1 mt-2"><i className="bi bi-gear icon mt-1"></i>  <i className="bi bi-person-circle icon mt-1"></i></div>
        
    </div>
            </section>
        );
    }
}