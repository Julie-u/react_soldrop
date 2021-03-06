import React, {useState} from 'react'
import noImg from 'img'

const Image = ({src,alt, ...attr}) => {
    const [img, setImg] = useState(``)

    if (src) {
        import(`img/${src}`).then((image) => setImg(image.default))
    }

    return (
        <img src={(img) ? img : noImg} alt={alt} {...attr} />
    )
}

export default Image