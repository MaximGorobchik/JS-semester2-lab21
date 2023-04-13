import React from 'react';

class Task_7 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            routes: [
                { id: 1, name: 'R1' },
                { id: 2, name: 'R2' },
                { id: 3, name: 'R3' },
            ],
            selectedRouteId: null, // ID вибраного маршруту
        };
    }

    handleRadioChange = (event) => {
        this.setState({ selectedRouteId: Number(event.target.value) }); // «бер≥гаЇмо ID вибраного маршруту в стан≥ компонента
    }

    render() {
        const { routes, selectedRouteId } = this.state;

        return (
            <div>
                <ul>
                    {routes.map((route) => (
                        <li key={route.id}>
                            <input
                                type="radio"
                                name="route"
                                value={route.id}
                                checked={selectedRouteId === route.id}
                                onChange={this.handleRadioChange}
                            />
                            {route.name}
                        </li>
                    ))}
                </ul>
                <p>
                    Selected route: {selectedRouteId ? `Route ${selectedRouteId}` : 'No route selected'}
                </p>
            </div>
        );
    }
}

export default Task_7;
