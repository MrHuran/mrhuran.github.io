import fr from './noms.json' with { type: 'json' };
import en from './names.json' with { type: 'json' };

var i = 0;
for (let code in en){
    //if (fr[code]){
        i++;
        console.log(en[code]);
    //}
}
console.log(i);