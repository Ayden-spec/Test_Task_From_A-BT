import './css/app.css'
import React from "react";
import Selector from '../Selector/Selector';

function App() {
  const data = require('../data.json');
  return (
    <div className='app'>
      <Selector data={data.map(el=>el.name)} callback={function(e){console.log(e)}}/>
    </div>
  );
}

export default App;
