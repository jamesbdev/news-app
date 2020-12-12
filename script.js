
const paragraph = document.getElementsByClassName('paragraph');
const titleLink = document.getElementById('title');

const articles = [
    {
    "article": {
        "title": "US Privacy board",
        "image": "https://picsum.photos/200",
        "summary": "US privacy board...",
        "time": "11.00"
    }
},
    { 
        "article": {
        "title": "Afghan election results delayed",
        "image": "https://picsum.photos/200",
        "summary": "Afghan election results delayed...",
        "time": "10.00"
    }
},

    {
        "article": {
            "title": "More fighting in...",
            "image": "https://picsum.photos/200",
            "summary": "Biden elected as president...",
            "time": "09.00"
        }
    },
    {
        "article": {
            "title": "Intelligent cars...",
            "image": "https://picsum.photos/200",
            "summary": "Intelligent cars...",
            "time": "12.00"
        }       
    }, 
        {
            "article": {
                "title": "Tropical storms...",
                "image": "https://picsum.photos/200",
                "summary": "Tropical storms...",
                "time": "13.00"
            }
        }
]

  const title = document.getElementById('article-title');

  for (i = 0; i < articles.length; i++) {
    let articleTitle = articles[i]["article"].title;
    //create article section
    const mainContainer = document.getElementsByClassName('article-container')[0];
    const articleContainer = document.createElement("section");
    //append article container to body
    mainContainer.appendChild(articleContainer);
    //create title 
    const element = document.createElement("h3");
    const elementText = document.createTextNode(articleTitle);
    element.appendChild(elementText);
    //const container = document.getElementById('container');
    //append title to container
    articleContainer.appendChild(element);
    //add image 
    const image = document.createElement("img");
    //add image source
    image.src = articles[i]["article"].image; 
    //append image 
    articleContainer.appendChild(image);
    //create summary
    const summary = document.createElement('p');
    //create text node
    const summaryText = articles[i]["article"].summary;
    const summaryTextNode = document.createTextNode(summaryText);
    summary.appendChild(summaryTextNode);
    //append summary to container
    articleContainer.appendChild(summary);
  } 


