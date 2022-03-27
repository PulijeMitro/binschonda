
import Navbar from './components/Navbar';
import Header from './components/Header';
import Timeline from './components/Timeline';
import React from 'react';

function App()
{
  const [showModal, setShowModal] = React.useState(false);
  var button = document.getElementById('button1');
  button && button.addEventListener("click", function (e) { setShowModal(true) });


  return (

    <div className='bg-slate-100'>
      <Navbar />
      <br />
      <Header />
      <br />
      <Timeline showPause={showModal} />
      <br />



    </div>

  );
}

export default App;
