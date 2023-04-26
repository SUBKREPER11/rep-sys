import logo from '../ZSE-banner.png';
import '../App.css';
const questionList = [
  {description: 'Podaj typ/specyfikę aplikacji React. Jakie są wymagania, aby móc połączyć się z Bazą \
  danych lub wysyłać wiadomości pocztą e-mail?', key: 0},
  {description: 'Opisz dostępne metody dla systemu pocztowego w React.', key: 1},
  {description: 'Porównaj metody i podaj ich wady i zalety.', key: 2},
  {description: 'Przygotuj skrypt instalacyjny/wdrożeniowy wraz z instrukcją wdrożenia dla opracowanej\
  przez siebie aplikacji Report-tool.', key: 3}
];
function Help() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          HELP
        </h1>
        <ol>
        {questionList.map(question => {
          return (
            <li key={question.key}>{question.description}</li>
          );
        })}
      </ol>
        <a
          className="App-link"
          href="/"
          // target="_blank"
          rel="noopener noreferrer"
        >
         {'\u21E0'}
        </a>
      </header>
    </div>
  );
}

export default Help;
