const pics = [
    'url("/Foujodari/1.png")',
    'url("/Foujodari/2.png")',
    'url("/Foujodari/3.png")',
    'url("/Foujodari/4.png")',
    'url("/Foujodari/5.png")',
    'url("/Foujodari/6.png")',
    'url("/Foujodari/7.png")',
    'url("/Foujodari/8.png")',
    'url("/Foujodari/9.png")',
    'url("/Foujodari/10.png")',
    'url("/Foujodari/11.png")',
    'url("/Foujodari/12.png")',
    'url("/Foujodari/13.png")',
    'url("/Foujodari/14.png")',
    'url("/Foujodari/15.png")',
    'url("/Foujodari/16.png")',
    'url("/Foujodari/17.png")',
    'url("/Foujodari/18.png")',
    'url("/Foujodari/19.png")',
    'url("/Foujodari/20.png")',
    'url("/Foujodari/21.png")',
    'url("/Foujodari/22.png")',
    'url("/Foujodari/23.png")',
    'url("/Foujodari/24.png")',
    'url("/Foujodari/25.png")',
    'url("/Foujodari/26.png")',
    'url("/Foujodari/27.png")',
    'url("/Foujodari/28.png")',
    'url("/Foujodari/29.png")',
    'url("/Foujodari/30.png")',
    'url("/Foujodari/31.png")',
    'url("/Foujodari/32.png")',
    'url("/Foujodari/33.png")',
    'url("/Foujodari/34.png")',
    'url("/Foujodari/35.png")',
    'url("/Foujodari/36.png")',
    'url("/Foujodari/37.png")',
    'url("/Foujodari/38.png")',
    'url("/Foujodari/39.png")',
    'url("/Foujodari/40.png")',
    'url("/Foujodari/41.png")',
    'url("/Foujodari/42.png")',
    'url("/Foujodari/43.png")',
    'url("/Foujodari/44.png")',
    'url("/Foujodari/45.png")',
    'url("/Foujodari/46.png")',
    'url("/Foujodari/47.png")',
    'url("/Foujodari/48.png")',
    'url("/Foujodari/49.png")',
    'url("/Foujodari/50.png")',
    'url("/Foujodari/51.png")',
    'url("/Foujodari/52.png")',
    'url("/Foujodari/53.png")',
    'url("/Foujodari/54.png")',
    'url("/Foujodari/55.png")',
    'url("/Foujodari/56.png")',
    'url("/Foujodari/57.png")',
    'url("/Foujodari/58.png")',
    'url("/Foujodari/59.png")',
    'url("/Foujodari/60.png")',
    'url("/Foujodari/61.png")',
    'url("/Foujodari/62.png")',
    'url("/Foujodari/63.png")',
    'url("/Foujodari/64.png")',
    'url("/Foujodari/65.png")',
    'url("/Foujodari/66.png")',
    'url("/Foujodari/67.png")',
    'url("/Foujodari/68.png")',
    'url("/Foujodari/69.png")',
    'url("/Foujodari/70.png")',
    'url("/Foujodari/71.png")',
    'url("/Foujodari/72.png")',
    'url("/Foujodari/73.png")',
    'url("/Foujodari/74.png")',
    'url("/Foujodari/75.png")',
    'url("/Foujodari/76.png")',
    'url("/Foujodari/77.png")',
    'url("/Foujodari/78.png")',
    'url("/Foujodari/79.png")',
    'url("/Foujodari/80.png")',
    'url("/Foujodari/81.png")',
    'url("/Foujodari/82.png")',
    'url("/Foujodari/83.png")',
    'url("/Foujodari/84.png")',
    'url("/Foujodari/85.png")',
    'url("/Foujodari/86.png")',
    
 
]


const pic = document.querySelector("section")
function showImage(){
    var a = Math.floor(Math.random()* pics.length)
    var img = pics[a]
    console.log(img)
    pic.style.backgroundImage = img
    pic.style.img = img
}