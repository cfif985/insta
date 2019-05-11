
class View {
    constructor(main) {
        this._postTemplate = document.querySelector('.post-template');
        this._main = main;
    }

    showPosts(posts, countSuitablePosts) {
        const loadMoreButton = document.querySelector('.more-button');
        this._main.removeChild(this._main.lastChild);
        posts.map(this._buildPost.bind(this))
            .forEach(post => this._main.appendChild(post));
        this._main.appendChild(loadMoreButton);
        const currentPostCount = this._main.querySelectorAll('.post-container').length;
        if (currentPostCount < 10 || currentPostCount === countSuitablePosts) {
            loadMoreButton.style.display = 'none';
        } else if (loadMoreButton.hasAttribute('hidden')) {
            loadMoreButton.style.display = 'block';
        }
    }


    static toggleAddEditForm() {
        document.querySelector('main').classList.toggle('hidden');
        document.querySelector('.add-post-container').classList.toggle('hidden');
    }

    _buildPost(post) {
        const fragment = document.importNode(this._postTemplate.content, true);
        const key = fragment.querySelector('.post-container').getAttribute('data-id');
        fragment.querySelector('.post-container').setAttribute('data-id', post[key]);
        fragment.querySelector('.photo').setAttribute('src', post.photoLink);
        const dateTime = new Date(post.createdAt);
        fragment.querySelector('.name').textContent = post.author;
        fragment.querySelector('.date').textContent = dateTime.toLocaleString();
        fragment.querySelector('.descr').innerHTML = post.description + ' #' + post.hashtags.join('#');
        if (post.likes.includes('username')) {
            fragment.querySelector('.like').classList.add('like-active');
        }
        return fragment;
    }

    clearPosts() {
        const posts = this._main.querySelectorAll('.post-container');
        posts.forEach(post => this._main.removeChild(post));
    }

    clearPost(id) {
        let postForDeleting;
        this._main.querySelectorAll('.post-container')
            .forEach((post) => {
                if (post.getAttribute('data-id') === id) {
                    postForDeleting = post;
                }
            });
        this._main.removeChild(postForDeleting);
    }

    static toggleLike(event, target) {
        target.classList.toggle('like-active');
        event.stopImmediatePropagation();
    }

    static showElementsIfAuthorized(isAuthorized) {
        const signInButton = document.querySelector('.signIn-button');
        const links = document.querySelectorAll('.dropdown');
        const logInfo = document.querySelector('.logInfo');
        const addPostButton = document.querySelector('.add-post-button');
        if (isAuthorized === true) {
            signInButton.innerHTML = 'Sign Out';
            logInfo.innerHTML = 'Hello, username';
            links.forEach(link => link.style.display = 'block');
            addPostButton.style.display = 'block';
        } else {
            signInButton.innerHTML = 'Sign In';
            logInfo.textContent = 'Hello, guest';
            links.forEach(link => link.style.display = 'none');
            addPostButton.style.display = 'none';
        }
    }
}