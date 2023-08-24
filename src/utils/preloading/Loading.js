import React from 'react';

// CSS
import '../../styles/loading.css';

const Loading = () => {
    return (
<div className='cssload-loader'>
  <div className='cssload-inner cssload-one'></div>
  <div className='cssload-inner cssload-two'></div>
  <div className='cssload-inner cssload-three'></div>
</div>
    );
};

export default Loading;