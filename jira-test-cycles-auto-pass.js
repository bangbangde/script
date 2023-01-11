/**
* 1. 打开冒烟用了执行页面 /secure/Tests.jspa#/testPlayer/xxx 
* 2. 进入 console 面板，运行此脚本
*/
async function autoClick() {
    const arr = Array.from($('[style="background-color: rgb(207, 207, 196);"]+div')).map(el => {
        return (next) => new Promise(resolve => {
            el.click();
            setTimeout(() => {
                const el = $('.ktm-step-actions.ng-scope > ul > li:first');
                el[0].click();
                setTimeout(resolve, 500);
            }, 1000);
        }).then(next);
    });
    for (let i = 0; i < arr.length; i++) {
        await arr[i]();
    }
}

autoClick();
