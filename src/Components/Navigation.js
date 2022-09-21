import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Navigation.css';


function Navigation(){
    return(
        <div className='container card-outline'>
            <div className='card br-15'>
                <div className='card-body br-15'>
                    <img src='https://source.unsplash.com/1600x800?burger' className='br-15 img-fluid'></img>
                    <p className='my-0 mt-1 fs-3 fw-bold'>Chicken Burger</p>
                    <p className='my-0 mt-1 fs-6 fw-bold text-success'>The best burger in India</p>
                    <strike className='fs-5 text-danger'>Rs. 199</strike>
                    <h4 className='fs-5 text-success'>Rs. 99</h4>
                    <button className='btn btn-dark px-4 py-2'>Order Now</button>
                </div>
            </div>
        </div>
    );
}

export default Navigation;