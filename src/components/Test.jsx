import React from 'react';
import {motion} from 'framer-motion';

function Test(props) {
  return (
    <div className={`course`}>
      <motion.div className={`box`} initial={{opacity: 0.5, scale: 0.5}} transition={{duration: 2}} whileInView={{opacity:1, scale: 2}}></motion.div>
    </div>
  );
}

export default Test;