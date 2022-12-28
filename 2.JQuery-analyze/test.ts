import $ from "jquery";
$("p").text()
interface T {
  // text(text_function: string | number | boolean | 
  // ((this: HTMLElement, index: number, text: string) => string | number | boolean)): this;
  // 함수의 인수는 생략 불가능 매개변수의 함수의 매개변수는 생략가능
  text(arg?:string | number | boolean | ((this: this, index: number, text: string) => string | number | boolean) ):this;
  html(e:HTMLElement | string):this
}
const tag: T = $(".pTag") as unknown as T;
tag.text("asd");
tag.text(123);
tag.text((index)=>{
 console.log(this)
  console.log("test")
  return true;
})

tag.text(123).html("<p>asd</p>").text("asd")