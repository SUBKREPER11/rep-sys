function Help() {
  return (
    <div className="Help" style={{ width: "80%" }}>
      <ol>
        <b><li>Typ/specyfika aplikacji React. Wymagania do połączenia się z Bazą danych lub wysyłania wiadomości pocztą e-mail</li></b>
        <br></br>
        Do używania mysql wymagane jest utworzenie osobnego serwera Node.js gdyż React.js jest wtyczką front-endową a mysql jest wtyczką back-endową przez co nie mogą działać na tym samym serwerze
        Do połączenia się z bazą danych lub wysłaniem wiadomości pocztą e-mail wymagana jest wtyczka „express”
        W przypadku łączenia się z bazą danych wymagana jest także wtyczka „mysql” oraz serwer z bazą danych
        W przypadku wysyłania wiadomości pocztą e-mail wymagana jest wtyczka „nodemailer”
        <br></br><br></br>
        <b><li>Metody dla systemu pocztowego w React.</li></b>
        <br></br>
        <i>SMTP</i><br></br>
        Simple Mail Transfer Protocol (SMTP) to technologia wysyłania wychodzących wiadomości e-mail przez sieci i jest najpowszechniejszą metodą transportu. Służy jako usługa przekazywania do wysyłania wiadomości e-mail z jednego serwera na drugi.
        <br></br><br></br>
        <i>transakcyjny interfejs API poczty e-mail</i><br></br>
        Transakcyjne usługi poczty e-mail umożliwiają wysyłanie wiadomości e-mail z aplikacji przy użyciu hostowanego interfejsu API. Zamiast samodzielnie zarządzać serwerami poczty e-mail i ich wymaganiami, możesz użyć interfejsu API poczty e-mail do obsługi wysyłania i dostarczania wiadomości. Transakcyjne interfejsy API poczty e-mail przydają się, gdy potrzebujesz niezawodnej usługi, którą można szybko zintegrować, która obsługuje wysyłanie dużych ilości i oferuje bogatą funkcjonalność.
        <br></br><br></br>
        <i>wielokanałowa usługa powiadomień</i><br></br>
        Wielokanałowe usługi powiadomień, takie jak Courier, umożliwiają dotarcie do użytkowników wieloma różnymi kanałami za pomocą jednego jednolitego interfejsu API. Zwykle pozwalają urzyć własnego dostawcę dla każdego kanału; w przypadku poczty e-mail może to być własny serwer SMTP lub hostowany transakcyjny interfejs API poczty e-mail.
        <br></br><br></br>
        <b><li>Wady i zalety powyższych metod</li></b>
        <br></br>
        <i>SMTP</i><br></br>
        <u>Zalety:</u><br></br>
        Główną zaletą SMTP jest to, że jest szeroko stosowany i łatwy do skonfigurowania i zintegrowania z aplikacją internetową. Dzięki SMTP ma się precyzyjną kontrolę nad każdym aspektem wysyłania wiadomości e-mail.

        <br></br><u>Wady:</u><br></br>
        Główną wadą SMTP jest to, że może być łatwy do zhakowania. Standardowy protokół SMTP jest podatny na ataki DDoS, phishing i naruszenia bezpieczeństwa danych. Jeśli zdecydujesz się korzystać z własnego serwera SMTP poczty e-mail, będziesz odpowiedzialny za długoterminową konserwację serwera, która wymaga wielu ciągłych wysiłków w celu zapewnienia bezpieczeństwa. Wysyłanie e-maili za pomocą SMTP jest również znacznie wolniejsze niż przy użyciu usługi API. SMTP wymaga rozległej wymiany między pocztowymi serwerami SMTP w celu dostarczenia wiadomości. Nawet wtedy wiadomość e-mail może nie zostać dostarczona bez informacji zwrotnej, jeśli adres IP serwera znajduje się na czarnej liście lub zapora sieciowa zablokowała port. To tam iz powrotem oznacza również wiele punktów awarii.

        <br></br><br></br><i>transakcyjny interfejs API poczty e-mail</i><br></br>
        <u>Zalety:</u><br></br>
        Transakcyjne usługi poczty e-mail umożliwiają wysyłanie wiadomości e-mail z aplikacji przy użyciu hostowanego interfejsu API. Zamiast samodzielnie zarządzać serwerami poczty e-mail i ich wymaganiami, możesz użyć interfejsu API poczty e-mail do obsługi wysyłania i dostarczania wiadomości. Transakcyjne interfejsy API poczty e-mail przydają się, gdy potrzebujesz niezawodnej usługi, którą można szybko zintegrować, która obsługuje wysyłanie dużych ilości i oferuje bogatą funkcjonalność.

        <br></br><u>Wady:</u><br></br>
        Główną wadą korzystania z transakcyjnej usługi e-mail zamiast SMTP jest poleganie na firmie zewnętrznej w zakresie obsługi wiadomości e-mail.

        <br></br><br></br><i>wielokanałowa usługa powiadomień</i>
        <br></br><u>Zalety:</u><br></br>
        Główną zaletą korzystania z wielokanałowej usługi powiadomień jest to, że możesz łatwo rozpocząć wysyłanie powiadomień z innych kanałów, takich jak SMS, aplikacje push i czat, korzystając z tego samego interfejsu API. Oznacza to, że podczas integracji wielu usług jest mniej kodu do utrzymania i nie jest wymagana żadna dodatkowa praca w celu dodania nowego kanału lub zmiany dostawcy.

        <br></br><u>Wady:</u><br></br>
        Wady korzystania z wielokanałowej usługi powiadamiania są podobne do bezpośredniej integracji z transakcyjnym interfejsem API poczty e-mail. Polegasz na firmie zewnętrznej, która zarządza wysyłaniem i dostarczaniem wiadomości.
      <br></br><br></br>
      <b><li>Instrukcja wdrożenia aplikacji Report-tool.</li></b>
      <br></br>
      Wymagane kroki w celu uruchomienia projektu (Wykonane na Linux Ubuntu):<br></br>
      <ol>
<li>Pobranie i zainstalowanie nodejs i npm (<i>należy użyć komendy w terminalu</i><code> curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\ sudo apt-get install -y nodejs</code>)</li>

<li>Pobranie projektu ze strony <a href="https://github.com/SUBKREPER11/rep-sys">https://github.com/SUBKREPER11/rep-sys</a> klikając <samp>CODE > Download ZIP</samp></li>

<li>Pobrany plik <samp>rep-sys-mail.zip</samp> należy rozpakować używając <code>unzip rep-sys-main.zip</code>. W folderze <samp>rep-sys-main</samp> znajdzie się folder projektu <samp>rep-sys</samp>.</li>

<li>Wybieramy folder <samp>rep-sys</samp> a w nim (w przypadku pierwszego uruchamiania należy użyć komendy <code>npm install</code>) wywołać komędę <code>npm start</code></li>

<li>Serwer zostanie uruchomiony na porcie <var>3000</var></li>
<li>W przypadku konieczności zatrzymania serwera należy w otwartym oknie terminala nacisnąć kombinacje klawiszy <kbd>Ctrl</kbd> + <kbd>C</kbd></li>
</ol>
      </ol>
      <a
        className="App-link"
        href="/"
        rel="noopener noreferrer"
      >
        {'\u21E0'}
      </a>
    </div>
  );
}

export default Help;
