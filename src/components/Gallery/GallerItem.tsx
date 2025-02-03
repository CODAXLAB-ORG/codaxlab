// import React from 'react'

import { useCallback, useEffect, useRef, useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaRegImages,
  FaShareAlt,
} from "react-icons/fa";
import { RiCalendarEventLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useIsMobile } from "../../hooks/use-mobile";
import { opacityShadeColor } from "../../lib/shadeColor";
import { shareContent } from "../../lib/share";

// type Props = {}
export interface galleryItem {
  label: string;
  title: string;
  description: string;
  review: string;
  referenceLink: string;
  image: string;
  date: {
    label: string;
    ddmmyy: {
      d: string;
      m: string;
      y: string;
    };
  };
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
    toIndex?: (index: number) => void;
  };
}

function GallerItem(props: content) {
  // screen size is mobile
  const isMobile = useIsMobile();
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
  const totalAnimationTime = 1200;
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
        setTimeout(() => {
          setAnimateProcess({ removing: false, process: "done" });
        }, totalAnimationTime);
      }, totalAnimationTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const color = "#1f2937";

  const mainColor = opacityShadeColor({
    hex: color,
    opacity: 0.1,
  });

  const textAnimation: React.CSSProperties = {
    transform:
      animateProcess?.removing && animateProcess?.process === "removing"
        ? `translateY(${20}px)`
        : animateProcess?.process === "adding"
        ? `translateY(${20}px)`
        : `translateY(0px)`,
    opacity: animateProcess?.process === "done" ? 1 : 0,
    pointerEvents: animateProcess?.process === "done" ? "auto" : "none",
  };
  const lineAnimation: React.CSSProperties = {
    width: animateProcess?.process === "done" ? "100%" : `0px`,
    opacity: animateProcess?.process === "done" ? 1 : 0,
    pointerEvents: animateProcess?.process === "done" ? "auto" : "none",
    backgroundColor: color,
  };
  const opacityAnimation: React.CSSProperties = {
    opacity:
      animateProcess?.process === "done"
        ? 1
        : animateProcess?.process === "removing"
        ? 0
        : 0,
    pointerEvents: animateProcess?.process === "done" ? "auto" : "none",
  };
  const labelAnimation: React.CSSProperties = {
    transform:
      animateProcess?.removing && animateProcess?.process === "removing"
        ? `translate(-${20}px)`
        : animateProcess?.process === "adding"
        ? `translate(-${20}px)`
        : `translate(0px)`,
    opacity: animateProcess?.process === "done" ? 1 : 0,
    pointerEvents: animateProcess?.process === "done" ? "auto" : "none",
  };
  const datePrev = `${contentAnimation?.previous.data?.date.ddmmyy.d} ${contentAnimation?.previous.data?.date.ddmmyy.m}, ${contentAnimation?.previous.data?.date.ddmmyy.y}`;
  const dateCurr = `${contentAnimation?.current.data?.date.ddmmyy.d} ${contentAnimation?.current.data?.date.ddmmyy.m}, ${contentAnimation?.current.data?.date.ddmmyy.y}`;

  const shareEventLink = useCallback(() => {
    const title = animateProcess?.removing
      ? contentAnimation?.previous.data?.title
      : contentAnimation?.current.data?.title;
    const dateLabel = animateProcess?.removing
      ? contentAnimation?.previous.data?.date.label
      : contentAnimation?.current.data?.date.label;
    const date = dateCurr;

    const text = animateProcess?.removing
      ? contentAnimation?.previous.data?.description
      : contentAnimation?.current.data?.description;

    const url = animateProcess?.removing
      ? contentAnimation?.previous.data?.referenceLink
      : contentAnimation?.current.data?.referenceLink;

    const data = `CodaxLab event\n${dateLabel}: ${date}\n\n${text}\n\n\n`;
    shareContent({
      title,
      text: data,
      url,
    });
  }, [animateProcess?.removing, contentAnimation, dateCurr]);

  return (
    <li
      ref={ref}
      className="w-full group h-full flex gap-4 md:gap-5 flex-col-reverse sm:flex-row items-center justify-center relative isolate px-4 md:px-0"
    >
      <div
        id="gallery_item_contents"
        className="w-full py-20 sm:px-4 flex flex-col justify-center gap-2 h-full min-h-fit sm:h-fit md:min-w-[468px]"
      >
        {/* write up */}
        <div
          style={{
            backgroundColor: mainColor,
          }}
          className="w-full rounded-lg sm:rounded-none sm:backdrop-blur-none bg-opacity-30 delay-1000 duration-500 backdrop-blur-lg sm:!bg-transparent flex gap-3 p-4"
        >
          {/* Label */}
          <span
            style={labelAnimation}
            className="duration-200 shrink-0 bg-gray-100/20 size-7 min-[498px]:size-9 sm:size-12 border-2 hidden lg:flex items-center justify-center rounded-full"
          >
            {animateProcess?.removing
              ? contentAnimation?.previous.controls?.position?.current
              : contentAnimation?.current.controls?.position?.current}
          </span>
          {/* context */}
          <div className="w-full flex flex-col gap-2">
            {/* Title */}
            <h4 className="min-h-7 mb-3 sm:mb-0 text-start min-[498px]:min-h-9 sm:min-h-12 text-base min-[498px]:text-lg sm:text-2xl font-bold relative flex items-center gap-2">
              <span
                style={labelAnimation}
                className="shrink-0 duration-200 bg-gray-100/20 size-7 min-[498px]:size-9 lg:hidden border-2 flex items-center justify-center rounded-full"
              >
                {animateProcess?.removing
                  ? contentAnimation?.previous.controls?.position?.current
                  : contentAnimation?.current.controls?.position?.current}
              </span>
              <b style={textAnimation} className="duration-200 delay-200">
                {animateProcess?.removing
                  ? contentAnimation?.previous.data?.title
                  : contentAnimation?.current.data?.title}
              </b>
            </h4>

            <div className="w-full flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-4">
              {/* context writeup */}
              <div className="w-full">
                {/* description */}
                <p
                  style={textAnimation}
                  className="duration-200 delay-[400ms] text-start text-sm min-[498px]:text-base sm:text-lg"
                >
                  {animateProcess?.removing
                    ? contentAnimation?.previous.data?.description
                    : contentAnimation?.current.data?.description}
                </p>

                {/* date */}

                <span
                  style={textAnimation}
                  className="duration-200 delay-[600ms] w-fit max-w-full flex items-center justify-start gap-2 mt-4 text-sm min-[498px]:text-base sm:text-lg"
                >
                  <RiCalendarEventLine />

                  <strong className="capitalize">
                    {animateProcess?.removing
                      ? contentAnimation?.previous.data?.date.label
                      : contentAnimation?.current.data?.date.label}
                    :{" "}
                    <i className="not-italic text-gray-400">
                      {animateProcess?.removing ? datePrev : dateCurr}
                    </i>
                  </strong>
                </span>

                {/* review */}
                <span className="flex flex-col gap-2 items-start text-sm min-[498px]:text-base sm:text-lg mt-5">
                  <strong
                    style={textAnimation}
                    className="duration-200 delay-[800ms]"
                  >
                    Community Review:{" "}
                  </strong>
                  <q
                    style={textAnimation}
                    className="duration-200 delay-[1000ms] text-gray-500 text-[14px] italic text-start"
                  >
                    {animateProcess?.removing
                      ? contentAnimation?.previous.data?.review
                      : contentAnimation?.current.data?.review}
                  </q>
                  <span
                    style={lineAnimation}
                    className="duration-200 delay-[1000ms] w-full h-1 rounded-md mt-3"
                  />
                </span>

                {/* reference */}
                <div className="w-full pt-3 flex items-center gap-2 flex-wrap">
                  <Link
                    to={props.data?.referenceLink || "#"}
                    style={opacityAnimation}
                    className={`min-w-20  ${
                      animateProcess?.process !== "done" ? "delay-[1s]" : ""
                    } flex items-center justify-center gap-3 max-w-[70vw] bg-gray-400/20 text-center hover:bg-gray-400/50 duration-200 px-3 py-2 border-2 rounded-md text-sm min-[498px]:text-base sm:text-lg`}
                  >
                    <FaRegImages /> <b>View Images</b>
                  </Link>
                  <button
                    onClick={shareEventLink}
                    style={opacityAnimation}
                    className={`duration-200 ${
                      animateProcess?.process !== "done" ? "delay-[1s]" : ""
                    } min-[498px]:p-3 p-2 border-[2px] border-transparent hover:border-gray-400 rounded-full`}
                    title="share event"
                  >
                    <FaShareAlt />
                  </button>
                  <span
                    style={opacityAnimation}
                    className="text-sm min-[498px]:text-lg duration-200 delay-[1s]"
                  >
                    <i className="text-gray-300 not-italic">
                      {animateProcess?.removing
                        ? contentAnimation?.previous.controls?.position?.current
                        : contentAnimation?.current.controls?.position?.current}
                    </i>{" "}
                    of{" "}
                    <i className="not-italic">
                      {props.controls?.position?.last}
                    </i>
                  </span>
                </div>

                {/* page controls */}
                <div className="w-full pt-5 flex items-center gap-4 text-2xl">
                  <button
                    onClick={props.controls?.previous}
                    style={opacityAnimation}
                    className={`duration-200 ${
                      animateProcess?.process !== "done" ? "delay-[1.2s]" : ""
                    } p-1 min-[498px]:p-2 sm:p-3 border-2 bg-gray-100/20 hover:bg-gray-600/10 border-gray-100 hover:border-gray-400 rounded-full`}
                    title="Previous slide"
                  >
                    <FaAngleLeft />
                  </button>
                  <button
                    onClick={props.controls?.next}
                    style={opacityAnimation}
                    className={`duration-200 ${
                      animateProcess?.process !== "done" ? "delay-[1.2s]" : ""
                    } p-1 min-[498px]:p-2 sm:p-3 border-2 bg-gray-100/20 hover:bg-gray-600/10 border-gray-100 hover:border-gray-400 rounded-full`}
                    title="Next slide"
                  >
                    <FaAngleRight />
                  </button>
                </div>
              </div>
              {/* illustration for mobile */}
              {isMobile && (
                <div
                  id="gallery_item_illustration"
                  className="relative rounded-xl duration-1000 overflow-hidden isolate flex items-center justify-center w-full h-56 border-2"
                  style={{
                    borderColor: color,
                    backgroundColor: opacityShadeColor({
                      hex: color,
                      opacity: 0.2,
                    }),
                  }}
                >
                  <img
                    style={opacityAnimation}
                    className="size-full duration-1000 object-cover object-center"
                    src={
                      animateProcess?.removing
                        ? contentAnimation?.previous.data?.image
                        : contentAnimation?.current.data?.image
                    }
                    alt="galler_image_1"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* illustration for larger screen */}
      {!isMobile && (
        <div
          id="gallery_item_illustration"
          className="curved-bottom pl-1 pb-1 shadow-lg shadow-white relative duration-1000 overflow-hidden isolate flex items-center justify-center w-full h-screen min-h-full md:min-w-[300px] lg:min-w-[500px]"
          style={{
            backgroundColor: opacityShadeColor({
              hex: color,
              opacity: 0.2,
            }),
          }}
        >
          <img
            style={opacityAnimation}
            className="size-full duration-1000 object-cover object-center curved-bottom"
            src={
              animateProcess?.removing
                ? contentAnimation?.previous.data?.image
                : contentAnimation?.current.data?.image
            }
            alt="galler_image_1"
          />
        </div>
      )}

      {/* positioning and indexing of item change */}
      <ul
        style={{
          backgroundColor: opacityShadeColor({
            hex: color,
            opacity: 0.5,
          }),
        }}
        className="duration-1000 w-[calc(100%-2rem)] backdrop-blur-lg sm:w-[calc(80%-2rem)] p-4 rounded-full flex items-center justify-center  gap-2 px-2 absolute  left-1/2 -translate-x-1/2 bottom-8"
      >
        {Array.from({
          length: props.controls?.position?.last
            ? props.controls?.position?.last
            : 0,
        }).map((_, ind) => (
          <li
            onClick={() => {
              if (
                ind !== (props.controls?.position?.current ?? 0) - 1 &&
                props.controls?.toIndex
              ) {
                props.controls.toIndex(ind);
              }
            }}
            key={ind}
            title={`${
              (props.controls?.position?.current ?? 0) - 1 === ind
                ? "currently in event"
                : "go to event"
            } ${ind + 1} of ${props.controls?.position?.last ?? 0} `}
            className={`${
              (props.controls?.position?.current ?? 0) - 1 === ind
                ? "w-full h-2 bg-slate-400"
                : "size-2"
            } max-w-4 rounded-full duration-150 cursor-pointer bg-white`}
          ></li>
        ))}
      </ul>
    </li>
  );
}

export default GallerItem;
