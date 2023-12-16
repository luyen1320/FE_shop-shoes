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
import { Table } from "react-bootstrap";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import format from "date-fns/format";

const Home = () => {
  const today = new Date();
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
  const [selectedRange, setSelectionRange] = useState([
    {
      startDate: today,
      endDate: today,
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

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

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
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

  const handleSelect = (ranges) => {
    // Kiểm tra nếu endDate là ngày trong tương lai thì đặt lại thành ngày hôm nay
    if (ranges.selection.endDate > today) {
      ranges.selection.endDate = today;
    }

    // Kiểm tra nếu startDate là ngày sau tháng hiện tại thì đặt lại thành ngày đầu tháng
    if (ranges.selection.startDate > today) {
      ranges.selection.startDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      );
    }

    setSelectionRange([ranges.selection]);
  };

  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
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
              <h3>Doanh thu tuần</h3>
              <FaMoneyBillAlt className="card_icon" />
            </div>
            <h1>{dataManage?.totalRevenueWeek?.toLocaleString("vi-VN")} đ</h1>
          </div>
          <div className="flex-1 !flex flex-col gap-2 card">
            <div className="card-inner">
              <h3>Doanh thu tháng</h3>
              <BsPeopleFill className="card_icon" />
            </div>
            <h1>{dataManage?.totalRevenueYear?.toLocaleString("vi-VN")} đ</h1>
          </div>
        </div>
      </div>

      <div className="date-picker">
        <div className="date-range">
          <input
            value={`${format(
              selectedRange[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(selectedRange[0].endDate, "MM/dd/yyyy")}`}
            readOnly
            className="inputBox"
            onClick={() => setOpen((open) => !open)}
          />

          <div className="date" ref={refOne}>
            {open && (
              <DateRange
                ranges={selectedRange}
                onChange={handleSelect}
                singleDateRange={true}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                months={1}
                direction="horizontal"
                className="calendarElement"
              />
            )}
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Mã</th>
              <th>Khách hàng</th>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
