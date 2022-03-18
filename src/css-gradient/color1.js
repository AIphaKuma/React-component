import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import 'bootstrap/dist/css/bootstrap.min.css';




function SketchExample() {
    const [color, setColor] = useState("lightblue")
    const [hidden, setHidden] = useState(false)

    const pickerStyles = {
        default: {
            picker: {
                bottom: "30px",
                left: "100px"
            }
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {!hidden && (
                        <SketchPicker
                            styles={pickerStyles}
                            color={color}
                            onChange={updateColor => setColor(updateColor.hex)}
                        />
                    )}
                </div>
                <div className='col'>
                    <input
                        type={"color"}
                        value={color === "none" ? "#FFFFFF" : color}
                        onChange={(e) => {
                            setColor((prev) => {
                                const newColorArray = [...prev];
                                newColorArray[index] = e.target.value;
                                return newColorArray;
                            });
                            value1Ref.current.value = e.target.value.toUpperCase();
                            value2Ref.current.value =
                                hexToRgb(e.target.value).r +
                                "," +
                                hexToRgb(e.target.value).g +
                                "," +
                                hexToRgb(e.target.value).b;
                        }}
                </div>
                <button onClick={() => setHidden(!hidden)}>
                    {hidden ? "Open color picker" : "Close color picker"}
                </button>
                <div style={{ background: color, height: '10vw' }} ></div>
            </div>
        </div>
    )
}

export default SketchExample