import React from 'react';
import style from './Post.module.css'

const Post = ({messageText, like}) => {
    return <div className={style.post}>
        <div className={style.userPostImg}>
            <img src="https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/IPZM424KYBEH7IVUKNQZETWHVU.jpg"
                 alt=""/>
        </div>
        <div className={style.item}>
            <p>{messageText}</p>
            <div className={style.like}>
                like: {like}
            </div>
        </div>
    </div>
}

export default Post;