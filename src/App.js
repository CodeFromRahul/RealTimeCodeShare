import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Editorpage from './pages/Editorpage'
import './App.css';
import {Toaster} from "react-hot-toast"

function App() {
  return (
   <>
   <div>
    <Toaster position="top-right" toastOptions={{
      success:{
        theme:{
          primary:'#4aed88'
        },
      },
    }}>

    </Toaster>
   </div>
   <BrowserRouter>
  <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/editor/:roomid" element={<Editorpage/>}></Route>
  






  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
