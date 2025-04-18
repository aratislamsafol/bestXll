import PropTypes from 'prop-types';
import Card from '../Utils/Card';

const PlayerSection = ({loadData}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 sm:mt-5 md:mt-6 lg:mt-8'>
            {
                loadData.map(data => <Card data={data}/>)
            }
            
        </div>
    );
};

PlayerSection.propTypes = {
    loadData: PropTypes.array
};

export default PlayerSection;