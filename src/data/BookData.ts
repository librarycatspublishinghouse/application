export interface IBook { 
     id: string,
     title: string,
     authorID: string,
     desc: string,
     thumbnailLink: string,
     downloadLink: string,
     format: "PDF",
     downloads: number,
     isbn: string,
     language: "English",
     originalLanguage: "English",
     noPages: number,
     price: number,
     publicationDate: string
}

export const Books: IBook[] = [
    {
        id: "63610b054837a84f9da92a32",
        title: "Contemporary Subjects",
        authorID: "",
        desc: "Strange journeys to deliver undisclosed packages through 'non-descript names of far-off hamlets no one wants,' war diaries, oppressive loneliness and abhorrence for other people, or the depths of intergenerational trauma, all form part of what are indeed contemporary subjects. Take part in this collection of short stories and explore these themes through the prose of our newly published writers.",
        thumbnailLink: "/stwWebFrontend/pictures/books/publications/thumbnails/contemporaruSubjectsCover.webp",
        downloadLink: "/stwWebFrontend/pictures/books/publications/PDF/ContemporarySubjects.pdf",
        format: "PDF",
        downloads: 398,
        isbn: "978-1-7392047-0-9",
        language: "English",
        originalLanguage: "English",
        noPages: 88,
        price: 0,
        publicationDate: "01/11/2022"
    },

    {
        id: "666dc06643d014c4f98a7bdd",
        title: "Blue Moon",
        authorID: "",
        desc: "Blue Moon, a debut collection of poetry by Rachel Deléglise, delves deep into the heart and mind to explore the ever-pertinent themes of identity, change, loss, and love in all forms. Spanning time and geography, from London Bridge to the Caribbean, the poems return repeatedly to metaphors of nature, interwoven with human sentiments and experiences to emphasise how inseparable we are from the natural world around us. Masterfully conveying the nuances of the highs and lows of life, Deléglise exposes the universal nature of our seemingly lonely struggles with existential questions about our place in the world. In doing so, her words drive home the need to not only embrace, but also to share all the imperfect, contradictory elements of ourselves that ultimately come to define what it means to be human.",
        thumbnailLink: "/stwWebFrontend/pictures/books/publications/thumbnails/blueMoon.webp",
        downloadLink: "/stwWebFrontend/pictures/books/publications/PDF/BlueMoon.pdf",
        format: "PDF",
        downloads: 95,
        isbn: "",
        language: "English",
        originalLanguage: "English",
        noPages: 55,
        price: 0,
        publicationDate: "15/06/2024"
    },

    {
        id: "6863bf112abb9acc36677988",
        title: "Ebbs & Flows",
        authorID: "",
        desc: "How can a single tree come to shape the very rhythms of someone’s daily life? Or an unassuming pub harbour the explosive emotions of a lost love story? Ebbs and Flows is a compilation of moving, life-affirming, and ultimately deeply human short stories written by talented students across the UK. Through the pages of this collection, we see life at both its very beginning—in the form of a lamb who comes to represent the turbulent depths of a father-daughter relationship—and its end, as we’re plunged into the supernatural world of witnesses who wreak havoc in the sleepy neighbourhood of Agnes Green, before ultimately meeting Death himself, working diligently from his humble abode on the hill. Boasting a rich diversity of genres, from historical fiction to sci-fi and fantasy, this engaging collection brings to the fore the cycles that govern our lives, from orbiting planets and the waxing and waning of the moon, to the changing channels on our TV screens. In doing so, it exposes ways in which our stories are all inescapably interwoven with the world around us.",
        thumbnailLink: "/stwWebFrontend/pictures/books/publications/thumbnails/ebbsAndFlows.webp",
        downloadLink: "/stwWebFrontend/pictures/books/publications/PDF/ebbsAndFlows.pdf",
        format: "PDF",
        downloads: 53,
        isbn: "",
        language: "English",
        originalLanguage: "English",
        noPages: 123,
        price: 0,
        publicationDate: "01/07/2025"
    },

]