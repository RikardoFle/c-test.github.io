let answers = 0;
let button = document.getElementById("right_answer");
let test1 = document.querySelector(".test1");
let test2 = document.querySelector(".test2");
let test3 = document.querySelector(".test3");
let test4 = document.querySelector(".test4");
let test5 = document.querySelector(".test5");
let test6 = document.querySelector(".test6");
let test7 = document.querySelector(".test7");
let test8 = document.querySelector(".test8");
let test9 = document.querySelector(".test9");
let test10 = document.querySelector(".test10");
let results = document.querySelector(".result");

function testing1() {  
        test1.className += ' hidden';
        test2.classList.remove("hidden");
        document.querySelector(".result_item_span1").textContent = 'НЕВЕРНО';
        document.querySelector(".result_item_span1").className += ' false';
};

function testing2() {
        test2.className += ' hidden';
        test3.classList.remove("hidden");
        document.querySelector(".result_item_span2").textContent = 'НЕВЕРНО';
        document.querySelector(".result_item_span2").className += ' false';
};

function testing3() {
        test3.className += ' hidden';
        test4.classList.remove("hidden");
        document.querySelector(".result_item_span3").textContent = 'НЕВЕРНО';
        document.querySelector(".result_item_span3").className += ' false';
};

function testing4() {
        test4.className += ' hidden';
        test5.classList.remove("hidden");
        document.querySelector(".result_item_span4").textContent = 'НЕВЕРНО';
        document.querySelector(".result_item_span4").className += ' false';
};

function testing5() {
        test5.className += ' hidden';
        test6.classList.remove("hidden");
        document.querySelector(".result_item_span5").textContent = 'НЕВЕРНО';
        document.querySelector(".result_item_span5").className += ' false';
};

function testing6() {
        test6.className += ' hidden';
        test7.classList.remove("hidden");
        document.querySelector(".result_item_span6").textContent = 'НЕВЕРНО';
        document.querySelector(".result_item_span6").className += ' false';
};

function testing7() {
        test7.className += ' hidden';
        test8.classList.remove("hidden");
        document.querySelector(".result_item_span7").textContent = 'НЕВЕРНО';
        document.querySelector(".result_item_span7").className += ' false';
};

function testing8() {
        test8.className += ' hidden';
        test9.classList.remove("hidden");
        document.querySelector(".result_item_span8").textContent = 'НЕВЕРНО';
        document.querySelector(".result_item_span8").className += ' false';
};

function testing9() {
        test9.className += ' hidden';
        test10.classList.remove("hidden");
        document.querySelector(".result_item_span9").textContent = 'НЕВЕРНО';
        document.querySelector(".result_item_span9").className += ' false';
};

function testing10() {
        test10.className += ' hidden';
        results.classList.remove("hidden");
        document.querySelector(".result_item_span10").textContent = 'НЕВЕРНО';
        document.querySelector(".result_item_span10").className += ' false';
};

function result1 () {
    answers += 1;
    document.querySelector(".result_item_span1").textContent = 'ВЕРНО';
    document.querySelector(".result_item_span1").className += ' right';
    test1.className += ' hidden';
    test2.classList.remove("hidden");
};

function result2 () {
    answers += 1;
    document.querySelector(".result_item_span2").textContent = 'ВЕРНО';
    document.querySelector(".result_item_span2").className += ' right';
    test2.className += ' hidden';
    test3.classList.remove("hidden");
};

function result3 () {
    answers += 1;
    document.querySelector(".result_item_span3").textContent = 'ВЕРНО';
    document.querySelector(".result_item_span3").className += ' right';
    test3.className += ' hidden';
    test4.classList.remove("hidden");
};

function result4 () {
    answers += 1;
    document.querySelector(".result_item_span4").textContent = 'ВЕРНО';
    document.querySelector(".result_item_span4").className += ' right';
    test4.className += ' hidden';
    test5.classList.remove("hidden");
};

function result5 () {
    answers += 1;
    document.querySelector(".result_item_span5").textContent = 'ВЕРНО';
    document.querySelector(".result_item_span5").className += ' right';
    test5.className += ' hidden';
    test6.classList.remove("hidden");
};

function result6 () {
    answers += 1;
    document.querySelector(".result_item_span6").textContent = 'ВЕРНО';
    document.querySelector(".result_item_span6").className += ' right';
    test6.className += ' hidden';
    test7.classList.remove("hidden");
};

function result7 () {
    answers += 1;
    document.querySelector(".result_item_span7").textContent = 'ВЕРНО';
    document.querySelector(".result_item_span7").className += ' right';
    test7.className += ' hidden';
    test8.classList.remove("hidden");
};

function result8 () {
    answers += 1;
    document.querySelector(".result_item_span8").textContent = 'ВЕРНО';
    document.querySelector(".result_item_span8").className += ' right';
    test8.className += ' hidden';
    test9.classList.remove("hidden");
};

function result9 () {
    answers += 1;
    document.querySelector(".result_item_span9").textContent = 'ВЕРНО';
    document.querySelector(".result_item_span9").className += ' right';
    test9.className += ' hidden';
    test10.classList.remove("hidden");
};

function result10 () {
    answers += 1;
    document.querySelector(".result_item_span10").textContent = 'ВЕРНО';
    document.querySelector(".result_item_span10").className += ' right';
    test10.className += ' hidden';
    results.classList.remove("hidden");
};