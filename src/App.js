import './App.css';
import {useSelector,useDispatch} from "react-redux"

const  App = () => {
  const myStete =useSelector((state) => state.changeTheNumber );
  return (
    <>
    <div className="App">
    
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>
      <div className="quantity">
        <a className='quantity-minus' title='Decrement' >
          <span>-</span>
        </a>
        <input name='quantity' type="text" className='quantity_input' value="0" />
        <a className='quantity_plus' title='increment'>
          <span>+</span>
        </a>
      </div>
    </div>
    </>
  );
}

export default App;
