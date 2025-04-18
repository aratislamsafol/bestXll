export default function Img({getImg, imgDesign}) {
  return <img src={getImg} className="w-12 md:w-18" style={imgDesign} alt="images" />
}
