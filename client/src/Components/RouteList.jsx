import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {fadeInUp} from 'react-animations';

class RouteList extends Component {
    render() {
    const route = this.props.route;
    const color = route.color;
    const creationDate = new Date(route.date_set);
    const monthSet = creationDate.getMonth()+1;
    const daySet = creationDate.getDate();
    const yearSet = creationDate.getFullYear();

    const backgroundColor = (color) => {
        if(color === "Yellow/Green"){ return "url('https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2599810.jpg')"}
        if(color === "Orange"){ return "url('http://awesomwallpaper.com/img1/55FFBF6A5486/cool-orange-and-white.jpg')"}
        if(color === "Yellow"){ return "url('https://ak2.picdn.net/shutterstock/videos/22477861/thumb/12.jpg')"}
        if(color === "Green"){return "url('https://s-media-cache-ak0.pinimg.com/600x315/1f/e4/b3/1fe4b3347d445ec68f18dce9c8148c8e.jpg')"}
        if(color === "New Blue"){return "url('http://images.all-free-download.com/images/graphicthumb/blue_background_picture_3_169440.jpg')"}
        if(color === "Red/Black"){return "url('http://www.marble-city.co.uk/img/slideshow/granite---iron-or-steel-red.jpg')"}
        if(color === "Dark Green"){return "url('http://www.winter-company.com/t3_477/uploads/tx_winprod02/NOV66-703-Dark-Green.jpg')"}
        if(color === "Franklin"){return "url('http://www.wood-furniture.biz/images5/barbarossaleather_turtle_croc.jpg')"}
        if(color === "Yellow/Black"){return "url('http://www.welcomia.com/uploads/preview/yellow_black_grunge_5464.jpg')"}
        if(color === "Black"){return "url('https://i.pinimg.com/736x/4c/44/ff/4c44ffb3128ea2386e94675af604a8e4--plain-black-wallpaper-dark-wallpaper.jpg')"}
        if(color === "Red"){return "url('http://img02.deviantart.net/a5d7/i/2010/116/e/9/red_backdrop__stock_01_by_lokolobo88.jpg')"}
        if(color === "White/Blue/Purple"){return "url('https://thumb10.shutterstock.com/display_pic_with_logo/4009102/401168887/stock-photo-abstract-background-watercolor-marble-texture-white-blue-pink-401168887.jpg')"}
        if(color === "Blue/White"){return "url('https://thumb9.shutterstock.com/display_pic_with_logo/1389595/454221022/stock-photo-blue-marble-patterned-texture-background-for-interior-design-454221022.jpg')"}
        if(color === "Blue/Yellow"){return "url('http://www.xrdnet.com/beliteratura/wp-content/uploads/2010/08/blye.jpg')"}
        if(color === "Blue"){return "url('http://www.drodd.com/images14/blue24.jpg')"}
        if(color === "Green/Black"){return "url('https://s-media-cache-ak0.pinimg.com/736x/c3/93/80/c39380d19131c5192c0794ca4bb186df--cute-wallpapers-wallpapers-for-desktop.jpg')"}
        if(color === "Stone"){return "url('https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX7506176.jpg')"}
        if(color === "Purple"){return "url('http://7-themes.com/data_images/collection/3/4446791-purple-wallpapers.png')"}
        if(color === "White/Red/Black"){return "url('https://thumb1.shutterstock.com/display_pic_with_logo/1266925/448518133/stock-vector-red-black-and-white-colors-vector-wavy-marble-effect-abstract-background-448518133.jpg')"}
        if(color === "Creamsicle"){return "url('http://4.bp.blogspot.com/-EOgTX7paz8A/UDwaNnRzejI/AAAAAAAAErY/ftoaD5jeo0U/s1600/new+orleans+satsuma+dreamsicle+ice+cream+swirl.jpg')"}
        if(color === "White/Black"){return "url('https://ae01.alicdn.com/kf/HTB1FinLHVXXXXcxXVXXq6xXFXXX2/High-Gloss-font-b-Black-b-font-and-White-font-b-Marble-b-font-Vinyl-Contact.jpg')"}
        if(color === "White/Blue/Black"){return "url('http://data.whicdn.com/images/186091698/original.jpg')"}
        if(color === "Light Green" || "Light Green/Black"){return "url('http://cdn.mysitemyway.com/etc-mysitemyway/backgrounds/legacy-previews/backgrounds/watercolor-grunge/watercolor-grunge-000001-lime-green.jpg')"}
        if(color === "Natural Features" || "Natural"){return "url('https://st.hzcdn.com/simgs/59d1ff42065e039b_4-1525/rustic-wallpaper.jpg')"}
        if(color === "Orange/Black"){return "url('https://marketplace.canva.com/MACY2a32avs/2/0/thumbnail_large/canva-orange-black-invitations-poster-MACY2a32avs.jpg')"}
        if(color === "Purple/Black"){return "url('https://s-media-cache-ak0.pinimg.com/originals/e0/bc/c2/e0bcc2b6973264490233e48f5721f5eb.jpg')"}

    }

    const RouteWrapper = styled.div`
        color: #695970;
        width: 80vw;
        height: 50px;
        margin: 15px auto;
        text-align: center;
        border: 2px solid black;
        border-radius: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-image: ${backgroundColor(color)};
        background-size: cover;
        p{
            margin: 0px;
        }
        h1{
            margin: 0px;
        }
    `
    
    const fadeAnimation = keyframes`${fadeInUp}`;

    const FadeInDiv = styled.div`
        animation: 1s ${fadeAnimation};
    `

        return ( 
            <FadeInDiv>
                <RouteWrapper>
                    {this.props.displayWall ?
                    <div>
                        <h1>{route.wall}</h1>
                    </div>
                    : null}
                    <div>
                        <h1>{route.difficulty}</h1>
                    </div>
                    <div>
                        <p>Set by: {route.setBy}</p>
                        <p>Set on: {monthSet}/{daySet}/{yearSet}</p>
                    </div>
                </RouteWrapper>   
            </FadeInDiv>
        );
    }
}

export default RouteList;