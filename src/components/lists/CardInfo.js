import React from 'react';
import './styleCard.css';
import img_like from '../../assets/img/like.svg';
import img_comments from '../../assets/img/comment.svg';
import img_reposts from '../../assets/img/retweet.svg';

function CardInfo(props) {
    return (
        <article className="cardInfo" key={props.id}>
            <header className="userInfo">
                <img className="profilePhoto"
                     src={props.photo}
                     alt="#"/>
                <div className="profileName">{props.name}</div>
                <div className="profilePseudonym">{props.nickname}</div>
                <time className ="date">{props.date}</time>
            </header>
            <section className = "content">
                <p className = "comment">{props.text}</p>
                <img className = "img"
                     src={props.img}
                     alt="#"/>
            </section>
            <footer className='footerCard'>
                <div className='icon_footer' ><img className='img_icon' src={img_like} alt='likes'/> {props.likes}</div>
                <div className='icon_footer'><img className='img_icon' src={img_comments} alt='comments'/> {props.comments}</div>
                <div className='icon_footer'><img className='img_icon' src={img_reposts} alt='reposts'/> {props.reposts}</div>
            </footer>
        </article>
    );
}

export default CardInfo;







