/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useEffect } from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import { useHtmlClassService } from "../../../layout";

export function StatsWidget11({ className, symbolShape, baseColor }) {
  const uiService = useHtmlClassService();
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
        <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
            <span className="symbol-label h4 font-weight-bold">
                Meta mensual Colocados <br/>
                <small>$150.000.000</small><br/>
                <small>15 Dias restantes</small> <br/>
                <div className="d-flex flex-column w-100 mr-2">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="text-muted mr-2 font-size-sm font-weight-bold">
                        65%
                      </span>
                      <span className="text-muted font-size-sm font-weight-bold">
                        Progress
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
            <span className="text-dark-75 font-weight-bolder font-size-h3">
              750$
            </span>
            <span className="text-muted font-weight-bold mt-2">
              Weekly Income
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
        name: "Net Profit",
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
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep"],
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
          return "$" + val + " thousands";
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
