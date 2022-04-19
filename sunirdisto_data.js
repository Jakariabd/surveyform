const pics = [
    'url("/sunirdisto_protikar/1.png")',
    'url("/sunirdisto_protikar/2.png")',
    'url("/sunirdisto_protikar/3.png")',
    'url("/sunirdisto_protikar/4.png")',
    'url("/sunirdisto_protikar/5.png")',
    'url("/sunirdisto_protikar/6.png")',
    'url("/sunirdisto_protikar/7.png")',
    'url("/sunirdisto_protikar/8.png")',
    'url("/sunirdisto_protikar/9.png")',
    'url("/sunirdisto_protikar/10.png")',
    'url("/sunirdisto_protikar/11.png")',
    'url("/sunirdisto_protikar/12.png")',
    'url("/sunirdisto_protikar/13.png")',
    'url("/sunirdisto_protikar/14.png")',
    'url("/sunirdisto_protikar/15.png")',
    'url("/sunirdisto_protikar/16.png")',
    'url("/sunirdisto_protikar/17.png")',
    'url("/sunirdisto_protikar/18.png")',
    'url("/sunirdisto_protikar/19.png")',
    'url("/sunirdisto_protikar/20.png")',
    'url("/sunirdisto_protikar/21.png")',
    'url("/sunirdisto_protikar/22.png")',
    'url("/sunirdisto_protikar/23.png")',
    'url("/sunirdisto_protikar/24.png")',
    'url("/sunirdisto_protikar/25.png")',
    'url("/sunirdisto_protikar/26.png")',
    'url("/sunirdisto_protikar/27.png")',
    'url("/sunirdisto_protikar/28.png")',
    'url("/sunirdisto_protikar/29.png")',
    'url("/sunirdisto_protikar/30.png")',
    'url("/sunirdisto_protikar/31.png")',
    'url("/sunirdisto_protikar/32.png")',
    'url("/sunirdisto_protikar/33.png")',
    'url("/sunirdisto_protikar/34.png")',
    'url("/sunirdisto_protikar/35.png")',
    'url("/sunirdisto_protikar/36.png")',
    'url("/sunirdisto_protikar/37.png")',
    'url("/sunirdisto_protikar/38.png")',
    'url("/sunirdisto_protikar/39.png")',
    'url("/sunirdisto_protikar/40.png")',
    'url("/sunirdisto_protikar/41.png")',
    'url("/sunirdisto_protikar/42.png")',
    'url("/sunirdisto_protikar/43.png")',
    'url("/sunirdisto_protikar/44.png")',
    'url("/sunirdisto_protikar/45.png")',
    'url("/sunirdisto_protikar/46.png")',
    'url("/sunirdisto_protikar/47.png")',
    'url("/sunirdisto_protikar/48.png")',
    'url("/sunirdisto_protikar/49.png")',
    'url("/sunirdisto_protikar/50.png")',
    'url("/sunirdisto_protikar/51.png")',
    'url("/sunirdisto_protikar/52.png")',
    
 
]


const pic = document.querySelector("section")
function showImage(){
    var a = Math.floor(Math.random()* pics.length)
    var img = pics[a]
    console.log(img)
    pic.style.backgroundImage = img
    pic.style.img = img
}