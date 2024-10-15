# 🔰 Bot do [LINGOS](https://lingos.pl/)

**PIERWSZY** bot do lingosa 

**PROSTY** w użyciu

# 🍍 Jak to używać
  
1. Pobierz folder **NIE MOŻE BYĆ SKOMPRESOWANY**
2. Idź do `chrome://extensions/`, i włącz tryb **DEVELOPERA**
3. Kliknij przycisk `Załaduj rozpakowanie` i wybierz ten folder
5. Gotowe nie zapomnij o ⭐

# ⚠️ Jak dodać swój język

1. Idź do folderu lang
2. I dodaj nowy Język **(np: japoński.json)**
3. W pliku `popup.html` dodaj

```html
    <select id="languageSelect">
        <option value="angielski">Angielski</option>
        <option value="hiszpanski">Hiszpanski</option>
        <option value="niemiecki">Niemiecki</option>
        <option value="nazwa_twojego_języka">nazwa_twojego_języka</option>
    </select>
```

4. W `nazwa_twojego_języka.json` zrób taki pattern
```json
{
    "pytanie": "odpowiedż",
}
```
5. Gotowe nie zapomnij o ⭐
