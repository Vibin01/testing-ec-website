"use client";

import {
  FaAngry,
  FaFrown,
  FaMeh,
  FaSmile,
  FaGrin,
} from "react-icons/fa";

// 🎯 Constants
const FACES = [
  FaAngry,
  FaAngry,
  FaFrown,
  FaFrown,
  FaMeh,
  FaMeh,
  FaMeh,
  FaSmile,
  FaSmile,
  FaGrin,
  FaGrin,
];

const COLORS = [
  "#034EA2",
  "#0557C0",
  "#0668E1",
  "#1A75E8",
  "#3384EB",
  "#4D94ED",
  "#66A3F0",
  "#80B2F2",
  "#99C1F5",
  "#CCE0FA",
  "#E6F0FB",
];

const SIZE_MAP = [4, 3.5, 3, 2.5, 2, 1.5, 1, 0.75, 0.5, 0.25, 0.1];


const getDistance = (a: number, b: number) => Math.abs(a - b);

const getScale = (mode: "positive" | "mixed") =>
  mode === "mixed"
    ? Array.from({ length: 11 }, (_, i) => i - 5)
    : Array.from({ length: 11 }, (_, i) => i);

type Props = {
  value: number | null;
  onChange: (val: number) => void;
  mode?: "positive" | "mixed";
};

export default function FaceRating({
  value,
  onChange,
  mode = "positive",
}: Props) {
  const scale = getScale(mode);
  const activeIndex = value !== null ? scale.indexOf(value) : null;

  // 🎯 Get Color
  const getColor = (index: number) => {
    if (activeIndex === null) return "#9CA3AF";
    return COLORS[getDistance(index, activeIndex)] ?? COLORS.at(-1);
  };

  // 🎯 Get Size
  const getSize = (index: number) => {
    if (activeIndex === null) return "clamp(20px, 2.5vw, 30px)";
    const size = SIZE_MAP[getDistance(index, activeIndex)] ?? 2;
    return `clamp(20px, ${size}vw, 50px)`;
  };

  // 🎯 Handle Interaction
  const handlePointer = (clientX: number, rect: DOMRect) => {
    const percent = (clientX - rect.left) / rect.width;
    const index = Math.round(percent * (scale.length - 1));

    if (index >= 0 && index < scale.length) {
      onChange(scale[index]);
    }
  };

  return (
    <div className="w-full max-w-[60%] h-[200px] mx-auto p-6">
      <div
        className="flex justify-between items-end gap-[5%] cursor-pointer select-none"
        onMouseMove={(e) => {
          if (e.buttons === 1) {
            handlePointer(
              e.clientX,
              e.currentTarget.getBoundingClientRect()
            );
          }
        }}
        onClick={(e) =>
          handlePointer(
            e.clientX,
            e.currentTarget.getBoundingClientRect()
          )
        }
        onTouchMove={(e) => {
          const touch = e.touches[0];
          handlePointer(
            touch.clientX,
            e.currentTarget.getBoundingClientRect()
          );
        }}
      >
        {FACES.map((Icon, index) => {
          const distance =
            activeIndex !== null ? getDistance(index, activeIndex) : 0;

          return (
            <Icon
              key={index}
              className="transition-all duration-300 ease-out"
              style={{
                fontSize: getSize(index),
                transform:
                  activeIndex === null
                    ? "translateY(0px)"
                    : `translateY(${distance}px)`,
                color: getColor(index),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}