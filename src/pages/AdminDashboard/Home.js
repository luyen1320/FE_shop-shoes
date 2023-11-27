import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import { BsFillArchiveFill, BsPeopleFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import Nav from "./Nav";
import ApexCharts from "react-apexcharts";
import axios from "axios";
import { getDataManageAdmin } from "../../service/productService";
import { toast } from "react-toastify";

const Home = () => {
  function formatDay(item) {
    const date = new Date(item.day);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Tháng trong JavaScript đếm từ 0
    const formattedDate = `${day}/${month}`;

    return formattedDate;
  }
  const dataChartMonthDf = {
    data: [10], // Sample prices
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };
  const [dataManage, setDataManage] = useState([]);
  const [dataChartMonth, setDataChartMonth] = useState(dataChartMonthDf);

  const fectchDtManage = async () => {
    let res = await getDataManageAdmin();
    if (res && res.errCode === 0) {
      setDataManage(res.DT);
      setDataChartMonth({
        data: res.DT?.monthlyRevenue?.map((item) => item.totalMoney),
        categories: res.DT?.monthlyRevenue?.map((item) => formatDay(item)),
      });
    } else {
      toast.error(res.errMessage);
    }
  };
  useEffect(() => {
    fectchDtManage();
  }, []);
  console.log(dataChartMonth);
  const chartRef = useRef(null);

  const optionsbyMonth = {
    series: [
      {
        name: "Tổng tiền",
        data: dataChartMonth.data,
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Thống kê theo ngày",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },

      theme: "dark",
    },
    xaxis: {
      categories: dataChartMonth.categories,
    },
  };

  return (
    <div className="home auto">
      <Nav />

      <div className="main-card">
        <div className="card">
          <div className="card-inner">
            <h3>Tổng doanh thu</h3>
            <FaMoneyBillAlt className="card_icon" />
          </div>
          <h1>{dataManage?.totalRevenue?.toLocaleString("vi-VN")} đ</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Khách Hàng</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{dataManage?.totalCustomers}</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Sản phẩm</h3>

            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{dataManage?.totalProducts}</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Đang chờ duyệt</h3>
            <MdOutlineBorderColor className="card-icon" />
          </div>
          <h1>{dataManage?.totalOrdersPending}</h1>
        </div>
      </div>
      <h2 className="mt-8 font-semibold text-center text-black">
        Thống kê doanh thu theo tháng và năm
      </h2>
      <div className="grid items-center w-full grid-cols-7 gap-4 mt-4">
        <div id="chartByMonth" ref={chartRef} className="col-span-5">
          <ApexCharts
            options={optionsbyMonth}
            series={optionsbyMonth.series}
            type="line"
            height={350}
          />
        </div>
        <div className="main-card !col-span-2 !flex !flex-col !mt-0 !mb-12">
          <div className="flex-1 !flex flex-col gap-2 card">
            <div className="card-inner">
              <h3>Tổng doanh tuần</h3>
              <FaMoneyBillAlt className="card_icon" />
            </div>
            <h1>{dataManage?.totalRevenueWeek?.toLocaleString("vi-VN")} đ</h1>
          </div>
          <div className="flex-1 !flex flex-col gap-2 card">
            <div className="card-inner">
              <h3>Tổng doanh năm</h3>
              <BsPeopleFill className="card_icon" />
            </div>
            <h1>{dataManage?.totalRevenueYear?.toLocaleString("vi-VN")} đ</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
