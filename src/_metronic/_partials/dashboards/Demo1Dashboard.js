import React from "react";
import {
  MixedWidget1,
  MixedWidget4,
  MixedWidget14,
  MixedWidget6,
  ListsWidget9,
  StatsWidget11,
  StatsWidget12,
  ListsWidget1,
  AdvanceTablesWidget2,
  AdvanceTablesWidget4,
  ListsWidget3,
  ListsWidget4,
  ListsWidget8,
} from "../widgets";
export function Demo1Dashboard() {
  return (
    <>
    {/* begin::Row */}
      <div className="row">
        <div className="col-xl-4">
          <MixedWidget6 className="gutter-b card-stretch" />
        </div>
        <div className="col-xl-8">
          <StatsWidget11
            className="card-stretch card-stretch-half gutter-b h-255"
            symbolShape="circle"
            baseColor="success" 
          />
          <div className="row">
            <div className="col-lg-6 col-xxl-6 order-1 order-xxl-2">
              <ListsWidget1 className="card-stretch gutter-b" />
            </div>
            <div className="col-lg-6 col-xxl-6 order-1 order-xxl-2">
              <ListsWidget3 className="card-stretch gutter-b" />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
