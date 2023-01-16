const pagination = (numberOfPages) => {
    const pages = [];
    for(let i = 1; i <= numberOfPages; i++){
        pages.push(i)
    }
    return pages;
}

export default pagination;