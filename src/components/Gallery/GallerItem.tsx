// import React from 'react'

import { useEffect, useRef, useState } from "react";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { getContrastingColor, opacityShadeColor, shadeColor } from "../../lib/shadeColor";

// type Props = {}
export interface galleryItem {
  label: string;
  title: string;
  description: string;
  review: string;
  referenceLink: string;
  color: string;
  image: string;
}
interface content {
  data?: galleryItem;
  controls?: {
    next: () => void;
    previous: () => void;
    position?: {
      last: number;
      current: number;
    };
  };
}

function GallerItem(props: content) {
  // check if item is shown
  const ref = useRef<HTMLLIElement>(null);
  const [contentAnimation, setContentAnimation] = useState<
    | {
        current: content;
        previous: content;
      }
    | undefined
  >();
  const [animateProcess, setAnimateProcess] = useState<{
    removing: boolean;
    process: "adding" | "removing" | "done";
  }>();
  const totalAnimationTime = 1000;
  useEffect(() => {
    if (props) {
      setContentAnimation((ca) => ({
        previous: ca?.current ? ca?.current : props,
        current: props,
      }));

      if (animateProcess?.process && animateProcess?.process !== "removing") {
        setAnimateProcess({ removing: true, process: "removing" });
      }
      setTimeout(() => {
        setAnimateProcess({ removing: false, process: "adding" });
      }, totalAnimationTime);
      setTimeout(() => {
        setAnimateProcess({ removing: false, process: "done" });
      }, totalAnimationTime + 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const mainColor = opacityShadeColor({
    hex: props.data?.color ? props.data?.color : "#000000",
    opacity: 0.1,
  });
  const textColor = getContrastingColor(
    shadeColor(props.data?.color ? props.data?.color : "#000000", 1)
  );
  const textAnimation: React.CSSProperties = {
    transform:
      animateProcess?.removing && animateProcess?.process === "removing"
        ? `translateY(${20}px)`
        : animateProcess?.process === "adding"
        ? `translateY(${20}px)`
        : `translateY(0px)`,
    opacity: animateProcess?.process === "done" ? 1 : 0,
    color: textColor,
  };
  const lineAnimation: React.CSSProperties = {
    width: animateProcess?.process === "done" ? "100%" : `0px`,
    opacity: animateProcess?.process === "done" ? 1 : 0,
    backgroundColor: shadeColor(props.data?.color ? props.data?.color : "#000000", 0.1),
  };
  const opacityAnimation: React.CSSProperties = {
    opacity:
      animateProcess?.process === "done"
        ? 1
        : animateProcess?.process === "removing"
        ? 0
        : 0,
  };

  return (
    <li
      ref={ref}
      className="w-full group h-full flex relative isolate"
      style={{
        backgroundColor: "#37292a",
      }}
    >
      <div
        id="gallery_item_contents"
        className="w-full py-16 px-4 sm:px-0 flex flex-col justify-center gap-2 h-full min-h-fit sm:h-fit"
      >
        {/* write up */}
        <div
          style={{
            backgroundColor: mainColor,
          }}
          className="w-full rounded-lg sm:rounded-none sm:backdrop-blur-none bg-opacity-30 delay-1000 duration-500 backdrop-blur-lg sm:!bg-transparent flex gap-3 p-4 sm:min-w-[400px] sm:max-w-[450px] md:max-w-full md:min-w-[700px]"
        >
          {/* Label */}
          <span
            style={{
              transform:
                animateProcess?.removing &&
                animateProcess?.process === "removing"
                  ? `translate(-${20}px)`
                  : animateProcess?.process === "adding"
                  ? `translate(-${20}px)`
                  : `translate(0px)`,
              opacity: animateProcess?.process === "done" ? 1 : 0,
              color: textColor,
              borderColor: textColor,
            }}
            className="duration-200 shrink-0 bg-gray-100/20 size-7 min-[498px]:size-9 sm:size-12 border-2 hidden sm:flex items-center justify-center rounded-full"
          >
            1
          </span>
          {/* context */}
          <div className="w-full flex flex-col gap-2">
            {/* Title */}
            <h4
              style={textAnimation}
              className="min-h-7 duration-200 delay-200 min-[498px]:min-h-9 sm:min-h-12 text-base min-[498px]:text-lg sm:text-2xl font-bold relative flex items-center gap-2"
            >
              <span className="shrink-0 bg-gray-100/20 size-7 min-[498px]:size-9 sm:hidden border-2 flex items-center justify-center rounded-full">
                1
              </span>
              <b>
                {animateProcess?.removing
                  ? contentAnimation?.previous.data?.title
                  : contentAnimation?.current.data?.title}
              </b>
            </h4>

            {/* description */}
            <p
              style={textAnimation}
              className="duration-200 delay-[400ms] text-start text-sm min-[498px]:text-base sm:text-lg"
            >
              {animateProcess?.removing
                ? contentAnimation?.previous.data?.description
                : contentAnimation?.current.data?.description}
            </p>

            {/* review */}
            <span className="flex flex-col gap-2 items-start text-sm min-[498px]:text-base sm:text-lg mt-5">
              <strong
                style={textAnimation}
                className="duration-200 delay-[600ms]"
              >
                Client Review:{" "}
              </strong>
              <q
                style={textAnimation}
                className="duration-200 delay-[800ms] text-gray-400 italic text-start"
              >
                {animateProcess?.removing
                  ? contentAnimation?.previous.data?.review
                  : contentAnimation?.current.data?.review}
              </q>
              <span
                style={lineAnimation}
                className="duration-200 delay-[800ms] w-full h-1 bg-white rounded-md mt-3"
              />
            </span>

            {/* reference */}
            <div className="w-full pt-3 flex items-center gap-2 flex-wrap">
              <button
                style={opacityAnimation}
                className="min-w-20 max-w-[70vw] bg-gray-400/20 hover:bg-gray-400/50 duration-200  min-[498px]:py-1 px-3 sm:py-2 border-2 rounded-md"
              >
                Visit
              </button>
              <button
                style={opacityAnimation}
                className=" duration-200 min-[498px]:p-3 p-2 border-[2px] border-transparent hover:border-gray-400 rounded-full"
                title="copy address"
              >
                <FaLink />
              </button>
              <span
                style={opacityAnimation}
                className="text-sm min-[498px]:text-lg"
              >
                <i className="text-gray-300 not-italic">
                  {props.controls?.position?.current}
                </i>{" "}
                of{" "}
                <i className="not-italic">{props.controls?.position?.last}</i>
              </span>
            </div>

            {/* page controls */}
            <div className="w-full pt-5 flex items-center gap-4 text-2xl">
              <button
                onClick={props.controls?.previous}
                style={opacityAnimation}
                className=" duration-200 p-1 min-[498px]:p-2 sm:p-3 border-2 bg-gray-100/20 hover:bg-gray-600/10 border-gray-100 hover:border-gray-400 rounded-full"
                title="Previous slide"
              >
                <BsCaretLeft />
              </button>
              <button
                onClick={props.controls?.next}
                style={opacityAnimation}
                className=" duration-200 p-1 min-[498px]:p-2 sm:p-3 border-2 bg-gray-100/20 hover:bg-gray-600/10 border-gray-100 hover:border-gray-400 rounded-full"
                title="Next slide"
              >
                <BsCaretRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* illustration */}
      <div
        id="gallery_item_illustration"
        className="absolute -z-10 sm:z-0 px-1 sm:px-0 sm:relative size-full max-w-full overflow-hidden sm:w-full"
      >
        <img
          style={opacityAnimation}
          className="size-full group-hover:brightness-[0.3] duration-1000 object-cover object-center curved-bottom"
          src={
            animateProcess?.removing
              ? contentAnimation?.previous.data?.image
              : contentAnimation?.current.data?.image
          }
          alt="galler_image_1"
        />
        {/* positioning and indexing of item change */}
        <ul style={{
          backgroundColor:opacityShadeColor({
            hex: props.data?.color ? props.data?.color : "#000000",
            opacity: 0.1,
          })
        }} className="w-[calc(100%-2rem)] backdrop-blur-lg sm:w-[calc(80%-2rem)] p-4 rounded-full flex items-center justify-center  gap-2 px-2 absolute  left-1/2 -translate-x-1/2  sm:right-2 sm:left-[unset] sm:translate-x-[unset] bottom-8">
          {Array.from({
            length: props.controls?.position?.last
              ? props.controls?.position?.last
              : 0,
          }).map((_, ind) => (
            <li
              key={ind}
              className={`${
                props.controls?.position?.current &&
                props.controls?.position?.current - 1 === ind
                  ? " w-full h-2"
                  : "size-2"
              } max-w-4 rounded-full bg-white`}
            ></li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default GallerItem;
