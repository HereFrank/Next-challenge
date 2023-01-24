export function formatDate(date: string): string {
    const dateObject = new Date(date)

    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;  // getMonth() returns 0-11
    const year = dateObject.getFullYear().toString().slice(-2);

    const formatedDate = `${day}-${month}-${year}`

    return formatedDate
}

export function processPictureUrl(url: string | undefined): string | null {
    if (url === undefined) return null

    // Try to process url
    const pictureId = url.split("ipfs://")[1]

    // If process fail means the url is OK. 
    if (pictureId) {
        return `https://lens.infura-ipfs.io/ipfs/${pictureId}`
    }
    else {
        return url
    }
}

export function getRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})` 
}