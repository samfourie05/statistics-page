import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import RegistrationActivity from "../../components/Charts/RegistrationActivity";
import PartsUsedByCustomer from "../../components/Charts/PartsUsedByCustomer";
import CustomerActivity from "../../components/Charts/CustomerActivity";
import ActiveUsers from "../../components/Charts/ActiveUsers";
import Registrations from "../../components/Charts/Registrations";
import Walkers from "../../components/Charts/Walkers";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { useStateContext } from '../../context/ContextProvider';

import Footer from "../../components/Footer";

const CustomerRelated = () => {
  const { currentMode } = useStateContext();
  const [range, setRange] = React.useState("");
  const [fromValue, setFromValue] = React.useState<Date | null>(
    new Date("2022-07-19T21:11:54")
  );
  const [toValue, setToValue] = React.useState<Date | null>(
    new Date("2022-08-19T21:11:54")
  );

  const handleChange = (event: SelectChangeEvent) => {
    setRange(event.target.value as string);
    console.log("Date range changed! " + event.target.value);
  };

  const fromDatePickerChange = (newValue: Date | null) => {
    setFromValue(newValue);
  };

  const toDatePickerChange = (newValue: Date | null) => {
    setToValue(newValue);
  };

  return (
    <div className="bg-light-grey">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className=" text-white dark:text-gray-200 bg-light-purple dark:bg-dark-purple
        h-44 rounded-xl w-full p-8 pt-12 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"
        >
          <div className="flex justify-around items-center">
            <div>
              <p>Insights Portal - Statistics</p>
              <p className="text-3xl font-bold">Customer Related</p>
            </div>
            <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 150, bgcolor: "" }}
            >
              <InputLabel id="rangeSelectLabel">
                Select Range
              </InputLabel>
              <Select
                labelId="rangeSelectLabel"
                id="rangeSelect"
                value={range}
                onChange={handleChange}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      color: "red",
                      bgcolor: "pink",
                    },
                  },
                }}
              >
                <MenuItem value={7}>Last 7 Days</MenuItem>
                <MenuItem value={14}>Last 14 Days</MenuItem>
                <MenuItem value={30}>Last 30 Days</MenuItem>
                <MenuItem value={60}>Last 60 Days</MenuItem>
                <MenuItem value={90}>Last 90 Days</MenuItem>
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="From"
                inputFormat="MM/dd/yyyy"
                value={fromValue}
                onChange={fromDatePickerChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label="To"
                inputFormat="MM/dd/yyyy"
                value={toValue}
                onChange={toDatePickerChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <div className="flex gap-3" style={{ marginLeft: 12, marginRight: 12 }}>
        <div className="w-1/2 flex-wrap justify-center gap-1 rounded-xl bg-white dark:bg-secondary-dark-bg pt-5 pb-5">
          <h2 className="text-2xl font-bold dark:text-white text-center">
            Registration Activity
          </h2>
          <RegistrationActivity chartID={currentMode === 'Light' ? 'customerActivityLight' : 'customerActivityDark'}/>
        </div>
        <div className="w-1/2 justify-center gap-10 items-center rounded-xl bg-white dark:bg-secondary-dark-bg pt-5 pb-5">
          <h2 className="text-2xl font-bold dark:text-white text-center">
            Customer Activity
          </h2>
          <CustomerActivity  />
        </div>
      </div>
      {/* <div className="flex gap-3" style={{ marginLeft: 12, marginRight: 12, marginTop:12 }}>
        <div className="w-1/2 flex-wrap justify-center gap-1 rounded-xl bg-white dark:bg-secondary-dark-bg pt-5 pb-5">
          <h2 className="text-2xl font-bold dark:text-white text-center">
            Registrations
          </h2>
          <Registrations chartID={currentMode === 'Light' ? 'registrationsLight' : 'registrationsDark'} />
        </div>
        <div className="w-1/2 justify-center gap-10 items-center rounded-xl bg-white dark:bg-secondary-dark-bg pt-5 pb-5">
          <h2 className="text-2xl font-bold text-center dark:text-white">
            Active Users
          </h2>
          <ActiveUsers chartID={currentMode === 'Light' ? 'activeUsersLight' : 'activeUsersDark'} />
        </div>
      </div>
      <div className="flex gap-3 m-3">
        <div className="w-full flex-wrap justify-center gap-1 items-center rounded-xl bg-white dark:bg-secondary-dark-bg pt-5 pb-5">
          <h2 className="text-2xl font-bold dark:text-white text-center">Walkers</h2>
          <Walkers chartID={currentMode === 'Light' ? 'walkersLight' : 'walkersDark'} />
        </div>
      </div> */}
    </div>
  );
};

export default CustomerRelated;
