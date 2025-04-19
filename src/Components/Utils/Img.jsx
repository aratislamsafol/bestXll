export default function Img({getImg, imgDesign, classd}) {
  return <img src={getImg} className={classd} style={imgDesign} alt="images" />
}
