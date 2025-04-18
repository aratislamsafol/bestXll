import PropTypes from "prop-types"
export default function Menu({design}) {
  return (
    <ul style={design}>
        <li className="font-normal text-base text-gray-600"><a href="#">Home</a></li>
        <li className="font-normal text-base text-gray-600"><a href="#">Fixture</a></li>
        <li className="font-normal text-base text-gray-600"><a href="#">Teams</a></li>
        <li className="font-normal text-base text-gray-600"><a href="#">Schedules</a></li>
    </ul>
  )
};

Menu.propTypes = {
    design: PropTypes.object
} 


