let like = document.getElementById('heart');
let map = document.getElementById('map');
let marker = document.getElementById('marker');

let hoverProfile = document.getElementsByClassName('hoverProfile');

// let imgPath=hoverProfile[0].src.slice(21,41);

let sideimg = document.getElementById('sideimg');

let vendor = document.getElementsByClassName('vendor');
let toogleMain = document.getElementById('toogleMain');
let sidebarToggle = document.getElementById('sidebarToggle');

// This is for onload hover effect   



// This is for Change constracture

const myArr = [{
    image: '/image/Vendor1.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.857580701797!2d75.81685971497954!3d30.890644881582414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83ce7433cb17%3A0xfe4795e4f7b2992f!2sGurudwara%20Rd%2C%20D-Block%2C%20Sarabha%20Nagar%2C%20Ludhiana%2C%20Punjab%20141001!5e0!3m2!1sen!2sin!4v1632323041172!5m2!1sen!2sin"
},
{
    image: '/image/Vendor2.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.2518711516796!2d75.83149141498008!3d30.907583181576477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8394c6490275%3A0x83b24b324f61a1e7!2sKhalsa%20College%20for%20Women!5e0!3m2!1sen!2sin!4v1632323256469!5m2!1sen!2sin "
},
{
    image: '/image/Vendor3.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.7562798361473!2d75.82683011497964!3d30.893478281581373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83ca1bf799b9%3A0x5feff5b10c7fc136!2sRanjit%20Tower%2C%20Pakhowal%20Rd%2C%20Gurdev%20Nagar%2C%20Ludhiana%2C%20Punjab%20141001!5e0!3m2!1sen!2sin!4v1632323359607!5m2!1sen!2sin "
},
{
    image: '/image/Vendor4.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.294925361944!2d77.2368897149216!3d28.56090528244616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce24b3fffffff%3A0x68a23df787e3a6c!2s5%2C%20Old%20Double%20Storey%2C%20Amar%20Colony%2C%20Lajpat%20Nagar%204%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1632323490835!5m2!1sen!2sin "
},
{
    image: '/image/Vendor5.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3829501493856!2d77.22479421492375!3d28.648250182411566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd17c9bdebcd%3A0xa97b55fb3a1cba3e!2sChawri%20Bazar%2C%20Chandni%20Chowk%2C%20New%20Delhi%2C%20Delhi%20110006!5e0!3m2!1sen!2sin!4v1632323572000!5m2!1sen!2sin "
},
{
    image: '/image/Vendor6.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.798011861704!2d77.0917781149234!3d28.63581528241651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04db6553f7a3%3A0x5a718e5e70b5c308!2sShivaji%20Marg%2C%20Tilak%20Nagar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1632323669359!5m2!1sen!2sin "
},
{
    image: '/image/Vendor7.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.172871406128!2d77.21410781492389!3d28.654542082409083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3f42dd999f%3A0x9f61dc914c2093dc!2sBabu%20Ram%20Solanki%20Marg%2C%20Sadar%20Bazaar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1632323796731!5m2!1sen!2sin "
},
{
    image: '/image/Vendor8.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.959720940498!2d77.64599526464454!3d12.910310390896084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149c7e6f12f1%3A0xfdf0f98eb9d034ca!2sParangi%20Palaya%2C%20Sector%202%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102!5e0!3m2!1sen!2sin!4v1632324018378!5m2!1sen!2sin "
},
{
    image: '/image/Vendor9.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.457322126658!2d77.06914601492224!3d28.586054282436177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b17229fd6d3%3A0xb4dda3af442c011e!2sRamphal%20Chowk%20Rd%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1632324113343!5m2!1sen!2sin "
},
{
    image: '/image/Vendor11.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.893950415081!2d78.16596811495573!3d29.953728881915463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390946fd8368c74b%3A0x4393941764701f25!2sMathura%20Walo%20Ki%20Pracheen%20Dukaan!5e0!3m2!1sen!2sin!4v1632324206215!5m2!1sen!2sin"
},
{
    image: '/image/Vendor12.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.23982817693!2d82.92106844222832!3d25.320746099767927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1632324284512!5m2!1sen!2sin "
},
{
    image: '/image/Vendor13.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4915909171646!2d88.36649991479251!3d22.598110835169646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027631a3465efb%3A0x7e1d395c15d349e1!2sShyambazar%2C%20Hati%20Bagan%2C%20Kolkata%2C%20West%20Bengal%20700004!5e0!3m2!1sen!2sin!4v1632324345992!5m2!1sen!2sin "
},
{
    image: '/image/Vendor14.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15555.532161175624!2d77.68844617496465!3d12.915238054284819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSk%20arcade%2CSarjapur%20Road%2CBengaluru!5e0!3m2!1sen!2sin!4v1632324450885!5m2!1sen!2sin"
},
{
    image: '/image/Vendor15.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8019866063837!2d88.35161651479159!3d22.549089185194862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771a88564cdf%3A0x5f0198fac749894!2s25%2C%20Camac%20St%2C%20Park%20Street%20area%2C%20Kolkata%2C%20West%20Bengal%20700016!5e0!3m2!1sen!2sin!4v1632324605285!5m2!1sen!2sin"
},
{
    image: '/image/Vendor16.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3702.9326998199726!2d86.78840701477851!3d21.860131485553897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1632324709135!5m2!1sen!2sin"
},
{
    image: '/image/Vendor17.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.322852998616!2d88.34752561479195!3d22.5670251851856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a6e3d46d79%3A0x146bd0ee3b924fac!2sJames%20Hickey%20Sarani%2C%20Esplanade%2C%20Kolkata%2C%20West%20Bengal%20700069!5e0!3m2!1sen!2sin!4v1632324883509!5m2!1sen!2sin"
},
{
    image: '/image/Vendor18.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1842.0075535337594!2d88.35210765805903!3d22.578538296294944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMLB%20road%2Cbagree%20market%2CKolkat!5e0!3m2!1sen!2sin!4v1632324943883!5m2!1sen!2sin"
},
{
    image: '/image/Vendor19.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7369.014221277715!2d88.34838117427827!3d22.5601292407567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770899544e4f%3A0xdef16b60f9ac451d!2sNew%20Market%20Area%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1632325029552!5m2!1sen!2sin"
},
{
    image: '/image/Vendor20.jpg',
    location: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d471220.56305731717!2d88.04953334070645!3d22.67575208848934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDacrace%20road%2CKolkata!5e0!3m2!1sen!2sin!4v1632325209276!5m2!1sen!2sin"
},
]


// This is for like toggler

function likeTogg() {
    if (like.classList.contains('text-danger')) {
        like.classList.remove('text-danger');
        // localStorage.removeItem(`vendor${index}`)
    }
    else {
        like.classList.add('text-danger');
        // localStorage.setItem(`vendor${index}`,'redHeart')
    }
}

like.addEventListener('click', likeTogg);

// this is for location and image update
function profile(index) {
    let imgPath = hoverProfile[index].src.slice(21, 41);
    let sideimgPath = myArr[index].image;
    if (imgPath == sideimgPath) {
        sideimg.src = sideimgPath;
        marker.src = myArr[index].location;
    }
}

// This is Like Updater

// function likeUpdate(i){
//         if(localStorage.getItem(`vendor${i}`)){
//             like.classList.add('text-danger');
//         }
//     }


// This is for Share Section

let socialDiv = document.querySelector('.socialDiv');
let share = document.getElementById('share');
let textArea = document.getElementById('floatingTextarea');
let comment = document.getElementById('comment');
share.addEventListener('click', () => {
    if (socialDiv.classList.contains('hidden')) {
        socialDiv.classList.remove('hidden')
    }
    else {
        socialDiv.classList.add('hidden')
    }
})

// This is for Comment

comment.addEventListener('click', () => {
    if (textArea.classList.contains('hidden')) {
        textArea.classList.remove('hidden');
        textArea.classList.add('textDiv')
    }
    else {
        textArea.classList.add('hidden');
        textArea.classList.remove('textDiv');
    }
})

// I have to Create a function for Like update and have to set the value for each like 

