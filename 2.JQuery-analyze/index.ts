// index.d.ts 를 참고 
// declare 선언 확인 
// export = {module name} => TS 에서 commonJS(require형식) 을 export 하는방법 
/*
TS 에서 commonJS(require형식) 으로 import 하는방법 
1. import $ = require("jquery");
2. import * as $ from "jquery";
*/

/*
# nameSpace 
- 부모 객체안에 타입들을 담는다 
- 다른 이름의 타입들과 겹치지 않기 위해 좋다 
```typescript
decalre namespace JQuery {
  ...types
}
JQuery.{type name}
```
- interface 의 제네릭과 헷갈리지 말자 

*/

import _ = require("jquery");
import $ from "jquery";
// addClass(className_function: JQuery.TypeOrArray<string> | ((this: TElement, index: number, currentClassName: string) => string)): this;
// TS 에서 첫번째 매개변수 this는 없다고 생각해도 된다 (this: TElement, index: number, currentClassName: string) => string)
$("p").addClass("p-tag");


export const a = 213;