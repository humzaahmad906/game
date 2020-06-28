import {farbic} from 'react-fabricjs'
import React, {Component} from 'react'
class GameView extends Component{
    constructor(props){
        super(props)
        
    }
    componentDidMount(){
        let canvas = new fabric.Canvas("c")
        canvas.setHeight(200)
        canvas.setWidth(200)
        let stadium = new fabric.Rect({
            height: 200,
            width: 200,
            left: 0,
            top: 0,
            fill: "green",
            selectable: false
        })
        canvas.add(stadium)
        let text = new fabric.Text("add the text you want to enter", {
            left: 50,
            top: 50,
        })
        let ball = new fabric.Circle({
            radius : 5,
            fill: "red",
            selectable: false
        })
        canvas.add(ball)
        url = "path to ball"
        fabric.Image.fromURL(url, (image)=>{
            image.selectable = false
            canvas.add(image)
            
        })
    }
    render(){
        
    }
}
