
import './App.css';
import Navbar from './Components/Nav/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Categorys from './Pages/Categorys';
import MustSee from './Pages/MustSee';
import Blogs from './Pages/Blogs';
import Footer from './Components/Footer/Footer';
import BBQ from './Pages/BBQ';
import Trampolines from './Pages/Trampolines'
import SwingSet from './Pages/SwingSets'
import Gazebos from './Pages/Gazebos'
import GardenTools from './Pages/GardenTools'
import GardenSheds from './Pages/GardenSheds'
import GardenLighting from './Pages/GardenLights'
import GardenFurniture from './Pages/GardenFurniture'
import Camping from './Pages/Camping'
import SwimmingPools from './Pages/SwimmingPools'
import LawnmowersCategory from './Pages/LawnmowersCategory';
import GasBBQ from './Pages/GasBBQ';
import CharcoalBBQ from './Pages/CharcoalBBQ';
import UtensilsAndEquipment from './Pages/UtensilsAndEquipment';
import Lawnmowers from './Pages/Lawnmowers';
import Strimmers from './Pages/Strimmers';
import RideOnLawnmowers from './Pages/RideOnLawnmowers';
import AutomatedLawnmowers from './Pages/AutomatedLawnmowers';
import RattanFurniture from './Pages/RattanFurniture';
import EggChairs from './Pages/EggChairs';
import SwingingChairs from './Pages/SwingingChairs';
import TableAndChairs from './Pages/TableAndChairs';
import StandingLamps from './Pages/StandingLamps';
import WallLights from './Pages/WallLights';
import HeatLamps from './Pages/HeatLamps';
import SpotLights from './Pages/SpotLights';
import SwimmingPool from './Pages/SwimmingPool';
import HotTubs from './Pages/HotTubs';
import PoolsForPets from './Pages/PoolsForPets';
import PaddlingPools from './Pages/paddlingPools';
import SmallWoodenSheds from './Pages/SmallWoodenSheds';
import MetalSheds from './Pages/MetalSheds';
import GardenOffices from './Pages/GardenOffices';
import LargeWoodenSheds from './Pages/LargeWoodenSheds';
import TwoSixManTents from './Pages/TwoSixManTents';
import EightManAndAbove from './Pages/EightManAndAbove';
import CampingEquipment from './Pages/CampingEquipment';
import Glamping from './Pages/Glamping';
import ClimbingFrames from './Pages/ClimbingFrames';
import Slides from './Pages/Slides';
import OtherGardenToys from './Pages/OtherGardenToys';
import Swings from './Pages/Swings';
import IndoorTrampolines from './Pages/IndoorTrampolines';
import SixEightFtTrampolines from './Pages/SixEightFtTrampolines';
import TenTwelveFtTrampolines from './Pages/TenTwelveFtTrampolines';
import TwelveAndAbove from './Pages/TwelveAndAbove';
import GeneralTools from './Pages/GeneralTools';
import Chainsaws from './Pages/Chainsaws';
import LeafBlowers from './Pages/LeafBlowers';
import HedgeStrimmers from './Pages/HedgeStrimmers';
import Decking from './Pages/Decking';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Categorys' element={<Categorys/>}/>
      <Route path='/MustSee' element={<MustSee/>}/>
      <Route path='/Blogs' element={<Blogs/>}/>
      <Route path='/BBQ' element={<BBQ/>} />
      <Route path='/LawnmowersCategory' element={<LawnmowersCategory/>} /> 
      <Route path='/Trampolines' element={<Trampolines/>} />
      <Route path='/SwingSets' element={<SwingSet/>} />
      <Route path='/Gazebos' element={<Gazebos/>} />
      <Route path='/GardenTools' element={<GardenTools/>} />
      <Route path='/GardenSheds' element={<GardenSheds/>} />
      <Route path='/GardenLighting' element={<GardenLighting/>} />
      <Route path='/GardenFurniture' element={<GardenFurniture/>} />
      <Route path='/Camping' element={<Camping />} />
      <Route path='/SwimmingPools' element={<SwimmingPools />} />

      <Route path='/GasBBQ' element={<GasBBQ />} />
      <Route path='/CharcoalBBQ' element={<CharcoalBBQ />} />
      <Route path='/UtensilsAndEquipment' element={<UtensilsAndEquipment />} />
      <Route path='/Lawnmowers' element={<Lawnmowers />} />
      <Route path='/Strimmers' element={<Strimmers />} />
      <Route path='/RideOnMowers' element={<RideOnLawnmowers />} />
      <Route path='/AutomatedLawnmowers' element={<AutomatedLawnmowers />} />
      <Route path='/Rattan' element={<RattanFurniture />} />
      <Route path='/EggChairs' element={<EggChairs />} />
      <Route path='/SwingingChairs' element={<SwingingChairs />} />
      <Route path='/TableAndChairs' element={<TableAndChairs />} />
      <Route path='/StandingLamps' element={<StandingLamps />} />
      <Route path='/WallLights' element={<WallLights />} />
      <Route path='/HeatLamps' element={<HeatLamps />} />
      <Route path='/SpotLights' element={<SpotLights />} />
      <Route path='/SwimmingPool' element={<SwimmingPool />} />
      <Route path='/HotTubs' element={<HotTubs />} />
      <Route path='/PoolsForPets' element={<PoolsForPets />} />
      <Route path='/paddlingPools' element={<PaddlingPools />} />
      <Route path='/SmallWoodenSheds' element={<SmallWoodenSheds />} />
      <Route path='/MetalSheds' element={<MetalSheds />} />
      <Route path='/GardenOffices' element={<GardenOffices />} />
      <Route path='/LargeWoodenSheds' element={<LargeWoodenSheds />} />
      <Route path='/TwoSixManTents' element={<TwoSixManTents  />} />
      <Route path='/EightManAndAbove' element={<EightManAndAbove  />} />
      <Route path='/CampingEquipment' element={<CampingEquipment  />} />
      <Route path='/Glamping' element={<Glamping />} />
      <Route path='/ClimbingFrames' element={<ClimbingFrames />} />
      <Route path='/Slides' element={<Slides />} />
      <Route path='/OtherGardenToys' element={<OtherGardenToys />} />
      <Route path='/Swings' element={<Swings />} />
      <Route path='/IndoorTrampolines' element={<IndoorTrampolines/>} />
      <Route path='/SixEightFtTrampolines' element={<SixEightFtTrampolines />} />
      <Route path='/TenTwelveFtTrampolines' element={<TenTwelveFtTrampolines />} />
      <Route path='/TwelveAndAbove' element={<TwelveAndAbove />} />
      <Route path='/GeneralTools' element={<GeneralTools />} />
      <Route path='/Chainsaws' element={<Chainsaws />} />
      <Route path='/LeafBlowers' element={<LeafBlowers />} />
      <Route path='/HedgeStrimmers' element={<HedgeStrimmers />} />
      <Route path='/Decking' element={<Decking />} />
     
     
     
      </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
