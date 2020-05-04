import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
    return (
        <div >
            <p>Bienvenue </p>
        </div>
    );
}

export default Hello;



if (document.getElementById('panel-log')) {
    ReactDOM.render(<Hello />, document.getElementById('panel-log'));
}
