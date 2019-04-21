var storage = (function () {
    var photoPosts = [
        {
            id: "1",
            description: "We like nature",
            createdAt: new Date("2019-04-07T23:00:00"),
            author: "Aleksander Ivanov",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["nature", "likes"],
        },
        {
            id: "2",
            description: "Good evening",
            createdAt: new Date("2019-02-23T23:00:00"),
            author: "Пётр Порошенко",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["nature", "likes"],
        },
        {
            id: "3",
            description: "Good morning 3",
            createdAt: new Date("2018-02-20T23:00:00"),
            author: "София",
            photoLink: 'posts\3.jpg',
            likes: ["dog", "cat"],
            hashtags: ["nature", "likes"],
        },
        {
            id: "4",
            description: "Good morning 4",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "dog",
            photoLink: 'posts\4.jpg',
            likes: ["dog", "cat"],
            hashtags: ["nature", "likes", "test"],
        },
        {
            id: "5",
            description: "Good morning 5",
            createdAt: new Date("2018-02-21T23:00:00"),
            author: "dog",
            photoLink: 'posts\5.jpg',
            likes: ["dog", "cat"],
            hashtags: ["nature", "likes"],
        },
        {
            id: "6",
            description: "Good morning 6",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\6.jpg',
            likes: ["dog", "cat"],
            hashtags: ["nature", "likes"],
        },
        {
            id: "7",
            description: "Good morning 7",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\7.jpg',
            likes: ["dog", "cat"],
            hashtags: ["nature", "likes"],
        },
        {
            id: "8",
            description: "Good morning 8",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "dog",
            photoLink: 'posts\8.jpg',
            likes: ["dog", "cat"],
            hashtags: ["nature", "likes", "test"],
        },
        {
            id: "9",
            description: "Good morning 9",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\9.jpg',
            likes: ["dog", "cat"],
            hashtags: ["nature", "likes"],
        },
        {
            id: "10",
            description: "Good morning 10",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["nature", "likes"],
        },
        {
            id: "11",
            description: "Good morning 11",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["swan", "likes"],
        },
        {
            id: "12",
            description: "Good morning 12",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["snow", "likes"],
        },
        {
            id: "13",
            description: "Good morning 13",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["nature", "likes"],
        },
        {
            id: "14",
            description: "Good morning 14",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["music", "likes"],
        },
        {
            id: "15",
            description: "Good morning 15",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["music", "likes"],
        },
        {
            id: "16",
            description: "Good morning 16",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["music", "likes"],
        },
        {
            id: "17",
            description: "Good morning 17",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["music", "likes"],
        },
        {
            id: "18",
            description: "Good morning 18",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["music", "likes"],
        },
        {
            id: "19",
            description: "Good morning 19",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["music", "likes"],
        },
        {
            id: "20",
            description: "Good morning 20",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "София",
            photoLink: 'posts\1.jpg',
            likes: ["dog", "cat"],
            hashtags: ["music", "likes"],
        }
    ];
    var defaultFilterConfigObject = {
        dateFrom: new Date(-8640000000000000),
        dateTo: new Date(8640000000000000),
        authorName: "",
        hashtags: [],
    };

    function isUnique(post) {
        for(let i = 0 ; i < photoPosts.length; i++) {
            if (photoPosts[i].id === post.id) {
                return false;
            }
        }
        return true;
    }
    function isСoincidence(postTags, configTags) {
        for (var i = 0; i < postTags.length; i++) {
            for (var j = 0; j < configTags.length; j++) {
                if (postTags[i] === configTags[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    getPhotoPosts = function (skip = 0, count = 10, filterConfig = defaultFilterConfigObject) {
        if(filterConfig !== defaultFilterConfigObject)
        {
            if(!filterConfig.hasOwnProperty("dateFrom"))
            filterConfig.dateFrom = new Date(-8640000000000000);
            if(!filterConfig.hasOwnProperty("dateTo"))
            filterConfig.dateTo = new Date(8640000000000000);
            if(!filterConfig.hasOwnProperty("authorName"))
            filterConfig.authorName = "";
            if(!filterConfig.hasOwnProperty("hashtags"))
            filterConfig.hashtags = [];

        }
        var filtered_posts = photoPosts.filter(post =>
            post.createdAt.getTime() >= filterConfig.dateFrom.getTime() &&
            post.createdAt.getTime() <= filterConfig.dateTo.getTime() &&
            (post.author === filterConfig.authorName || filterConfig.authorName === "") &&
            (isСoincidence(post.hashtags, filterConfig.hashtags) || filterConfig.hashtags.length === 0)
            ).sort(function (a, b) {
            return b.createdAt.getTime()- a.createdAt.getTime();
        });

        let k = 0;
        var result =[];
        for(var i = skip; k < count && i < filtered_posts.length; i++) {
            result.push(filtered_posts[i]);
            k++;
        }

        console.log("Result function getPhotoPosts:");
        console.log(result);
        return result;
    };

    getPhotoPost = function (id) {
        let result;
        for(let i=0; i<photoPosts.length;i++)
        {
            let item = photoPosts[i];
            if(item.id === id)
            {
                console.log("Post with id " + id + " is exist:");
                console.log(item);
                result = item;
            }
        }

        if(result === undefined)
        console.log("Post with id " + id + " doesn\'t exist.");

        return result;
    };

    validatePhotoPost = function (post) {
        if (!post.hasOwnProperty("id") || typeof post.id != "string" || !isUnique(post) ||
            !post.hasOwnProperty("description") || post.description.length >= 150 || typeof post.description != "string" ||
            !post.hasOwnProperty("createdAt") || typeof post.createdAt != "object" ||
            !post.hasOwnProperty("author") || post.author.length >= 100 || typeof post.author != "string" || post.author === "" ||
            !post.hasOwnProperty("photoLink") || typeof post.photoLink != "string" || post.photoLink === "" ||
            !post.hasOwnProperty("hashtags") ||
            !post.hasOwnProperty("likes"))
        {
            console.log("Post with id " + post.id + " not valid.");
            return false;
        }
        else
        {
            console.log("Post with id " + post.id + " valid.");
            return true;
        }
    };

    addPhotoPost = function (post) {
        if (validatePhotoPost(post))
        {
            photoPosts.push(post);
            console.log("Post with id " + post.id + " added.");
            return true;
        }
        else
        {
            console.log("Post with id " + post.id + " not added.");
            return false;
        }
    };

    removePhotoPost = function (id) {
        var index = -1;
        for(let i = 0; i < photoPosts.length; i++)
        {
            var item = photoPosts[i];
            if (item.id === id) {
                index = i;
            }
        }
        if (index === -1)
        {
            console.log("Post with id " + id + " doesn\'t exist.");
            return false;
        }
        else
        {
            photoPosts.splice(index, 1);
            console.log("Post with id " + id + " deleted.");
            return true;
        }
    };

    editPhotoPost = function (id, edits) {
        var post = getPhotoPost(id);
        var tmpPost = Object.assign({}, post);
        for (var field in edits) {
            if (field !== "id" && field !== "author" && field !== "createdAt") {
                post[field] = edits[field];
            }
        }
        
        removePhotoPost(post.id);
        if (validatePhotoPost(post)) {
            addPhotoPost(post);
            console.log("Post changed.");
            return true;
        }
        else {
            addPhotoPost(tmpPost);
            console.log("Post not changed.");
            return false;
        }
    };

    return editPhotoPost, removePhotoPost, addPhotoPost,  validatePhotoPost, getPhotoPost,  getPhotoPosts;
})();

//tests
getPhotoPost("5");
getPhotoPost("21");

 var post = {
 id: "21",
 description: "Hi",
 createdAt: new Date("2019-04-07T23:00:00"),
 author: "Sasha",
 photoLink: "link",
 hashtags: ["ser", "rar"],
 likes: ["vac"],
 }

 validatePhotoPost(post);
addPhotoPost(post);

removePhotoPost("25");
getPhotoPost("1");

editPhotoPost("1", {description: "changed"});
getPhotoPost("1");

getPhotoPosts(0,20);
getPhotoPosts(5,5);
getPhotoPosts(0,10, {authorName: "Пётр Порошенко"});
getPhotoPosts(0,10, {hashtags: ["nature"]});