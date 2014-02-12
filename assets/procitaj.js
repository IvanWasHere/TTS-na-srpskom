function ProcitajSad() {
   var slovoPoSlovo= String(document.getElementById('ovajTekst'));
	slovoPoSlovo = slovoPoSlovo.toLowerCase();
	for (i=0;i<slovoPoSlovo.length;i++) {
        switch(slovoPoSlovo.charAt(i))
            {
            case ' ':prazno = new Sound("assets/ivan/prazno.wav");
              prazno.play();
            break;
            case '1': br1 = new Sound("assets/ivan/1.wav");
              br1.play();
            break;
            case '2': br2 = new Sound("assets/ivan/2.wav");
              br2.play();
            break;
            default:ovo = new Sound("assets/ivan/prazno.wav");
              ovo.play();
		}
	}
}

