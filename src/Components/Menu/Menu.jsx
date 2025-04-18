import PropTypes from "prop-types";
export default function Menu({design}) {
  return (
    <ul style={design} className="flex flex-col md:flex-row md:gap-8">
        <li className="font-normal text-base text-gray-600 "><a href="#" className="px-1 py-1 md:px-0 md:py-0 hover:bg-gray-200 md:hover:bg-transparent hover:text-gray-900 block">Home</a></li>
        <li className="font-normal text-base text-gray-600"><a href="#" className="py-1 px-1 md:px-0 md:py-0 block hover:bg-gray-200 md:hover:bg-transparent hover:text-gray-900">Fixture</a></li>
        <li className="font-normal text-base text-gray-600 "><a href="#" className="py-1 px-1 md:px-0 md:py-0 block hover:bg-gray-200 md:hover:bg-transparent hover:text-gray-900">Teams</a></li>
        <li className="font-normal text-base text-gray-600"><a href="#" className="py-1 px-1 md:px-0 md:py-0 block hover:bg-gray-200 md:hover:bg-transparent hover:text-gray-900">Schedules</a></li>
    </ul>
  )
};

Menu.propTypes = {
    design: PropTypes.object
} 


