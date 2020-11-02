import React, {Fragment} from 'react'

const ImageThumb = ({ image }) => {
     return (
          <Fragment>
               <img src={URL.createObjectURL(image)} alt={image.name} />;
          </Fragment>
     )
}

export default ImageThumb
