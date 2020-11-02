import React,{ useState } from 'react'
import ImageThumb from '../components/ImageThumb'

const FillMailing = ({ setInfoMailing, infoMailing }) => {
console.log(infoMailing);
     // const [ name, setname ] = useState('')
     const [ selectedFile, setSelectedFile ] = useState('')
     // const [ image, setImage ] = useState('')
     const handleUpload = e => {
          return setInfoMailing(e.target.files[0])
          // setInfoMailing(setSelectedFile)
     }
     return (
          <div>
             
                   {/* <input 
                         type="text" 
                         value={name} 
                         onChange={ e => setname(e.target.value) }  
                    /> */}

                   <input 
                         type="file" 
                         // value={selectedFile} 
                         onChange={ handleUpload }
                    />
                    <p>Filename: {infoMailing.name}</p>
                    <p>File type: {infoMailing.type}</p>
                    <p>File size: {infoMailing.size} bytes</p>
                    {infoMailing && <ImageThumb image={infoMailing} />}
             
          </div>
     )
}

export default FillMailing
