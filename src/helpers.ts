export function formatDate(date: string): string {
    const dateObject = new Date(date)

    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;  // getMonth() returns 0-11
    const year = dateObject.getFullYear().toString().slice(-2);

    const formatedDate = `${day}-${month}-${year}`

    return formatedDate
}