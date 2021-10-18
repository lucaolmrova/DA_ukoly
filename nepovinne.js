/*DÚ1: Výplata
    Spočítejte svůj měsíční příjem víte-li, že pracujete 7 hodin denně se mzdou 265 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.
    Pokud pracujete na živnostenský list, můžete si odečíst 60% příjmů jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.
*/
console.log("Úkol 1");
let prijem = 7 * 265 * 21;
let zivnostPrijem = prijem * 0.6;
let dan = zivnostPrijem * 0.15;
console.log(
  "Hrubý příjem " +
    prijem +
    " CZK, příjem ze živnosti " +
    zivnostPrijem +
    " CZK, daň ze živnosti " +
    Math.floor(dan) +
    " CZK"
);
/*DÚ2: Délka filmu
V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu Pán prstenů: Dvě věže trvá 223 minut. My bychom ovšem délku filmu raději věděli v hodinách a minutách. Za použití funkcí a operátorů z této lekce spočítejte, kolik hodin a minut trvá film Pán prstenů: Dvě věže.
*/
console.log("Úkol 2");
let film = "Pán prstenů: Dvě věže";
filmLength = 223;
console.log(
  film +
    ", " +
    Math.floor(filmLength / 60) +
    " hours " +
    (filmLength % 60) +
    " minutes"
);
/*DÚ3: Email

    Vytvořte řetězec obsahující vaši e-mailovou adresu.
    Sestavte emailovou adresu tak, že sečtete dohromady vaše křestní jméno, znak tečka, vaše příjmení a koncovku @mujmail.com.
*/
console.log("Úkol 3");
let jmeno = "luca";
let prijmeni = "olmrova";
let koncovka = "@mujmail.com";
let email = jmeno + "." + prijmeni + koncovka;
console.log(email);
