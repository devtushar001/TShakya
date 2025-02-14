import { assets } from "../../assets/TShakya";
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-top">
          <input type="text" placeholder="Search any keyword" />
          <div className="account">
            <img style={{ width: '25px' }} src={assets.app_icon} alt="apps" />
            <img style={{ width: '25px' }} src={assets.user_icon} alt="user profile" />
          </div>
        </div>

        <div className="home-mid">

        </div>
      </div>
    </>
  )
}

export default Home;