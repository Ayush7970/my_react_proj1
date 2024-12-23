
import pic1 from './assets/image.png'
function Card(){

    return(

        <div className="card">
            <img className = "card-image" src={pic1} alt="profile picture" />
            <h2 className='card-title'>Ayush Bhardwaj</h2>
            <p className='card-text'>Prototpye 1 for the react full course on youtube</p>
        </div>
    );


}

export default Card