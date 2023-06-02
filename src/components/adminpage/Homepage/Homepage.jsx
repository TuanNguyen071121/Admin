import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default class HomePage extends React.Component{
    render(){
        return(
            <div className="col-10 content">
            <div className="row mt-5" id="content-list-card">
                <div className="col-3">
                    <div className="card" id="red">
                        <h5 className="card-header">Thông số</h5>
                        <div className="card-body">
                            <h5 className="card-title">Tổng Thu nhập</h5>
                            <p className="card-text money"><i className="bi bi-currency-dollar"></i>100000</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card blue" id="blue">
                        <h5 className="card-header">Thông số</h5>
                        <div className="card-body">
                            <h5 className="card-title">Tổng Thu nhập</h5>
                            <p className="card-text money"><i className="bi bi-currency-dollar"></i>100000</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" id="yellow">
                        <h5 className="card-header">Thông số</h5>
                        <div className="card-body">
                            <h5 className="card-title">Tổng Thu nhập</h5>
                            <p className="card-text money"><i className="bi bi-currency-dollar"></i>100000</p>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
        );
    }
}