const {createApp} = Vue 

createApp({
    data() {
        return {
            currentImage: 0,
            images:[
                {
                    image: 'img/1.jpg',
                    title: 'Berserk',
                    text: 'Berserk is a dark fantasy manga series written and illustrated by Kentarō Miura. ',
                },
                {
                    image: 'img/2.jpg',
                    title: 'Tokyo Ghoul',
                    text: 'Tokyo Ghoul is set in an alternate reality where ghouls, creatures that look like normal people but can only survive by eating human flesh, live among the human population in secrecy, hiding their true nature in order to evade pursuit from the authorities.',
                },
                {
                    image: 'img/3.jpg',
                    title: 'Chainsaw Man',
                    text: "Chainsaw Man follows a lone 16-year-old boy named Denji who, after making a contract with a dog-like devil named Pochita, gains the ability to transform parts of his body into chainsaws",
                },
                {
                    image: 'img/4.jpg',
                    title: 'Tokyo Ghoul:re',
                    text: 'Plot. In Tokyo, an unchanging despair is lurking. Mysterious man-eating beings, ghouls, run rampant in Tokyo. Living hidden during everyday life, the existence of ghouls, whose true identities are shrouded in mystery, permanently terrorizes Tokyo\'s residents.',
                },

                {
                    image: 'img/5.jpg',
                    title: "Dorohedoro",
                    text: 'Amnesiac Caiman seeks to undo his lizard head curse by killing the sorcerer responsible, with his friend Nikaido\'s help. In the Hole, that\'s a threat. Amnesiac Caiman seeks to undo his lizard head curse by killing the sorcerer responsible, with his friend Nikaido\'s help.',
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