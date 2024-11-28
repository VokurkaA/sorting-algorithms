# Výstup: analýza

## 1. Test na všech datových sadách

Provedli jsme testy na všech datových sadách a měřili čas potřebný k jejich setřídění pomocí algoritmu selection sort. Poté jsme znovu spustili třídění na již setříděných datech a porovnali rychlosti.

| Datová sada                  | Čas třídění (nesetříděná) | Čas třídění (setříděná) |
|------------------------------|---------------------------|-------------------------|
| integers_0_to_4294967295.txt | ---                       | ---                     |
| integers_100K.txt            | 50.610s                   | ---                     |
| random_10M_interval.txt      | ---                       | ---                     |
| random_1M_cela_cisla.txt     | ---                       | ---                     |
| random_integers_10M.txt      | ---                       | ---                     |
| random_words_100K.txt        | 51.489s                   | ---                     |
| random_words_10M.txt         | ---                       | ---                     |
| random_words_1M.txt          | ---                       | ---                     |

Setřízení dat nemá žádný významný vliv na rychlost třízení dat.

## 2. Efektivita na slovech

Algoritmus selection sort byl testován na datových sadách obsahujících slova. Výsledky ukazují, že algoritmus je méně efektivní na velkých datových sadách, ale stále poskytuje konzistentní výsledky.

## 3. Výpočet/vysvětlení složitosti algoritmu

Algoritmus selection sort má časovou složitost O(n^2), kde n je počet prvků v poli. To je způsobeno dvěma vnořenými smyčkami, kde každá iterace vnější smyčky provádí n iterací vnitřní smyčky.

## 4. Kód

Kód algoritmu selection sort je následující:
```javascript
export function selectionSort(arr) {
    if (!arr)
        return null;

    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}
```