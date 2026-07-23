function orderWhatsApp(productName) {
    // Yahan apna WhatsApp number daalein (With Country Code '91')
    var phoneNumber = "919653376680"; 
    var message = "Hello Malik Slippers, main '" + productName + "' khareedna chahta/chahti hoon. Details share karein.";
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}
