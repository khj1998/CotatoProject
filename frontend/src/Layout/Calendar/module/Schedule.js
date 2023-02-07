import React from "react";
import Style from "./Style";

const Schedule = (index, todo) => {
    const result =[]
    if (todo[index] !== undefined) {
        todo[index].map((item) => {
            result.push(<li style={Style(item[1])} key={index+item}>{item[0]}</li>)
        })
        return result
    }
    return null;
}

export default Schedule
