const truthQuestions = [
	{
		en: "What is your biggest fear, and why?",
		no: "Hva er din største frykt, og hvorfor?",
	},
	{
		en: "Have you ever cheated on a test or exam? How did you do it?",
		no: "Har du noen gang jukset på en prøve eller eksamen? Hvordan gjorde du det?",
	},
	{
		en: "What is the most embarrassing thing that has ever happened to you in public?",
		no: "Hva er det mest pinlige som har skjedd med deg offentlig?",
	},
	{
		en: "Have you ever lied to your best friend, and if yes, about what?",
		no: "Har du noen gang løyet til din beste venn, og i så fall, om hva?",
	},
	{
		en: "What is the most trouble you've ever gotten into at school or at home?",
		no: "Hva er det største problemet du noen gang har havnet i på skolen eller hjemme?",
	},
	{
		en: "Have you ever pretended to be sick to get out of something? What was it?",
		no: "Har du noen gang late som om du var syk for å komme unna med noe? Hva var det?",
	},
	{
		en: "What is the most childish thing you still do as an adult?",
		no: "Hva er den mest barnslige tingen du fortsatt gjør som voksen?",
	},
	{
		en: "Have you ever stalked someone on social media? Who was it and why?",
		no: "Har du noen gang stalket noen på sosiale medier? Hvem var det, og hvorfor?",
	},
	{
		en: "What is your most embarrassing nickname, and how did you get it?",
		no: "Hva er kallenavnet ditt som du synes er mest pinlig, og hvordan fikk du det?",
	},
	{
		en: "Have you ever had a crush on a teacher or boss? Who was it?",
		no: "Har du noen gang hatt et crush på en lærer eller sjef? Hvem var det?",
	},
	{
		en: "What is the weirdest dream you've ever had? Describe it.",
		no: "Hva er den rareste drømmen du noen gang har hatt? Beskriv den.",
	},
	{
		en: "Have you ever eavesdropped on someone's conversation? What did you hear?",
		no: "Har du noen gang overhørt en samtale? Hva hørte du?",
	},
	{
		en: "What is the most ridiculous rumor you've ever spread or believed?",
		no: "Hva er det mest absurde ryktet du har spredt eller trodd på?",
	},
	{
		en: "Have you ever regretted a decision you made in a relationship? What was it?",
		no: "Har du noen gang angret på en avgjørelse du tok i et forhold? Hva var det?",
	},
	{
		en: "What is your most irrational fear, and how did it start?",
		no: "Hva er din mest irrasjonelle frykt, og hvordan startet den?",
	},
	{
		en: "Have you ever stolen something? If so, what was it and why?",
		no: "Har du noen gang stjålet noe? I så fall, hva var det, og hvorfor?",
	},
	{
		en: "What is the grossest food combination you've ever tried?",
		no: "Hva er den ekleste matkombinasjonen du noen gang har prøvd?",
	},
	{
		en: "Have you ever been caught picking your nose? Describe the situation.",
		no: "Har du noen gang blitt tatt i å plukke nesen din? Beskriv situasjonen.",
	},
	{
		en: "What is the most embarrassing text message you've sent to the wrong person?",
		no: "Hva er den mest pinlige tekstmeldingen du har sendt til feil person?",
	},
	{
		en: "Have you ever had a crush on someone your friend was dating? Who?",
		no: "Har du noen gang hatt et crush på noen vennen din datet? Hvem?",
	},
	{
		en: "What is the biggest lie you've ever told your parents, and did they find out?",
		no: "Hva er den største løgnen du noen gang har fortalt foreldrene dine, og fant de det ut?",
	},
	{
		en: "Have you ever been caught doing something you shouldn't have been doing?",
		no: "Har du noen gang blitt tatt for å gjøre noe du ikke skulle ha gjort?",
	},
	{
		en: "What is the most embarrassing thing your parents have caught you doing?",
		no: "Hva er den mest pinlige tingen foreldrene dine har tatt deg i å gjøre?",
	},
	{
		en: "Have you ever peed in a pool? Be honest.",
		no: "Har du noen gang tisset i et basseng? Vær ærlig.",
	},
	{
		en: "What is your most embarrassing wardrobe malfunction story?",
		no: "Hva er din mest pinlige garderobe funksjonssvikt historie?",
	},
	{
		en: "Have you ever lied to a friend to avoid hanging out with them? What was the reason?",
		no: "Har du noen gang løyet for en venn for å unngå å henge med dem? Hva var grunnen?",
	},
	{
		en: "What is your most embarrassing childhood memory?",
		no: "Hva er din mest pinlige barndomsminne?",
	},
	{
		en: "Have you ever pretended to like a gift you didn't actually like? What was it?",
		no: "Har du noen gang latet som om du likte en gave du egentlig ikke likte? Hva var det?",
	},
	{
		en: "Have you ever cheated on a test or exam? If so, how did you do it?",
		no: "Har du noen gang jukset på en prøve eller eksamen? Hvordan gjorde du det?",
	},
	{
		en: "What is the most embarrassing thing your parents have caught you doing at home?",
		no: "Hva er den mest pinlige tingen foreldrene dine har tatt deg på fersken med hjemme?",
	},
	{
		en: "Have you ever had a crush on a teacher or professor? Who was it?",
		no: "Har du noen gang hatt et crush på en lærer eller professor? Hvem var det?",
	},
	{
		en: "What is the biggest secret you've kept from your best friend?",
		no: "Hva er den største hemmeligheten du har holdt skjult for din beste venn?",
	},
	{
		en: "Have you ever lied about your age to get into a movie or club?",
		no: "Har du noen gang løyet om alderen din for å komme inn på en kino eller klubb?",
	},
	{
		en: "What is the most embarrassing thing that has happened to you in school?",
		no: "Hva er den mest pinlige tingen som har skjedd med deg på skolen?",
	},
	{
		en: "Have you ever snooped through someone else's phone without their permission? What did you find?",
		no: "Har du noen gang snoke gjennom noens telefon uten tillatelse? Hva fant du?",
	},
	{
		en: "Have you ever had a crush on a friend's parent? Who?",
		no: "Har du noen gang hatt et crush på en venns forelder? Hvem?",
	},
	{
		en: "What is the weirdest dream you've ever had?",
		no: "Hva er den rareste drømmen du noen gang har hatt?",
	},
	{
		en: "Have you ever had a paranormal experience? What happened?",
		no: "Har du noen gang hatt en paranormal opplevelse? Hva skjedde?",
	},
	{
		en: "What is the most embarrassing thing you've ever said about someone behind their back?",
		no: "Hva er det verste du noen gang har sagt om noen bak deres rygg?",
	},
	{
		en: "Have you ever blamed something on a sibling that you actually did?",
		no: "Har du noen gang skyldt på noe på en søsken som du faktisk gjorde selv?",
	},
	{
		en: "What is the most embarrassing thing your parents have ever done in front of your friends?",
		no: "Hva er den mest pinlige tingen foreldrene dine har gjort foran vennene dine?",
	},
	{
		en: "Have you ever eavesdropped on someone's conversation? What did you hear?",
		no: "Har du noen gang avlyttet en samtale? Hva hørte du?",
	},
	{
		en: "What is the most embarrassing thing you've worn in public?",
		no: "Hva er den mest pinlige tingen du har hatt på deg offentlig?",
	},
	{
		en: "Have you ever had a crush on a friend's sibling? Who?",
		no: "Har du noen gang hatt et crush på en venns søsken? Hvem?",
	},
	{
		en: "What is the most embarrassing thing you've ever said to your boss?",
		no: "Hva er den mest pinlige tingen du har sagt til sjefen din?",
	},
	{
		en: "Have you ever pretended to be sick to get out of something? What was it?",
		no: "Har du noen gang latet som om du var syk for å slippe unna noe? Hva var det?",
	},
	{
		en: "What is the biggest secret you've kept from your parents?",
		no: "Hva er den største hemmeligheten du har holdt skjult for foreldrene dine?",
	},
	{
		en: "Have you ever regretted a tattoo or piercing? Why?",
		no: "Har du noen gang angret på en tatovering eller piercing? Hvorfor?",
	},
	{
		en: "What is the most embarrassing thing you've done at work or school?",
		no: "Hva er den mest pinlige tingen du har gjort på jobb eller skole?",
	},
	{
		en: "Have you ever had a crush on someone much older or younger than you? Who?",
		no: "Har du noen gang hatt et crush på noen mye eldre eller yngre enn deg? Hvem?",
	},
	{
		en: "What is the most embarrassing thing you've done in front of a group of strangers?",
		no: "Hva er den mest pinlige tingen du har gjort foran en gruppe fremmede?",
	},
	{
		en: "Have you ever been caught cheating in a game? What game was it?",
		no: "Har du noen gang blitt tatt for å jukse i et spill? Hvilket spill var det?",
	},
	{
		en: "Have you ever had a crush on a fictional character? Who?",
		no: "Har du noen gang hatt et crush på en fiktiv karakter? Hvem?",
	},
	{
		en: "Have you ever lied about your age to get into a movie or club? Why?",
		no: "Har du noen gang løyet om alderen din for å komme inn på kino eller klubb? Hvorfor?",
	},
	{
		en: "What is the most embarrassing nickname you've ever been given?",
		no: "Hva er det mest pinlige kallenavnet du har fått?",
	},
	{
		en: "Have you ever had a crush on a friend's sibling? Who?",
		no: "Har du noen gang hatt et crush på en venns søsken? Hvem?",
	},
	{
		en: "What is the most embarrassing thing you've ever said to your crush?",
		no: "Hva er den mest pinlige tingen du har sagt til din crush?",
	},
	{
		en: "Have you ever been caught lying by your best friend? What was it about?",
		no: "Har du noen gang blitt tatt i å lyve av din beste venn? Hva handlet det om?",
	},
	{
		en: "What is the most embarrassing thing you've done while on a video call?",
		no: "Hva er den mest pinlige tingen du har gjort mens du var på videosamtale?",
	},
	{
		en: "Have you ever had a crush on someone you met online? Who?",
		no: "Har du noen gang hatt et crush på noen du møtte på nettet? Hvem?",
	},
	{
		en: "What is the biggest lie you've told your significant other?",
		no: "Hva er den største løgnen du har fortalt partneren din?",
	},
	{
		en: "Have you ever regretted breaking up with someone? Why?",
		no: "Har du noen gang angret på at du gjorde det slutt med noen? Hvorfor?",
	},
	{
		en: "What is the most embarrassing thing you've done in front of your grandparents?",
		no: "Hva er den mest pinlige tingen du har gjort foran besteforeldrene dine?",
	},
	{
		en: "Have you ever lied about your age to get into a movie or club? Why?",
		no: "Har du noen gang løyet om alderen din for å komme inn på kino eller klubb? Hvorfor?",
	},
	{
		en: "What is the most embarrassing wardrobe malfunction story?",
		no: "Hva er din mest pinlige garderobe funksjonssvikt historie?",
	},
	{
		en: "Have you ever lied to get out of trouble with the law? What happened?",
		no: "Har du noen gang løyet for å komme unna med noe ulovlig? Hva skjedde?",
	},
	{
		en: "What is the most embarrassing thing you've done while on vacation?",
		no: "Hva er den mest pinlige tingen du har gjort mens du var på ferie?",
	},
	{
		en: "Have you ever accidentally sent a text to the wrong person? What did it say?",
		no: "Har du noen gang ved et uhell sendt en tekstmelding til feil person? Hva stod det?",
	},
	{
		en: "What is the most embarrassing thing you've done in front of your crush?",
		no: "Hva er den mest pinlige tingen du har gjort foran din crush?",
	},
	{
		en: "Have you ever been caught lying by your best friend? What was it about?",
		no: "Har du noen gang blitt tatt i å lyve av din beste venn? Hva handlet det om?",
	},
	{
		en: "What is the most embarrassing thing you've done on social media?",
		no: "Hva er den mest pinlige tingen du har gjort på sosiale medier?",
	},
	{
		en: "Have you ever lied to avoid going out with friends? What was your excuse?",
		no: "Har du noen gang løyet for å unngå å dra ut med venner? Hva var unnskyldningen din?",
	},
	{
		en: "What is the most embarrassing thing you've said in front of a large group of people?",
		no: "Hva er den mest pinlige tingen du har sagt foran en stor gruppe mennesker?",
	},
	{
		en: "What is the most embarrassing thing you've done in front of your crush's parents?",
		no: "Hva er den mest pinlige tingen du har gjort foran crushens foreldre?",
	},
	{
		en: "Have you ever pretended to like someone just to fit in with a group of friends?",
		no: "Har du noen gang latet som om du likte noen bare for å passe inn med en gruppe venner?",
	},
	{
		en: "What is the biggest secret you've kept from your closest friend?",
		no: "Hva er den største hemmeligheten du har holdt skjult for din nærmeste venn?",
	},
	{
		en: "Have you ever lied about being sick to avoid a social event? Why?",
		no: "Har du noen gang løyet om å være syk for å unngå en sosial begivenhet? Hvorfor?",
	},
	{
		en: "What is the most embarrassing thing you've done while trying to impress someone?",
		no: "Hva er den mest pinlige tingen du har gjort mens du prøvde å imponere noen?",
	},
	{
		en: "Have you ever stolen something from a store? What was it?",
		no: "Har du noen gang stjålet noe fra en butikk? Hva var det?",
	},
	{
		en: "What is the biggest lie you've told your parents about your whereabouts?",
		no: "Hva er den største løgnen du har fortalt foreldrene dine om hvor du var?",
	},
	{
		en: "Have you ever been caught doing something inappropriate by a teacher or authority figure?",
		no: "Har du noen gang blitt tatt på fersken med å gjøre noe upassende av en lærer eller autoritetsperson?",
	},
	{
		en: "What is the most embarrassing thing you've done at a family gathering?",
		no: "Hva er den mest pinlige tingen du har gjort på et familiesammenkomst?",
	},
	{
		en: "Have you ever had a crush on a fictional character from a TV show or movie? Who?",
		no: "Har du noen gang hatt et crush på en fiktiv karakter fra en TV-serie eller film? Hvem?",
	},
	{
		en: "Have you ever lied about your age to someone you were interested in? Why?",
		no: "Har du noen gang løyet om alderen din for noen du var interessert i? Hvorfor?",
	},
	{
		en: "What is the most embarrassing thing you've done while drunk?",
		no: "Hva er den mest pinlige tingen du har gjort mens du var full?",
	},
];

const dareQuestions = [
	{
		en: "Do your best impression of a celebrity and have everyone guess who it is.",
		no: "Gjør ditt beste inntrykk av en kjendis og la alle gjette hvem det er.",
	},
	{
		en: "Call a random number from your phone and sing 'Happy Birthday' to whoever answers.",
		no: "Ring et tilfeldig nummer fra telefonen din og syng 'Happy Birthday' til den som svarer.",
	},
	{
		en: "Wear socks on your hands for the next three rounds.",
		no: "Bruk sokker på hendene dine for de neste tre rundene.",
	},
	{
		en: "Speak in an accent of your choice for the next 10 minutes.",
		no: "Snakk med en aksent etter eget valg i de neste 10 minuttene.",
	},
	{
		en: "Do your best dance moves to a song chosen by the group.",
		no: "Vis frem dine beste dansebevegelser til en sang valgt av gruppen.",
	},
	{
		en: "Let someone else style your hair however they want.",
		no: "La noen andre style håret ditt slik de vil.",
	},
	{
		en: "Send a funny selfie to the fifth person in your contact list.",
		no: "Send et morsomt selfie til den femte personen i kontaktlisten din.",
	},
	{
		en: "Do 20 push-ups right now.",
		no: "Gjør 20 armhevinger akkurat nå.",
	},
	{
		en: "Eat a spoonful of a condiment (ketchup, mustard, etc.) of the group's choice.",
		no: "Spis en skje med et krydder (ketchup, sennep, osv.) valgt av gruppen.",
	},
	{
		en: "Do your best impression of a baby crying.",
		no: "Gjør ditt beste inntrykk av en gråtende baby.",
	},
	{
		en: "Do a handstand against the wall for as long as you can.",
		no: "Gjør et håndstående mot veggen så lenge du kan.",
	},
	{
		en: "Put on lipstick (or chapstick) without using your hands.",
		no: "Påfør leppestift (eller leppomade) uten å bruke hendene.",
	},
	{
		en: "Tell a joke and try to make everyone laugh.",
		no: "Fortell en vits og prøv å få alle til å le.",
	},
	{
		en: "Do a cartwheel across the room.",
		no: "Gjør et hjulbrett over rommet.",
	},
	{
		en: "Wear your clothes backward for the rest of the game.",
		no: "Ha på deg klærne baklengs resten av spillet.",
	},
	{
		en: "Try to lick your elbow.",
		no: "Prøv å slikke albuen din.",
	},
	{
		en: "Do a freestyle rap about the last thing you ate.",
		no: "Gjør en freestyle rap om det siste du spiste.",
	},
	{
		en: "Balance a spoon on your nose for one minute.",
		no: "Balanser en skje på nesen din i ett minutt.",
	},
	{
		en: "Go outside and yell 'I love [name of someone in the room]' as loud as you can.",
		no: "Gå ut og rop 'Jeg elsker [navnet på noen i rommet]' så høyt du kan.",
	},
	{
		en: "Pretend to be a waiter/waitress and take snack orders from everyone in the room.",
		no: "Pretendere å være en servitør og ta bestillinger på snacks fra alle i rommet.",
	},
	{
		en: "Try to lick your nose.",
		no: "Prøv å slikke nesen din.",
	},
	{
		en: "Hop on one foot around the room three times.",
		no: "Hopp på ett bein rundt rommet tre ganger.",
	},
	{
		en: "Do an impression of a famous movie character.",
		no: "Gjør et inntrykk av en kjent filmkarakter.",
	},
	{
		en: "Try to juggle three items from around the room.",
		no: "Prøv å jonglere tre ting fra rommet.",
	},
	{
		en: "Make up a short poem about the person to your left.",
		no: "Lag et kort dikt om personen til venstre for deg.",
	},
	{
		en: "Do the chicken dance for one minute.",
		no: "Gjør hønsehoppdansen i ett minutt.",
	},
	{
		en: "Give yourself a temporary tattoo using a pen or marker.",
		no: "Gi deg selv en midlertidig tatovering ved å bruke en penn eller tusj.",
	},
	{
		en: "Attempt to breakdance (even if you don't know how).",
		no: "Prøv å breakdance (selv om du ikke kan det).",
	},
	{
		en: "Do 10 jumping jacks while saying the alphabet backwards.",
		no: "Gjør 10 hoppende jacks mens du sier alfabetet baklengs.",
	},
	{
		en: "Wear socks on your hands and try to eat something.",
		no: "Bruk sokker på hendene og prøv å spise noe.",
	},
	{
		en: "Attempt to do a headstand against the wall.",
		no: "Prøv å gjøre et hodestående mot veggen.",
	},
	{
		en: "Speak in a high-pitched voice for the next five minutes.",
		no: "Snakk med en høy stemme i de neste fem minuttene.",
	},
	{
		en: "Do your best impression of a famous cartoon character.",
		no: "Gjør ditt beste inntrykk av en kjent tegneseriefigur.",
	},
	{
		en: "Act out a scene from your favorite movie (without saying what movie it is).",
		no: "Spill ut en scene fra din favorittfilm (uten å si hva filmen heter).",
	},
	{
		en: "Put on lipstick and give yourself a mustache.",
		no: "Påfør leppestift og gi deg selv en bart.",
	},
	{
		en: "Do your best impression of a baby trying to walk.",
		no: "Gjør ditt beste inntrykk av en baby som prøver å gå.",
	},
	{
		en: "Spin around in circles 10 times and then try to walk in a straight line.",
		no: "Spinn rundt i sirkler 10 ganger og prøv deretter å gå rett frem.",
	},
	{
		en: "Make up a short rap about a household item of your choice.",
		no: "Lag en kort rap om et husholdningsartikkel etter eget valg.",
	},
	{
		en: "Try to fit as many marshmallows in your mouth as you can.",
		no: "Prøv å få plass til så mange marshmallows i munnen som mulig.",
	},
	{
		en: "Do the robot dance for one minute.",
		no: "Gjør robotdansen i ett minutt.",
	},
	{
		en: "Pretend to be a news reporter and give a live report about something ridiculous.",
		no: "Pretendere å være en nyhetsreporter og gi en direkterapport om noe latterlig.",
	},
	{
		en: "Put on a blindfold and try to guess who each person in the room is by feeling their face.",
		no: "Ha på et bind for øynene og prøv å gjette hvem hver person i rommet er ved å føle ansiktet deres.",
	},
	{
		en: "Do 20 jumping jacks while singing the alphabet.",
		no: "Gjør 20 hoppende jacks mens du synger alfabetet.",
	},
	{
		en: "Put an ice cube down your shirt and leave it there until it melts.",
		no: "Legg en isbit ned i skjorten din og la den være der til den smelter.",
	},
	{
		en: "Do your best impression of a famous athlete.",
		no: "Gjør ditt beste inntrykk av en kjent idrettsutøver.",
	},
	{
		en: "Put on a pair of socks on your hands and try to text someone.",
		no: "Ha på et par sokker på hendene og prøv å sende en tekstmelding til noen.",
	},
	{
		en: "Act like a monkey for the next two rounds.",
		no: "Oppfør deg som en ape i de neste to rundene.",
	},
	{
		en: "Do your best impression of a famous politician.",
		no: "Gjør ditt beste inntrykk av en kjent politiker.",
	},
	{
		en: "Do a silly dance in public for one minute.",
		no: "Gjør en tåpelig dans offentlig i ett minutt.",
	},
	{
		en: "Put on a blindfold and try to apply makeup to someone else.",
		no: "Ha på et bind for øynene og prøv å sminke noen andre.",
	},
	{
		en: "Sing the chorus of a song chosen by the group in your best opera voice.",
		no: "Syng refrenget av en sang valgt av gruppen med din beste operastemme.",
	},
	{
		en: "Go outside and ask a stranger for their autograph.",
		no: "Gå ut og be en fremmed om autografen deres.",
	},
	{
		en: "Wear socks on your hands and try to eat a snack.",
		no: "Bruk sokker på hendene og prøv å spise en snacks.",
	},
	{
		en: "Do your best impression of a famous superhero.",
		no: "Gjør ditt beste inntrykk av en kjent superhelt.",
	},
	{
		en: "Put on a hat and sunglasses and strike a pose for a pretend photoshoot.",
		no: "Ta på deg en hatt og solbriller og poser for et forfalsket fotografering.",
	},
	{
		en: "Try to lick your own toe.",
		no: "Prøv å slikke din egen tå.",
	},
	{
		en: "Wear your shirt backward for the rest of the game.",
		no: "Ha på deg skjorten baklengs resten av spillet.",
	},
	{
		en: "Speak in a funny accent for the next three rounds.",
		no: "Snakk med en morsom aksent i de neste tre rundene.",
	},
	{
		en: "Do a cartwheel outside, even if it's dark.",
		no: "Gjør et hjulbrett utenfor, selv om det er mørkt.",
	},
	{
		en: "Wear a sign that says 'Kick me' and walk around for five minutes.",
		no: "Ha på deg et skilt som sier 'Spark meg' og gå rundt i fem minutter.",
	},
	{
		en: "Pretend to be a robot for the next five minutes.",
		no: "Pretendere å være en robot i de neste fem minuttene.",
	},
	{
		en: "Wear a sock as a glove for the rest of the game.",
		no: "Bruk en sokk som en handske resten av spillet.",
	},
	{
		en: "Do your best impression of a crying baby.",
		no: "Gjør ditt beste inntrykk av en gråtende baby.",
	},
	{
		en: "Speak in rhymes for the next three rounds.",
		no: "Snakk i rim i de neste tre rundene.",
	},
	{
		en: "Do the Macarena dance in front of everyone.",
		no: "Gjør Macarena-dansen foran alle.",
	},
	{
		en: "Wear a funny hat and keep it on for the next three rounds.",
		no: "Ha på deg en morsom hatt og la den være på i de neste tre rundene.",
	},
	{
		en: "Do 10 push-ups while singing a nursery rhyme.",
		no: "Gjør 10 armhevinger mens du synger en barnerim.",
	},
	{
		en: "Act like a mime and perform a short skit for the group.",
		no: "Oppfør deg som en mim og utfør en kort sketsj for gruppen.",
	},
	{
		en: "Try to touch your nose with your tongue.",
		no: "Prøv å berøre nesen med tungen din.",
	},
	{
		en: "Pretend to be a waiter/waitress and take snack orders from everyone in the room.",
		no: "Pretendere å være en servitør og ta bestillinger på snacks fra alle i rommet.",
	},
	{
		en: "Do an impression of your favorite cartoon character.",
		no: "Gjør et inntrykk av din favoritt tegneseriefigur.",
	},
	{
		en: "Create a TikTok dance and perform it for the group.",
		no: "Lag en TikTok-dans og fremfør den for gruppen.",
	},
	{
		en: "Wear a piece of clothing backward for the rest of the game.",
		no: "Ha på deg et plagg baklengs resten av spillet.",
	},
	{
		en: "Put on a blindfold and try to guess three objects by feeling them.",
		no: "Ha på et bind for øynene og prøv å gjette tre objekter ved å føle dem.",
	},
	{
		en: "Do your best impression of a famous historical figure.",
		no: "Gjør ditt beste inntrykk av en kjent historisk person.",
	},
	{
		en: "Wrap yourself in toilet paper like a mummy and take a photo.",
		no: "Pakk deg inn i toalettpapir som en mumie og ta et bilde.",
	},
	{
		en: "Speak in a British accent for the next three rounds.",
		no: "Snakk med en britisk aksent i de neste tre rundene.",
	},
	{
		en: "Try to balance a spoon on your nose for 30 seconds.",
		no: "Prøv å balansere en skje på nesen i 30 sekunder.",
	},
	{
		en: "Hop on one foot while reciting the alphabet backward.",
		no: "Hopp på ett bein mens du sier alfabetet baklengs.",
	},
	{
		en: "Do an interpretive dance to a song chosen by the group.",
		no: "Gjør en tolkningsdans til en sang valgt av gruppen.",
	},
	{
		en: "Put on a blindfold and try to guess who is touching your shoulder.",
		no: "Ha på et bind for øynene og prøv å gjette hvem som berører skulderen din.",
	},
	{
		en: "Eat a spoonful of a condiment (such as mustard or hot sauce) without making a face.",
		no: "Spis en skje med et krydder (for eksempel sennep eller hot sauce) uten å lage en grimase.",
	},
	{
		en: "Draw a funny face on your stomach with a marker.",
		no: "Tegn et morsomt ansikt på magen din med en tusj.",
	},
	{
		en: "Do your best impression of a famous singer.",
		no: "Gjør ditt beste inntrykk av en kjent sanger.",
	},
	{
		en: "Put on a blindfold and try to make a sandwich without using your hands.",
		no: "Ha på et bind for øynene og prøv å lage en sandwich uten å bruke hendene.",
	},
	{
		en: "Speak in pig Latin for the next three rounds.",
		no: "Snakk på kodespråket for de neste tre rundene.",
	},
	{
		en: "Do your best impression of a famous comedian.",
		no: "Gjør ditt beste inntrykk av en kjent komiker.",
	},
	{
		en: "Put a piece of ice down your back and keep it there until it melts.",
		no: "Legg en isbit ned i ryggen og la den være der til den smelter.",
	},
	{
		en: "Try to balance a spoon on your nose while hopping on one foot.",
		no: "Prøv å balansere en skje på nesen mens du hopper på ett bein.",
	},
	{
		en: "Act like you're underwater for the next three rounds.",
		no: "Oppfør deg som om du er under vann i de neste tre rundene.",
	},
	{
		en: "Wear a hat and sunglasses indoors for the next three rounds.",
		no: "Ha på deg en hatt og solbriller innendørs i de neste tre rundene.",
	},
	{
		en: "Speak in a whisper for the rest of the game.",
		no: "Snakk i en hvisking resten av spillet.",
	},
	{
		en: "Try to stand on one leg for as long as you can.",
		no: "Prøv å stå på ett bein så lenge du kan.",
	},
	{
		en: "Try to do the splits (or as far as you can) and hold it for 10 seconds.",
		no: "Prøv å gjøre spagaten (eller så langt du kan) og hold det i 10 sekunder.",
	},
	{
		en: "Make up a funny poem about a random object in the room.",
		no: "Lag et morsomt dikt om et tilfeldig objekt i rommet.",
	},
	{
		en: "Try to touch your toes without bending your knees.",
		no: "Prøv å berøre tærne uten å bøye knærne.",
	},
];

export { truthQuestions, dareQuestions };
