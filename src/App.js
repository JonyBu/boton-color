import React from 'react';
import boton from './Imagenes/power-button.png'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: undefined,
      color: 'white',
      time: 60,
      display: 'none'
    }
    this.detener = this.detener.bind(this)
  }

  setColor = (time, user) => {
    let color = this.state.color
    if (time > 51 && time < 61) {
      color = 'purple';
    } else if (time < 52 && time > 41) {
      color = 'blue';
    } else if (time < 42 && time > 31) {
      color = 'green'
    } else if (time < 32 && time > 21) {
      color = 'yellow'
    } else if (time < 22 && time > 11) {
      color = 'orange'
    } else if (time < 12 && time > 0) {
      color = 'red'
    } else if (time === 0) {
      color = 'grey'
    }
    this.setState({ ...this.state, color: color, time: time, user: user })
  }

  detener = () => {
    clearInterval(this.cronometro);
    this.setState({ display: 'block' })
  }

  empezar = () => {
    let confirm = window.confirm('Desea iniciar?');
    if (confirm === true) {
      let user = 'new user';
      let time = this.state.time;
      this.cronometro = setInterval(() => {
        this.setColor(time, user);
        if (time !== 0) {
          time--
        } else {
          this.detener()
        }
      }, 1000);
    }
  }

  onclick = () => {
    let user = this.state.user
    console.log(this.state);
    if (user === undefined) {
      this.empezar();
    } else {
      this.detener();
    }
  }

  render() {
    return (
      <div class="media" >
        <img onClick={this.onclick} src={boton} alt="button" className="btn" style={{ width: '20%', margin: 'auto' }} />
        <p></p>
        <div class="jumbotron" style={{ color: this.state.color, backgroundColor: '#9996', display: this.state.display }}>
          <h1 class="mt-0">{this.state.time}</h1>
          <p> {this.state.user} </p>
          <p> tu color es {this.state.color} </p>
          <div style={{ backgroundColor: this.state.color, height: '20px' }}></div>
        </div>
      </div>
    )
  }
}

export default App;
