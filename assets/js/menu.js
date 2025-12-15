const menuData = [
    {
        name: "Full Flavored Thai Milk Tea <br> Rock Salt Mousse",
        price: 37,
        img: "assets/img/menu-tmtrsm2.jpg",
        desc: "Thai tea with rock salt mousse.",
        category: ["thai-tea", "signature"],
        recommended: true
    },
    {
        name: "Full Flavored Thai Milk Tea <br> Thai Tea Mousse",
        price: 37,
        img: "assets/img/menu-tmtttm3.jpg",
        desc: "Thai tea with thai tea mousse.",
        category: ["thai-tea", "signature"],
        recommended: true
    },
    {
        name: "Full Flavored Thai Milk Tea",
        price: 30,
        img: "assets/img/menu-tmt1.jpg",
        desc: "",
        category: "thai-tea"
    },
    {
        name: "GAGA Overload",
        price: 25,
        img: "assets/img/menu-gagaoverload.jpeg",
        desc: "Milk Tea with GAGA Pearl, Honey Drop and Grass Jelly, and Egg Pudding.",
        category: ["milk-tea", "signature"],
        recommended: true
    },
    {
        name: "Black Honey",
        price: 23,
        img: "assets/img/menu-blackhoney.jpeg",
        desc: "Milk Tea with Honey Drop and GAGA Pearl.",
        category: "milk-tea",
        recommended: true
    },
    {
        name: "White Honey",
        price: 23,
        img: "assets/img/menu-whitehoney.jpeg",
        desc: "Milk Tea with Honey Drop and White Sago.",
        category: "milk-tea"
    },
    {
        name: "Egg Pudding Milk Tea",
        price: 23,
        img: "assets/img/menu-whitehoney.jpeg",
        desc: "",
        category: "milk-tea"
    },
    {
        name: "GAGA Milk Tea",
        price: 20,
        img: "assets/img/menu-mt1.jpg",
        desc: "",
        category: "milk-tea"
    },
    {
        name: "Salted Caramel Coffee <br> Coffee Mousse",
        price: 37,
        img: "assets/img/menu-coffee1.jpg",
        desc: "Coffe Latte with caramel and coffee mousse.",
        category: ["coffee", "signature"],
        recommended: true
    },
    {
        name: "GAGA Fusion Black Tea",
        price: 23,
        img: "assets/img/menu-bt1.jpg",
        desc: "",
        category: "black-tea"
    },
    {
        name: "Berry Black Tea",
        price: 27,
        img: "assets/img/menu-berrybt2.jpg",
        desc: "",
        category: "black-tea"
    },
    {
        name: "Pomegranate Black Tea",
        price: 27,
        img: "assets/img/menu-pomebt.jpg",
        desc: "",
        category: "black-tea"
    },
    {
        name: "Berry Milk",
        price: 30,
        img: "assets/img/menu-berrymilk.jpg",
        desc: "",
        category: "fresh-milk"
    },
    {
        name: "Overload Fresh Milk",
        price: 30,
        img: "assets/img/menu-freshmilkovl.jpg",
        desc: "Fresh Milk with GAGA Pearl, Honey Drop and Grass Jelly, and Egg Pudding.",
        category: "fresh-milk",
        recommended: true
    },
    {
        name: "Butterfly Pea Lime Mousse",
        price: 32,
        img: "assets/img/menu-freshjuicebfpj.jpg",
        desc: "",
        category: "fresh-juice"
    },
    {
        name: "Honey Lemon Lime Mousse",
        price: 32,
        img: "assets/img/menu-freshjuicellm.jpg",
        desc: "",
        category: "fresh-juice",
        recommended: true
    },
    {
        name: "Red Ruby",
        price: 27,
        img: "assets/img/menu-redruby.jpg",
        desc: "Pomegranate with Lime Jelly and Chia.",
        category: "fresh-juice"
    },
    {
        name: "Dark Chocolate",
        price: 30,
        img: "assets/img/menu-chocolate.jpg",
        desc: "",
        category: "chocolate"
    },
    {
        name: "Dark Chocolate Overload",
        price: 35,
        img: "assets/img/menu-chocolateovl.jpg",
        desc: "Dark Chocolate with GAGA Pearl, Honey Drop and Grass Jelly, and Egg Pudding.",
        category: "chocolate"
    },
    {
        name: "Dark Chocolate Choco Mousse",
        price: 37,
        img: "assets/img/menu-chocolatecm.jpg",
        desc: "",
        category: "chocolate",
        recommended: true
    },
    {
        name: "Mint Chocolate Mint Mousse",
        price: 37,
        img: "assets/img/menu-chocolatemm.jpg",
        desc: "Dark Chocolate with Mint Mousse.",
        category: "chocolate"
    },
    {
        name: "Genmai Rice Latte",
        price: 37,
        img: "assets/img/menu-genmai.jpg",
        desc: "",
        category: "green-tea"
    },
    {
        name: "Rich Hojicha Latte",
        price: 37,
        img: "assets/img/menu-hojicha.jpg",
        desc: "",
        category: "green-tea"
    },
    {
        name: "Japanese Matcha Latte",
        price: 37,
        img: "assets/img/menu-matcha.jpg",
        desc: "",
        category: "green-tea"
    },
    {
        name: "Blood Moon",
        price: 32,
        img: "assets/img/menu-bloodmoon.jpg",
        desc: "",
        category: "green-tea",
        recommended: true
    },
    {
        name: "Pomegranate Green Tea",
        price: 27,
        img: "assets/img/menu-pomegt.jpg",
        desc: "",
        category: "green-tea"
    },
    {
        name: "Berry Green Tea",
        price: 27,
        img: "assets/img/menu-berrygt.jpg",
        desc: "",
        category: "green-tea"
    },
    {
        name: "Jasmine Green Tea",
        price: 23,
        img: "assets/img/menu-jasminegt.jpg",
        desc: "",
        category: "green-tea"
    },
    {
        name: "Rich Hojicha Overload",
        price: 37,
        img: "assets/img/menu-hojichaovl.jpeg",
        desc: "",
        category: "green-tea",
        recommended: true
    },
    {
        name: "Pudding and Pearl",
        price: 37,
        img: "assets/img/menu-dessertpuddingpearl.jpg",
        desc: "",
        category: "dessert"
    },
    {
        name: "Volcano",
        price: 37,
        img: "assets/img/menu-dessertvolcano.jpg",
        desc: "",
        category: "dessert"
    },
    {
        name: "GAGALOAD",
        price: 37,
        img: "assets/img/menu-dessertgagaload.jpg",
        desc: "",
        category: "dessert"
    },
    {
        name: "Dark Drip",
        price: 37,
        img: "assets/img/menu-dessertdarkdrip.jpg",
        desc: "",
        category: "dessert"
    },
    {
        name: "Chocolate Dubai",
        price: 45,
        img: "assets/img/menu-chocolatedubai.jpg",
        desc: "Dark Chocolate Frappe with <br> Pistachio Mousse and Knafeh.",
        category: "frappe",
    },
    {
        name: "Mochi Taro Milk Tea Frappe",
        price: 37,
        img: "assets/img/menu-mochimt2.jpg",
        desc: "Frappe Milk Tea with Mochi Taro.",
        category: "frappe",
    },
    {
        name: "Mochi Taro Milk Tea Sticky Rice Pearl",
        price: 37,
        img: "assets/img/menu-mochimt1.jpg",
        desc: "Milk Tea with Mochi Taro and Sticky Rice Pearl.",
        category: "frappe",
    },
    {
        name: "Mochi Taro Thai Milk Tea",
        price: 37,
        img: "assets/img/menu-mochitt1.jpg",
        desc: "Thai Tea with Mochi Taro.",
        category: "frappe",
    }
];

// RENDER MENU
function renderMenu(category = "all") {
    const container = document.getElementById("menuItems");
    container.innerHTML = "";

    let filtered = menuData;

    if (category !== "all") {
        if (category === "recommended") {
            filtered = menuData.filter(m => m.recommended);
        } else {
            filtered = menuData.filter(m => 
                Array.isArray(m.category)
                    ? m.category.includes(category)
                    : m.category === category
            );            
        }
    }

    filtered.forEach(item => {
        container.innerHTML += `
            <div class="menu-card" onclick='openModal(${JSON.stringify(item)})'>
                <img src="${item.img}" class="menu-img">
                <div class="menu-name">${item.name}</div>
                <div class="menu-price">start at Rp ${item.price.toLocaleString()}k</div>
                <p class="menu-desc">${item.desc}</p>
            </div>
        `;
    });
}

// CATEGORY CLICK
document.querySelectorAll("#menuCategories li").forEach(li => {
    li.addEventListener("click", () => {
        document.querySelectorAll("#menuCategories li").forEach(c => c.classList.remove("active"));
        li.classList.add("active");

        renderMenu(li.dataset.category);
    });
});

// DEFAULT: SHOW ALL
renderMenu();

// Open Modal
function openModal(item) {
    document.getElementById("modalImg").src = item.img;
    document.getElementById("modalName").innerHTML = item.name;
    document.getElementById("modalPrice").innerHTML = "Rp " + item.price.toLocaleString() + "k";
    document.getElementById("modalDesc").innerHTML = item.desc;

    document.getElementById("productModal").style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("productModal").style.display = "none";
}