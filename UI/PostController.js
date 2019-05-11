class MainController {
    constructor() {
        const posts = [
            {
                id: "1",
                description: "We like nature",
                createdAt: new Date("2019-04-07T23:00:00"),
                author: "Aleksander Ivanov",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["nature", "likes"],
            },
            {
                id: "2",
                description: "Good evening",
                createdAt: new Date("2019-02-23T23:00:00"),
                author: "Пётр Порошенко",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["nature", "likes"],
            },
            {
                id: "3",
                description: "Good morning 3",
                createdAt: new Date("2018-02-20T23:00:00"),
                author: "София",
                photoLink: 'posts/3.jpg',
                likes: ["dog", "cat"],
                hashtags: ["nature", "likes"],
            },
            {
                id: "4",
                description: "Good morning 4",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "dog",
                photoLink: 'posts/4.jpg',
                likes: ["dog", "cat"],
                hashtags: ["nature", "likes", "test"],
            },
            {
                id: "5",
                description: "Good morning 5",
                createdAt: new Date("2018-02-21T23:00:00"),
                author: "dog",
                photoLink: 'posts/5.jpg',
                likes: ["dog", "cat"],
                hashtags: ["nature", "likes"],
            },
            {
                id: "6",
                description: "Good morning 6",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/6.jpg',
                likes: ["dog", "cat"],
                hashtags: ["nature", "likes"],
            },
            {
                id: "7",
                description: "Good morning 7",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/7.jpg',
                likes: ["dog", "cat"],
                hashtags: ["nature", "likes"],
            },
            {
                id: "8",
                description: "Good morning 8",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "dog",
                photoLink: 'posts/8.jpg',
                likes: ["dog", "cat"],
                hashtags: ["nature", "likes", "test"],
            },
            {
                id: "9",
                description: "Good morning 9",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/9.jpg',
                likes: ["dog", "cat"],
                hashtags: ["nature", "likes"],
            },
            {
                id: "10",
                description: "Good morning 10",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["nature", "likes"],
            },
            {
                id: "11",
                description: "Good morning 11",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["swan", "likes"],
            },
            {
                id: "12",
                description: "Good morning 12",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["snow", "likes"],
            },
            {
                id: "13",
                description: "Good morning 13",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["nature", "likes"],
            },
            {
                id: "14",
                description: "Good morning 14",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["music", "likes"],
            },
            {
                id: "15",
                description: "Good morning 15",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["music", "likes"],
            },
            {
                id: "16",
                description: "Good morning 16",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["music", "likes"],
            },
            {
                id: "17",
                description: "Good morning 17",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["music", "likes"],
            },
            {
                id: "18",
                description: "Good morning 18",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["music", "likes"],
            },
            {
                id: "19",
                description: "Good morning 19",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["music", "likes"],
            },
            {
                id: "20",
                description: "Good morning 20",
                createdAt: new Date("2018-02-23T23:00:00"),
                author: "София",
                photoLink: 'posts/1.jpg',
                likes: ["dog", "cat"],
                hashtags: ["music", "likes"],
            }
        ];
        const mainDOM = document.querySelector('.posts');
        this._model = new PostModel(posts);
        this._view = new View(mainDOM);
    }

    addPhotoPost() {
        const post = {};
        post.author = document.querySelector('#addEdit-author').value;
        const dateTimeStr = document.querySelector('#dateAndTime').value;
        post.createdAt = new Date(dateTimeStr);
        const stringTags = document.querySelector('#addEdit-tags');
        post.hashtags = stringTags.value.split(' ');
        post.description = document.querySelector('#desc').value;
        post.photoLink = 'posts/' + document.querySelector('#uploadBtn').value.split('\\').slice(-1).join();
        post.likes = [];
        post.id = (this._model.postsCount() + 1).toString();
        this._model.add(post);
        View.toggleAddEditForm();
    }


    clearPosts() {
        this._view.clearPosts();
    }

    removePhotoPost(id) {
        this._model.remove(id);
        this._view.clearPost(id);
    }

    showPhotoPosts(skip = 0, count = 10, config) {
        this._view.showPosts(this._model.getPosts(skip, count, config), this._model.postsCount(config));
    }

    showElementsIfAuthorized() {
        View.showElementsIfAuthorized(this._model.isAuthorized());
    }

    toggleAuthStatus() {
        this._model.toggleAuthStatus();
    }

    static signIn(mainController) {
        mainController.toggleAuthStatus();
        mainController.showElementsIfAuthorized();
    }

    static pressAddPostButton() {
        View.toggleAddEditForm();
    }

    static createFilter() {
        const config = {};

        const dateFrom = document.querySelector('.dateFromFilter').value;
        const dateTo = document.querySelector('.dateToFilter').value;

        let from = new Date(-8640000000000000);
        let to = new Date(8640000000000000);
        if (dateFrom !== '') {
            from = new Date(dateFrom);
        }

        if (dateTo !== '') {
            to = new Date(dateTo);
        }

        const nodeTags = document.querySelector('.hashtagFilter').value;
        const tags = nodeTags.split(' ');

        config.dateFrom = from;
        config.dateTo = to;
        config.authorName = document.querySelector('.nameFilter').value;
        config.hashtags = tags;
        return config;
    }

    applyFilter(event) {
        this.clearPosts();
        this.showPhotoPosts(0, 10, MainController.createFilter());
        this.showElementsIfAuthorized();
        event.preventDefault();
    }

    static loadMore(mainController) {
        const currentPostCount = document.querySelectorAll('.post-container').length;
        mainController.showPhotoPosts(currentPostCount, 10, MainController.createFilter());
        mainController.showElementsIfAuthorized();
    }

    static deleteButton(event) {
        let { target } = event;
        while (target !== event.currentTarget) {
            if (target.classList.contains('remove-button')) {
                mainController.removePhotoPost(MainController.getPostId(target));
                return;
            }
            target = target.parentNode;
        }
    }

    static getPostId(target) {
        let post = target.parentNode;
        while (post !== this) {
            if (post.classList.contains('post-container')) {
                break;
            }
            post = post.parentNode;
        }
        return post.getAttribute('data-id');
    }

    static fillFieldsInAddEditForm(edits) {
        document.querySelector('.add-post-title').textContent = 'Edit Post';
        const tagsInput = document.querySelector('.hashtags-input');
        tagsInput.value = edits.hashtags.join(' ');
        document.querySelector('#uploadBtn').setAttribute('value', edits.photoLink);
        document.querySelector('.desc-input').value = edits.description;
        document.querySelector('.add-button').textContent = 'Confirm';
        const form = document.querySelector('.add-post-form');
        form.removeEventListener('submit', MainScript.addPhotoPost);
        form.addEventListener('submit', MainController.editPostInModel.bind(null, edits.id, mainController));
    }

    static editPostInModel(id, mainController) {
        const edits = {};
        const stringTags = document.querySelector('.hashtags-input');
        edits.hashtags = stringTags.value.split(' ');
        edits.description = document.querySelector('#desc').value;
        const link = document.querySelector('#uploadBtn');
        if (link.value !== '') {
            edits.photoLink = link.value;
        } else {
            edits.photoLink = link.defaultValue;
        }
        mainController.edit(id, edits);
    }

    edit(id, edits) {
        if  (this._model.edit(id, edits) === true) {
            View.toggleAddEditForm();
        }
    }

    static editPost(event) {
        let { target } = event;
        while (target !== this) {
            if (target.classList.contains('edit-button')) {
                let post = target;
                while (post !== this) {
                    if (post.classList.contains('post-container')) {
                        break;
                    }
                    post = post.parentNode;
                }
                const postInfo = {};
                postInfo.id = post.getAttribute('data-id');
                const descr = post.querySelector('.descr').textContent;
                postInfo.description = descr.split('#')[0];
                postInfo.photoLink = post.querySelector('.photo').getAttribute('src');
                postInfo.hashtags = descr.split('#').slice(1);
                View.toggleAddEditForm();
                MainController.fillFieldsInAddEditForm(postInfo);
                return;
            }
            target = target.parentNode;
        }
    }

    toggleLike(event) {
        let { target } = event;
        while (target !== event.currentTarget) {
            if (target.classList.contains('like')) {
                View.toggleLike(event, target);
                this._model.toggleLike(MainController.getPostId(target), 'username');
                return;
            }
            target = target.parentNode;
        }
    }
}

const mainController = new MainController();
mainController.showPhotoPosts();
mainController.showElementsIfAuthorized();