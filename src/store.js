import {createStore} from "redux";

const users = [
    {
        id: 1,
        name: 'LUKE SKYWALKER',
        nickname: "@LUKE_SKYWALKER",
        photo: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=960",
    },
    {
        id: 2,
        name: 'Leia Organa Solo',
        nickname: "@leia_organa",
        photo: "https://upload.wikimedia.org/wikipedia/ru/0/0a/Leia_Organa_Ep5_DVD.jpg",
    },
    {
        id: 3,
        name: 'Han Solo',
        nickname: "@han_solo",
        photo: "https://static.wikia.nocookie.net/battlefront/images/a/af/Battlefront_II_%D1%85%D0%B0%D0%BD_%D1%81%D0%BE%D0%BB%D0%BE.jpg/revision/latest?cb=20171023111001&path-prefix=ru",
    }
];

const ANAKIN_IMAGE =
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE =
    "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const posts = [
    {
        id: 1345,
        name: "Anakin skywalker",
        nickname: "@dart_vader",
        photo: ANAKIN_IMAGE,
        date: "26 feb.",
        text: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        img: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
        likes: 63,
        comments: 3,
        reposts: 4
    },
    {
        id: 1344,
        name: "Anakin skywalker",
        nickname: "@dart_vader",
        photo: ANAKIN_IMAGE,
        date: "28 feb.",
        text: "If you're not with me, than you're my enemy.",
        img: 'https://static.dw.com/image/17607024_303.jpg',
        likes: 66,
        comments: 1,
        reposts: 7
    }
];

const initialState = {
    posts: [],
    users: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'load_posts':
            return {
                ...state,
                posts
            };
        case 'load_users':
            return {
                ...state,
                users
            };
        case 'add_post':
            return {
                ...state,
                posts: [...posts, posts.push(action.payload)]
            };
        default:
            return state;
    }
}

export const loadPosts = () => ({type: 'load_posts'});

export const loadUsers = () => ({type: 'load_users'});

export const addPost = (post) => (
    {
        type: 'add_post',
        payload: post
    }
);

const store = createStore(reducer);

export default store;