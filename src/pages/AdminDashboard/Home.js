import React, { useRef } from "react";
import "./Home.scss";
import { BsFillArchiveFill, BsPeopleFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import Nav from "./Nav";
import ApexCharts from "react-apexcharts";

const Home = () => {
  const chartRef = useRef(null);
  const dataChartWeek = {
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 150], // Sample prices
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

  const dataChartMonth = {
    data: [10, 41, 35, 51, 49, 62, 69, 91], // Sample prices
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
  const optionsbyWeek = {
    series: [
      {
        name: "Tổng tiền",
        data: dataChartWeek.data,
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
      text: "Thống kê theo tháng",
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
      categories: dataChartWeek.categories,
    },
  };

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
      text: "Thống kê theo năm",
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
          <h1>20.000.000đ</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Khách Hàng</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>20</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Sản phẩm</h3>

            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>102</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Đang chờ duyệt</h3>
            <MdOutlineBorderColor className="card-icon" />
          </div>
          <h1>43</h1>
        </div>
      </div>
      <h2 className="mt-8 font-semibold text-center text-black">
        Thống kê doanh thu theo tháng và năm
      </h2>
      <div className="grid items-center w-full grid-cols-7 gap-4 mt-4">
        <div id="chartByWeek" ref={chartRef} className="col-span-5">
          <ApexCharts
            options={optionsbyWeek}
            series={optionsbyWeek.series}
            type="line"
            height={350}
          />
        </div>
        {/* <div id="chartByMonth" ref={chartRef} className="col-span-1">
          <ApexCharts
            options={optionsbyMonth}
            series={optionsbyMonth.series}
            type="line"
            height={350}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
