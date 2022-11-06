// 0. accept search bar value (onclick)
// 1. get movie data for you tube (fetch)
// 2. we need URL
// 3. appendData()

// writ in ES6_______________________
// let array_of_videos;


let API_key = 'AIzaSyCG_WnozJVge6b3pvCbUz0H9sTUbjDRU7U';

let container = document.getElementById("container")

let homepage=async() => {

    try {
       
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=20&relevanceLanguage=en&type=video&videoEmbeddable=true&videoLicense=youtube&key=${API_key}
        `);

        let { items } = await res.json();
        let array_of_videos = items;

        appendVideos(array_of_videos)
        console.log(array_of_videos)

    }
    catch (error) { }


}
homepage()

let getData = async () => {

    try {
        let query = document.getElementById("query").value

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_key}&part=snippet&maxResults=20`);

        let { items } = await res.json();
        let array_of_videos = items;
        console.log(array_of_videos)

        appendVideos(array_of_videos)
    }
    catch (error) { }
}
// getDname

let appendVideos = (data) => {
    container.innerHTML=null;


    data.forEach(({ snippet: { title,thumbnails }, id: { videoId } }) => {

        // let title=el.snippet.title
        // let videoID=el.id.videoId

        let div=document.createElement("div")
        let iframe=document.createElement("iframe")

        iframe.src=`https://www.youtube.com/embed/${videoId}`
        iframe.width="100%"
        iframe.height="100%"
        iframe.allow="fullscreen"

        
        // let pic=document.createElement("img")
        // pic.src=thumbnails.medium.url
        // pic.addEventListener("click",function(){
        //     localStorage.setItem("pics",JSON.stringify({snippet}))
        // })
        // console.log(pic)
     

        let name=document.createElement("h5")
        name.innerText=title;

        div.append(iframe,name)
        container.append(div)


        // console.log(name, videoId)



    })

}

