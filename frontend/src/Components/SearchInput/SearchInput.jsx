import './SearchInput.css'
import search from "../../Assets/Images/search.svg";

const SearchInput = () => {
  return (
    <div className='sInputContainer'>
      <input className='sInput' type="text" />
      <img className='inputImage' src={search} alt="" />

    </div>
  )
}

export default SearchInput