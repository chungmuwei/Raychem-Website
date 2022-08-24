// text contents of english and chinese
let languageData = {
    "en": {
        "text": {
            // navbar
            "nav-about": "About",
            "nav-product": "Products",
            "nav-contact": "Contact",
            // language button
            "lang-button": "中文",
            // Banner
            "banner": "Raychem Co.",
            // about
            "about-title": "About",
            "about-p1": "Raychem Material Technology Co., Ltd. was found in 2011. We are a ISO9001 certificated company. Our products are Epoxy formulation products for  Electric Industry &  Electronics Industry and UV curing products for Optical-electronic Industry.",
            "iso-caption": "ISO9001 Certificate",
            // products
            "product-and-service-title": "Products",
            // products
            "product-p0": "Our expertise is to develop the tailor made formulation products with customers. We have two product ranges for different market as below:",
            "product-p1": "(1) EPOXY resin formulation products for structure adhesives、electric casting materials and electronic encapsulants.",
            "product-p2": "(2) UV acrylic resin formulation products for optical industry.",
            
            
            // "product-img1": "ADD TEXT HERE",
            // "product-img2": "ADD TEXT HERE",
            // "product-img3": "ADD TEXT HERE",
            "product-img1": "Adhesives for Seal Lead Acid Battery",

            "product-img3": "Casting Materials for Transformers",
            // services
            
            // contact
            "contact-title": "Contact",
            "tel": "Tel: +886-2-2686-5111",
            "fax": "Fax: +886-2-2685-2000",
            "email": "E-mail: js.chung@msa.hinet.net",
            "address": "Address: 4 F., No. 15-5, Changshou St., Shulin Dist., New Taipei City, Taiwan"
        }
    },
    "zh-TW": {
        "text": {
            // navbar
            "nav-about": "關於",
            "nav-product": "產品",
            "nav-contact": "聯絡資訊",
            // language button
            "lang-button": "EN",
            // Banner
            "banner": "瑞 肯 材 料",
            // about
            "about-title": "關於",
            "about-p1": "瑞肯材料科技有限公司於2011年設立，為ISO9001認證公司，主要以環氧樹脂配方產品及紫外線固化樹脂之生產及銷售為核心業務，產品之主要應用為工業用接著劑、電氣絕緣澆注材料、電子灌封材料及光電材料等。",
            "iso-caption": "ISO9001證書",
            // products & services
            "product-and-service-title": "產品",

            "product-p0": "我們的強項是跟客戶一起合作開發出符合客戶需求之配方產品，產品應用範圍廣泛，目前已下列2系列為主：",
            "product-p1": "(1) 環氧樹脂配方產品：結構接著劑、電機澆注樹脂、電子灌封樹脂。",
            "product-p2": "(2) UV固化樹脂配方產品：光學級壓克力樹脂應用於光電產業",

            "product-img1": "電池膠",

            "product-img3": "變壓器澆注材料",
            // services
            
            // contact
            "contact-title": "聯絡資訊",
            "tel": "電話：02-2686-5111",
            "fax": "傳真：02-2685-2000",
            "email": "電子郵件：js.chung@msa.hinet.net",
            "address": "地址：新北市樹林區長壽街15-5號4F"
        }
    }
}

function switchLanguage() {
    var languageButton = document.getElementById("langBtn")
    var lang = languageButton.textContent == "EN" ? "en" : "zh-TW"
    
    // console.log("Switch to " + lang)

    // Update lang attrubute
    document.documentElement.setAttribute("lang", lang);

    // Set banner font size base on its language
    var banner = document.getElementById("banner")
    if (lang == "en") {
        banner.style.fontSize = "100px"
    } else {
        banner.style.fontSize = "150px"
    }

    // Change all texts to the specified language
    document.querySelectorAll(`[text-key]`).forEach(element => {
        let key = element.getAttribute('text-key')
        if (key) {
            element.textContent = languageData[lang].text[key]
        }
    })
}