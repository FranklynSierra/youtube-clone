import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
      <NavBar />
      <Routes>
        <Route path='/'exact element={<Feed/>}></Route>
        <Route path='/video/:id'element={<VideoDetail/>}></Route>
        <Route path='/channel/:id'element={<ChannelDetail/>}></Route>
        <Route path='/search/:searchTerm'element={<SearchFeed/>}></Route>
      </Routes>
      
    </Box>
    </BrowserRouter>
  );
}

export default App;
