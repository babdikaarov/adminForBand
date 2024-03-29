import { encode /* , isBlurhashValid */ } from "blurhash";

/* 

test case 
 // console.log(isBlurhashValid(encodeImageToBlurhash(url)));
*/
const loadImage = async (src: string) =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (...args) => reject(args);
        img.src = src;
    });

const getImageData = (image: HTMLCanvasElement) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
};

export const encodeImageToBlurhash = async (imageUrl: string) => {
    const image = await loadImage(imageUrl);
    const imageData = getImageData(image as HTMLCanvasElement);
    return encode(imageData.data, imageData.width, imageData.height, 4, 4);
};
