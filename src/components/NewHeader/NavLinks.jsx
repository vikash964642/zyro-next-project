"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { links } from "./Mylinks";
import PropTypes from "prop-types";

const NavLinks = ({ handleClick }) => {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [activeLink, setActiveLink] = useState(null);
  // const [hoveredSublinkIndex, setHoveredSublinkIndex] = useState(null);
  const [hoveredSublink1Index, setHoveredSublink1Index] = useState(null);
  const [hoveredSublink2Index, setHoveredSublink2Index] = useState(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkMouseEnter = (linkName) => {
    if (!isMobile) {
      setActiveLink(linkName);
    }
  };

  const handleLinkMouseLeave = () => {
    if (!isMobile) {
      setActiveLink(null);
      setHoveredSublink1Index(null);
      setHoveredSublink2Index(null);
    }
  };

  const handleLinkClick = (linkName) => {
    if (isMobile) {
      setActiveLink((prevLink) => (prevLink === linkName ? null : linkName));
    }
  };

  const handleSublinkClick = () => {
    if (isMobile) {
      setActiveLink(null);
      handleClick?.();
    }
    setHoveredSublink1Index(null);
    setHoveredSublink2Index(null);
  };

  const handleBlogLinkClick = (e, link) => {
    handleClick();
    if (link.name === "Blog") {
      e.preventDefault();
      window.open(link.link, "_blank");
    }
  };

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div
            className="relative   text-left md:cursor-pointer group"
            onMouseEnter={() => handleLinkMouseEnter(link.name)}
            onMouseLeave={handleLinkMouseLeave}
            onClick={() => handleLinkClick(link.name)}
          >
            {/* onMouseLeave={handleLinkMouseLeave}
            onClick={() => handleLinkClick(link.name)} */}
           
              <p
                className={`text-[18px] text-[#D9D9D9] lg:text-[16px] font-medium lg:text-[#181818]  py-[20px] lg:py-0 flex justify-between items-center md:pr-0 pr-5 group hover:text-primary focus:text-primary lg:border-hidden ${
                  index !== 0 ? "border-t-[0.5px] border-[#414141]" : " "
                }     `}
              >
                {link.name}

                {link.submenu && (
                  <img
                    src={"/image/AngleDown.png"}
                    alt="Toggle Icon"
                    className={`lg:hidden block transition-transform duration-600 ease-in-out ${
                      activeLink === link.name ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}

                {link.name === "Banking" && (
                  <span className="hidden lg:flex lg:text-[16px] font-medium text-[#181818]">
                    +
                  </span>
                )}
              </p>

            {link.submenu && activeLink === link.name && (
              <div className="lg:absolute  lg:top-[20px] lg:mt-[1px] left-0 z-50  max-h-[180px] sm:max-h-full lg:max-h-none overflow-auto">
                <div
                  className={`${
                    link.name === "Product"
                      ? "lg:flex lg:justify-between lg:w-[550px]"
                      : "lg:w-[275px]"
                  } lg:px-6 lg:pt-[30px] lg:pb-6  lg:bg-white  lg:rounded-b-lg shadow-md`}
                >
                  {/* COLUMN 1: sublinks */}
                  <div className={`flex flex-col  `}>
                    {link.sublinks?.map((item, subIndex) => (
                      <Link
                        href={item.link || "#"}
                        key={subIndex}
                        onClick={(e) => handleBlogLinkClick(e, item)}
                      >
                        <div
                          className="flex items-center  gap-[11px] rounded  py-2 transition"
                          onClick={() => {
                            handleSublinkClick();
                            ScrollTop();
                          }}
                          onMouseOver={() => setHoveredSublink1Index(subIndex)}
                          onMouseLeave={() => setHoveredSublink1Index(null)}
                        >
                          {/* <div className="h-[33.85px] w-[33.85px] bg-[#4F31B4] rounded-full flex justify-center items-center">
                           <img
                            src={`/assets/icons/${item.img}.svg`}
                            className=" hidden lg:flex"
                            
                          />
                         </div> */}
                          {["Product", "Banking"].includes(link.name) && (
                            <div className="h-[33.85px] w-[33.85px] bg-[#4F31B4] rounded-full hidden lg:flex justify-center items-center">
                              <img src={`/assets/icons/${item.img}.svg`} />
                            </div>
                          )}
                          <span
                            className={`text-[16px] text-[#909090] font-normal lg:text-[16px] text lg:font-medium  lg:text-[#393939] ${
                              hoveredSublink1Index === subIndex
                                ? "lg:text-[#6F41D2] lg:font-semibold"
                                : ""
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* COLUMN 2: sublinks2 (Only for Product) */}
                  {["Product", "Banking"].includes(link.name) &&
                    link.sublinks2 && (
                      <div className={`flex flex-col `}>
                        {link.sublinks2.map((item, subIndex) => (
                          <Link
                            href={item.link || "#"}
                            key={subIndex}
                            onClick={(e) => handleBlogLinkClick(e, item)}
                          >
                            <div
                              className="flex items-center gap-[11px] rounded  py-2 transition"
                              onClick={() => {
                                handleSublinkClick();
                                ScrollTop();
                              }}
                              onMouseOver={() =>
                                setHoveredSublink2Index(subIndex)
                              }
                              onMouseLeave={() => setHoveredSublink2Index(null)}
                            >
                              {["Product", "Banking"].includes(link.name) && (
                                <div className="h-[33.85px] w-[33.85px] bg-[#4F31B4] rounded-full hidden lg:flex justify-center items-center">
                                  <img src={`/assets/icons/${item.img}.svg`} />
                                </div>
                              )}
                              <span
                                className={`text-[16px] text-[#909090] font-normal lg:text-[16px] text lg:font-medium  lg:text-[#393939] ${
                                  hoveredSublink2Index === subIndex
                                    ? "lg:text-[#6F41D2] lg:font-semibold"
                                    : ""
                                }`}
                              >
                                {item.name}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

NavLinks.propTypes = {
  handleClick: PropTypes.func,
};

export default NavLinks;
