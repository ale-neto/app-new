import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  //Componente: Bloco isolado HTML, CSS e JS, o qual não interfere no restante da aplicação 
  //Propriedade: Informações que um componente PAI passa para filho
  //Estado: Informações mantidas pelo componente
  return (
    <div id ='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class = "input-block">
            <label htmlFor = "github_username">Usuário Github</label>
            <input name = "github_username" id = "username_github" required/>
          </div>
          <div class = "input-block">
            <label htmlFor = "techs">Tecnologias</label>
            <input name = "techs" id = "techs" required/>
          </div>
          <div className = "input-group"> 
            <div class = "input-block">
              <label htmlFor = "latitude">Latitude</label>
              <input name = "latitude" id = "latitude" required/>          
            </div>
            <div class = "input-block">
              <label htmlFor = "longitude">Latitude</label>
              <input name = "longitude" id = "longitude" required/>          
            </div>
          </div>
          <button type="submit">Salvar</button>
         </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src = "https://avatars1.githubusercontent.com/u/43523853?s=460&v=4" alt = "" />
              <div className = "user-info">
                <strong>Alexandre Neto</strong>
                <span>Java</span>
              </div>
            </header>
            <p>Programador Java</p>
            <a href = "https://github.com/ale-neto">Acessar perfil no Github</a> 
          </li>

          <li className="dev-item">
            <header>
              <img src = "https://avatars1.githubusercontent.com/u/43523853?s=460&v=4" alt = "" />
              <div className = "user-info">
                <strong>Alexandre Neto</strong>
                <span>Java</span>
              </div>
            </header>
            <p>Programador Java</p>
            <a href = "https://github.com/ale-neto">Acessar perfil no Github</a> 
          </li>

          <li className="dev-item">
            <header>
              <img src = "https://avatars1.githubusercontent.com/u/43523853?s=460&v=4" alt = "" />
              <div className = "user-info">
                <strong>Alexandre Neto</strong>
                <span>Java</span>
              </div>
            </header>
            <p>Programador Java</p>
            <a href = "https://github.com/ale-neto">Acessar perfil no Github</a> 
          </li>

          <li className="dev-item">
            <header>
              <img src = "https://avatars1.githubusercontent.com/u/43523853?s=460&v=4" alt = "" />
              <div className = "user-info">
                <strong>Alexandre Neto</strong>
                <span>Java</span>
              </div>
            </header>
            <p>Programador Java</p>
            <a href = "https://github.com/ale-neto">Acessar perfil no Github</a> 
          </li>
        </ul>
      </main>
    </div>
    );
}

export default App;