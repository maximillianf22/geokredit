import React from "react";
import {
  MixedWidget6,
  StatsWidget11,
  ListsWidget1,
  ListsWidget3,
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
            className="card-stretch card-stretch-half gutter-b h-270"
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
