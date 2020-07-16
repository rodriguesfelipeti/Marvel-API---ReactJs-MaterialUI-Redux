export const handleScroll = (event) => {
    const body = document.body;
    const html = document.documentElement;
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = (windowHeight + window.pageYOffset) + 100
    if (windowBottom >= docHeight) {
        console.log('chegou ao fim')
        return true
    } 
    return false 
}

