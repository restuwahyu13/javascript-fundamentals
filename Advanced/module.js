//module adalah sebuah metode yang digunakan untuk meminta atau mengirim sebuah fungsi tertentu, dari sumber yang telah di tentukan

//import auto load
import 'hello.js'

//import single param
import HelloWord from 'hello.js';

//import multiple param
import {HelloWordl, HelloWord2, HelloWord3} from 'hello.js'

//import all param
import * from 'hello.js';

//import rename param
import HelloWord as helloDunia from 'hello.js';


//single export
export HelloWord;

//multiple export
export {HelloWordl, HelloWord2, HelloWord3}

//export rename param
export {HelloWordl as dunia1, HelloWord2 as dunia2, HelloWord3 as dunia3}

//export default
export default HelloWord;