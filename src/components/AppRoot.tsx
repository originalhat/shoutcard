import * as React from 'react';
import * as styles from './AppRoot.css';

export interface AppProps {
    name: string,
    counter: number,
    handleIncrement: () => void,
    handleDecrement: () => void,
    handleUpdateName: (name: string) => void,
}

class AppRoot extends React.Component<AppProps> {
    render() {
        return (
            <div className={styles.App}>
                <h1>{this.props.counter}</h1>

                <h2>Good morning <strong>{this.props.name}</strong>!</h2>

                <button onClick={this.handleIncrement_}>+</button>
                <button onClick={this.handleDecrement_}>-</button>

                <input type="text" defaultValue={this.props.name} onChange={this.handleUpdateName_.bind(this)}/>
            </div>
        );
    }

    handleIncrement_ = () => {
        this.props.handleIncrement();
    };

    handleDecrement_ = () => {
        this.props.handleDecrement();
    };

    handleUpdateName_ = (event: KeyboardEvent) => {
        const element: HTMLInputElement = (event.target as HTMLInputElement);
        this.props.handleUpdateName(element.value);
    };
}

export default AppRoot;
