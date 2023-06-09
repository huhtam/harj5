import { useState } from "react";
import FlightsTable from "./FlightsTable";
import StatusText from "./StatusText";
import './App.css';

export default function FlightsPage() {
    const [selectedItem, setSelectedItem] = useState(null);
    const column = [
        
        { heading: 'Company', value: 'company' },
        { heading: 'Destination', value: 'segment.destination' },
        { heading: 'Origin', value: 'segment.origin' },
        { heading: 'Departure time', value: 'segment.departureTime' },
        { heading: 'Arrival to destination', value: 'segment.arrivalTime' }
      ]

    const flights = [
        {
          "id": "fc704c16fd79",
          "company": "US Airlines",
          "points": 25000,
          "duration": 590,
          "segment": [
            {
              "duration": 590,
              "departureTime": "2016-10-10T21:30-03:00",
              "arrivalTime": "2016-10-11T06:20-04:00",
              "origin": "GRU",
              "destination": "JFK"
            }
          ]
        },
        {
          "id": "3fe21e46fd78",
          "company": "Dalta",
          "points": 20000,
          "duration": 862,
          "segment": [
            {
              "duration": 635,
              "departureTime": "2016-10-16T20:25-03:00",
              "arrivalTime": "2016-10-17T06:00-04:00",
              "origin": "GRU",
              "destination": "YYZ",
              "connectionDuration": 125
            },
            {
              "duration": 102,
              "departureTime": "2016-10-17T08:05-04:00",
              "arrivalTime": "2016-10-17T09:47-04:00",
              "origin": "YYZ",
              "destination": "JFK"
            }
          ]
        },
        {
          "id": "8bf2b3d7be09",
          "company": "Aviana",
          "points": 17000,
          "duration": 1050,
          "segment": [
            {
              "duration": 515,
              "departureTime": "2016-10-10T21:25-03:00",
              "arrivalTime": "2016-10-11T05:00-04:00",
              "origin": "GRU",
              "destination": "MIA",
              "connectionDuration": 145
            },
            {
              "duration": 192,
              "departureTime": "2016-10-11T07:25-04:00",
              "arrivalTime": "2016-10-11T10:37-04:00",
              "origin": "MIA",
              "destination": "YYZ",
              "connectionDuration": 98
            },
            {
              "duration": 100,
              "departureTime": "2016-10-11T12:15-04:00",
              "arrivalTime": "2016-10-11T13:55-04:00",
              "origin": "YYZ",
              "destination": "JFK"
            }
          ]
        }
      ]

      
    return (
        
        <div className="Table">
            {selectedItem && <StatusText props={selectedItem}/>}
            <FlightsTable
            data={flights}
            column={column}
            setSelectedItem={setSelectedItem}
            />
        </div>
    );
}