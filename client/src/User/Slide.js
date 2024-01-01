import React from 'react'
import { Carousel } from 'react-bootstrap'
const Slide = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img alt="" className='carousel-image' src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/sarkaru-vaari-paata-et00131962-10-05-2022-04-18-10.jpg" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img alt="" className='carousel-image' src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/baahubali-2-the-conclusion-et00038693-12-11-2020-05-48-55.jpg" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img alt="" className='carousel-image' src="https://lehren.com/wp-content/uploads/2022/01/Pushpa-The-Rise-Storyline-Ending-What-To-Expect-In-Part-2.jpg" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img alt="" className='carousel-image' src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/21/694919fad2fc030a0845a2d71dabd968_original.jpg" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img alt="" className='carousel-image' src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/f3-fun-and-frustration-et00305551-24-05-2022-11-06-51.jpg" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Slide