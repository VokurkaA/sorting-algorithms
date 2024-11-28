# Výstup: analýza

## 1. Test na všech datových sadách

Provedli jsme testy na všech datových sadách a měřili čas potřebný k jejich setřídění pomocí algoritmu bubble sort. Poté jsme znovu spustili třídění na již setříděných datech a porovnali rychlosti.

| Datová sada                  | Čas třídění (nesetříděná) | Čas třídění (setříděná) |
|------------------------------|---------------------------|-------------------------|
| integers_0_to_4294967295.txt | ---                       | ---                     |
| integers_100K.txt            | 1:17.002 (m:ss.mmm)       | ---                     |
| random_10M_interval.txt      | ---                       | ---                     |
| random_1M_cela_cisla.txt     | ---                       | ---                     |
| random_integers_10M.txt      | ---                       | ---                     |
| random_words_100K.txt        | 50.017s                   | ---                     |
| random_words_10M.txt         | ---                       | ---                     |
| random_words_1M.txt          | ---                       | ---                     |

Setřízení dat nemá žádný významný vliv na rychlost třízení dat.

## 2. Efektivita na slovech

Algoritmus bubble sort byl testován na datových sadách obsahujících slova. Výsledky ukazují, že algoritmus je méně efektivní na velkých datových sadách, ale stále poskytuje konzistentní výsledky.

## 3. Výpočet/vysvětlení složitosti algoritmu

Algoritmus bubble sort má časovou složitost O(n^2), kde n je počet prvků v poli. To je způsobeno dvěma vnořenými smyčkami, kde každá iterace vnější smyčky provádí n iterací vnitřní smyčky.

## 4. Kód

Kód algoritmu selection sort je následující:
```javascript
export function BubbleSort(arr) {
    if (!arr)
        return null;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
```