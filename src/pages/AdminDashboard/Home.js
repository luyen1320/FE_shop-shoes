import React, { useRef } from "react";
import "./Home.scss";
import { BsFillArchiveFill, BsPeopleFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import Nav from "./Nav";
import ApexCharts from "react-apexcharts";

const Home = () => {
  const chartRef = useRef(null);
  const dataChart = {
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2], // Sample prices
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
  const options = {
    series: [
      {
        name: "sales",
        data: dataChart.data,
      },
    ],
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories: dataChart.categories,
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      // tooltip: {
      //   enabled: true,
      // },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val;
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: "",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#000",
      },
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
      <div id="chart" ref={chartRef}>
        <ApexCharts
          options={options}
          series={options.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default Home;
