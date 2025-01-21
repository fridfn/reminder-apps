import lantern from '@/assets/ornament/lantern_2.webp';
import ornament from '@/assets/ornament/ornaments.webp';
import border from '@/assets/ornament/border.webp';
import kids from '@/assets/ornament/kid_muslim.webp';
import muslimWoman1 from '@/assets/muslim_woman_1.webp';
import muslimWoman2 from '@/assets/muslim_woman_2.webp';
import muslimWoman3 from '@/assets/muslim_woman_3.webp';
import muslimWoman4 from '@/assets/muslim_woman_4.webp';
import muslimWoman5 from '@/assets/muslim_woman_5.webp';

const props = {
  pages: {
   index: {
    images: {
     ornament: {
      image: ornament,
      position: 'right',
       space: ['0'],
       top: ['0']
     },
     border: {
      image: border,
      position: 'right',
       space: ['70'],
       top: ['300']
     },
     kids: {
      image: kids,
      position: 'right',
       space: ['110'],
       top: ['250']
     },
    }
   },
   home: {
    sidebar: {
     button: {
      icons: ['person', 'home', 'globe'],
      title: ['1', '2', '3']
     }
    },
    navbar: {
     button: {
      icons: ['person', 'home', 'globe'],
      title: ['Hadits', 'Reminder', 'Inspirasi', 'Motivasi']
     }
    },
    images: {
     lantern: {
      image: lantern,
      position: 'right',
       space: ['-25', '310'],
       top: ['145', '130']
     },
    },
    data: {
     image: [ muslimWoman1, muslimWoman2, muslimWoman3, muslimWoman4, muslimWoman5 ],
     motivation: [
      "jangan bermalas malasan yah.",
      "Teruslah berjuang, jangan menyerah.",
      "Jangan tunda, lakukan sekarang.",
      "Kerja keras pasti membuahkan hasil.",
      "Sukses dimulai dari disiplin.",
      "Setiap langkah kecil membawa perubahan.",
      "Jangan takut gagal, itu bagian dari proses.",
      "Waktu tidak menunggu siapa pun.",
      "Fokus pada tujuan, bukan hambatan.",
      "Hidup adalah pilihan, buat yang terbaik.",
      "Tetap rendah hati, walau telah tinggi.",
      "Keberanian adalah awal dari kemenangan.",
      "Kegagalan adalah guru terbaik.",
      "Tidak ada usaha yang sia-sia.",
      "Belajar dari kesalahan, jangan ulangi.",
      "Bersyukur adalah kunci kebahagiaan.",
      "Setiap hari adalah kesempatan baru.",
      "Hidup tanpa tujuan hanya membuang waktu.",
      "Mulailah dari sekarang, jangan menunggu nanti.",
      "Mimpi tanpa tindakan hanya ilusi.",
      "Jangan berhenti sebelum mencapai tujuan."
     ]
    }
   },
  }, 
  component: {
   sidebar: {
    path: [
     '/home/hadits',
     '/home/reminder',
     '/home/surah',
     '/home/odos',
    ],
    button: {
     icons: ['person', 'home', 'globe'],
     title: ['hadits', 'reminder', 'surah', 'odos']
    }
   }
  }
}



export default props