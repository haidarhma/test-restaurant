// دالة لفتح النافذة المنبثقة وتعبئة بيانات الوجبة المحددة
function openPopup(name, price, imgSrc, ingredients) {

    // جلب عناصر الـ Popup من الصفحة
    const popup = document.getElementById('meal-popup');
    const popupTitle = document.getElementById('popup-title');
    const popupPrice = document.getElementById('popup-price');
    const popupImg = document.getElementById('popup-img');
    const popupIngredients = document.getElementById('popup-ingredients');

    // إدخال القيم المستلمة من الكارد إلى داخل الـ Popup
    popupTitle.innerText = name;
    popupPrice.innerText = price;
    popupImg.src = imgSrc;
    popupIngredients.innerText = ingredients;

    // إضافة كلاس active لإظهار النافذة
    popup.classList.add('active');
}


// دالة لإغلاق النافذة المنبثقة
function closePopup() {
    const popup = document.getElementById('meal-popup');

    // إزالة كلاس active لإخفاء النافذة
    popup.classList.remove('active');
}


// استماع لحدث الضغط في أي مكان على الشاشة
window.addEventListener('click', function(event) {

    const popup = document.getElementById('meal-popup');

    // إذا ضغط المستخدم على الخلفية السوداء
    if (event.target === popup) {
        closePopup();
    }
});

