import React, { useState, useEffect } from "react";
import * as styled from "./CustomerRelated.styles";
import HorizontalBarChart from "../../../components/charts/horizontalBarChart/HorizontalBarChart";
import StatsTable from "../../../components/charts/table/StatsTable";
import { useAppDispatch, useAppSelector } from "../../../redux/reducers/hooks";
import { getRegistrationActivityData } from "../../../redux/reducers/pages/customerRelated/registrationActivityReducer";
import { getCustomerActivityData } from "../../../redux/reducers/pages/customerRelated/customerActivityReducer";

import Spinner from "react-spinners/PulseLoader";
import DropdownDateRangeSelectorData from "../../../components/dropdownSelector/dropdownDateRangeSelector";
import StartDateTimePicker from "../../../components/dateTimePickers/startDateTimePicker/startDateTimePicker";
import EndDateTimePicker from "../../../components/dateTimePickers/endDateTimePicker/endDateTimePicker";
import {
  setStartDate,
  setEndDate,
  setDateRange,
} from "../../../redux/reducers/filterDateReducer";
import { setDateAsString } from "../../../tsutil/setDateAsString";

const CustomerRelated = () => {
  const theme = useAppSelector((state) => state.colorTheme);

  const spinnerSpeed = 0.7;
  const spinnerSize = 15;

  const registrationActivityChartData = useAppSelector(
    (state) => state.registrationActivityData
  );
  const customerActivityChartData = useAppSelector(
    (state) => state.customerActivityData
  );
  const dispatch = useAppDispatch();

  //setting the end date for the default load
  const endDate = new Date();
  const endDateAsString = setDateAsString(endDate);
  //setting the start date for the default load
  const numberOfDaysToSubstract = 30;
  const startDateInTime = new Date().setDate(
    endDate.getDate() - numberOfDaysToSubstract
  );
  const startDate = new Date(startDateInTime);
  const startDateAsString = setDateAsString(startDate);

  useEffect(() => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
    dispatch(setDateRange("30"));
    dispatch(
      getRegistrationActivityData({
        startDate: startDateAsString,
        endDate: endDateAsString,
      })
    );
    dispatch(
      getCustomerActivityData({
        startDate: startDateAsString,
        endDate: endDateAsString,
      })
    );
  }, []);

  return (
    <styled.CustomerRelatedContainer>
      <styled.FilterHeaderContainer>
          <styled.FilterHeaderDiv theme={theme}>
            <styled.FilterHeader>
              <div>
                <styled.HeaderSubtitle>
                  Insights Portal - Statistics
                </styled.HeaderSubtitle>
                <styled.HeaderTitle>Customer Related</styled.HeaderTitle>
              </div>
              <div>
                <DropdownDateRangeSelectorData></DropdownDateRangeSelectorData>
              </div>
              <div>
                <StartDateTimePicker></StartDateTimePicker>
              </div>
              <div>
                <EndDateTimePicker></EndDateTimePicker>
              </div>
            </styled.FilterHeader>
          </styled.FilterHeaderDiv>
      </styled.FilterHeaderContainer>
      {/* Charts Displayed Below*/}
      {/* REGISTRATION ACTIVITY */}
      <styled.StatisticsBaseContainer>
        <styled.HalfStatisticsContainer theme={theme}>
          <styled.StatisticsTitle theme={theme}>
            Registration Activity
          </styled.StatisticsTitle>
          {registrationActivityChartData.loading && (
            <styled.SpinnerDiv>
              <Spinner
                color={theme.primaryBackgroundColor}
                size={spinnerSize}
                speedMultiplier={spinnerSpeed}
              />
            </styled.SpinnerDiv>
          )}
          {!registrationActivityChartData.loading && (
            <HorizontalBarChart
              data={registrationActivityChartData.chartData}
              loading={registrationActivityChartData.loading}
              chartID={
                theme.currentTheme === "light"
                  ? "lightRegistrationActivity"
                  : "darkRegistrationActivity"
              }
            />
          )}
        </styled.HalfStatisticsContainer>
        {/*CUSTOMER ACTIVITY */}
        <styled.HalfStatisticsContainer theme={theme}>
          <styled.StatisticsTitle theme={theme}>
            Customer Activity
          </styled.StatisticsTitle>
          {customerActivityChartData.loading && (
            <styled.SpinnerDiv>
              <Spinner
                color={theme.primaryBackgroundColor}
                size={spinnerSize}
                speedMultiplier={spinnerSpeed}
              />
            </styled.SpinnerDiv>
          )}
          {!customerActivityChartData.loading && (
            <StatsTable
              data={customerActivityChartData}
              chartID={
                theme.currentTheme === "light"
                  ? "lightCustomerActivity"
                  : "darkCustomerActivity"
              }
            />
          )}
        </styled.HalfStatisticsContainer>
      </styled.StatisticsBaseContainer>
    </styled.CustomerRelatedContainer>
  );
};

export default CustomerRelated;
