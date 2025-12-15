const tabs = document.querySelectorAll(".contact-tabs .tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // isi tetap sama → jadi tidak perlu ganti apa pun
        // cukup efek UI
    });
});