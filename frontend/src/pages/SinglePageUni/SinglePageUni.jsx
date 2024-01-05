import "./single.css";
import location from "../../Assets/Images/location.svg";
import Select from "../../Components/select/Select";
import {  useSelector } from "react-redux";
import { useLocation} from "react-router-dom";


const SinglePageUni = () => {

  const unis = useSelector((state) => state.university.University);
  console.log(unis)

  // filter uni by Id
  const location1 = useLocation();
  const UniId = location1.pathname.split("/")[2];
  console.log(UniId)
 
  const onUni = unis.find((uni)=> uni.id == UniId)
  console.log(onUni)


 

  return (
    <div className="singleContainer">
      <div className="single1">
        
        <img className="img1" src={location} alt="location" />
        <div className="toptitle">{onUni.city} - {onUni.country} </div>
      </div>
      <div className="single2">
        <div className="left2">
          <img className="img2" src={onUni.cover_image} alt="" />
        </div>
        <div className="Right2">
          <div className="detail2">
            <div className="detail2Title">title</div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, ullam? Provident numquam facere deserunt at vel vitae eligendi repellendus incidunt. Repellat ad excepturi saepe temporibus facere maxime autem accusamus cupiditate!</p>
          </div>
          <div className="summery2">
            <div className="summeryTitle">summery</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio blanditiis vero quibusdam nisi, in omnis labore maiores assumenda! Nostrum suscipit aliquam neque magni iusto quos maiores aut exercitationem, ad quod.</p>
          </div>
        </div>
      </div>
      <div className="single3">
        <div className="select3"><Select/></div>
        <div className="select3"><Select/></div>
        <div className="select3"><Select/></div>
        
      </div>
      <div className="single4">
        <div className="4left">
          <div className="4Info">info</div>
          <div className="4details">
            <div className="detail1"></div>
            <div className="detail2"></div>
            <div className="detail3"></div>
          </div>
        </div>
        <div className="4Right"></div>
      </div>
    </div>
  );
};

export default SinglePageUni;
