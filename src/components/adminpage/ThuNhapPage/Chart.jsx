import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default class Chart extends React.Component{
    render(){
        return(
            <div className="col-10 content">
            
                      <div class="row mt-3 mb-3">
                <div class="col-6">
                    <div class="pie">
                <div class="html">Lợi Nhuận</div>
                <div class="css">Giá Vốn</div>
            </div>
            <h2 class="chart-text">Lợi Nhuận: 19%</h2>
            <h2 class="chart-text">Giá Vốn: 81%</h2>

        </div>
                <div class="col-6 mt-5">

                    <div class="main-container">
                        <div class="year-stats">
                            <div class="month-group">
                                <div class="bar h-100"></div>
                                <p class="month">Jan</p>
                            </div>
                            <div class="month-group">
                                <div class="bar h-50"></div>
                                <p class="month">Feb</p>
                            </div>
                            <div class="month-group">
                                <div class="bar h-75"></div>
                                <p class="month">Mar</p>
                            </div>
                            <div class="month-group">
                                <div class="bar h-25"></div>
                                <p class="month">Apr</p>
                            </div>
                            <div class="month-group selected">
                                <div class="bar h-100"></div>
                                <p class="month">May</p>
                            </div>
                            <div class="month-group">
                                <div class="bar h-50"></div>
                                <p class="month">Jun</p>
                            </div>
                            <div class="month-group">
                                <div class="bar h-75"></div>
                                <p class="month">Jul</p>
                            </div>
                            <div class="month-group">
                                <div class="bar h-25"></div>
                                <p class="month">Aug</p>
                            </div>
                            <div class="month-group">
                                <div class="bar h-50"></div>
                                <p class="month">Sep</p>
                            </div>
                            <div class="month-group">
                                <div class="bar h-75"></div>
                                <p class="month">Oct</p>
                            </div>
                            <div class="month-group">
                                <div class="bar h-25"></div>
                                <p class="month">Nov</p>
                            </div>
                            <div class="month-group">
                                <div class="bar h-100"></div>
                                <p class="month">Dez</p>
                            </div>
                        </div>
                    
                        <div class="stats-info">
                            <div class="graph-container">
                                <div class="percent">
                                    <svg viewBox="0 0 36 36" class="circular-chart">
                                        <path class="circle" stroke-dasharray="100, 100" d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path class="circle" stroke-dasharray="85, 100" d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path class="circle" stroke-dasharray="60, 100" d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path class="circle" stroke-dasharray="30, 100" d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                </div>
                                <p>Total: $2075</p>
                            </div>
                    
                            <div class="info">
                                <p>Tổng Doanh Thu 2023 <br /><span>Tất Cả Sản Phẩm</span></p>
                                <p>Cửa Hàng: <span>1075 $</span></p>
                                <p>Online: <span>1000 $</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        );
    }
}