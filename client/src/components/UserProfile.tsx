import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { userProfileData } from "../data/scripts/userProfileData";
import { useStateContext } from "../context/ContextProvider";
import companyLogo from "../data/images/logo-light.png";
import companyDarkLogo from "../data/images/logo-dark.png";

const UserProfile = () => {
  const { currentColor, setColor, setMode, currentMode, setThemeSettings } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={currentMode ==='Light' ? companyLogo : companyDarkLogo}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            Sam Fourie{" "}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            Administrator{" "}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            sfourie@example.com{" "}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item: any, index: any) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
        <div>
          <p className="font-semibold dark:text-gray-200 ">Theme Settings</p>
          <input
            type="radio"
            id="light"
            value="Light"
            className="cursor-pointer"
            onChange={setMode}
            checked={currentMode === 'Light'}
          />
          <label
            htmlFor="light"
            className="ml-2 text-sm cursor-pointer mr-5 dark:text-gray-200"
          >
            Light
          </label>
          <input
            type="radio"
            id="dark"
            value="Dark"
            className="cursor-pointer"
            onChange={setMode}
            checked={currentMode === 'Dark'}
          />
          <label
            htmlFor="dark"
            className="ml-2 text-sm cursor-pointer dark:text-gray-200"
          >
            Dark
          </label>
        </div>
      </div>
      <div className="mt-5">
        <Button
          color="red"
          bgColor="bg-white"
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default UserProfile;