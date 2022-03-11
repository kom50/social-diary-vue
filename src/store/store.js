import axios from '@/Axios/axios';
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => {
        return {
            isLoggedIn: false,
            user: {
                username: '',
                password: '',
                userID: '',
                posts: []
            },
            viewPost: {},
            users: [],
            currentUser: {
                email: '',
                username: '',
                password: '',
                c_password: '',

            },
            posts: [/* {
                username: 'kom1230',
                date: '03/10/2022',
                data: 'This is my first post'
            },
            {
                username: 'kom91',
                date: '03/10/2022',
                data: 'This is my first post'
            },
            {
                username: 'kom92',
                date: '03/10/2022',
                data: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat atque praesentium nostrum odit officiis, commodi eum blanditiis optio sit necessitatibus quod voluptas dicta iure eos fuga voluptatum aperiam veniam ipsam cupiditate? Necessitatibus reprehenderit modi animi commodi quas incidunt facere sint, quidem hic, amet, itaque reiciendis natus saepe. Impedit, cumque illo.`
            } */],
            // demo 
            count: 0,
            name: 'jay'
        }
    },

    actions: {
        async fetchUsers() {
            const res = await axios(process.env.VUE_APP_FIREBASE_API).get(
                "/users.json"
            );
            const data = res.data;
            this.users = [];
            for (let d in data) {
                console.log('user - ', data[d]);
                this.users.push({ userId: d, ...data[d] });
                // this.users.push({ userId: d, ...data[d], posts: [] });
            }
        },
        async fetchPosts() {
            const res = await axios(process.env.VUE_APP_FIREBASE_API).get(
                "/allposts.json"
            );
            const data = res.data;
            this.posts = [];
            for (let d in data) {
                console.log('user - ', data[d]);
                this.posts.push({ ...data[d] });
                // this.users.push({ userId: d, ...data[d], posts: [] });
            }
        },
        async submitPost(postData) {
            // const res = await axios().patch(`${}`,)
            const post = {
                data: postData,
                date: new Date().toLocaleString(),
                username: this.user.username
            }
            console.log(' hii ', post)
            // post posts in allposts.json ends point
            axios(process.env.VUE_APP_FIREBASE_API).post("/allposts.json", post);

            // https://social-diary1-default-rtdb.firebaseio.com/users/-Mxgyc_99V5kPHZw3Mz8.json

            //    this.users.find((user) => )

            if (!this.user.posts)
                this.user.posts = []
            this.user.posts.push(post)

            // 
            this.posts.push(post)


            axios(process.env.VUE_APP_FIREBASE_API).patch(`/users/${this.user.userId}.json`, { posts: this.user.posts })
        },



        async getAllPosts() {
            const res = await axios(process.env.VUE_APP_FIREBASE_API).get(
                "/allposts.json"
            );
            const data = res.data;
            this.posts = [];
            for (let d in data) {
                console.log('user - ', data[d]);
                this.posts.push({ id: d, ...data[d] });
            }
        },
    },
})
