import React from "react";


export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { current } = this.props;
    return (
        <div >
        <div>
            <div>
                Feels like: {current.feelslike_c}
            </div>
            <div>
            Humidity: {current.humidity}
            </div>
            <div>
                Wind: {current.wind_kph}
            </div>
            <div>
                Wind direction: {current.wind_dir}
            </div >
            <div> 
                uv: {current.uv}
            </div>
        </div>
      </div>
    );
  }
}