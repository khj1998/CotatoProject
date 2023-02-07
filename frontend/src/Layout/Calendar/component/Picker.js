import React from "react";
import Style from "../module/Style";


const Picker = ({changeColor}) => {

    const colors = ['#FF0000', '#EDD200', '#00A500', '#0054FF', '#8C8C8C']

    return (
        <div className="picker">
                {colors.map((color, index) => (
                    <div className="custom-check-box" style={Style(color)} onClick={() => changeColor(color)} key={index}/>
                ))}
        </div>
    )
}

export default Picker;
