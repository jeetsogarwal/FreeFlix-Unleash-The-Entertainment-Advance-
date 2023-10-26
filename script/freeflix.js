//waiting to load the whole document
      const  videoData= [
        {
            "title": "Jujutsu kaisen",
            "author": "Ani Watch",
            "stats": "19M views · 4 years ago",
            "src": "thumbnails/a2.jpeg"
        },
        {
            "title": "One Piece",
            "author": "Ani Watch",
            "stats": "19M views · 4 years ago",
            "src": "thumbnails/a3.jpeg"
        },
        {
            "title": "Death Note",
            "author": "Ani Watch",
            "stats": "19M views · 4 years ago",
            "src": "thumbnails/a4.jpeg"
        },
        {
            "title": "Dragon-Ball-Z",
            "author": "Ani Watch",
            "stats": "19M views · 4 years ago",
            "src": "thumbnails/a5.jpeg"
        },
        {
            "title": "Damon-Slayer",
            "author": "Ani-Watch",
            "stats": "19M views · 4 years ago",
            "src": "thumbnails/a6.jpeg"
        },
        {
            "title": "HunterxHunter",
            "author": "Ani-Watch",
            "stats": "19M views · 4 years ago",
            "src": "thumbnails/download.jpeg"
        },
        {
            "title": "Airlift",
            "author": "Markiplier",
            "stats": "19M views · 4 years ago",
            "src": "thumbnails/m7.jpeg"
        },
        {
            "title": "MIIRSTEY || Freedy",
            "author": "Marques Brownlee",
            "stats": "3.4M views · 6 months ago",
            "src": "thumbnails/m2.jpeg"
        },
        {
            "title": "Freedom Is Unlock",
            "author": "Markiplier",
            "stats": "19M views · 4 years ago",
            "src": "thumbnails/m3.jpeg"
        },
        {
            "title": "Seven",
            "author": "SSSniperWolf",
            "stats": "12M views · 1 year ago",
            "src": "thumbnails/m4.jpeg"
        },
        {
            "title": "Captain Marvel || Marvel",
            "author": "Veritasium",
            "stats": "18M views · 4 months ago",
            "src": "thumbnails/m1.jpeg"
        },
        {
            "title": "AFTER",
            "author": "CS Dojo",
            "stats": "519K views · 5 years ago",
            "src": "thumbnails/m5.jpeg"
        },
        {
            "title": "Alladin Ka Chirag",
            "author": "Mviesverse",
            "stats": "141M views · 1 year ago",
            "src": "thumbnails/m6.jpeg"
        },
        {
            "title": "Books",
            "author": "Kuku-Fm",
            "stats": "1M views · 2 years ago",
            "src": "thumbnails/b6.jpeg"
        },
        {
            "title": "Books",
            "author": "Kuku-Fm",
            "stats": "9M views · 5 years ago",
            "src": "thumbnails/b7.jpeg"
        },
        {
            "title": "Books",
            "author": "Kuku-Fm",
            "stats": "3M views · 4 years ago",
            "src": "thumbnails/b8.jpeg"
        },
        {
            "title": "Books",
            "author": "Kuku-Fm",
            "stats": "7M views · 7 years ago",
            "src": "thumbnails/b1.jpeg"
        },
        {
            "title": "Books",
            "author": "Kuku-Fm",
            "stats": "10M views · 4 years ago",
            "src": "thumbnails/b2.jpeg"
        },
        {
            "title": "Books",
            "author": "Kuku-Fm",
            "stats": "19M views · 4 years ago",
            "src": "thumbnails/b3.jpeg"
        },
        {
            "title": "Books",
            "author": "Kuku-Fm",
            "stats": "1M views · 1 year ago",
            "src": "thumbnails/b8.jpeg"
        }
    ]
    

document.addEventListener('DOMContentLoaded', () => {
  const mainGrid = document.querySelector('.video-grid');

const intialRedner=()=>{
  videoData.map((video) => {
    
    const videoDiv = document.createElement('div');
    videoDiv.className = 'video-preview';
    
    const thumbnailRow = document.createElement('div');
    thumbnailRow.className = 'thumbnail-row';

    
    const link = document.createElement('a');
    link.href = `https://aniwatch.to/watch/${video.title}`;
    

    const thumbnailImage = document.createElement('img');
    thumbnailImage.className = 'thumbnail';
    thumbnailImage.src = video.src;


    const videoTime = document.createElement('div');
    videoTime.className = 'video-time';
    videoTime.textContent = '27:25'; 


    link.appendChild(thumbnailImage);
    thumbnailRow.appendChild(link);
    thumbnailRow.appendChild(videoTime);

    
    const videoInfoGrid = document.createElement('div');
    videoInfoGrid.className = 'video-info-grid';

    
    const channelPicture = document.createElement('div');
    channelPicture.className = 'channel-picture';

    
    const profilePicture = document.createElement('img');
    profilePicture.className = 'profile-picture';
    profilePicture.src = 'channels/channel-5.jpeg'; 

    channelPicture.appendChild(profilePicture);


    const videoInfo = document.createElement('div');
    videoInfo.className = 'video-info';

    
    const videoTitle = document.createElement('p');
    videoTitle.className = 'video-title';
    videoTitle.textContent = video.title;

    const videoAuthor = document.createElement('p');
    videoAuthor.className = 'video-author';
    videoAuthor.textContent = video.author;

    const videoStats = document.createElement('p');
    videoStats.className = 'video-stats';
    videoStats.textContent = video.stats;

    videoInfo.appendChild(videoTitle);
    videoInfo.appendChild(videoAuthor);
    videoInfo.appendChild(videoStats);

    videoInfoGrid.appendChild(channelPicture);
    videoInfoGrid.appendChild(videoInfo);

    
    videoDiv.appendChild(thumbnailRow);
    videoDiv.appendChild(videoInfoGrid);

    
    mainGrid.appendChild(videoDiv);
  });}
  intialRedner()
  const rereder=()=>{
    
        const divToClear = document.getElementById('video-grid-parent'); 


        while (divToClear.firstChild) {
        divToClear.removeChild(divToClear.firstChild);
        }
        const dataToBeSeached=document.getElementById('searchContent').value
       const newData= videoData.filter((i)=>i.title.toLocaleLowerCase().includes(dataToBeSeached.toLocaleLowerCase()))
       newData.map((video)=>{
        const videoDiv = document.createElement('div');
    videoDiv.className = 'video-preview';
    
    const thumbnailRow = document.createElement('div');
    thumbnailRow.className = 'thumbnail-row';

    
    const link = document.createElement('a');
    link.href = `https://aniwatch.to/watch/${video.title}`;
    

    const thumbnailImage = document.createElement('img');
    thumbnailImage.className = 'thumbnail';
    thumbnailImage.src = video.src;


    const videoTime = document.createElement('div');
    videoTime.className = 'video-time';
    videoTime.textContent = '27:25'; 


    link.appendChild(thumbnailImage);
    thumbnailRow.appendChild(link);
    thumbnailRow.appendChild(videoTime);

    
    const videoInfoGrid = document.createElement('div');
    videoInfoGrid.className = 'video-info-grid';

    
    const channelPicture = document.createElement('div');
    channelPicture.className = 'channel-picture';

    
    const profilePicture = document.createElement('img');
    profilePicture.className = 'profile-picture';
    profilePicture.src = 'channels/channel-5.jpeg'; 

    channelPicture.appendChild(profilePicture);


    const videoInfo = document.createElement('div');
    videoInfo.className = 'video-info';

    
    const videoTitle = document.createElement('p');
    videoTitle.className = 'video-title';
    videoTitle.textContent = video.title;

    const videoAuthor = document.createElement('p');
    videoAuthor.className = 'video-author';
    videoAuthor.textContent = video.author;

    const videoStats = document.createElement('p');
    videoStats.className = 'video-stats';
    videoStats.textContent = video.stats;

    videoInfo.appendChild(videoTitle);
    videoInfo.appendChild(videoAuthor);
    videoInfo.appendChild(videoStats);

    videoInfoGrid.appendChild(channelPicture);
    videoInfoGrid.appendChild(videoInfo);

    
    videoDiv.appendChild(thumbnailRow);
    videoDiv.appendChild(videoInfoGrid);

    
    mainGrid.appendChild(videoDiv);
       })

  }
  document.getElementById('searchContentButton').addEventListener('click',()=>{rereder()})

});

    