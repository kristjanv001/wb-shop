import { Carousel } from 'antd';

export const Banner = () => {

  return (
    <div className="banner" >

      <Carousel autoplay dotPosition="top"  >


        <div className="banner-item">
          <img className="banner-image" src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" />
        </div>

        <div className="banner-item">
          <img className="banner-image" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
        </div>

        <div className="banner-item">
          <img className="banner-image" src="https://images.unsplash.com/photo-1582404510421-de6290209c8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80" />
        </div>



      </Carousel>
    </div >
  )
}