<style>
/* This is the background style  */
@import url('https://fonts.googleapis.com/css?family=Exo:400,700');

*{
    margin: 0px;
    padding: 0px;
}

body{
    font-family: 'Exo', sans-serif;
}


.context {
    width: 100%;
    position: absolute;
    
}

.context h1{
    text-align: center;
    color: #fff;
    font-size: 50px;
}


.area{
    width: 100%;
    height:100%;
    
   
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 50px;
    height: 50px;
    background:rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    background: #a864fd;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    background: #29cdff;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    background: #78ff44;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    background: #ff718d;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    background: #fdff6a;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    background: #a864fd;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    background: #29cdff;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    background: #78ff44;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    background: #ff718d;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    background: #fdff6a;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>
<style>
/**Change the width and height of profile image here */
    .profile {
    vertical-align: middle;
    width: 80px;
    height: 80px;
    }
    .social-media-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    }
    .social-media-link {
    display: flex;
    align-items:center;
    text-decoration: none;
    width: 90%;
    }
    .link-container {
    position: relative;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    }
    .link-container .card-wrapper {
        position: relative;
        display: grid;
        place-items: center;
        text-align: center;
        text-decoration: none;
        z-index: 1;
        width: 90%;
        height: 80px;
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        overflow: hidden;
        margin-top: 20px;
    }
    .link-container .card-wrapper .content h3 {
        font-size: 1.6em;
        color: #fff;
        text-align: center;
        width: 100%;
    }
    .card-wrapper:focus{
        animation: pulsate 1s
        ease-in-out;
    }
    .card-wrapper:hover{
        animation: pulsate 1s
        ease-in-out;
    }
    /* SET CLICK/HOVER GLOW EFFECT */
    @keyframes pulsate {
        0% {
            box-shadow: 
            0 0 25px #ffff,
            0 0 50px #0000;
        }
    } 
    .heading-container {
    margin-top: 5%;
    }
    .profile-container{
	margin: 0 auto;
    display: flex;
    align-items: center;
    }
    .username {
    text-align: center;
    padding-top: 20px;
    color: white;
    font-weight: bold;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        user-select: none;
    }
    *::before,
    *::after {
        content: "";
        position: absolute;
        height: 100%;

    }
    body {
        height: 100%;
        /*
        SET BACKGROUND COLOR HERE
        */
        background: #181111;
    }

</style>
<template>
    <div>
    <div class="context">
        <div class="heading-container">
             <img :src="`${profileImg}`"  alt="profile" class="profile profile-container">
             <h2 class="username">DEV-LES</h2>
        </div>
        <div class="link-container">
            <a :href="`${link.url}`" class="card-wrapper" v-for="(link, index) of linkList"
            :key="index" >
            <div class="content social-media-link">
                    <img class="social-media-icon" :src="`${link.iconUrl}`" />
                    <h3>{{link.name}}</h3>
                </div>
            </a>
        </div>
    </div>
    <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>
</template>

<script>
import profileImage from './assets/images/DEV-LES.png'
import youtubeIcon from './assets/images/youtube.png';
import tiktokIcon from './assets/images/tik-tok.png';
import instagramIcon from './assets/images/instagram.png'
import twitterIcon from './assets/images/twitter.png';
import vrIcon from './assets/images/vr-goggles.png';
import githubIcon from './assets/images/github.png';
export default {
    head: {
        title: 'DEV-LES Links'
    },
    data() {
        return {
            // LIST FOR ALL SOCAIL MEDIA LINKS
            linkList: [
                {
                    name: 'YouTube',
                    url:'https://www.youtube.com/channel/UCQSook2k99qgz4s_fFzIJnA',
                    iconUrl: youtubeIcon,
                },
                {
                    name: 'TikTok',
                    url:'https://www.tiktok.com/@dev_les',
                    iconUrl: tiktokIcon,
                },
                {
                    name: 'Instagram',
                    url:'https://www.instagram.com/devles974/',
                    iconUrl: instagramIcon,
                },
                 {
                    name: 'Twitter',
                    url:'https://twitter.com/LuisSan72912774',
                    iconUrl: twitterIcon,
                },
                {
                    name: 'Github',
                    url:'https://github.com/dev-les',
                    iconUrl: githubIcon,
                },
                {
                    name: 'Metaverse',
                    url:'https://dev-les.github.io/metaverse_demo/',
                    iconUrl: vrIcon,
                },
            ],
            profileImg: profileImage
        }
    },

}
</script>