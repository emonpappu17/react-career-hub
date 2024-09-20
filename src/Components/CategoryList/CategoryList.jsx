import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories);
    
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-4 p-4">
            <h2 className="text-5xl text-center">Job Category List</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;