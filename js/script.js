

function showresult() {
    let numScreen = parseFloat(document.getElementById("screenInput").value);
    let listRes = document.querySelectorAll("#j-res");
    let n2 = parseFloat("2");
    let r1;
    let r2;
    let r3;
    if (!Number.isInteger(numScreen)) {
        alert("Minimální vklad 1020PLN");
        document.getElementById("j-res1").innerText = "0";
        document.getElementById("j-res2").innerText = "0";
        document.getElementById("j-res3").innerText = "0";
        for (let i = 0; i < listRes.length; i++) {
            let item = listRes[i];
            item.classList.remove("active");
        }
    } else if (Number.isInteger(numScreen) & (numScreen < 1020)) {
        alert("Minimální vklad 1020PLN");
        document.getElementById("screenInput").value = "1020";
        outRes(1020);
    } else {
        outRes();
    }


    function animateValue(id, start, end, duration) {
        let startTimestamp = null;
        let obj = document.getElementById(id);
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            obj.innerText = Math.round(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function outRes(count1 = numScreen) {
        r1 = count1 * n2;
        r2 = count1 * n2 * 7;
        r3 = count1 * n2 * 30;
        
        animateValue("j-res1", 0, r1, 200);
        animateValue("j-res2", 0, r2, 360);
        animateValue("j-res3", 0, r3, 750);
        for (let i = 0; i < listRes.length; i++) {
            let item = listRes[i];
            item.classList.add("active");
        }
    }
}