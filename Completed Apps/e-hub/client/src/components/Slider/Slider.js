import React, { cloneElement, useState, useEffect } from "react";

export const Slider = ({
  children,
  sliderClass = "",
  dotClass = "",
  dotColor = "",
  dotContainerClass = "",
  dots = false,
  arrow = false,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % children.length);
    }, 3000);
    console.log("test");

    return () => {
      clearInterval(interval);
    };
  }, [activeTab]);

  if (!children) return null;
  return (
    <>
      <div className="w-full h-auto">
        {children.map((child, index) => {
          return <div key={index}>{index === activeTab ? child : null}</div>;
        })}
      </div>
      <div />
      <div className={dotContainerClass}>
        {[...Array(children.length)].map((a, i) => {
          return (
            <p
              key={i}
              style={
                dots && activeTab === i
                  ? { backgroundColor: dotColor || "black" }
                  : { backgroundColor: "gray" }
              }
              className={`${
                dots
                  ? activeTab === i
                    ? "w-5 h-2 rounded-full transition-all duration-500"
                    : "w-2 h-2 rounded-full transition-all duration-500"
                  : ""
              }`}
              onClick={() => setActiveTab(i)}
            >
              {!dots && i + 1}
            </p>
          );
        })}
      </div>
    </>
  );
};

// usage
{
  /* <Slider>
            {array.map((tab) => (
              <div className="h-full w-36 bg-slate-400">
                <p>{tab.title}</p>
                <p>{tab.instruction}</p>
              </div>
            ))}
          </Slider> */
}
