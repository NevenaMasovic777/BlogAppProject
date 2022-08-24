import { useContext, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";
import { addCategory } from "../../service/service";
import AddCategory from "./AddCategory";
import DeleteCategory from "./DeleteCategory";

const SideBar = () => {

  const { categories, getCategories } = useContext(BlogContext);
  const location = useLocation().pathname.replace('/', '');

  const add = async (category) => {
    await addCategory(category);
    getCategories();
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <div className="col-sm-6 col-md-4 px-3 py-3">
      <div className="list-group">
          <AddCategory addCategory={add} />
        <div className="text-light bg-dark list-group-item"><h4>Categories</h4></div>

        <div className={"list-group-item side-bar-item " + (!location ? "list-group-item-dark" : "" )}>
            <div className="row ps-2">
              <Link className="nav-link" to="/">All categories</Link>
            </div>
        </div>
          
        {categories.length ? categories.map((category) => (  
           
          <div key={category.id} className={"list-group-item side-bar-item " + (category.id == location ? "list-group-item-dark" : "")}>
            <div className="row ps-2">
              <Link className="col-10 nav-link" to={`${category.id}`}>{category.name}</Link>
              <DeleteCategory category={category}/>
            </div>
          </div>
        )) : null}
      </div>
    </div>
  );
};

export default SideBar;
