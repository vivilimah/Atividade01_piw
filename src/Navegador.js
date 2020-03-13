import React from 'react';
import './App.css'

function Navegador() {
    return (<div>
        <nav className='header'>
            <div className='menu'>
                <figure class="logo">
                    <div>MyFace</div>
                </figure>
                <div className="usuario">
                    <figure class="nome">Vivi Lima</figure>
                </div>

                <ul>
                    <li>
                        <a href="link">Linha do tempo</a>
                    </li>
                    <li>
                        <a href="link">Perfil</a>
                    </li>

                </ul>
            </div>
        </nav>
    </div>

    );
}

export default Navegador;
