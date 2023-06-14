import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.css";
import UserContext from "../../../context/UserContext";
import { Link, NavLink } from "react-router-dom";
import { get, listOrder, listProducts, listStaff } from "../../../services/productAction";
import db from "../../../db";

const Homepage = () => {
  const data = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"],
    datasets: [
      {
        label: "Doanh Thu",
        data: [33, 53, 85, 41, 44, 65, 60],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
      const [staffs, setStaff]=useState([]);
        useEffect(()=>{
    refresh();
    },[])


  const [order, setOrder] = useState([]);
  const [searchID, setSearchID] = useState("");
  const [statusFilter, setStatusFilter] = useState("");


  function filterOrders(orders, searchID, statusFilter) {
    return orders.filter((o) => {
      const idMatch = o.id.toString().includes(searchID);
      const statusMatch = o.status.includes(statusFilter);
      return idMatch && statusMatch;
    });
  }
  const filteredOrders = filterOrders(order, searchID, statusFilter);
  const total = order.reduce((accumulator, product) => {
  return accumulator + product.price;
}, 0);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    const f = await get();
    const g = await listProducts();
      const d=await listStaff();

  setStaff(d)
    setProducts(g);
    setOrder(f);
  };

  const updateOrderStatus = async (id, newStatus) => {
    try {
      const conn = db.collection("order").doc(id);
      conn.update({
        status: newStatus,
      });

      // Cập nhật danh sách đơn hàng trong state
      setOrder((prevOrders) =>
        prevOrders.map((order) => {
          if (order.id === id) {
            return { ...order, status: newStatus };
          } else {
            return order;
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
  
  };
  return (
    <div className="col-10 content">
      <div className="row mt-5" id="content-list-card">
        <div className="col-3">
          <div className="card" id="red">
            <h5 className="card-header">Đơn hàng</h5>
            <div className="card-body">
              <p className="card-text money">
                <i className="bi "></i>{order.length}
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card blue" id="blue">
            <h5 className="card-header">Doanh thu</h5>
            <div className="card-body">
              <p className="card-text money">
                <i className="bi bi-currency-dollar"></i>{total}
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" id="yellow">
            <h5 className="card-header">Nhân sự</h5>
            <div className="card-body">
              <p className="card-text money">
                <i className="bi "></i>{staffs.length}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Line data={data} />
      <h4>Đơn hàng gần nhất</h4>
      {filteredOrders.slice(0, 3).map((e, k) => {
        const renderOption = (value, label) => {
          // Kiểm tra nếu trạng thái đơn hàng là "6" thì chỉ hiển thị tùy chọn "Hủy"
          if (e.status === "6" && value !== "6") {
            return null;
          }

          // Kiểm tra nếu trạng thái đơn hàng là "5" thì chỉ hiển thị tùy chọn "Hoàn thành"
          if (e.status === "5" && value !== "5") {
            return null;
          }

          // Kiểm tra nếu trạng thái đơn hàng là "1" hoặc "2" thì chỉ hiển thị tùy chọn "Chờ xác nhận" hoặc "Đã xác nhận"
          if (
            (e.status === "1" || e.status === "2") &&
            (value === "1" || value === "2")
          ) {
            return (
              <option value={value} key={value}>
                {label}
              </option>
            );
          }

          // Hiển thị tất cả các tùy chọn khác
          return (
            <option value={value} key={value}>
              {label}
            </option>
          );
        };

        return (
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
              <select
                className="col form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                value={e.status}
                onChange={(event) => {
                  const newStatus = event.target.value;
                  // Tạo ra đối tượng đơn hàng mới với trạng thái mới
                  const updatedOrder = { ...e, status: newStatus };
                  // Cập nhật đơn hàng trong state
                  setOrder((prevOrders) =>
                    prevOrders.map((order) =>
                      order.id === e.id ? updatedOrder : order
                    )
                  );
                  // Cập nhật trạng thái của đơn hàng trên server
                  updateOrderStatus(e.id, newStatus);
                }}
              >
                {/* {renderOption("1", "Chờ xác nhận")}
                                                                            {renderOption("2", "Đã xác nhận")} */}
                {e.status === "1" && renderOption("1", "Chờ xác nhận")}
                {e.status === "1" && renderOption("2", "Đã xác nhận")}
                {e.status === "2" && renderOption("2", "Đã xác nhận")}
                {e.status === "2" && renderOption("3", "Đang giao hàng")}
                {e.status === "2" && renderOption("6", "Hủy")}
                {e.status === "3" && renderOption("3", "Đang giao hàng")}
                {e.status === "3" && renderOption("4", "Đã giao hàng")}
                {e.status === "4" && renderOption("4", "Đã giao hàng")}

                {/* {renderOption("3", "Đang Giao Hàng")}
                                                                            {renderOption("4", "Đã Giao Hàng")} */}
                {e.status === "4" && renderOption("5", "Hoàn thành")}
                {e.status === "5" && renderOption("5", "Hoàn thành")}
                {e.status === "1" && renderOption("6", "Hủy")}
                {e.status === "6" && renderOption("6", "Hủy")}
              </select>
            </div>

            <button
              type="button"
              className="col-1 btn btn-link"
              data-bs-toggle="modal"
              data-bs-target={`#exampleModal-${e.id}`}
            >
              <i className=" bi bi-pencil-square"></i>
            </button>

            <div
              className="modal fade"
              id={`exampleModal-${e.id}`}
              tabIndex="-1"
              aria-labelledby={`exampleModalLabel-${e.id}`}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Thông tin sản phẩm của đơn hàng {e.id}
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {e?.products &&
                      e?.products.map((item) => (
                        <div key={item.id}>
                          {products.map((product) => {
                            if (product.id === item.id) {
                              return (
                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                  <div className="col-2">
                                    <img
                                      src={product.thumbnail}
                                      className="img-fluid rounded-3"
                                      alt="Cotton T-shirt"
                                    />
                                  </div>
                                  <div className="col">
                                    <h6 className="text-muted">Tên sản phẩm</h6>
                                    <h6 className="text-black mb-0">
                                      {product.name}
                                    </h6>
                                  </div>
                                  <div className="col-3">
                                    <h6 className="text-muted">Số Lượng</h6>
                                    <h6 className="text-black mb-0">
                                      {item.qty}
                                    </h6>
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Link to="/banhang">Xem thêm</Link>
      </div>
  );
};

export default Homepage;
