import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

export default class PlanetSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {planetsList} = this.props
    return (
      <div testid="planets" className="planets-container">
        <h1 className="heading">PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(each => (
            <ul>
              <PlanetItem key={each.id} details={each} />
            </ul>
          ))}
        </Slider>
      </div>
    )
  }
}
