import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import image1 from '../../../images/carousel1.png';
import image2 from '../../../images/carousel2.png';
import image3 from '../../../images/carouselimage.png';
import image4 from '../../../images/mobiles.jpg';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  h3: {
    height: '24rem',
    color: '#fff',
    lineHeight: '23rem',
    textAlign: 'center',
    background: '#364d79',
    marginBottom: '-0.5rem',
  },
  img: {
    width: '1472px',
    height: '377px',
    [theme.breakpoints.down('sm')]: {
      width: '896px',
    },
  }
}));

const Carousell = () => {
  const classes = useStyles();
  return (
    <div>
      <Carousel effect="fade" autoplay >
    <div>
    <h3 className={classes.h3} ><img src={image1} className={classes.img} alt="images" srcSet="" /></h3>
    </div>
    <div>
      <h3 className={classes.h3} ><img src={image2} className={classes.img} alt="images" srcSet="" /></h3>
    </div>
    <div>
      <h3 className={classes.h3} ><img src={image3} className={classes.img} alt="images" srcSet="" /></h3>
    </div>
    <div>
      <h3 className={classes.h3}><img src={image4} className={classes.img} alt="images" srcSet="" /></h3>
    </div>
  </Carousel>
    </div>
  )
}

export default Carousell
