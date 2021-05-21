import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from 'react'
import Plan from './Plan';

class App extends Component {
  state = {
    items: JSON.parse(localStorage.getItem("note")),
    text: ""
  }
  changeHandler = e => {
    this.setState({ text: e.target.value });
  }
  clickHandler = (e) => {
    if (this.state.text === "") {
      return;
    }
    if (this.state.items !== null) {
      this.setState({
        items: [...this.state.items, this.state.text],
        text: ""
      }, () => {
        localStorage.setItem("note", JSON.stringify(this.state.items));
      })
    } else {
      this.setState({
        items: [this.state.text],
        text:""
      }, () => {
        localStorage.setItem("note", JSON.stringify(this.state.items));
      })
    }
  }
  deleteHandler = (index) => {
    this.state.items.splice(index, 1)
    localStorage.setItem("note", JSON.stringify(this.state.items))
    this.setState({
      items: JSON.parse(localStorage.getItem("note"))
    })
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-8 mx-auto text-white shadow-lg ">
            <h1 className="text-center">Today's Plan</h1>
            <div className="" style={{width:"100%"}}>
              <div className="m-2">
                <input type="text" className="form-control" placeholder="Write plans here"
                  value={this.state.text}
                  onChange={this.changeHandler} />
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-5 font-weight-bold"
                  onClick={this.clickHandler}>Add</button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled  my-5 d-flex flex-wrap " style={{width:"100%"}}>
                  {this.state.items &&
                    this.state.items.map((item, i) => {
                      return <Plan key={i} value={item} deleteHandler={() => this.deleteHandler(i)} />
                    })}

                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default App;
