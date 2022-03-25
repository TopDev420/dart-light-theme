const itmes = [
    { img: "1.svg", name: "BarnBridge" },
    { img: "2.svg", name: "Synapse" },
    { img: "3.svg", name: "Scream" },
    { img: "4.svg", name: "Pawtocol" },
    { img: "5.svg", name: "Gelato Finance" },
    { img: "6.svg", name: "Alchemix" },
    { img: "7.svg", name: "Thorstarter" },
    { img: "8.svg", name: "Biswap" },
    { img: "9.svg", name: "Orca" },
    { img: "10.svg", name: "Float" },
    { img: "11.svg", name: "Inverse Finance" },
    { img: "12.svg", name: "SHIBA INU" },
    { img: "13.svg", name: "Shapeshift" },
    { img: "14.svg", name: "Frax" },
    { img: "15.svg", name: "PoolTogether" },
    { img: "16.svg", name: "KeeperDAO" },
    { img: "17.svg", name: "Beethoven-x" },
    { img: "18.svg", name: "Liquid Driver" },
    { img: "19.svg", name: "Everipedia" },
    { img: "20.svg", name: "Hundred Finance" },
    { img: "21.svg", name: "Stake DAO" },
    { img: "22.svg", name: "Spooky Finance" },
    { img: "23.svg", name: "mStable" },
    { img: "24.svg", name: "Loom Network" },
];

var list = document.getElementById('cryptoTable');

//display the names as a list
list.innerHTML = itmes.map((el) => {
    console.log("here")
    return "<div class='crypto-item'><img class='crypto-img' src='./assets/marketplace/"
        + el.img + "'></img><p class='crypto-content'>"
        + el.name + "</p></div>";
}).join("");

let themeToggler = document.getElementById('theme-toggler');

themeToggler.onclick = () => {
    if (themeToggler.classList.contains('fa-sun')) {
        themeToggler.classList.add('fa-moon');
        themeToggler.classList.remove('fa-sun');
        document.getElementById("protocolImg").src = "./assets/protocol2.png";
        document.getElementById("dashboardImg").src = "./assets/dashboard2.png";
    } else {
        themeToggler.classList.add('fa-sun');
        themeToggler.classList.remove('fa-moon');
        document.getElementById("protocolImg").src = "./assets/protocol1.png";
        document.getElementById("dashboardImg").src = "./assets/dashboard1.png";
    }

    if (themeToggler.classList.contains('fa-moon')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
};