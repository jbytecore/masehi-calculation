const prompt = require('prompt-sync')();
const moment = require('moment-hijri');

moment.locale('id');

function getValidatedInput(promptMessage) {
    let inputValue;
    while (true) {
        inputValue = Number(prompt(promptMessage));
        if (!Number.isInteger(inputValue) || inputValue <= 0) {
            console.log("Input tidak valid. Harap masukkan angka bulat positif.");
        } else {
            return inputValue;
        }
    }
}

function convertGregorianToHijri() {
    console.log('====================================');
    console.log(' Konversi Tanggal Masehi ke Hijriah ');
    console.log('====================================\n');

    const gregorianDay = getValidatedInput("Masukkan Tanggal Masehi (DD) : ");
    const gregorianMonth = getValidatedInput("Masukkan Bulan Masehi (MM) : ");
    const gregorianYear = getValidatedInput("Masukkan Tahun Masehi (YYYY) : ");

    try {
        const gregorianDate = moment([gregorianYear, gregorianMonth - 1, gregorianDay]);

        if (!gregorianDate.isValid()) {
            console.error("Tanggal Masehi yang Anda masukkan tidak valid.");
            return;
        }

        const formattedGregorian = gregorianDate.format('DD MMMM YYYY');
        const formattedHijri = gregorianDate.format('iD iMMMM iYYYY [H]');

        console.log(`------------------------------`);
        console.log(`Tanggal Masehi: ${formattedGregorian}`);
        console.log(`Tanggal Hijriah: ${formattedHijri}\n`);

        console.log(`Copyright © 2025 Software Engineering. All Rights Reserved.`)

    } catch (error) {
        console.error("Terjadi kesalahan saat mengonversi tanggal:", error.message);
    }
}

convertGregorianToHijri();