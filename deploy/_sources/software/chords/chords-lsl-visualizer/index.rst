.. _chords-lsl-visualizer:

Chords-LSL-Visualizer
######################

Ringkasan
********

**Chords-LSL-Visualizer** adalah aplikasi grafis open-source berbasis Rust untuk memvisualisasikan sinyal bio-potensial yang di-streaming melalui **Lab Streaming Layer (LSL)** untuk Chords.  
Ini dirancang untuk bekerja secara mulus dengan perangkat keras yang kompatibel dengan Chords (seperti **Neuro Playground Lite** atau perangkat **BioAmp lainnya yang menjalankan firmware Chords**) dengan berlangganan ke stream LSL mereka dan merender sinyal bio-potensial langsung dalam GUI interaktif.

Dengan Chords-LSL-Visualizer, Anda dapat:

- **Menemukan stream LSL yang tersedia** dari perangkat keras yang terhubung.  
- **Memvisualisasikan sinyal ExG multi-channel** (EEG, EMG, ECG, dll.) secara real-time.  
- **Menerapkan filter** ke data langsung untuk pengamatan sinyal yang lebih bersih.  
- **Memilih jumlah channel** yang ingin Anda visualisasikan.  
- **Kompatibilitas lintas platform**: Windows, macOS, dan Linux.  


.. figure:: ./media/chords-lsl-visualizer-landing-page.*
    :align: center
    :alt: Chords-LSL-visualizer Landing Page

    Chords-LSL-Visualizer
  
Apa itu Lab Streaming Layer (LSL)?
------------------------------------

Lab Streaming Layer (LSL) adalah protokol open-source dan framework perangkat lunak untuk streaming data yang disinkronkan waktu secara real-time, terutama dalam eksperimen neuroscience dan biomedis.

LSL adalah ekosistem middleware jaringan open-source untuk streaming, menerima, menyinkronkan, dan merekam stream data neural, fisiologis, dan perilaku yang diperoleh dari berbagai perangkat keras sensor.

Untuk mengetahui lebih lanjut tentang LSL `klik di sini <https://labstreaminglayer.org/#/>`_.


Persyaratan Sistem
*********************

- Sistem Operasi: Windows 10+ / macOS 10.15+ / Linux (glibc 2.27+)  
- :ref:`Chords LSL Connector<chords-lsl-connector>` menjalankan firmware yang diaktifkan LSL (misalnya, Neuro Playground Lite).  

Persyaratan Perangkat Keras
*********************

- :ref:`Papan Neuro PlayGround Lite <neuro-play-ground-lite>`.
- Kabel USB type-C
- Atau repositori firmware Chords Arduino di `Chords Arduino Firmware GitHub <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_.

Menyiapkan perangkat keras
***********************

Buat semua koneksi sesuai dengan perangkat keras yang Anda gunakan, termasuk koneksi sensor dengan papan pengembangan, koneksi tubuh dengan sensor, dan koneksi dari papan pengembangan ke laptop Anda.


Instalasi
******************

1. Unduh **installer** dari rilis terbaru: `Chords LSL Visualizer Release <https://github.com/upsidedownlabs/Chords-LSL-Visualizer/releases>`_

2. Pilih installer untuk OS Anda:  
   
   - Fedora → ``.rpm``  
   - Debian/Ubuntu → ``.deb``  
   - macOS → ``.dmg``  
   - Windows → ``.msi``  
   - Atau unduh **paket sumber** untuk membangun sendiri  

3. Jalankan installer untuk **OS Anda**:

.. dropdown:: **Windows (.msi)** 
  :open: 

  1.  Klik ganda file `.msi` yang diunduh.  
  2.  Jika Anda melihat peringatan SmartScreen, klik **More Info** → **Run Anyway**.  
  3.  Lanjutkan melalui wizard installer: **Next** → pilih lokasi instal → **Install** → **Finish**.


.. dropdown:: **Fedora (.rpm)**  

    1. Buka terminal dan jalankan:  
    
    .. code:: 
      
      sudo dnf install Chords.LSL.Visualizer-0.1.0-1.x86_64.rpm
    
    2. Masukkan kata sandi Anda dan konfirmasi instal saat diminta.  
    3. Setelah instalasi, luncurkan **Chords LSL Visualizer** dari menu Applications Anda.

.. dropdown:: **Debian/Ubuntu (.deb)**  

  1. Buka terminal dan jalankan:  
  
  .. code:: 
    
    sudo apt install ./Chords.LSL.Visualizer_<version>_amd64.deb
  
  2. Jika Anda menemukan dependensi yang hilang, jalankan:  
  
  .. code:: 
    
    sudo apt --fix-broken install  
  
  3. Luncurkan **Chords LSL Visualizer**

  .. code:: 
   
    chords-lsl-visualizer

.. dropdown:: **macOS (.dmg)**  

  1. Klik ganda file `Chords.LSL.Visualizer.<version>.dmg` yang diunduh.  
  2. Ketika Anda melihat peringatan macOS:
  3. "Chords.LSL.Visualizer.<version>.dmg” diunduh dari Internet.
      
  ``Apakah Anda yakin ingin membukanya?``

  ``klik **Open**``

  4. Seret **Chords LSL Visualizer.app** ke folder **Applications** Anda.  
  5. Keluarkan image yang dipasang dan buka aplikasi dari **Applications**.


4. (Opsional) Bangun dari sumber 
   
.. code-block:: bash
  
  git clone https://github.com/upsidedownlabs/Chords-LSL-Visualizer.git
  cd Chords-LSL-Visualizer
  npm i
  cargo tauri build

.. _chords-lsl-visualizer-flashing-firmware:

Mem-flash Firmware
**********************

- Untuk mem-flash firmware: Gunakan `NPG Lite Flasher <https://github.com/upsidedownlabs/NPG-Lite-Flasher>`_ untuk mem-flash firmware yang diinginkan, untuk mengetahui lebih lanjut kunjungi :ref:`dokumentasi NPG Lite Flasher <npg-lite-flasher>`.

Visualisasi LSL
************************

Setelah diinstal, ikuti langkah-langkah ini untuk mulai memvisualisasikan sinyal bio-potensial Anda:

1. **Mulai Chords-LSL-Visualizer** dan klik **Scan LSL Stream**.  
   Ini memindai stream LSL aktif yang disiarkan oleh :ref:`Chords LSL Connector<chords-lsl-connector>` atau firmware kompatibel Anda.  

   .. figure:: ./media/chords-lsl-visualizer-scan.*
      :align: center
      :alt: Scan LSL Stream  

2. **Klik Refresh** untuk memperbarui daftar stream yang tersedia.  

   .. figure:: ./media/chords-lsl-visualizer-device-refresh.*
      :align: center
      :alt: Select LSL Stream  


3. **Pilih perangkat Anda** dari daftar dan tekan **Visualize**.  


   .. figure:: ./media/chords-lsl-visualizer-device-select.*
      :align: center
      :alt: Select LSL Stream  


4. Setelah stream dimulai, pilih **opsi filter** Anda (misalnya, 50Hz, 60Hz) sesuai dengan wilayah Anda.  

   .. figure:: ./media/chords-lsl-visualizer-filters-1.*
      :align: center
      :alt: Apply Filters 1

   .. figure:: ./media/chords-lsl-visualizer-filters-2.*
      :align: center
      :alt: Apply Filters 2

5. Dari **Settings**, pilih **jumlah channel** yang ingin Anda visualisasikan.  

   .. figure:: ./media/chords-lsl-visualizer-channels.*
      :align: center
      :alt: Channel Selection  

6. Mulai **visualisasi real-time** sinyal ExG Anda.  

   .. figure:: ./media/chords-lsl-visualizer-visualisation.*
      :align: center
      :alt: Real-time Signal Visualisation  

Repositori GitHub
*******************

Untuk kode sumber lengkap, pelacakan masalah, dan panduan kontribusi, kunjungi repositori GitHub Chords-LSL-Visualizer.

Anda akan menemukan panduan setup dan dapat melacak pengembangan berkelanjutan - termasuk perbaikan bug dan peningkatan fitur: `Chords LSL Visualizer GitHub <https://github.com/upsidedownlabs/Chords-LSL-Visualizer>`_