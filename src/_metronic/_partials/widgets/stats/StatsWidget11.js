/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useEffect, useState } from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { useHtmlClassService } from "../../../layout";

export function StatsWidget11({ className, symbolShape, baseColor }) {
  const uiService = useHtmlClassService();
  const tabs = {
    tab1: "kt_tab_pane_3_1",
    tab2: "kt_tab_pane_3_2",
    tab3: "kt_tab_pane_3_3",
  };
  const [activeTab, setActiveTab] = useState(tabs.tab1);
  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray500: objectPath.get(
        uiService.config,
        "js.colors.gray.gray500"
      ),
      colorsGrayGray200: objectPath.get(
        uiService.config,
        "js.colors.gray.gray200"
      ),
      colorsGrayGray300: objectPath.get(
        uiService.config,
        "js.colors.gray.gray300"
      ),
      colorsThemeBaseSuccess: objectPath.get(
        uiService.config,
        `js.colors.theme.base.${baseColor}`
      ),
      colorsThemeLightSuccess: objectPath.get(
        uiService.config,
        `js.colors.theme.light.${baseColor}`
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily"),
    };
  }, [uiService, baseColor]);

  useEffect(() => {
    const element = document.getElementById("kt_stats_widget_11_chart");

    if (!element) {
      return;
    }

    const options = getChartOption(layoutProps);
    const chart = new ApexCharts(element, options);
    chart.render();
    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps]);

  return (
    <div className={`card card-custom ${className}`}>
      <div className="card-body p-0">
      <div className="card-toolbar tb-nav bg-secondary rounded">
        <ul className="nav nav-pills nav-pills-sm nav-dark-75">
          <li className="nav-item">
            <a
              className={`nav-link py-2 px-4 ${activeTab === tabs.tab1 &&
                "active"}`}
              data-toggle="tab"
              href={`#${tabs.tab1}`}
              onClick={() => setActiveTab(tabs.tab1)}
            >
              Mes
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link py-2 px-4 ${activeTab === tabs.tab2 &&
                "active"}`}
              data-toggle="tab"
              href={`#${tabs.tab2}`}
              onClick={() => setActiveTab(tabs.tab2)}
            >
              Semana
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link py-2 px-4 ${activeTab === tabs.tab3 &&
                "active"}`}
              data-toggle="tab"
              href={`#${tabs.tab3}`}
              onClick={() => setActiveTab(tabs.tab3)}
            >
              Dia
            </a>
          </li>
        </ul>
      </div>
        <div className="d-flex align-items-center justify-content-between px-8 pt-8 flex-grow-1">
            <span className="symbol-label h4 font-weight-bold">
                Meta mensual Colocados <br/>
                <small>$150.000.000</small><br/>
                <small>15 Dias restantes</small> <br/>
                <div className="d-flex flex-column w-100 mr-2">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="text-muted mr-2 font-size-sm font-weight-bold">
                      </span>
                      <span className="text-muted font-size-sm font-weight-bold">
                        65%
                      </span>
                    </div>
                    <div className="progress progress-xs w-100">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
            </span>
          <div className="d-flex flex-column text-right">
            <span className="text-dark-75 font-weight-bolder font-size-h3 mt-5">
              750,000,000$
            </span>
          </div>
        </div>
        <div
          id="kt_stats_widget_11_chart"
          className="card-rounded-bottom"
          style={{ height: "150px" }}
        ></div>
      </div>
    </div>
  );
}

function getChartOption(layoutProps) {
  const options = {
    series: [
      {
        name: "Creditos",
        data: [40, 40, 30, 30, 35, 35, 50],
      },
    ],
    chart: {
      type: "area",
      height: 150,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      opacity: 1,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [layoutProps.colorsThemeBaseSuccess],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Abr", "May", "Jun", "Aug", "Sep"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: layoutProps.colorsGrayGray300,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 55,
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: layoutProps.fontFamily,
      },
      y: {
        formatter: function(val) {
          return "$" + val + " Millones";
        },
      },
    },
    colors: [layoutProps.colorsThemeLightSuccess],
    markers: {
      colors: [layoutProps.colorsThemeLightSuccess],
      strokeColor: [layoutProps.colorsThemeBaseSuccess],
      strokeWidth: 3,
    },
  };
  return options;
}
