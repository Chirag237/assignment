import React, { useEffect } from 'react'
import './App.css';
import TopNav from './components/TopNav/TopNav';
// import Card from './components/Card/Card';
import DashView from './components/DashBoard/DashView';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import Loading from './components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    // <Loading />
    <div>
    <div style={{paddingTop : "10px", backgroundColor:"white"}} >
      <TopNav/>
      <hr style={{ marginTop: "10px", backgroundColor: "white" }} />
    </div>
          <DashView/>
          </div>

  ) : <Loading/>
}

export default App