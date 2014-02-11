function ProcitajSad() {
	var slovoPoSlovo= String(document.getElementById('ovajTekst'));
	slovoPoSlovo = slovoPoSlovo.toLowerCase();
	for (i=0;i<slovoPoSlovo.length;i++) {
	   switch(slovoPoSlovo.charAt(i))
		   
			{
					case ' ':slovo("assets/ivan/prazno.wav");
					break;
					case '1':
					slovo('assets/ivan/1.wav');
					setTimeout(function () { 
    				console.log(1);
					}, 10000); 
					break;
					case '2':slovo('assets/ivan/2.wav');
					break;
					case '3':slovo("assets/ivan/3.wav");
					break;
					case '4':slovo("assets/ivan/4.wav");
					break;
					case '5':slovo("assets/ivan/5.wav");
					break;
					case '6':slovo("assets/ivan/6.wav");
					break;
					case '7':slovo("assets/ivan/7.wav");
					break;
					case '8':slovo("assets/ivan/8.wav");
					break;
					case '9':slovo("assets/ivan/9.wav");
					break;
					
					case 'a':slovo("assets/ivan/a.wav");
					break;
					case 'b':slovo("assets/ivan/b.wav");
					break;

					default:slovo("assets/ivan/6.wav");
		}
	}
}

