var lang = {
	page_name: 'TTSS Kraków',
	page_title: 'TTSS Krak\u00F3w - Odjazdy tramwajów na żywo',
	page_title_stop_name: 'TTSS Krak\u00F3w - $stop - Odjazdy tramwajów na żywo',
	
	map: 'Mapa',
	
	action_close: 'Zamknij',
	action_expand: 'Rozwiń',
	action_collapse: 'Zwiń',
	
	enter_stop_name_to_begin: 'Zacznij wpisywać nazwę przystanku.',
	select_stop_click_go: 'Wyierz przystanek i kliknij "Dalej".',
	select_stop_type: {
		'b': '$stop (autobus)',
		't': '$stop (tramwaj)',
	},
	stop_name_placeholder: 'Nazwa przystanku',
	go_button: 'Dalej',
	refresh_button: '\u27f3 Odśwież',
	last_refreshed: 'Ostatnio odświeżone $time',
	loading: 'Ładowanie...',
	no_data: 'Brak danych',
	
	line_alert_pattern: 'Linia $line: $alert',
	
	header_line: 'Linia',
	header_direction: 'Kierunek',
	header_vehicle: 'Pojazd',
	header_time: 'Odjazd',
	header_delay: 'Opóźn.',
	header_lines: 'Linie',
	header_route: 'Trasa',
	header_carrier: 'Przewoźnik',
	header_stop: 'Przystanek',
	
	boarding_sign: '>>>',
	unknown_sign: '?',
	
	time_now: 'przed chwilą',
	time_seconds_prefix: '',
	time_seconds_suffix: ' s',
	time_seconds_ago_prefix: '',
	time_seconds_ago_suffix: ' s temu',
	time_minutes_prefix: '',
	time_minutes_suffix: ' min',
	time_minutes_ago_prefix: '',
	time_minutes_ago_suffix: ' min temu',
	
	types: {
		'v': 'Pojazd',
		'b': 'Autobus',
		't': 'Tramwaj',
		's': 'Przystanek',
		'sb': 'Przystanek autobusowy',
		'st': 'Przystanek tramwajowy',
		'p': 'Peron',
		'pb': 'Peron autobusowy',
		'pt': 'Peron tramwajowy',
		'l': 'Twoja lokalizacja',
	},
	
	select_feature: 'W tym miejscu znajduje się więcej niż jeden element. Wybierz właściwy z listy:',
	departures_for_stop: 'Kliknij, by zobaczyć odjazdy dla całego przystanku (a nie tylko peronu).',
	departures_for_trams: 'Przełącz na odjazdy tramwajów.',
	departures_for_buses: 'Przełącz na odjazdy autobusów.',
	
	tram_type_pattern: '$num $type ($floor)',
	high_floor: 'wysokopodłogowy',
	high_floor_sign: '\u2010\u00A0',
	high_floor_description: 'pojazd wysokopodłogowy',
	partially_low_floor: 'częściowo niskopodłogowy',
	partially_low_floor_sign: '*\u267F',
	partially_low_floor_description: 'pojazd częściowo niskopodłogowy',
	low_floor: 'niskopodłogowy',
	low_floor_sign: '\u267F',
	low_floor_description: 'pojazd niskopodłogowy',
	
	status_departed: 'Odjechał',
	status_stopped: 'Na przystanku',
	status_default: 'W trasie',
	status_delayed_4: 'Opóźniony 4′+',
	status_delayed_10: 'Opóźniony 10′+',
	
	help_click_for_schedule: 'Kliknij na wpis w tabeli odjazdów by zobaczyć rozkład jazdy danego pojazdu.',
	help_legend: 'Legenda:',
	help_text: 'Względne czasy (np. 3 min) są podawane na podstawie faktycznej lokalizacji pojazdów. Czasy bezwzględne (np. 8:01) to odjazdy rozkładowe, pokazywane gdy pojazd nie może być zlokalizowany. "?" oznacza nieznane opóźnienie.',
	help_hover_for_more: 'Najedź na ikonę, by uzyskać więcej informacji.',
	help_source: 'Kod źródłowy',
	help_license: 'Licencja',
	
	error_title: 'Wystąpił błąd!',
	error_request_failed: 'Wykonanie żądania internetowego nie udało się.',
	error_request_failed_status: 'Wykonanie żądania internetowego nie udało się. Błąd: $status.',
	error_request_failed_connectivity: 'Wykonanie żądania internetowego nie udało się - sprawdź połączenie z siecią.',
	error_new_version: 'Strona została zaktualizowana, przeładowuję...',
	error_refresh: 'Błąd! Odśwież stronę, by zaktualizować dane.',
	error_location: 'Lokalizacja nieudana.',
};
