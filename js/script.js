const {createApp} = Vue 

createApp({
    data() {
        return {
            currentImage: 0,
            images:[
                {
                    image: 'img/1.jpg',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/2.jpg',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/3.jpg',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/4.jpg',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/5.jpg',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],
        }
    },
    methods: {
        currentImage(index) {
            this.currentImage = index
        },
    },

    methods: {
        nextImage() {
            this.currentImage = this.currentImage + 1
            if (this.currentImage > this.images.length - 1) {
                this.currentImage = 0
            }
        },

        prevImage() {
            this.currentImage = this.currentImage - 1
            if (this.currentImage < 0) {
                this.currentImage = this.images.length - 1
            }
        },
},

}).mount('#app')    