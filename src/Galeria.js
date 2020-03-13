import React from 'react';
import './App.css'


function Galeria() {
    return (<div>
        <div class="card">
            <div className="card-image"></div>
            <div className="card-text">
                <span className="date">4 dias atrás</span>
                <h2>Ana Beatrys</h2>
                <p>Olá amiga, tudo bem? React é muito complicado!!!</p>
            </div>
            <div class="card-stats">
                <div class="stat border">
                    <div class="type">Curtidas</div>
                </div>
                <div class="stat">
                    <div class="value">32</div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Galeria;
