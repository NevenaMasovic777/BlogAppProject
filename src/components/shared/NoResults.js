import img from '../../img/3973481.jpg'

const NoResults = () => {
    return (
        <div className="text-center">
            <h2>There are no posts</h2>
            <img width="700" height="500" src={img} alt="" className="img-fluid"></img>
        </div>
    );
}

export default NoResults;