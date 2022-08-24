import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { BlogContext } from '../context/BlogContext';
import { searchPostByTerm } from '../service/service';

const Header = () => {

  const [term, setTerm] = useState('');
  const { setPosts, getPosts } = useContext(BlogContext);

  const submitForm = async (e) => {
    e.preventDefault();
    if (!term) {
      getPosts();
    } else {
      const res = await searchPostByTerm(term);
      setPosts(res.data.resultData);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid mx-2">

        <div className='col-md-4 col-sm-4'>
          <div className='row'>
            <div className='col-md-3 col-sm-4 mx-2'>
              <Link to="/" className="navbar-brand">
                Home
              </Link>
            </div>

            <div className='col col-sm-8 ps-1'>
              <form className="d-flex" role="search" onSubmit={submitForm}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={term} onChange={(e) => setTerm(e.target.value)} />
              </form>
            </div>

          </div>
        </div>

        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarCollapse">
          <div className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link to="/help" className="nav-link active text-light" aria-current="page" >Help</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active text-light" aria-current="page" data-testid="my-profile">My profile</Link>
            </li>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;
