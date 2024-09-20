import PropTypes from 'prop-types';

const Category = ({ category }) => {
    const { logo, category_name, availability } = category

    return (
        <div className="p-7 border space-y-2 rounded-2xl">
            <img src={logo} alt="" />
            <h3 className="font-semibold">{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object
};

export default Category;