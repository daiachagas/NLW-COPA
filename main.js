function creatGame(player1, hour,player2) {
    return  `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -0.4;
function creatCard(date, day, games){
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>  
    `
}

document.querySelector("#cards").innerHTML = 
        creatCard('20/11', 'Domingo',
        creatGame("catar","13:00","equador")) +
        creatCard('21/11', 'Segunda',
        creatGame("inglaterra","10:00","irã") +
        creatGame("senegal","13:00","holanda") +
        creatGame("eua","16:00","gales")) +
        creatCard('22/11', 'Terça',
        creatGame("argentina","07:00","arabia") +
        creatGame("dinamarca","10:00","tunisia") +
        creatGame("mexico","13:00","polonia") +
        creatGame("frança","16:00","australia")) +
        creatCard('23/11', 'Quarta',
        creatGame("marrocos","07:00","croacia") +
        creatGame("alemanha","10:00","japao") +
        creatGame("espanha","13:00","costarica") +
        creatGame("belgica","16:00","canada")) +
        creatCard('24/11', 'Quinta',
        creatGame("suiça","07:00","camarões") +
        creatGame("uruguai","10:00","coreiadosul") +
        creatGame("portugal","13:00","gana") +
        creatGame("brasil","16:00","servia")) +
        creatCard('25/11', 'Sexta',
        creatGame("gales","07:00","irã") +
        creatGame("catar","10:00","senegal") +
        creatGame("holanda","13:00","equador") +
        creatGame("inglaterra","16:00","eua")) +
        creatCard('26/11', 'Sábado',
        creatGame("tunisia","07:00","australia") +
        creatGame("polonia","10:00","arabia") +
        creatGame("frança","13:00","dinamarca") +
        creatGame("argentina","16:00","mexico")) +
        creatCard('27/11', 'Domingo',
        creatGame("japao","07:00","costarica") +
        creatGame("belgica","10:00","marrocos") +
        creatGame("croacia","13:00","canada") +
        creatGame("espanha","16:00","alemanha")) +
        creatCard('28/11', 'Segunda',
        creatGame("camarões","07:00","servia") +
        creatGame("coreiadosul","10:00","gana") +
        creatGame("brasil","13:00","suiça") +
        creatGame("portugal","16:00","uruguai")) +
        creatCard('29/11', 'Terça',
        creatGame("equador","12:00","senegal") +
        creatGame("holanda","12:00","catar") +
        creatGame("irã","16:00","eua") +
        creatGame("gales","16:00","inglaterra")) +
        creatCard('30/11', 'Quarta',
        creatGame("tunisia","12:00","frança") +
        creatGame("australia","12:00","dinamarca") +
        creatGame("polonia","16:00","argentina") +
        creatGame("arabia","16:00","mexico")) +
        creatCard('01/12', 'Quinta',
        creatGame("croacia","12:00","belgica") +
        creatGame("canada","12:00","marrocos") +
        creatGame("japao","16:00","espanha") +
        creatGame("costarica","16:00","alemanha")) +
        creatCard('02/12', 'Sexta',
        creatGame("coreiadosul","12:00","portugal") +
        creatGame("gana","12:00","uruguai") +
        creatGame("servia","16:00","suiça") +
        creatGame("camarões","16:00","brasil"))
