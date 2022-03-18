import React, { useState } from 'react';

function ColorPicker() {

  const [color1, setColor1] = useState(null)
  const [color2, setColor2] = useState(null)

 

  console.log("colorPicker1", color1);
  console.log("colorPicker2", color2);


  return (
    <>
      <div>
        <label for="favcolor">Color 1  </label>
        <input type="color" id="favcolor1" name="favcolor1" value={color1} onChange={e => setColor1(e.target.value)} />
      </div>

      <div>
        <label for="favcolor">Color 2  </label>
        <input type="color" id="favcolor2" name="favcolor2" value={color2} onChange={e => setColor2(e.target.value)} />
      </div>
      
      <div style={{ background:`linear-gradient(to right,  ${color1} 0%,${color2} 100%)`, height: "10vw" }}></div>
      <div> CSS to copy into ur code : </div>
    </>
  )
}

export default ColorPicker