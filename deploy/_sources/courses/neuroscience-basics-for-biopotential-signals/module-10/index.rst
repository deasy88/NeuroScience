.. _neuroscience-basics-for-biopotential-signals-module-10:

Module 10 : EOG
#############################################

- **Terminologi Dasar**

  1. **Elektrookulografi (Electrooculography)** : Teknik untuk mengukur aktivitas listrik mata.
  2. **Elektrookulograf (Electrooculograph)** : Perangkat untuk mengukur aktivitas listrik mata.
  3. **Elektrookulogram (Electrooculogram)** : Representasi grafis dari aktivitas listrik mata.

.. todo:: Tambahkan tautan sejarah EOG

10.1 Pendahuluan
**********************

Elektrookulografi (EOG) adalah teknik elektrofisiologi non-invasif yang digunakan untuk merekam aktivitas listrik
yang dihasilkan oleh pergerakan mata. Metode ini paling umum digunakan untuk menilai fungsi retina,
khususnya **Retinal Pigment Epithelium (RPE)**.

**Rentang frekuensi EOG : 0,1 hingga 20 Hz** [1]_

10.2 Prinsip Dasar
***********************

Prinsip dasar EOG didasarkan pada fakta bahwa mata manusia bertindak sebagai sebuah dipol listrik,
di mana kornea (bagian depan mata) bermuatan positif dan retina (bagian belakang mata) bermuatan negatif.
Hal ini menghasilkan potensial tetap korneo-retina dengan nilai berkisar antara 2 mV hingga 10 mV,
dengan nilai tipikal sekitar 5–6 mV pada manusia.

10.3 Cara Kerja
************************

10.3.1 Penempatan Elektroda
====================================

Pada EOG, elektroda permukaan ditempatkan pada kulit di sekitar mata untuk menangkap aktivitas listrik
yang berkaitan dengan pergerakan mata dengan cara berikut:

- **EOG Horizontal** : Elektroda diposisikan di kanthus luar (sudut) kedua mata untuk mendeteksi
  pergerakan mata ke kiri dan kanan.
- **EOG Vertikal** : Elektroda ditempatkan di atas dan di bawah satu mata untuk mendeteksi
  pergerakan ke atas, ke bawah, serta kedipan mata.

10.3.2 Deteksi Sinyal
=============================

Mata manusia bertindak sebagai dipol listrik, dengan kornea bermuatan positif relatif terhadap retina.
Ketika mata bergerak, orientasi dipol ini berubah dan menghasilkan perbedaan tegangan yang dapat diukur
oleh elektroda. Perubahan tegangan ini berkaitan dengan pergerakan mata seperti saccade, smooth pursuit,
dan kedipan mata, serta direkam sebagai sinyal EOG.

10.3.3 Penguatan dan Penyaringan Sinyal
================================================

Sinyal EOG merupakan sinyal bioelektrik dengan amplitudo rendah, umumnya diukur dalam satuan mikrovolt
hingga milivolt. Oleh karena itu, sinyal terlebih dahulu diperkuat agar sesuai untuk akuisisi digital.
Selanjutnya, dilakukan penyaringan untuk menghilangkan gangguan yang tidak diinginkan seperti:

**Perangkat keras Upside Down Labs yang kompatibel untuk akuisisi dan pemrosesan sinyal EOG:**

- :ref:`Neuro PlayGround Lite <neuro-play-ground-lite>`
- :ref:`Bioamp EXG Pill <bioamp-exg-pill>`

Kami menyediakan perangkat lunak **open source** :ref:`Chords <upsidedownlabs_software_home>` dengan fitur
visualisasi sinyal, perekaman data (opsi simpan dan unduh yang mudah), plotting berbasis waktu,
serta analisis frekuensi dan bandpower.

10.4 Aplikasi EOG
*******************************

10.4.1 Aplikasi Klinis
======================================

1. Oftalmologi dan Neurologi
------------------------------------------

- Digunakan untuk menilai fungsi retinal pigment epithelium (RPE) dalam mendeteksi penyakit seperti
  **Best vitelliform macular dystrophy** dan makulopati lainnya. [2]_
- Digunakan dalam diagnosis dan pemantauan gangguan pergerakan mata seperti nistagmus,
  kelainan saccade, dan kelumpuhan saraf motorik okular.

2. Kedokteran Tidur
--------------------------------

- Digunakan dalam evaluasi gangguan tidur (seperti narkolepsi, sleep apnea, dan parasomnia)
  melalui penentuan tahap tidur pada polisomnografi, khususnya untuk mengamati fase
  **REM (Rapid Eye Movement)** yang berkaitan dengan mimpi saat tidur.

10.4.2 Interaksi Manusia–Komputer (HCI)
=======================================

1. Pemasaran dan Periklanan
---------------------------------------

Pelacakan mata berbasis EOG digunakan dalam riset pemasaran untuk menganalisis perilaku konsumen,
misalnya bagian iklan atau situs web yang paling menarik perhatian.

2. Pelacakan Tatapan (Gaze Tracking)
-------------------------------------

EOG merupakan bagian dari sistem pelacakan tatapan dalam HCI untuk memahami ke mana seseorang melihat
pada sebuah layar. Teknologi ini digunakan dalam antarmuka pengguna yang lebih intuitif serta aplikasi
realitas virtual (VR), gim, dan media interaktif.

10.4.3 Teknologi Asistif
===================================

1. Alat Bantu Komunikasi
---------------------------------

EOG banyak digunakan dalam teknologi asistif bagi individu dengan disabilitas berat
(misalnya **locked-in syndrome**). Metode ini memungkinkan komunikasi melalui deteksi
gerakan mata untuk memilih huruf, kata, atau simbol di layar.

2. Sistem Kendali
------------------------------------

Pergerakan mata yang direkam oleh EOG dapat diintegrasikan ke dalam sistem kendali berbagai perangkat,
seperti kursi roda atau komputer, untuk membantu individu dengan keterbatasan mobilitas.

10.4.4 Pemantauan Pengemudi Menggunakan Pelacakan Mata
===============================================================

EOG digunakan dalam sistem otomotif untuk memantau tingkat perhatian pengemudi, mendeteksi tanda-tanda
kelelahan atau kantuk, serta menilai tingkat fokus. Dengan menganalisis pergerakan mata,
sistem dapat mengidentifikasi penurunan konsentrasi dan memberikan peringatan atau
menyesuaikan fitur keselamatan kendaraan.

Proyek Menggunakan EOG
==========================

Anda dapat memanfaatkan perangkat keras BioAmp kami untuk membuat berbagai aplikasi.
Beberapa contoh aplikasi ditampilkan di bawah ini:

.. grid:: 2 2 2 2
    :margin: 4 4 0 0
    :gutter: 2

    .. grid-item-card:: Mendeteksi Gerakan Mata Atas dan Bawah Menggunakan EOG
        :text-align: center
        :link: https://www.instructables.com/Tracking-UP-and-DOWN-Movements-of-Eyes-Using-EOG/

    .. grid-item-card:: Mengontrol Servo Claw Menggunakan Kedipan Mata (EOG)
        :text-align: center
        :link: https://www.instructables.com/Control-a-Servo-Claw-Using-Your-Eye-Blinks-EOG/

    .. grid-item-card:: Mengontrol Gim Dino Menggunakan Kedipan Mata (EOG)
        :text-align: center
        :link: https://www.instructables.com/Control-Dino-Game-Using-Eye-Blinks-EOG/

    .. grid-item-card:: Detektor Kantuk Menggunakan Sinyal EOG dengan BioAmp EXG Pill
        :text-align: center
        :link: https://www.instructables.com/Drowsiness-Detector-by-Detecting-EOG-Signals-Using/

    .. grid-item-card:: Visualisasi Impuls Listrik Mata (EOG) Menggunakan BioAmp EXG Pill
        :text-align: center
        :link: https://www.instructables.com/Visualizing-Electrical-Impulses-of-Eyes-EOG-Using-/

10.5 Kelebihan EOG
*********************************

- Metode non-invasif dan aman
- Resolusi temporal tinggi
- Dapat digunakan saat kelopak mata sebagian tertutup (misalnya saat tidur)
- Mendukung kontrol tanpa tangan pada aplikasi asistif dan HCI
- Efektif untuk pemantauan jangka panjang dan kontinu

10.6 Keterbatasan EOG
*****************************

1. **Presisi spasial terbatas** : Hanya menunjukkan arah gerakan mata, bukan detail gerakan kecil.
2. **Dipengaruhi noise dan interferensi** : Gerakan otot wajah, kedipan, dan gangguan listrik.
3. **Detail spasial terbatas** : Tidak menunjukkan titik pandang secara spesifik.
4. **Drift sinyal seiring waktu** : Pergeseran baseline pada perekaman jangka panjang.
5. **Ketidaknyamanan elektroda** : Penempatan di sekitar mata dapat terasa tidak nyaman.

10.7 Ringkasan
******************

Elektrookulografi merupakan teknik non-invasif yang penting untuk merekam pergerakan mata dengan
resolusi temporal tinggi. Meskipun memiliki keterbatasan dalam akurasi spasial, EOG tetap banyak
digunakan dalam diagnostik klinis, studi tidur, teknologi asistif, dan interaksi manusia–komputer
karena kesederhanaan, keamanan, dan keandalannya.

.. warning::

    **Konten ini disediakan hanya untuk tujuan pembelajaran. Selalu konsultasikan dengan tenaga medis
    profesional untuk penerapan klinis.**

10.8 Referensi
*********************

.. [1] `Banerjee A., Datta S., Pal M., Konar A., Tibarewala D. N., Janarthanan R. "Classifying electrooculogram to detect directional eye movements." Procedia Technology, Vol. 10 (2013), pp. 67–75. <https://doi.org/10.1016/j.protcy.2013.12.338>`_
.. [2] `Creel DJ. The electrooculogram. Handb Clin Neurol. 2019;160:495-499. doi:10.1016/B978-0-444-64032-1.00033-3 <https://pubmed.ncbi.nlm.nih.gov/31277871/>`_
