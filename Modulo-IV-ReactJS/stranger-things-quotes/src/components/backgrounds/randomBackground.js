import background01 from "../../assets/images/bg-001.jpg";
import background02 from "../../assets/images/bg-002.jpg";
import background03 from "../../assets/images/bg-003.jpg";
import background04 from "../../assets/images/bg-004.jpg";
import background05 from "../../assets/images/bg-005.jpg";

function randomBackground() {
  const backgroundArray = [
    background01,
    background02,
    background03,
    background04,
    background05,
  ];
  const randomIndex = Math.floor(Math.random() * backgroundArray.length);

  const selectedPicture = backgroundArray[randomIndex];

  return (document.body.style.backgroundImage = `url(${selectedPicture})`);
}

export default randomBackground;
