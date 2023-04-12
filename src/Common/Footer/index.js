import React from "react";
import Image from "next/image";

import Logo from "../../static/Images/Logo.png";

import styles from "./footer.module.css";
import { useRouter } from "next/router";

const AboutList = [
  {
    label: "Know more about Street Cricket",
    link: "/about",
  },
];

const ResourcesList = [{ label: "Contact Us ", link: "/contact" }];

const PressList = [{ label: "Player Performance", link: "/leaderboard" }];

const matchList = [{ label: "Match Info", link: "/matches" }];

const Footer = () => {
  const footerListItems = (dataItems = [], heading = "") => {
    return (
      <>
        <h6 className={"mb-6 text-sm font-semibold"}>{heading}</h6>
        <ul>
          {dataItems?.map((list) => {
            return (
              <li key={list.label} className="mb-4">
                <a
                  href={list?.link || "#"}
                  // target="_blank"
                  className="hover:underline"
                >
                  {list?.label}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  const router = useRouter();
  return (
    <div className={`${styles.banner} relative h-100`}>
      <div className={styles.textWrapper}>
        <hr />
        <div className="grid grid-cols-2 gap-8 pt-8 px-6 md:grid-cols-5">
          <div className="">
            <img
              onClick={() => router.push("/")}
              src="/Logo.png"
              height={140}
              width={140}
              loading="lazy"
              alt="Footer Logo"
              className="pb-5 hover:cursor-pointer"
            />
          </div>
          <div>{footerListItems(matchList, "Matches")}</div>
          <div>{footerListItems(AboutList, "About")}</div>
          <div>{footerListItems(ResourcesList, "Contact")}</div>
          <div>{footerListItems(PressList, "Leaderboard")}</div>
        </div>
        <hr />
        <div className="sm:flex sm:items-center sm:justify-between pt-4">
          <span className="text-sm sm:text-center">
            Copyright © Hemant Sharma 2021 Street Cricket League. All Rights
            Reserved.
          </span>
        </div>
        <div className="text-start text-red-500 mt-2">
          Disclaimer : This project is created only for testing purposes. Please
          email me at sharmacreation9@gmail.com for any issue.
        </div>
      </div>
    </div>
  );
};

export default Footer;
