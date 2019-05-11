class MainScript {
    constructor() {
        const addPostButton = document.querySelector('.add-post-button');
        addPostButton.addEventListener('click', MainController.pressAddPostButton);

        const loadMoreButton = document.querySelector('.more-button');
        loadMoreButton.addEventListener('click', MainController.loadMore.bind(null, mainController));

        const filterForm = document.querySelector('.filterForm');
        filterForm.addEventListener('submit', MainScript.applyFilter);

        const signInButton = document.querySelector('.signIn-button');
        signInButton.addEventListener('click', MainController.signIn.bind(null, mainController));

        const main = document.querySelector('.posts');
        main.addEventListener('click', MainScript.toggleLike);
        main.addEventListener('click', MainController.deleteButton);
        main.addEventListener('click', MainController.editPost);
        MainScript.setDateAndTime();

        const addForm = document.querySelector('.add-post-form');
        addForm.addEventListener('submit', MainScript.addPhotoPost);

    }

    static applyFilter(event) {
        mainController.applyFilter(event);
    }

    static addPhotoPost(event) {
        event.preventDefault();
        mainController.addPhotoPost();
    }

    static setDateAndTime() {
        const now = new Date();
        document.querySelector('#dateAndTime').value = now.toLocaleString();
        setTimeout(MainScript.setDateAndTime, 1000);
    }

    static toggleLike(event) {
        mainController.toggleLike(event);
    }
}

const mainScript = new MainScript();
