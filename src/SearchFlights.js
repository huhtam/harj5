
export default function SearchFlights() {

    return(
        <div className="Search">
        <input
            className='search-input'
            type='text'
            placeholder='Search destination'
            />
        <input
            className='search-input'
            type='date'
            placeholder='Select day'     
            />
        <button>Search</button>
        </div>
    );
}