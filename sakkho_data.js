const pics = [
    
    'url("/sakkho_ain/1.png")',
    'url("/sakkho_ain/2.png")',
    'url("/sakkho_ain/3.png")',
    'url("/sakkho_ain/4.png")',
    'url("/sakkho_ain/5.png")',
    'url("/sakkho_ain/6.png")',
    'url("/sakkho_ain/7.png")',
    'url("/sakkho_ain/8.png")',
    'url("/sakkho_ain/9.png")',
    'url("/sakkho_ain/10.png")',
    'url("/sakkho_ain/11.png")',
    'url("/sakkho_ain/12.png")',
    'url("/sakkho_ain/13.png")',
    'url("/sakkho_ain/14.png")',
    'url("/sakkho_ain/15.png")',
    'url("/sakkho_ain/16.png")',
    'url("/sakkho_ain/17.png")',
    'url("/sakkho_ain/18.png")',
    'url("/sakkho_ain/19.png")',
    'url("/sakkho_ain/20.png")',
    'url("/sakkho_ain/21.png")',
    'url("/sakkho_ain/22.png")',
    'url("/sakkho_ain/23.png")',
    'url("/sakkho_ain/24.png")',
    'url("/sakkho_ain/25.png")',
    'url("/sakkho_ain/26.png")',
    'url("/sakkho_ain/27.png")',
    'url("/sakkho_ain/28.png")',
    'url("/sakkho_ain/29.png")',
    'url("/sakkho_ain/30.png")',
    'url("/sakkho_ain/31.png")',
    'url("/sakkho_ain/32.png")',
    'url("/sakkho_ain/33.png")',
    'url("/sakkho_ain/34.png")',
    'url("/sakkho_ain/35.png")',
    'url("/sakkho_ain/36.png")',
    'url("/sakkho_ain/37.png")',
    'url("/sakkho_ain/38.png")',
    'url("/sakkho_ain/39.png")',
 
]


const pic = document.querySelector("section")
function showImage(){
    var a = Math.floor(Math.random()* pics.length)
    var img = pics[a]
    console.log(img)
    pic.style.backgroundImage = img
    pic.style.img = img
}