export const SVG_ID = "svg";
export const IMAGE_SIZE = 512;
const FILENAME = "neonfinch";

export function downloadSvg() {
    const url = getSvgBlobURL();
    download(url, FILENAME + ".svg");
    URL.revokeObjectURL(url);
}

export function downloadPng() { downloadImage('png') }
export function downloadJpg() { downloadImage('jpeg') }
export function downloadWebp() { downloadImage('webp') }

// downloading non-SVG images from SVG isn't straightforward, need to:
// 1. create an image using the SVG's blob data as the source
// 2. draw the image to a canvas
// 3. get a URL for a PNG / JPG from the canvas, which can be downloaded
function downloadImage(dataType: 'png' | 'jpeg' | 'webp') {
    const url = getSvgBlobURL();

    const image = new Image;
    image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = IMAGE_SIZE;
        canvas.height = IMAGE_SIZE;

        const context = canvas.getContext("2d")!;
        context.drawImage(image, 0, 0, IMAGE_SIZE, IMAGE_SIZE);

        const imageUrl = canvas.toDataURL('image/' + dataType, 1); // always targeting the highest quality
        download(imageUrl, FILENAME + "." + dataType)
        URL.revokeObjectURL(url);

        canvas.remove();
        image.remove();
    }

    image.src = url;
}

function getSvgBlobURL(): string {
    const svg = document.getElementById(SVG_ID)!;
    const blob = new Blob([svg.outerHTML], {type: "image/svg+xml"}); // +xml is needed for PNG image source
    return URL.createObjectURL(blob);
}

// make a temporary <a> element to download a URL
function download(url: string, name: string) {
    const a = document.createElement("a") as HTMLAnchorElement;
    a.download = name;
    a.href = url;
    a.click();
    a.remove();
}