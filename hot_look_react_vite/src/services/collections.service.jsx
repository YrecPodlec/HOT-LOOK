import axios from "axios";

export const CollectionsItems = {
    async getAll(){
        const response = await axios.get("http://localhost:4444/collections")
        return response.data
    }
}

// export const CollectionItems = [
//     {
//         "id": 1,
//         "title": "ROMANTIC",
//         "photo": "/images/1.jpg",
//         "description": "Romantic clothing is all about\nsoftness, femininity, and a touch of whimsy. This style\nfeatures flowing fabrics, ruffles, lace, and floral prints\nIt's perfect for those who want to add a touch of\ndreamy elegance to their wardrobe",
//         "click": "See Images",
//         "pointer": "/hand-point-white.svg"
//     },
//     {
//         "id": 2,
//         "title": "RETRO",
//         "photo": "/images/2.jpg",
//         "description": "The retro style in clothing refers to fashion that is\ninspired by past eras, typically from the 1920s to the\n1990s. It often involves nostalgic elements such as\nvintage silhouettes, prints, and color palettes, with a\nmodern twist. Retro style is known for its unique and\nnostalgic charm, and is popular among those who\nappreciate fashion history and want to add a touch\nof vintage flair to their wardrobe"
//     },{
//         "id": 3,
//         "title": "SOFT",
//         "photo": "/images/3.jpg",
//         "description": "Soft style in clothing often involves delicate and\nflowy fabrics, muted color palettes, and loose\nsilhouettes\n\nIt emphasizes comfort and ease, with a focus on\ngentle and feminine aesthetics"
//     },{
//         "id": 4,
//         "title": "VISCO",
//         "photo": "/images/4.jpg",
//         "description": "Visco style, also known as VSCO girl style, is\ncharacterized by a casual and laid-back vibe\n\nIt often includes oversized and comfortable clothing,\nsuch as oversized shirts, hoodies, and scrunchies\n\nVisco style is associated with a carefree and youthful\naesthetic"
//     },{
//         "id": 5,
//         "title": "BOHEMIAN",
//         "photo": "/images/5.jpg",
//         "description": "Romantic clothing is all about\nsoftness, femininity, and a touch of whimsy. This style\nfeatures flowing fabrics, ruffles, lace, and floral prints\nIt's perfect for those who want to add a touch of\ndreamy elegance to their wardrobe"
//     },{
//         "id": 6,
//         "title": "MINIMALIST",
//         "photo": "/images/6.jpg",
//         "description": "Minimalist style in clothing is characterized by\nsimplicity and clean lines. It often involves neutral\ncolors, minimal embellishments, and a focus on\nquality materials\n\nMinimalist style emphasizes a minimalist and refined\naesthetic, with an emphasis on functionality and\nsimplicity"
//     },{
//         "id": 7,
//         "title": "BUSINESS",
//         "photo": "/images/7.jpg",
//         "description": "Business style in clothing is professional and polished,\nsuitable for formal or corporate settings. \n\nIt typically involves tailored and well-fitted clothing,\nsuch as blazers, trousers, and pencil skirts\n\nBusiness style emphasizes sophistication and\nconfidence"
//     },{
//         "id": 8,
//         "title": "PREPPY",
//         "photo": "/images/8.jpg",
//         "description": "Preppy style in clothing is characterized by a clean\nand classic look. It often includes elements such as\ncollared shirts, cardigans, and plaid patterns\n\nPreppy style is associated with a timeless and refined\naesthetic, often seen in traditional and conservative\nfashion"
//     }
// ]
export class CollectionItems {
}