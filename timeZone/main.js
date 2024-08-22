document.addEventListener("DOMContentLoaded", function() {
    const clearIcon = document.querySelector('.clear-icon');
    const searchBar = document.querySelector('.search');
    let searchResult = document.getElementById('search-result');

    searchBar.addEventListener("keyup", () => {
        if (searchBar.value && clearIcon.style.visibility != "visible") {
            clearIcon.style.visibility = "visible";
        } else if (!searchBar.value) {
            clearIcon.style.visibility = "hidden";
        }
    });
     clearIcon.addEventListener("click", () => {
        searchBar.value = "";
        clearIcon.style.visibility = "hidden";
    });

    
    let dateTime = document.getElementById('date-time');

    // The user's local time
    function localTime() {
        // Get the current time
        const now = new Date();

        // Format the date
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = now.toLocaleDateString('de-DE', options);

        // Format the time 
        const time = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        // Swapping the order of time and date
        const newDateTimeString = `${time}, ${date}`;

        dateTime.textContent = newDateTimeString;
        
    }
    
    localTime();
    setInterval(localTime, 1000);

    let inputSearch = document.querySelector('input[type="search"]');
    
    function listOfCountries() {
       return [
            { name: "Asia/Shanghai", time: new Date().toLocaleString("de-DE", { timeZone: "Asia/Shanghai" }) },
            { name: "Europe/Andorra", time: new Date().toLocaleString("de-DE", { timeZone: "Europe/Andorra" }) },
            { name: "Asia/Dubai", time: new Date().toLocaleString("de-DE", { timeZone: "Asia/Dubai" }) },
            { name: "Asia/Kabul", time: new Date().toLocaleString("de-De", { timeZone: "Asia/Kabul"})},
            { name: "Europe/Tirane", time: new Date().toLocaleString("de-De", { timeZone: "Europe/Tirane"})},
            { name: "Asia/Yerevan", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Yerevan"})},
            { name: "Antarctica/Casey", time: new Date().toLocaleString("de-De", {timeZone: "Antarctica/Casey"})},
            { name: "Antarctica/Davis", time: new Date().toLocaleString("de-De", {timeZone: "Antarctica/Davis"})},
            { name: "Antarctica/DumontDUrville", time: new Date().toLocaleString("de-De", {timeZone: "Antarctica/DumontDUrville"})},
            { name: "Antarctica/Mawson", time: new Date().toLocaleString("de-De", {timeZone: "Antarctica/Mawson"})},
            { name: "Antarctica/Palmer", time: new Date().toLocaleString("de-De", {timeZone: "Antarctica/Palmer"})},
            { name: "Antarctica/Rothera", time: new Date().toLocaleString("de-De", {timeZone: "Antarctica/Rothera"})},
            { name: "Antarctica/Syowa", time: new Date().toLocaleString("de-De", {timeZone: "Antarctica/Syowa"})},
            { name: "Antarctica/Troll", time: new Date().toLocaleString("de-De", {timeZone: "Antarctica/Troll"})},
            { name: "Antarctica/Vostok", time: new Date().toLocaleString("de-De", {timeZone: "Antarctica/Vostok"})},
            { name: "America/Argentina/Jujuy", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/Jujuy"})},
            { name: "America/Argentina/Buenos_Aires", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/Buenos_Aires"})},
            { name: "America/Argentina/Cordoba", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/Cordoba"})},
            { name: "America/Argentina/Salta", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/Salta"})},
            { name: "America/Argentina/Tucuman", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/Tucuman"})},
            { name: "America/Argentina/Catamarca", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/Catamarca"})},
            { name: "America/Argentina/La_Rioja", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/La_Rioja"})},
            { name: "America/Argentina/San_Juan", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/San_Juan"})},
            { name: "America/Argentina/Mendoza", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/Mendoza"})},
            { name: "America/Argentina/San_Luis", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/San_Luis"})},
            { name: "America/Argentina/Rio_Gallegos", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/Rio_Gallegos"})},
            { name: "America/Argentina/Ushuaia", time: new Date().toLocaleString("de-De", {timeZone: "America/Argentina/Ushuaia"})},
            { name: "Pacific/Pago_Pago", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Pago_Pago"})},
            { name: "Europe/Vienna", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Vienna"})},
            { name: "Australia/Lord_Howe", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Lord_Howe"})},
            { name: "Antarctica/Macquarie", time: new Date().toLocaleString("de-De", {timeZone: "Antarctica/Macquarie"})},
            { name: "Australia/Hobart", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Hobart"})},
            { name: "Australia/Currie", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Currie"})},
            { name: "Australia/Melbourne", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Melbourne"})},
            { name: "Australia/Sydney", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Sydney"})},
            { name: "Australia/Broken_Hill", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Broken_Hill"})},
            { name: "Australia/Brisbane", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Brisbane"})},
            { name: "Australia/Lindeman", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Lindeman"})},
            { name: "Australia/Adelaide", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Adelaide"})},
            { name: "Australia/Darwin", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Darwin"})},
            { name: "Australia/Perth", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Perth"})},
            { name: "Australia/Eucla", time: new Date().toLocaleString("de-De", {timeZone: "Australia/Eucla"})},
            { name: "Asia/Baku", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Baku"})},
            { name: "America/Barbados", time: new Date().toLocaleString("de-De", {timeZone: "America/Barbados"})},
            { name: "Asia/Dhaka", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Dhaka"})},
            { name: "Europe/Brussels", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Brussels"})},
            { name: "Europe/Sofia", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Sofia"})},
            { name: "Atlantic/Bermuda", time: new Date().toLocaleString("de-De", {timeZone: "Atlantic/Bermuda"})},
            { name: "Asia/Brunei", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Brunei"})},
            { name: "America/La_Paz", time: new Date().toLocaleString("de-De", {timeZone: "America/La_Paz"})},
            { name: "America/Noronha", time: new Date().toLocaleString("de-De", {timeZone: "America/Noronha"})},
            { name: "America/Belem", time: new Date().toLocaleString("de-De", {timeZone: "America/Belem"})},
            { name: "America/Fortaleza", time: new Date().toLocaleString("de-De", {timeZone: "America/Fortaleza"})},
            { name: "America/Recife", time: new Date().toLocaleString("de-De", {timeZone: "America/Recife"})},
            { name: "America/Araguaina", time: new Date().toLocaleString("de-De", {timeZone: "America/Araguaina"})},
            { name: "America/Maceio", time: new Date().toLocaleString("de-De", {timeZone: "America/Maceio"})},
            { name: "America/Bahia", time: new Date().toLocaleString("de-De", {timeZone: "America/Bahia"})},
            { name: "America/Sao_Paulo", time: new Date().toLocaleString("de-De", {timeZone: "America/Sao_Paulo"})},
            { name: "America/Campo_Grande", time: new Date().toLocaleString("de-De", {timeZone: "America/Campo_Grande"})},
            { name: "America/Cuiaba", time: new Date().toLocaleString("de-De", {timeZone: "America/Cuiaba"})},
            { name: "America/Santarem", time: new Date().toLocaleString("de-De", {timeZone: "America/Santarem"})},
            { name: "America/Porto_Velho", time: new Date().toLocaleString("de-De", {timeZone: "America/Porto_Velho"})},
            { name: "America/Boa_Vista", time: new Date().toLocaleString("de-De", {timeZone: "America/Boa_Vista"})},
            { name: "America/Manaus", time: new Date().toLocaleString("de-De", {timeZone: "America/Manaus"})},
            { name: "America/Eirunepe", time: new Date().toLocaleString("de-De", {timeZone: "America/Eirunepe"})},
            { name: "America/Rio_Branco", time: new Date().toLocaleString("de-De", {timeZone: "America/Rio_Branco"})},
            { name: "America/Nassau", time: new Date().toLocaleString("de-De", {timeZone: "America/Nassau"})},
            { name: "Asia/Thimphu", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Thimphu"})},
            { name: "Europe/Minsk", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Minsk"})},
            { name: "America/Belize", time: new Date().toLocaleString("de-De", {timeZone: "America/Belize"})},
            { name: "America/St_Johns", time: new Date().toLocaleString("de-De", {timeZone: "America/St_Johns"})},
            { name: "America/Halifax", time: new Date().toLocaleString("de-De", {timeZone: "America/Halifax"})},
            { name: "America/Glace_Bay", time: new Date().toLocaleString("de-De", {timeZone: "America/Glace_Bay"})},
            { name: "America/Moncton", time: new Date().toLocaleString("de-De", {timeZone: "America/Moncton"})},
            { name: "America/Goose_Bay", time: new Date().toLocaleString("de-De", {timeZone: "America/Goose_Bay"})},
            { name: "America/Blanc-Sablon", time: new Date().toLocaleString("de-De", {timeZone: "America/Blanc-Sablon"})},
            { name: "America/Toronto", time: new Date().toLocaleString("de-De", {timeZone: "America/Toronto"})},
            { name: "America/Nipigon", time: new Date().toLocaleString("de-De", {timeZone: "America/Nipigon"})},
            { name: "America/Thunder_Bay", time: new Date().toLocaleString("de-De", {timeZone: "America/Thunder_Bay"})},
            { name: "America/Iqaluit", time: new Date().toLocaleString("de-De", {timeZone: "America/Iqaluit"})},
            { name: "America/Pangnirtung", time: new Date().toLocaleString("de-De", {timeZone: "America/Pangnirtung"})},
            { name: "America/Atikokan", time: new Date().toLocaleString("de-De", {timeZone: "America/Atikokan"})},
            { name: "America/Winnipeg", time: new Date().toLocaleString("de-De", {timeZone: "America/Winnipeg"})},
            { name: "America/Rainy_River", time: new Date().toLocaleString("de-De", {timeZone: "America/Rainy_River"})},
            { name: "America/Resolute", time: new Date().toLocaleString("de-De", {timeZone: "America/Resolute"})},
            { name: "America/Rankin_Inlet", time: new Date().toLocaleString("de-De", {timeZone: "America/Rankin_Inlet"})},
            { name: "America/Regina", time: new Date().toLocaleString("de-De", {timeZone: "America/Regina"})},
            { name: "America/Swift_Current", time: new Date().toLocaleString("de-De", {timeZone: "America/Swift_Current"})},
            { name: "America/Edmonton", time: new Date().toLocaleString("de-De", {timeZone: "America/Edmonton"})},
            { name: "America/Cambridge_Bay", time: new Date().toLocaleString("de-De", {timeZone: "America/Cambridge_Bay"})},
            { name: "America/Yellowknife", time: new Date().toLocaleString("de-De", {timeZone: "America/Yellowknife"})},
            { name: "America/Inuvik", time: new Date().toLocaleString("de-De", {timeZone: "America/Inuvik"})},
            { name: "America/Creston", time: new Date().toLocaleString("de-De", {timeZone: "America/Creston"})},
            { name: "America/Dawson_Creek", time: new Date().toLocaleString("de-De", {timeZone: "America/Dawson_Creek"})},
            { name: "America/Fort_Nelson", time: new Date().toLocaleString("de-De", {timeZone: "America/Fort_Nelson"})},
            { name: "America/Vancouver", time: new Date().toLocaleString("de-De", {timeZone: "America/Vancouver"})},
            { name: "America/Whitehorse", time: new Date().toLocaleString("de-De", {timeZone: "America/Whitehorse"})},
            { name: "America/Dawson", time: new Date().toLocaleString("de-De", {timeZone: "America/Dawson"})},
            { name: "Indian/Cocos", time: new Date().toLocaleString("de-De", {timeZone: "Indian/Cocos"})},
            { name: "Europe/Zurich", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Zurich"})},
            { name: "Africa/Abidjan", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Abidjan"})},
            { name: "Pacific/Rarotonga", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Rarotonga"})},
            { name: "America/Santiago", time: new Date().toLocaleString("de-De", {timeZone: "America/Santiago"})},
            { name: "America/Punta_Arenas", time: new Date().toLocaleString("de-De", {timeZone: "America/Punta_Arenas"})},
            { name: "Pacific/Easter", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Easter"})},
            { name: "Asia/Urumqi", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Urumqi"})},
            { name: "America/Bogota", time: new Date().toLocaleString("de-De", {timeZone: "America/Bogota"})},
            { name: "America/Costa_Rica", time: new Date().toLocaleString("de-De", {timeZone: "America/Costa_Rica"})},
            { name: "America/Havana", time: new Date().toLocaleString("de-De", {timeZone: "America/Havana"})},
            { name: "Atlantic/Cape_Verde", time: new Date().toLocaleString("de-De", {timeZone: "Atlantic/Cape_Verde"})},
            { name: "America/Curacao", time: new Date().toLocaleString("de-De", {timeZone: "America/Curacao"})},
            { name: "Indian/Christmas", time: new Date().toLocaleString("de-De", {timeZone: "Indian/Christmas"})},
            { name: "Asia/Nicosia", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Nicosia"})},
            { name: "Asia/Famagusta", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Famagusta"})},
            { name: "Europe/Prague", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Prague"})},
            { name: "Europe/Berlin", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Berlin"})},
            { name: "Europe/Copenhagen", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Copenhagen"})},
            { name: "America/Santo_Domingo", time: new Date().toLocaleString("de-De", {timeZone: "America/Santo_Domingo"})},
            { name: "Africa/Algiers", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Algiers"})},
            { name: "America/Guayaquil", time: new Date().toLocaleString("de-De", {timeZone: "America/Guayaquil"})},
            { name: "Pacific/Galapagos", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Galapagos"})},
            { name: "Europe/Tallinn", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Tallinn"})},
            { name: "Africa/Cairo", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Cairo"})},
            { name: "Africa/El_Aaiun", time: new Date().toLocaleString("de-De", {timeZone: "Africa/El_Aaiun"})},
            { name: "Europe/Madrid", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Madrid"})},
            { name: "Africa/Ceuta", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Ceuta"})},
            { name: "Atlantic/Canary", time: new Date().toLocaleString("de-De", {timeZone: "Atlantic/Canary"})},
            { name: "Europe/Helsinki", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Helsinki"})},
            { name: "Pacific/Fiji", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Fiji"})},
            { name: "Atlantic/Stanley", time: new Date().toLocaleString("de-De", {timeZone: "Atlantic/Stanley"})},
            { name: "Pacific/Chuuk", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Chuuk"})},
            { name: "Pacific/Pohnpei", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Pohnpei"})},
            { name: "Pacific/Kosrae", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Kosrae"})},
            { name: "Atlantic/Faroe", time: new Date().toLocaleString("de-De", {timeZone: "Atlantic/Faroe"})},
            { name: "Europe/Paris", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Paris"})},
            { name: "Europe/London", time: new Date().toLocaleString("de-De", {timeZone: "Europe/London"})},
            { name: "Asia/Tbilisi", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Tbilisi"})},
            { name: "America/Cayenne", time: new Date().toLocaleString("de-De", {timeZone: "America/Cayenne"})},
            { name: "Africa/Accra", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Accra"})},
            { name: "Europe/Gibraltar", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Gibraltar"})},
            { name: "America/Godthab", time: new Date().toLocaleString("de-De", {timeZone: "America/Godthab"})},
            { name: "America/Danmarkshavn", time: new Date().toLocaleString("de-De", {timeZone: "America/Danmarkshavn"})},
            { name: "America/Scoresbysund", time: new Date().toLocaleString("de-De", {timeZone: "America/Scoresbysund"})},
            { name: "America/Thule", time: new Date().toLocaleString("de-De", {timeZone: "America/Thule"})},
            { name: "Europe/Athens", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Athens"})},
            { name: "Atlantic/South_Georgia", time: new Date().toLocaleString("de-De", {timeZone: "Atlantic/South_Georgia"})},
            { name: "America/Guatemala", time: new Date().toLocaleString("de-De", {timeZone: "America/Guatemala"})},
            { name: "Pacific/Guam", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Guam"})},
            { name: "Africa/Bissau", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Bissau"})},
            { name: "America/Guyana", time: new Date().toLocaleString("de-De", {timeZone: "America/Guyana"})},
            { name: "Asia/Hong_Kong", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Hong_Kong"})},
            { name: "America/Tegucigalpa", time: new Date().toLocaleString("de-De", {timeZone: "America/Tegucigalpa"})},
            { name: "America/Port-au-Prince", time: new Date().toLocaleString("de-De", {timeZone: "America/Port-au-Prince"})},
            { name: "Europe/Budapest", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Budapest"})},
            { name: "Asia/Jakarta", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Jakarta"})},
            { name: "Asia/Pontianak", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Pontianak"})},
            { name: "Asia/Makassar", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Makassar"})},
            { name: "Asia/Jayapura", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Jayapura"})},
            { name: "Europe/Dublin", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Dublin"})},
            { name: "Asia/Jerusalem", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Jerusalem"})},
            { name: "Asia/Kolkata", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Kolkata"})},
            { name: "Indian/Chagos", time: new Date().toLocaleString("de-De", {timeZone: "Indian/Chagos"})},
            { name: "Asia/Baghdad", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Baghdad"})},
            { name: "Asia/Tehran", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Tehran"})},
            { name: "Atlantic/Reykjavik", time: new Date().toLocaleString("de-De", {timeZone: "Atlantic/Reykjavik"})},
            { name: "Europe/Rome", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Rome"})},
            { name: "America/Jamaica", time: new Date().toLocaleString("de-De", {timeZone: "America/Jamaica"})},
            { name: "Asia/Amman", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Amman"})},
            { name: "Asia/Tokyo", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Tokyo"})},
            { name: "Africa/Nairobi", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Nairobi"})},
            { name: "Asia/Bishkek", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Bishkek"})},
            { name: "Pacific/Tarawa", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Tarawa"})},
            { name: "Pacific/Enderbury", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Enderbury"})},
            { name: "Pacific/Kiritimati", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Kiritimati"})},
            { name: "Asia/Pyongyang", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Pyongyang"})},
            { name: "Asia/Seoul", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Seoul"})},
            { name: "Asia/Almaty", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Almaty"})},
            { name: "Asia/Qyzylorda", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Qyzylorda"})},
            { name: "Asia/Qostanay", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Qostanay"})},
            { name: "Asia/Aqtobe", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Aqtobe"})},
            { name: "Asia/Aqtau", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Aqtau"})},
            { name: "Asia/Atyrau", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Atyrau"})},
            { name: "Asia/Oral", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Oral"})},
            { name: "Asia/Beirut", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Beirut"})},
            { name: "Asia/Colombo", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Colombo"})},
            { name: "Africa/Monrovia", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Monrovia"})},
            { name: "Europe/Vilnius", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Vilnius"})},
            { name: "Europe/Luxembourg", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Luxembourg"})},
            { name: "Europe/Riga", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Riga"})},
            { name: "Africa/Tripoli", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Tripoli"})},
            { name: "Africa/Casablanca", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Casablanca"})},
            { name: "Europe/Monaco", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Monaco"})},
            { name: "Europe/Chisinau", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Chisinau"})},
            { name: "Pacific/Majuro", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Majuro"})},
            { name: "Pacific/Kwajalein", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Kwajalein"})},
            { name: "Asia/Yangon", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Yangon"})},
            { name: "Asia/Ulaanbaatar", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Ulaanbaatar"})},
            { name: "Asia/Hovd", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Hovd"})},
            { name: "Asia/Choibalsan", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Choibalsan"})},
            { name: "Asia/Macau", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Macau"})},
            { name: "America/Martinique", time: new Date().toLocaleString("de-De", {timeZone: "America/Martinique"})},
            { name: "Europe/Malta", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Malta"})},
            { name: "Indian/Mauritius", time: new Date().toLocaleString("de-De", {timeZone: "Indian/Mauritius"})},
            { name: "Indian/Maldives", time: new Date().toLocaleString("de-De", {timeZone: "Indian/Maldives"})},
            { name: "America/Mexico_City", time: new Date().toLocaleString("de-De", {timeZone: "America/Mexico_City"})},
            { name: "America/Cancun", time: new Date().toLocaleString("de-De", {timeZone: "America/Cancun"})},
            { name: "America/Merida", time: new Date().toLocaleString("de-De", {timeZone: "America/Merida"})},
            { name: "America/Monterrey", time: new Date().toLocaleString("de-De", {timeZone: "America/Monterrey"})},
            { name: "America/Matamoros", time: new Date().toLocaleString("de-De", {timeZone: "America/Matamoros"})},
            { name: "America/Mazatlan", time: new Date().toLocaleString("de-De", {timeZone: "America/Mazatlan"})},
            { name: "America/Chihuahua", time: new Date().toLocaleString("de-De", {timeZone: "America/Chihuahua"})},
            { name: "America/Ojinaga", time: new Date().toLocaleString("de-De", {timeZone: "America/Ojinaga"})},
            { name: "America/Hermosillo", time: new Date().toLocaleString("de-De", {timeZone: "America/Hermosillo"})},
            { name: "America/Tijuana", time: new Date().toLocaleString("de-De", {timeZone: "America/Tijuana"})},
            { name: "America/Bahia_Banderas", time: new Date().toLocaleString("de-De", {timeZone: "America/Bahia_Banderas"})},
            { name: "Asia/Kuala_Lumpur", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Kuala_Lumpur"})},
            { name: "Asia/Kuching", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Kuching"})},
            { name: "Africa/Maputo", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Maputo"})},
            { name: "Africa/Windhoek", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Windhoek"})},
            { name: "Pacific/Noumea", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Noumea"})},
            { name: "Pacific/Norfolk", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Norfolk"})},
            { name: "Africa/Lagos", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Lagos"})},
            { name: "America/Managua", time: new Date().toLocaleString("de-De", {timeZone: "America/Managua"})},
            { name: "Europe/Amsterdam", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Amsterdam"})},
            { name: "Europe/Oslo", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Oslo"})},
            { name: "Asia/Kathmandu", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Kathmandu"})},
            { name: "Pacific/Nauru", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Nauru"})},
            { name: "Pacific/Niue", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Niue"})},
            { name: "Pacific/Auckland", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Auckland"})},
            { name: "Pacific/Chatham", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Chatham"})},
            { name: "America/Panama", time: new Date().toLocaleString("de-De", {timeZone: "America/Panama"})},
            { name: "America/Lima", time: new Date().toLocaleString("de-De", {timeZone: "America/Lima"})},
            { name: "Pacific/Tahiti", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Tahiti"})},
            { name: "Pacific/Marquesas", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Marquesas"})},
            { name: "Pacific/Gambier", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Gambier"})},
            { name: "Pacific/Port_Moresby", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Port_Moresby"})},
            { name: "Pacific/Bougainville", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Bougainville"})},
            { name: "Asia/Manila", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Manila"})},
            { name: "Asia/Karachi", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Karachi"})},
            { name: "Europe/Warsaw", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Warsaw"})},
            { name: "America/Miquelon", time: new Date().toLocaleString("de-De", {timeZone: "America/Miquelon"})},
            { name: "Pacific/Pitcairn", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Pitcairn"})},
            { name: "America/Puerto_Rico", time: new Date().toLocaleString("de-De", {timeZone: "America/Puerto_Rico"})},
            { name: "Asia/Gaza", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Gaza"})},
            { name: "Asia/Hebron", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Hebron"})},
            { name: "Europe/Lisbon", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Lisbon"})},
            { name: "Atlantic/Madeira", time: new Date().toLocaleString("de-De", {timeZone: "Atlantic/Madeira"})},
            { name: "Atlantic/Azores", time: new Date().toLocaleString("de-De", {timeZone: "Atlantic/Azores"})},
            { name: "Pacific/Palau", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Palau"})},
            { name: "America/Asuncion", time: new Date().toLocaleString("de-De", {timeZone: "America/Asuncion"})},
            { name: "Asia/Qatar", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Qatar"})},
            { name: "Indian/Reunion", time: new Date().toLocaleString("de-De", {timeZone: "Indian/Reunion"})},
            { name: "Europe/Bucharest", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Bucharest"})},
            { name: "Europe/Belgrade", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Belgrade"})},
            { name: "Europe/Kaliningrad", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Kaliningrad"})},
            { name: "Europe/Moscow", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Moscow"})},
            { name: "Europe/Simferopol", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Simferopol"})},
            { name: "Europe/Kirov", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Kirov"})},
            { name: "Europe/Astrakhan", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Astrakhan"})},
            { name: "Europe/Volgograd", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Volgograd"})},
            { name: "Europe/Saratov", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Saratov"})},
            { name: "Europe/Ulyanovsk", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Ulyanovsk"})},
            { name: "Europe/Samara", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Samara"})},
            { name: "Asia/Yekaterinburg", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Yekaterinburg"})},
            { name: "Asia/Yekaterinburg", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Yekaterinburg"})},
            { name: "Asia/Omsk", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Omsk"})},
            { name: "Asia/Novosibirsk", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Novosibirsk"})},
            { name: "Asia/Barnaul", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Barnaul"})},
            { name: "Asia/Tomsk", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Tomsk"})},
            { name: "Asia/Novokuznetsk", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Novokuznetsk"})},
            { name: "Asia/Krasnoyarsk", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Krasnoyarsk"})},
            { name: "Asia/Irkutsk", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Irkutsk"})},
            { name: "Asia/Chita", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Chita"})},
            { name: "Asia/Yakutsk", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Yakutsk"})},
            { name: "Asia/Khandyga", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Khandyga"})},
            { name: "Asia/Vladivostok", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Vladivostok"})},
            { name: "Asia/Ust-Nera", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Ust-Nera"})},
            { name: "Asia/Magadan", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Magadan"})},
            { name: "Asia/Sakhalin", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Sakhalin"})},
            { name: "Asia/Srednekolymsk", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Srednekolymsk"})},
            { name: "Asia/Kamchatka", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Kamchatka"})},
            { name: "Asia/Anadyr", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Anadyr"})},
            { name: "Asia/Riyadh", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Riyadh"})},
            { name: "Pacific/Guadalcanal", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Guadalcanal"})},
            { name: "Indian/Mahe", time: new Date().toLocaleString("de-De", {timeZone: "Indian/Mahe"})},
            { name: "Africa/Khartoum", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Khartoum"})},
            { name: "Europe/Stockholm", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Stockholm"})},
            { name: "Asia/Singapore", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Singapore"})},
            { name: "America/Paramaribo", time: new Date().toLocaleString("de-De", {timeZone: "America/Paramaribo"})},
            { name: "Africa/Juba", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Juba"})},
            { name: "Africa/Sao_Tome", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Sao_Tome"})},
            { name: "America/El_Salvador", time: new Date().toLocaleString("de-De", {timeZone: "America/El_Salvador"})},
            { name: "Asia/Damascus", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Damascus"})},
            { name: "America/Grand_Turk", time: new Date().toLocaleString("de-De", {timeZone: "America/Grand_Turk"})},
            { name: "Africa/Ndjamena", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Ndjamena"})},
            { name: "Indian/Kerguelen", time: new Date().toLocaleString("de-De", {timeZone: "Indian/Kerguelen"})},
            { name: "Asia/Bangkok", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Bangkok"})},
            { name: "Asia/Dushanbe", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Dushanbe"})},
            { name: "Pacific/Fakaofo", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Fakaofo"})},
            { name: "Asia/Dili", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Dili"})},
            { name: "Asia/Ashgabat", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Ashgabat"})},
            { name: "Africa/Tunis", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Tunis"})},
            { name: "Pacific/Tongatapu", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Tongatapu"})},
            { name: "Europe/Istanbul", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Istanbul"})},
            { name: "America/Port_of_Spain", time: new Date().toLocaleString("de-De", {timeZone: "America/Port_of_Spain"})},
            { name: "Pacific/Funafuti", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Funafuti"})},
            { name: "Asia/Taipei", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Taipei"})},
            { name: "Europe/Kiev", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Kiev"})},
            { name: "Europe/Uzhgorod", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Uzhgorod"})},
            { name: "Europe/Zaporozhye", time: new Date().toLocaleString("de-De", {timeZone: "Europe/Zaporozhye"})},
            { name: "Pacific/Wake", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Wake"})},
            { name: "America/New_York", time: new Date().toLocaleString("de-De", {timeZone: "America/New_York"})},
            { name: "America/Detroit", time: new Date().toLocaleString("de-De", {timeZone: "America/Detroit"})},
            { name: "America/Kentucky/Louisville", time: new Date().toLocaleString("de-De", {timeZone: "America/Kentucky/Louisville"})},
            { name: "America/Kentucky/Monticello", time: new Date().toLocaleString("de-De", {timeZone: "America/Kentucky/Monticello"})},
            { name: "America/Indiana/Indianapolis", time: new Date().toLocaleString("de-De", {timeZone: "America/Indiana/Indianapolis"})},
            { name: "America/Indiana/Vincennes", time: new Date().toLocaleString("de-De", {timeZone: "America/Indiana/Vincennes"})},
            { name: "America/Indiana/Winamac", time: new Date().toLocaleString("de-De", {timeZone: "America/Indiana/Winamac"})},
            { name: "America/Indiana/Marengo", time: new Date().toLocaleString("de-De", {timeZone: "America/Indiana/Marengo"})},
            { name: "America/Indiana/Petersburg", time: new Date().toLocaleString("de-De", {timeZone: "America/Indiana/Petersburg"})},
            { name: "America/Indiana/Vevay", time: new Date().toLocaleString("de-De", {timeZone: "America/Indiana/Vevay"})},
            { name: "America/Chicago", time: new Date().toLocaleString("de-De", {timeZone: "America/Chicago"})},
            { name: "America/Indiana/Tell_City", time: new Date().toLocaleString("de-De", {timeZone: "America/Indiana/Tell_City"})},
            { name: "America/Indiana/Knox", time: new Date().toLocaleString("de-De", {timeZone: "America/Indiana/Knox"})},
            { name: "America/Menominee", time: new Date().toLocaleString("de-De", {timeZone: "America/Menominee"})},
            //{ name: "merica/North_Dakota/Center", time: new Date().toLocaleString("de-De", {timeZone: "merica/North_Dakota/Center"})},
            { name: "America/North_Dakota/New_Salem", time: new Date().toLocaleString("de-De", {timeZone: "America/North_Dakota/New_Salem"})},
            { name: "America/North_Dakota/Beulah", time: new Date().toLocaleString("de-De", {timeZone: "America/North_Dakota/Beulah"})},
            { name: "America/Denver", time: new Date().toLocaleString("de-De", {timeZone: "America/Denver"})},
            { name: "America/Boise", time: new Date().toLocaleString("de-De", {timeZone: "America/Boise"})},
            { name: "America/Phoenix", time: new Date().toLocaleString("de-De", {timeZone: "America/Phoenix"})},
            { name: "America/Los_Angeles", time: new Date().toLocaleString("de-De", {timeZone: "America/Los_Angeles"})},
            { name: "America/Anchorage", time: new Date().toLocaleString("de-De", {timeZone: "America/Anchorage"})},
            { name: "America/Juneau", time: new Date().toLocaleString("de-De", {timeZone: "America/Juneau"})},
            { name: "America/Sitka", time: new Date().toLocaleString("de-De", {timeZone: "America/Sitka"})},
            { name: "America/Metlakatla", time: new Date().toLocaleString("de-De", {timeZone: "America/Metlakatla"})},
            { name: "America/Yakutat", time: new Date().toLocaleString("de-De", {timeZone: "America/Yakutat"})},
            { name: "America/Nome", time: new Date().toLocaleString("de-De", {timeZone: "America/Nome"})},
            { name: "America/Adak", time: new Date().toLocaleString("de-De", {timeZone: "America/Adak"})},
            { name: "Pacific/Honolulu", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Honolulu"})},
            { name: "America/Montevideo", time: new Date().toLocaleString("de-De", {timeZone: "America/Montevideo"})},
            { name: "Asia/Samarkand", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Samarkand"})},
            { name: "Asia/Tashkent", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Tashkent"})},
            { name: "America/Caracas", time: new Date().toLocaleString("de-De", {timeZone: "America/Caracas"})},
            { name: "Asia/Ho_Chi_Minh", time: new Date().toLocaleString("de-De", {timeZone: "Asia/Ho_Chi_Minh"})},
            { name: "Pacific/Efate", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Efate"})},
            { name: "Pacific/Wallis", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Wallis"})},
            { name: "Pacific/Apia", time: new Date().toLocaleString("de-De", {timeZone: "Pacific/Apia"})},
            { name: "Africa/Johannesburg", time: new Date().toLocaleString("de-De", {timeZone: "Africa/Johannesburg"})},
        ];  
    }

    function searchTimeZones(query) {
        let timeZones = listOfCountries();
        if (timeZones && timeZones.length) {
            return timeZones.filter(tz => tz.name.toLowerCase().includes(query.toLowerCase()));
        } else {
            return [];
        }
    }

    function timeZoneResults() {
        let results = searchTimeZones(inputSearch.value);

        // Clear previous results
        searchResult.innerHTML = "";
    
        // Display the search results
        if (results.length > 0) {
            searchResult.style.display = 'block';
            results.forEach(function(result) {
                let resultItem = document.createElement('li');
                resultItem.style.listStyle = 'none';
                resultItem.style.marginBottom = '20px';
                //resultItem.style.visibility = 'hidden';
                resultItem.style.fontSize = '35px;';
                resultItem.textContent = `${result.name}: ${result.time}`;
                searchResult.appendChild(resultItem);
            });
        } else {
            searchResult.textContent = "Not Found.";
        }
    }

    inputSearch.addEventListener("input",  function() {
        timeZoneResults();
    });

    setInterval(timeZoneResults, 1000);
});
