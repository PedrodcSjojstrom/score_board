
import "./App.css";

function App() {
  return (
    <div class="scoreboard">
      {/* HEADER===================== */}
      <header>
        {/* <!-- Stats --> */}
        <table className="stats">
          <tbody>
            <tr>
              <td>Players:</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Points:</td>
              <td>0</td>
            </tr>
            {/* <tr>
              <td>Round:</td>
              <td>0</td>
            </tr> */}
          </tbody>
        </table>
        {/* <!-- Header text --> */}
        <h1>Continental Scoreboard</h1>
        {/* <!-- Timer --> */}
        <div className="stopwatch">
          <h2>Stopwatch</h2>
          <span className="stopwatch-time">0</span>
          <button>Start</button>
          <button>Reset</button>
        </div>
      </header> {/* /HEADER===================== */}

      {/* PLAYERS===================== */}
      <div className="player">
        <span className="player-name">
          <button className="remove-player">✖</button>
          <svg viewBox="0 0 44 35" className={null}>
            <path d="M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z" transform="translate(0 0.301727)"/>
            <rect width="30.4986" height="3.07759" transform="translate(6.56987 31.5603)"/>
         </svg>
         Player_n
        </span>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <div className="player-total">345</div>
  
        
      </div>
      <div className="player">
        <span className="player-name">
          <button className="remove-player">✖</button>
          <svg viewBox="0 0 44 35" className={null}>
            <path d="M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z" transform="translate(0 0.301727)"/>
            <rect width="30.4986" height="3.07759" transform="translate(6.56987 31.5603)"/>
         </svg>
         Player_n+1
        </span>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <input type="text" className="round-score" placeholder={0}></input>
        <div className="player-total">670</div>
      </div>  {/* ->/PLAYERS===================== */}
      {/* FOOTER===================== */}
      <form>
        <input 
        type="text"
        //pass ref to the ref attribute 
        placeholder="Enter a player's name" 
        />
        <input type="submit" value="Add player" />
      </form>
      
    </div>
  );
}

export default App;
