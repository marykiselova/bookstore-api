module.exports = function (app) {
  var Book = app.models.book;
  var User = app.models.User;

  User.create({
    username: "admin",
    email: "marykiselova@gmail.com",
    password: "admin"
  }).then(() => {}).catch((err) => {
    console.log(err);
  });

  var bookNames = "Acons Adalberts Adelions Adeljans Adeļjons Adgars Adis Ado Adonis Adoniss Adriāns Adrians Adris Afanasijs Agatons Agejs Agijs Aģis Agnārs Agnis Agris Agrits Agrons Agurs Ahmads Ahmeds Ahto Aidars Aidis Aigars Aigijs Aigils Aigis Aigo Aigvars Ailands Aimo Ainards Ainars Ainārs Ainis Aino Airats Airiks Airis Airtons Aivalds Aivars Aivārs Aivijs Aivils Aivis Aivo Akims Ako Akselis Aksels Alans Alberts Albins Albīns Aldijs Aldis Aldonis Aldons Aldris Aleksandris Aleksandrs Aleksejs Aleksis Alekss Alens Alēns Alereins Alesandrs Alfejs Alfijs Alfins Alfons Alfonss Alfreds Alfrēds Alfrids Alfrīds Alfs Algarts Algers Alģerts Alģimants Aļģirds Alģirds Algirds Alģirts Aļģirts Alģis Aļģis Aļiks Aliks Alis Alisters Allans Allens Almands Almants Almārs Almonds Alnars Alnis Alnors Aloīzijs Aloizis Aloizs Aloīzs Alons Alsis Altairs Alvaro Alvars Alvids Alvijs Alvils Alvīns Alvis Alvits Amandis Amands Ambrozijs Amijs Amirans Amirs Amunds Anārs Anastāsijs Anastāzijs Anatolijs Anatols Ancis Andars Andejs Anders Anderss Andijs Andis Ando Andreass Andrejans Andrējs Andrejs Andress Andriāns Andrievs Andrijans Andrijs Andris Androns Andrs Andrus Andruss Andulis Andžejs Andzelms Andželo Andžs Anfims Angarijs Anicets Anis Anrī Anrijs Anris Anriss Anselms Ansis Anšlavs Antans Antars Antis Antonijs Antonio Antons Antris Ants Antuans Anufrijs Anvars Anzelms Anžijs Apolinārijs Apolinārs Apolons Aralds Arams Arčijs Arčils Ardis Ards Aress Aretijs Arets Argils Argo Argods Argons Argots Arguts Arialds Arians Ariels Arigo Arijs Ariko Arilds Arimands Arīns Arions Aris Ariss Aristīds Aristons Arkādijs Arlijs Armando Armands Armanis Armans Armants Armass Armens Armīds Armīns Armins Armis Arnis Arno Arnolds Arnotijs Arnulfs Arsenijs Arsēnijs Arsens Arsēns Arsentijs Artemijs Artēmijs Artijs Artiks Artis Artjoms Arts Artūrs Arturs Arvalds Arvēds Arveds Arvīds Arvids Arvils Arvīns Arvis Arvo Askolds Asmunds Astērijs Astrīds Atāls Atanazijs Atis Atstars Atvars Audars Audris Augmants Augustīns Augusts Aurēlijs Aurelijs Aurels Auseklis Ausmis Ausmunds Austris Austrums";

  bookNames.split(" ").forEach((name) => {
    Book.create({
      name: "This is book about " + name
    });

  });

}
