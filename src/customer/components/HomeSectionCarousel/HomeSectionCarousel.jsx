import React, { useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setactiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    650: { items: 3 },
    1024: { items: 5 },
  };
  const slidePreview = () => setactiveIndex(activeIndex - 1);
  const slideNext = () => setactiveIndex(activeIndex + 1);

  const syncActiveIndex = (item) => setactiveIndex(item);

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />);
  return (
    <div className=" px-4 lg:px-8 ">
      <h2 className="text-2xl font-extrabold text-grey-800 py-5">{sectionName}</h2>
      <div className="relative px-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white-smoke",
            }}
            aria-label="next"
          >
            <ChevronLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-100 bg-grey"
            onClick={slidePreview}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white-smoke",
            }}
            aria-label="next"
          >
            <ChevronLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
