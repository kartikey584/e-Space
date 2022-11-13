import { useState ,useEffect } from "react";
import {Gamesdata}  from "../../general/gameData"
import {Grid} from '@mui/material';
const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "100px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  opacity : 0
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  opacity : 0,
  
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Gamesdata.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === Gamesdata.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${Gamesdata[currentIndex].url})`,
  };
  useEffect( () => {
    setTimeout(() =>{
      goToNext();
    },4000)
  },[currentIndex])
  return (
    <Grid style={sliderStyles}>
      <Grid>
        <Grid onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </Grid>
        <Grid onClick={goToNext} style={rightArrowStyles}>
          ❱
        </Grid>
      </Grid>
      <Grid style={slideStylesWidthBackground}/>
    </Grid>
  );
};

export default ImageSlider;