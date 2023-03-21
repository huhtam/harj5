
export default function StatusText(data) {
    console.log(data.props)
    return (
    <div className="Status">
    <p>Kohde: {data.props.destination}</p>
    <p>Lähtöaika: {data.props.departureTime}</p>
    </div>

    );
}