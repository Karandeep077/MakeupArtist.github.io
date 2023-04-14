const express = require("express");
const hbs= require("hbs");
const app= express();
const mongoose= require("mongoose");
const bodyParser=require('body-parser')
const routes= require('./routes/main');
const Detail=require("./models/Detail");
const Slider=require("./models/Slider")
const Service=require("./models/Service")
const User=require("./models/User")
const Work=require('./models/Work')

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static', express.static("public"))
app.use('', routes);



app.set('view engine', 'hbs');
app.set("views", "views")

hbs.registerPartials("views/partials")

mongoose.connect('mongodb://127.0.0.1:27017/website_ser').then(()=> {
    console.log('db connected')

    // Service.create([
    //     {
    //         icon:'/static/images/bridal2.jpg',
    //         title:'Bridal Makeup Services',
    //         description:'Creating the Perfect Look for Your Special Day',
    //         linkText:'https://www.google.com',
    //         link:'Check'
    //     },
    //     {
    //         icon:'/static/images/facial.jpg',
    //         title:'Facial Treatments',
    //         description:'Rejuvenating and Nourishing Your Skin for a Healthy Glow',
    //         linkText:'https://www.google.com',
    //         link:'Check'
    //     },
    //     {
    //         icon:'/static/images/hairstyling.jpg',
    //         title:'Hair Styling',
    //         description:'Creating Bouncy and Beautiful Hairstyles for Any Occasion',
    //         linkText:'https://www.google.com',
    //         link:'Check'
    //     },
    //     {
    //         icon:'/static/images/waxing.jpg',
    //         title:'Full Body Waxing',
    //         description:'Removing Unwanted Hair with Precision and Care',
    //         linkText:'https://www.google.com',
    //         link:'Check'
    //     },
    //     {
    //         icon:'/static/images/hairtreatment.jpg',
    //         title:'Hair Treatment',
    //         description:'Enhancing Your Natural Lashes for a Stunning Look',
    //         linkText:'https://www.google.com',
    //         link:'Check'
    //     },
    //     {
    //         icon:'/static/images/teach.jpg',
    //         title:'Makeup Classes',
    //         description:'Teaching the Art of Makeup Application and Techniques for Everyday and Special Occasions.',
    //         linkText:'https://www.google.com',
    //         link:'Check'
    //     },
    // ])


    // Slider.create([
    //     {
    //         title: 'Elevating Your Look with Expert Techniques',
    //         subTitle:'Unlocking the Power of Makeup to Transform Your Appearance',
    //         imageUrl: "/static/images/2.jpg"
    //     },
    //     {
    //         title: 'Enhancing Your Inner Radiance with Makeup',
    //         subTitle:'Creating Custom Looks That Highlight Your Best Features and Boost Your Confidence',
    //         imageUrl: "/static/images/3.jpg"
    //     },
    //     {
    //         title: 'Creating Stunning Looks for Any Occasion',
    //         subTitle:'Expert Makeup Artistry for Red Carpet-Worthy Beauty',
    //         imageUrl: "/static/images/4.jpg"
    //     },
    // ])

    // User.create([
    //         {
    //             SocialLink: 'https://www.linkedin.com/in/rishika-kaur-38a2a7214/',
    //             tags: 'fab fa-linkedin-in'
    //         },
    //         {
    //             SocialLink: 'https://mail.google.com/mail/u/0/#inbox',
    //             tags: 'fa fa-envelope'
    //         },
    //         {
    //             SocialLink: 'https://www.instagram.com/glitz_and_glitterr/',
    //             tags: 'fab fa-instagram'
    //         },
    //         {
    //             SocialLink: 'https://www.facebook.com/rishikakaur',
    //             tags: 'fab fa-facebook-f'
    //         }
    //     ])



    // Work.create([
    //         {
    //             ImgLink: '/static/images/i10.jpg'    
    //         },
    //         {
    //             ImgLink: '/static/images/i1.jpg'
    //         },
    //         {
    //             ImgLink: '/static/images/i2.jpg'
    //         },
    //         {
    //             ImgLink: '/static/images/i3.jpg'
    //         },
    //         {
    //             ImgLink: '/static/images/i4.jpg'
    //         },
    //         {
    //             ImgLink: '/static/images/i8.jpg'
    //         }
    //     ])


    // Detail.create({
    //     brandName: "Glitz_and_Glitteerr",
    //     brandIconUrl: "/static/images/mlogo3.jpg",
    //     links:[
    //         {
    //             label: "Home",
    //             url: '/'
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label:"About",
    //             url: "/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url: "/contact-us"
    //         }
    //     ]
    // })
});
    

app.listen(process.env.PORT | 7707, ()=>{
    console.log("server started");
});

