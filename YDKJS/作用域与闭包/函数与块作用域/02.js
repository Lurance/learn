// 垃圾回收
//
// 块儿作用域的另一个有用之处是关于闭包和释放内存的垃圾回收。我们将简单地在这里展示一下，但是闭包机制将在第五章中详细讲解。
//
// 考虑这段代码：
//
// function process(data) {
//     // 做些有趣的事
// }
//
// var someReallyBigData = { .. };
//
// process( someReallyBigData );
//
// var btn = document.getElementById( "my_button" );
//
// btn.addEventListener( "click", function click(evt){
//     console.log("button clicked");
// }, /*capturingPhase=*/false );
// 点击事件的处理器回调函数 click 根本不 需要 someReallyBigData 变量。这意味着从理论上讲，在 process(..) 运行之后，这个消耗巨大内存的数据结构可以被作为垃圾回收。然而，JS引擎很可能（虽然这要看具体实现）仍会将这个结构保持一段时间，因为click函数在整个作用域上拥有一个闭包。
//
// 块儿作用域可以解决这个问题，使引擎清楚地知道它不必再保持 someReallyBigData 了：
//
// function process(data) {
//     // 做些有趣的事
// }
//
// // 运行过后，任何定义在这个块中的东西都可以消失了
// {
//     let someReallyBigData = { .. };
//
//     process( someReallyBigData );
// }
//
// var btn = document.getElementById( "my_button" );
//
// btn.addEventListener( "click", function click(evt){
//     console.log("button clicked");
// }, /*capturingPhase=*/false );



