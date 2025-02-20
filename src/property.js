import lantern from '@/assets/ornament/lanterns.webp';
import background_mosque from '@/assets/ornament/background-mosque.jpg';
import background_candle from '@/assets/ornament/background-candle.jpg';
import background_cloud from '@/assets/ornament/background-cloud.jpg';
import ornament from '@/assets/ornament/ornaments.webp';
import kids from '@/assets/ornament/kid_muslim.webp';
import muslimWoman1 from '@/assets/muslim_woman_1.webp';
import muslimWoman2 from '@/assets/muslim_woman_2.webp';
import muslimWoman3 from '@/assets/muslim_woman_3.webp';
import muslimWoman4 from '@/assets/muslim_woman_4.webp';
import muslimWoman5 from '@/assets/muslim_woman_5.webp';

const props = {
  pages: {
   login: {
    images: {
     background_cloud: {
      image: background_cloud,
      position: 'left',
       space: ['0'],
       bottom: ['0']
     },
     lantern: {
      image: lantern,
      position: 'left',
       space: ['140'],
       top: ['-20']
     },
     background_mosque: {
      image: background_mosque,
      position: 'left',
       space: ['0'],
       bottom: ['0']
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
   reminder: {
    button: {
     title: ['Selanjutnya', 'Filter'],
     icons: ['arrow-forward-circle', 'list']
    }
   },
   motivasi: {
    button: {
     title: ['Selanjutnya', 'Buka Surah'],
     icons: ['arrow-forward-circle', 'arrow-back-circle']
    },
    data: {
     attribute: {
      0: ' ',
      1: ' ',
      2: 'Artinya : ',
      3: 'Sumber : ',
      4: 'Maksud dan inti dari surah yang di sebutkan diatas adalah :',
     },
     classes: {
      0: 'text text-arab',
      1: 'text text-arti',
      2: 'text box-text text-arti',
      3: 'text nm-txt',
      4: 'text box-text',
     }
    }
   },
   surah: {
    button: {
     title: ['Selanjutnya', 'sebelumnya'],
     icons: ['arrow-forward-circle', 'arrow-back-circle']
    },
    data: {
     attribute: {
      0: ' ',
      1: ' ',
      2: 'Artinya : ',
      3: 'Sumber : ',
      4: 'Maksud dan inti dari hadist yang di sebutkan diatas adalah :',
     },
     classes: {
      0: 'text text-arab',
      1: 'text text-arti',
      2: 'text text-info',
      3: 'text text-surah',
      4: 'text text-asma',
      5: 'text text-surah-pendek',
     }
    }
   }
  },
  datas: {
   activity: [
    '🚴‍♀️ Bersepeda',
    '🍳 Memasak',
    '💌 Chatting',
    '🙍 Ngelamun',
    '💤 Tidur',
    '🍽️ Makan',
    '📚 Membaca Buku',
    '👨‍💻 Coding',
    '🎬 Menonton Film',
    '📸 Fotografi',
    '🏊‍♂️ Berenang',
    '🏃‍♂️ Jogging',
    '🌱 Berkebun',
    '👩‍❤️‍👨 Nonton Drakor',
    '🎧 Mendengarkan Musik',
    '🧵 Menjahit',
    '🎨 Melukis',
    '🎸 Bermain Gitar',
    '✍️ Menulis',
    '🖍️ Menggambar',
    '🧶 Menyulam',
    '🎹 Bermain Piano',
    '🎣 Memancing',
    '⚽ Bermain Sepak Bola',
    '🏀 Basket',
    '⛰️ Mendaki Gunung',
    '🏸 Bermain Bulutangkis',
    '🧑‍🎨 Membuat Kerajinan',
    '🧘‍♂️ Yoga',
    '🛹 Bermain Skateboard',
    '♟️ Main Catur',
    '💃 Menari',
    '🎾 Bermain Tenis',
    '🏐 Bermain Voli',
    '📒 Membaca Novel',
    '📝 Menulis',
    '🥁 Main Drum',
    '🗣️ Belajar Bahasa',
    '🎤 Menyanyi',
    '🎮 Bermain Game',
    '🧶 Merajut',
    '🍰 Membuat Kue',
    '🎞️ Mengedit Video',
    '🎻 Bermain Biola',
    '🛍️ Belanja',
    '🧩 Menyusun Puzzle',
    '🏕️ Berkemah',
    '🐾 Memelihara Hewan',
    '🧘 Melakukan Meditasi',
    '🥾 Mendaki',
    '🎭 Menonton Teater',
    '🤿 Menyelam',
    '🏄‍♂️ Berselancar',
    '📹 Membuat Vlog',
    '⛸️ Bermain Sepatu Roda',
    '🏸 Bermain Badminton',
    '💪 Melakukan Crossfit',
    '🎨 Melukis Kaca',
    '🎧 Menonton Podcast',
    '⚽ Bermain Futsal',
    '🔨 Memahat Kayu',
    '🏌️‍♂️ Bermain Golf',
    '📮 Mengumpulkan Prangko',
    '📒 Membuat Scrapbook',
    '🧵 Menjahit Pakaian',
    '🏋️‍♂️ Berolahraga',
    '🥏 Bermain Frisbee',
    '🧱 Menyusun Lego',
    '🧩 Bermain Rubik',
    '🎮 Bermain E-Sport',
    '🛼 Bermain Rollerblade',
    '🏓 Bermain Tenis Meja',
    '📖 Membaca Komik',
    '🧍‍♂️ Action Figure',
    '🪙 Mengumpulkan Koin',
    '⛵ Bermain Kapal Layar',
    '🎤 Bernyanyi',
    '🧵 Menyulam Manik-Manik',
    '🎶 Menonton Opera',
    '🏛️ Mengunjungi Museum',
    '🏁 Menonton Balapan',
    '🎙️ Membuat Podcast',
    '🎸 Konser Musik',
    '📝 Menulis Puisi',
    '🐦 Mengamati Burung',
    '📺 Menonton Kartun',
    '📖 Menulis Cerita',
    '🎨 Melukis Kain',
    '🗿 Membuat Patung',
    '🥎 Bermain Softball',
    '🌱 Membuat Taman',
    '🍂 Membuat Kompos',
    '📷 Belajar Fotografi',
    '🎥 Membuat Video TikTok',
    '🍳 Mencoba Resep Baru',
    '🔫 Bermain Airsoft Gun',
    '🎯 Bermain Paintball',
    '🏃‍♂️ Lomba Lari',
    '🏐 Bermain Petanque',
    '♻️ Mendaur Ulang Barang Bekas',
    '🐟 Memelihara Ikan',
    '🏔️ Mendaki Bukit',
    '🏓 Bermain Pingpong',
    '📜 Menyusun Origami',
    '🪁 Bermain Layang-Layang',
    '🎨 Membuat Keramik',
    '🏒 Bermain Hoki',
    '✍️ Menulis Blog',
    '💃 Menari Salsa',
    '🎼 Bermain Harmonica',
    '🔔 Bermain Kendama',
    '🎤 Menonton Stand-Up Comedy',
    '🃏 Bermain Kartu',
    '🧵 Menjahit Kain Perca',
    '🎬 Membuat Video Animasi',
    '📐 Membuat Model 3D',
    '🥁 Bermain Kendang',
    '🎲 Bermain Ludo',
    '🧼 Membuat Sabun',
    '⚾ Bermain Bola Kasti',
    '🥋 Berlatih Bela Diri',
    '📓 Menulis Jurnal',
    '⚽ Bermain Sepak Bola',
    '🏃‍♀️ Lomba Maraton',
    '🏹 Bermain Panahan',
    '💎 Menyusun Batu Akik',
    '🎩 Menonton Sulap',
    '🎧 Musik Elektronik',
    '📖 Membaca Novel',
    '🌿 Membuat Terarium',
    '👜 Menjahit Tas Kain',
    '🖥️ Belajar Seni Digital',
    '🖼️ Menyusun Mozaik',
    '🎱 Bermain Biliard',
    '🎮 Kompetisi E-Sport',
    '📚 Menulis Resensi Buku',
    '🤽‍♂️ Bermain Polo Air',
    '📜 Berpetulang',
    '🦊 Belajar Origami',
    '🧿 Bermain Kelereng',
   ]
  },
  component: {
   sidebar: {
    path: [
     '/home/hadits',
     '/home/reminder',
     '/home/motivasi',
     '/home/surah',
     '/home/odos',
    ],
    button: {
     icons: ['person', 'home', 'globe'],
     title: ['hadits', 'reminder', 'motivasi', 'surah', 'odos']
    }
   },
   navbar: {
    button: {
     icons: ['person', 'home', 'globe', 'settings'],
     title: ['hadits', 'reminder', 'surah', 'odos']
    }
   }
  }
}



export default props