const pics = [
    'url("/penalCode/1.png")',
    'url("/penalCode/2.png")',
    'url("/penalCode/3.png")',
    'url("/penalCode/4.png")',
    'url("/penalCode/5.png")',
    'url("/penalCode/6.png")',
    'url("/penalCode/7.png")',
    'url("/penalCode/8.png")',
    'url("/penalCode/9.png")',
    'url("/penalCode/10.png")',
    'url("/penalCode/11.png")',
    'url("/penalCode/12.png")',
    'url("/penalCode/13.png")',
    'url("/penalCode/14.png")',
    'url("/penalCode/15.png")',
    'url("/penalCode/16.png")',
    'url("/penalCode/17.png")',
    'url("/penalCode/18.png")',
    'url("/penalCode/19.png")',
    'url("/penalCode/20.png")',
    'url("/penalCode/21.png")',
    'url("/penalCode/22.png")',
    'url("/penalCode/23.png")',
    'url("/penalCode/24.png")',
    'url("/penalCode/25.png")',
    'url("/penalCode/26.png")',
    'url("/penalCode/27.png")',
    'url("/penalCode/28.png")',
    'url("/penalCode/29.png")',
    'url("/penalCode/30.png")',
    'url("/penalCode/31.png")',
    'url("/penalCode/32.png")',
    'url("/penalCode/33.png")',
    'url("/penalCode/34.png")',
    'url("/penalCode/35.png")',
    'url("/penalCode/36.png")',
    'url("/penalCode/37.png")',
    'url("/penalCode/38.png")',
    'url("/penalCode/39.png")',
    'url("/penalCode/40.png")',
    'url("/penalCode/41.png")',
    'url("/penalCode/42.png")',
    'url("/penalCode/43.png")',
    'url("/penalCode/44.png")',
    'url("/penalCode/45.png")',
    'url("/penalCode/46.png")',
    'url("/penalCode/47.png")',
    'url("/penalCode/48.png")',
    'url("/penalCode/49.png")',
    'url("/penalCode/50.png")',
    'url("/penalCode/51.png")',
    'url("/penalCode/52.png")',
    'url("/penalCode/53.png")',
    'url("/penalCode/54.png")',
    'url("/penalCode/55.png")',
    'url("/penalCode/56.png")',
    'url("/penalCode/57.png")',
    'url("/penalCode/58.png")',
    'url("/penalCode/59.png")',
    'url("/penalCode/60.png")',
    'url("/penalCode/61.png")',
    'url("/penalCode/62.png")',
    'url("/penalCode/63.png")',
    'url("/penalCode/64.png")',
    'url("/penalCode/65.png")',

    
 
]


const pic = document.querySelector("section")
function showImage(){
    var a = Math.floor(Math.random()* pics.length)
    var img = pics[a]
    console.log(img)
    pic.style.backgroundImage = img
    pic.style.img = img
}