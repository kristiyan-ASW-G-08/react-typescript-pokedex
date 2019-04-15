const getUrl = (url:string) : string => {
    const urlArr = url.split('/')
    const id = urlArr[urlArr.length - 2]
    return id
}
export default getUrl