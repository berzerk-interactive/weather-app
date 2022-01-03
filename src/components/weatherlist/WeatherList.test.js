import { render, screen } from '@testing-library/react';
import WeatherList from './WeatherList';
import { wait } from '@testing-library/user-event/dist/utils';

test('renders forecast list', async () => {
    render(<WeatherList list={data}/>);
    const items = screen.getAllByText(/few clouds/i);
    expect(items).toHaveLength(2);
});


let data = [
    {
        "dt": 1641189600,
        "main": {
            "temp": 269.59,
            "feels_like": 266.4,
            "temp_min": 268.82,
            "temp_max": 269.59,
            "pressure": 1024,
            "sea_level": 1024,
            "grnd_level": 840,
            "humidity": 65,
            "temp_kf": 0.77
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }
        ],
        "clouds": {
            "all": 21
        },
        "wind": {
            "speed": 2.11,
            "deg": 203,
            "gust": 2.37
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-01-03 06:00:00"
    },
    {
        "dt": 1641200400,
        "main": {
            "temp": 269.22,
            "feels_like": 266.4,
            "temp_min": 268.49,
            "temp_max": 269.22,
            "pressure": 1024,
            "sea_level": 1024,
            "grnd_level": 839,
            "humidity": 73,
            "temp_kf": 0.73
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }
        ],
        "clouds": {
            "all": 18
        },
        "wind": {
            "speed": 1.81,
            "deg": 212,
            "gust": 2.08
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2022-01-03 09:00:00"
    }
]