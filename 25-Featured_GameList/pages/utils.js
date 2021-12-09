const paginate = (games) => {

    const itemsPerPage = 10;
    const pages = Math.ceil(games.length / itemsPerPage);

    const newGames = Array.from({length:pages},(_,index)=>{
        const start = index * itemsPerPage;
        return games.slice(start, start+itemsPerPage);
    })

    return newGames;

}

export default paginate
