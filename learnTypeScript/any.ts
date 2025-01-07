// type any essentially turns off TypeScript, we don't want to do this.
// any should probably never be used.
// Only legitimate use case for any may be if you are transitioning from JS to Typescript and don't have time to immediately write all the complex types - but even then, still better to just take your time and fully transition.

let value: any = 1;
value.toUpperCase();

value = "Hi"
value.map((item) => { item++ });