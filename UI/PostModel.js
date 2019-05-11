class PostModel {
    constructor(posts) {
        this.restoreFromLocalStorage();
        if (this._photoPosts == null) {
            this._photoPosts = posts;
            this._savePosts();
        }
        if (this._authStatus == null) {
            this._authStatus = false;
            this._saveAuthStatus();
        }
    }
  
    _isUnique(post) {
      for (let i = 0; i < this._photoPosts.length; i += 1) {
        if (this._photoPosts[i].id === post.id) {
          return false;
        }
      }
      return true;
    }
  
    _isСoincidence(postTags, configTags) {
      for (let i = 0; i < postTags.length; i += 1) {
        for (let j = 0; j < configTags.length; j += 1) {
          if (postTags[i] === configTags[j]) {
            return true;
          }
        }
      }
      return false;
    }

    postsCount(config = PostModel._DEFAULT_FILTER_CONFIG) {
        return this.getPosts(0, this._photoPosts.length, config).length;
    }

    toggleLike(id, username) {
        this._photoPosts.forEach((post) => {
            if (post.id === id) {
                const index = post.likes.indexOf(username);
                if (index !== -1) {
                    post.likes.splice(index, 1);
                } else {
                    post.likes.push(username);
                }
                this._savePosts();
            }
        });
    }

    addAll(posts) {
        const notValid = [];
        posts.forEach((post) => {
          if (this.add(post) === false) {
            notValid.push(post);
          }
        });
        return notValid;
      }

    getPosts(skip = 0, count = 10, filterConfig = PostModel._DEFAULT_FILTER_CONFIG) {
      if(filterConfig !== this._defaultFilterConfigObject)
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
      var filtered_posts = this._photoPosts.filter(post =>
          new Date(post.createdAt).getTime() >= new Date(filterConfig.dateFrom).getTime() &&
          new Date(post.createdAt).getTime() <= new Date(filterConfig.dateTo).getTime() &&
          (post.author === filterConfig.authorName || filterConfig.authorName === "") &&
          (this._isСoincidence(post.hashtags, filterConfig.hashtags) || filterConfig.hashtags.length === 0
              || (filterConfig.hashtags.length === 1 && filterConfig.hashtags[0] === ""))
          ).sort(function (a, b) {
          return new Date(b.createdAt).getTime()- new Date(a.createdAt).getTime();
      });

      let k = 0;
      var result =[];
      for(var i = skip; k < count && i < filtered_posts.length; i++) {
          result.push(filtered_posts[i]);
          k++;
      }


      return result;
    }
  
    get(id) {
    let result;
    for(let i=0; i<this._photoPosts.length;i++)
    {
        let item = this._photoPosts[i];
        if(item.id === id)
        {
            result = item;
            break;
        }
    }
     return result;
    }
  
    _validate(post) {
        if (!post.hasOwnProperty("id") || typeof post.id !== "string" || !this._isUnique(post) ||
        !post.hasOwnProperty("description") || post.description.length >= 150 || typeof post.description !== "string" ||
        !post.hasOwnProperty("createdAt") ||
        !post.hasOwnProperty("author") || post.author.length >= 100 || typeof post.author !== "string" || post.author === "" ||
        !post.hasOwnProperty("photoLink") || typeof post.photoLink !== "string" || post.photoLink === "" ||
        !post.hasOwnProperty("hashtags") ||
        !post.hasOwnProperty("likes"))
    {
        return false;
    }
    else
    {
        return true;
    }
    }
  
    add(post) {
        if (this._validate(post))
        {
            this._photoPosts.push(post);
            this._savePosts();
            return true;
        }
        else
        {
            return false;
        }
    }
  
    remove(id) {
        var index = -1;
        for(let i = 0; i < this._photoPosts.length; i++)
        {
            var item = this._photoPosts[i];
            if (item.id === id) {
                index = i;
            }
        }
        if (index === -1)
        {
            return false;
        }
        else
        {
            this._photoPosts.splice(index, 1);
            this._savePosts();
            return true;
         }
    }
  
    edit(id, edits) {
        var post = this.get(id);
        var tmpPost = Object.assign({}, post);
        for (var field in edits) {
            if (field !== "id" && field !== "author" && field !== "createdAt") {
                post[field] = edits[field];
            }
        }
        
        this.remove(post.id);
        if (this._validate(post)) {
            this.add(post);
            return true;
        }
        else {
            this.add(tmpPost);
            return false;
        }
    }

    isAuthorized() {
        return this._authStatus;
    }

    toggleAuthStatus() {
        this._authStatus = !this._authStatus;
        this._saveAuthStatus();
    }

    _saveAuthStatus() {
        const jsonAuthStatus = JSON.stringify(this._authStatus);
        localStorage.setItem('authStatus', jsonAuthStatus);
    }

    _savePosts() {
        localStorage.removeItem('posts');
        const jsonPosts = JSON.stringify(this._photoPosts);
        localStorage.setItem('posts', jsonPosts);
    }

    restoreFromLocalStorage() {
        try {
            const jsonPosts = localStorage.getItem('posts');
            this._photoPosts = JSON.parse(jsonPosts);
        } catch (e) {
            this._photoPosts = null;
        }
        try {
            const jsonAuthStatus = localStorage.getItem('authStatus');
            this._authStatus = JSON.parse(jsonAuthStatus);
        } catch (e) {
            this._authStatus = null;
        }
    }

  }

PostModel._DEFAULT_FILTER_CONFIG = {
    dateFrom: '-271821-04-20T00:00:00.000Z',
    dateTo: '+275760-09-13T00:00:00.000Z',
    authorName: '',
    hashtags: [],
};

