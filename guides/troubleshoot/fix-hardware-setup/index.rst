.. _fix-hardware-setup:

Memperbaiki setup hardware
##########################

- Pastikan bahwa pin kabel jumper terhubung dengan benar ke papan pengembangan serta ke hardware BioAmp seperti yang disebutkan dalam dokumentasi.

.. warning:: Ambil tindakan pencegahan saat menghubungkan ke daya, jika pin daya ditukar, hardware BioAmp Anda akan hangus dan menjadi tidak dapat digunakan (DIE).

- Gunakan kabel jumper yang disediakan dalam kit karena kami mengujinya secara menyeluruh sebelum mengemas semuanya. Untuk memeriksa apakah kabel jumper berfungsi dengan benar, Anda dapat melakukan `tes kontinuitas menggunakan multimeter <https://www.wikihow.com/Test-Continuity-with-a-Multimeter>`_.
- Ada kemungkinan Anda mencoba mengunggah kode ke papan pengembangan menggunakan Arduino IDE tetapi terus mendapatkan status "Uploading" selama beberapa waktu tanpa mendapatkan kesalahan apa pun. Untuk mengatasi ini, Anda dapat:
  
  - Ganti kabel USB yang menghubungkan papan pengembangan ke laptop karena beberapa kabel USB hanya dimaksudkan untuk pengisian daya tetapi mungkin tidak berfungsi sebagai USB untuk mentransfer data secara dua arah. Jadi lebih baik selalu menggunakan kabel USB yang disertakan dengan papan pengembangan itu sendiri.
  - Jika masalah masih berlanjut, Anda dapat mencoba memasukkan kabel USB ke port USB lain. Ada kemungkinan masalahnya dengan port USB Anda, jadi lebih baik mencoba menggunakan port USB lain untuk mengatasi masalah.
