function hitungBMI() {
    const beratBadan = parseFloat(document.getElementById('beratBadan').value);
    const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value) / 100;
    const usia = parseInt(document.getElementById('usia').value);
    
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || isNaN(usia)) {
        alert("Mohon isi semua bidang dengan benar.");
        return;
    }
    
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
    let kategori = "";
    let penjelasan = "";

    if (bmi < 18.5) {
        kategori = "Berat Badan Kurang";
        penjelasan = "Anda memiliki berat badan kurang. Disarankan untuk meningkatkan asupan kalori dan nutrisi.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = "Berat Badan Normal";
        penjelasan = "Anda memiliki berat badan normal. Pertahankan pola hidup sehat Anda.";
    } else if (bmi >= 25 && bmi < 29.9) {
        kategori = "Berat Badan Lebih";
        penjelasan = "Anda memiliki berat badan berlebih. Disarankan untuk mengontrol asupan kalori dan rutin berolahraga.";
    } else {
        kategori = "Obesitas";
        penjelasan = "Anda mengalami obesitas. Disarankan untuk konsultasi dengan dokter atau ahli gizi untuk mendapatkan saran yang tepat.";
    }

    document.getElementById('kategoriBMI').innerText = kategori;
    document.getElementById('bmiValue').innerText = bmi.toFixed(1);
    document.getElementById('bmiExplanation').innerText = penjelasan;
    
    document.getElementById('hasilBMIContainer').style.display = 'block';
}
