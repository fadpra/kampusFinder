const daftarKampus = [
        ui = {
            id: 1,
            // ===== INSTITUTIONAL PROFILE =====
            profilSingkat: {
                nama: "Universitas Indonesia",
                motto: "Veritas, Probitas, Iustitia",
                bahasaLatin: "Kebenaran, Kejujuran, Keadilan",
                tahunBerdiri: 1849,
                kota: "Depok",
                provinsi: "Jawa Barat",
                tipe: "Negeri",
                akreditasi: "A (Unggul) dari BAN-PT",
                jumlahDosen: "7.300",
                jumlahMahasiswa: "47.000+",
                logo: "https://upload.wikimedia.org/wikipedia/id/thumb/0/0f/Makara_of_Universitas_Indonesia.svg/1200px-Makara_of_Universitas_Indonesia.svg.png" ,
                fotoKampus: "https://media.quipper.com/media/W1siZiIsIjIwMTgvMDEvMjMvMDkvMzYvMzMvNzA2ZWNhMjctZTkzZC00ZjM0LWI0NTAtNTFjNDMwNjgwOGYwLyJdLFsicCIsInRodW1iIiwiMTIwMHhcdTAwM2UiLHt9XSxbInAiLCJjb252ZXJ0IiwiLWNvbG9yc3BhY2Ugc1JHQiAtc3RyaXAiLHsiZm9ybWF0IjoianBnIn1dXQ?sha=126225ee41855297" ,
                deskripsi: "Universitas Indonesia adalah perguruan tinggi negeri terbaik di Indonesia dengan akreditasi institusi A. UI memiliki 14 fakultas yang terbagi dalam 3 rumpun ilmu.",
                ranking: {
                qsWorld: "Top 300 Dunia (2024)",
                asia: "Top 40 Asia (2024)",
                nasional: 1
                },
                luasKampus: {
                depok: "320 hektar",
                salemba: "15 hektar"
                },
                kemahasiswaan: {
                himpunan: "50+ Himpunan Mahasiswa Jurusan",
                ukm: "120+ Unit Kegiatan Mahasiswa",
                prestasi: [
                    "Juara Dunia Debat Mahasiswa 5x",
                    "Pemenang Kompetisi Bisnis ASEAN",
                    "Startup Unicorn: Gojek, Tokopedia"
                ]
                },
                fasilitas: [
                "Perpustakaan Pusat (2 juta koleksi)",
                "Rumah Sakit Pendidikan (RSUI)",
                "Laboratorium Riset Biomedis",
                "Sports Center Olimpiade",
                "Asrama Mahasiswa Kapasitas 8.000+"
                ],
                kontak: {
                alamat: "Kampus UI Depok 16424, Jawa Barat",
                telepon: "+62 21 7867222",
                email: "humas-ui@ui.ac.id",
                website: "https://www.ui.ac.id"
                },
            },

            // ===== ADMISSION DATA =====
            penerimaan: {
                jalurMasuk: [
                  {
                    nama: "SNBP",
                    deskripsi: "Seleksi Nasional Berdasarkan Prestasi (seleksi nilai rapor dan portofolio akademik)"
                  },
                  {
                    nama: "SNBT",
                    deskripsi: "Seleksi Nasional Berdasarkan Tes (ujian terstandarisasi berbasis komputer)"
                  },
                  {
                    nama: "SIMAK UI",
                    deskripsi: "Seleksi Mandiri UI (tes tertulis khusus UI dengan materi sesuai program studi)"
                  },
                  {
                    nama: "PPKB",
                    deskripsi: "Program Prestasi dan Pemerataan Kesempatan Belajar (afirmasi untuk siswa dari daerah khusus)"
                  },
                  {
                    nama: "Internasional",
                    deskripsi: "International Class Program (seleksi khusus untuk mahasiswa asing dan program berbahasa Inggris)"
                  }
                ],
                tahunData: 2024,
                totalPendaftar: "78.542",
                dayaTampungTotal: "8.192",
                catatan: [
                  "SNBP kuota minimal 20% dari daya tampung",
                  "SNBT kuota minimal 40% dari daya tampung",
                  "SIMAK UI kuota maksimal 30% dari daya tampung"
                ]
              },

            // ===== COMPLETE FACULTIES & PROGRAMS =====
            fakultasDanProdi: [
                // ===== RUMPUN ILMU KESEHATAN =====
                {rumpun: "Kesehatan",
                fakultas: [
                    {namaFakultas: "Kedokteran",
                     prodi: [
                        {namaProdi: "Kedokteran",
                        deskripsi: "Program pendidikan dokter unggulan UI dengan fasilitas rumah sakit pendidikan. Mencetak dokter kompeten berbasis evidence-based medicine.",
                        nilaiSNBP: 98.5,
                        nilaiSNBT: 845,
                        dayaTampung: 120,
                        pendaftar: 3800,
                        keketatan: "3.16%"}]
                    },

                    {namaFakultas: "Kedokteran Gigi",
                     prodi: [
                        {namaProdi: "Kedokteran Gigi",
                        deskripsi: "Program studi yang menghasilkan dokter gigi profesional dengan kompetensi klinis dan manajerial. Didukung laboratorium simulasi canggih.",
                        nilaiSNBP: 97.2,
                        nilaiSNBT: 830,
                        dayaTampung: 60,
                        pendaftar: 450,
                        keketatan: "13.33%"}]
                    },

                    {namaFakultas: "Kesehatan Masyarakat",
                     prodi: [
                        {namaProdi: "Kesehatan Masyarakat",
                        deskripsi: "Berfokus pada peningkatan kesehatan populasi melalui pendekatan preventif. Mencakup epidemiologi, kebijakan kesehatan, dan promosi kesehatan.",
                        nilaiSNBP: 92.3,
                        nilaiSNBT: 750,
                        dayaTampung: 100,
                        pendaftar: 1200,
                        keketatan: "8.33%"},

                        {namaProdi: "Kesehatan Lingkungan",
                        deskripsi: "Mempelajari hubungan antara lingkungan dan kesehatan masyarakat. Mencetak ahli dalam pengendalian faktor risiko lingkungan.",
                        nilaiSNBP: 90.8,
                        nilaiSNBT: 735,
                        dayaTampung: 80,
                        pendaftar: 950,
                        keketatan: "8.42%"}]
                    },
                ]
                },

                // ===== RUMPUN SAINS TEKNOLOGI =====
                {rumpun: "Sains dan Teknologi",
                fakultas: [
                    {namaFakultas: "Teknik",
                    prodi: [
                        {namaProdi: "Teknik Sipil",
                        deskripsi: "Mempelajari perancangan, konstruksi, dan pemeliharaan infrastruktur. Fokus pada solusi berkelanjutan untuk pembangunan nasional.",
                        nilaiSNBP: 94.3,
                        nilaiSNBT: 785,
                        dayaTampung: 150,
                        pendaftar: 3200,
                        keketatan: "4.69%"},

                        {namaProdi: "Teknik Elektro",
                        deskripsi: "Program studi yang mencakup sistem tenaga, telekomunikasi, dan kontrol otomatis. Bermitra dengan industri energi dan teknologi.",
                        nilaiSNBP: 95.8,
                        nilaiSNBT: 805,
                        dayaTampung: 180,
                        pendaftar: 4100,
                        keketatan: "4.39%"},
                    
                        {namaProdi: "Teknik Komputer",
                        deskripsi: "Program studi yang memadukan teknik elektro dan ilmu komputer untuk pengembangan sistem komputasi cerdas. Fokus pada embedded systems, IoT, dan arsitektur komputer.",
                        nilaiSNBP: 95.2,
                        nilaiSNBT: 810,
                        dayaTampung: 100,
                        pendaftar: 2800,
                        keketatan: "3.57%"},
                          
                        {namaProdi: "Teknik Mesin",
                        deskripsi: "Program unggulan UI yang menghasilkan engineer di bidang desain mekanik, energi terbarukan, dan manufaktur. Memiliki bengkel berstandar industri.",
                        nilaiSNBP: 93.8,
                        nilaiSNBT: 785,
                        dayaTampung: 140,
                        pendaftar: 2900,
                        keketatan: "4.83%"},
                          
                        {namaProdi: "Arsitektur",
                        deskripsi: "Program terbaik di Indonesia yang menggabungkan seni, teknologi, dan keberlanjutan dalam desain bangunan. Kurikulum berbasis studio desain intensif.",
                        nilaiSNBP: 96.1,
                        nilaiSNBT: 830,
                        dayaTampung: 120,
                        pendaftar: 3400,
                        keketatan: "3.53%"},

                        {namaProdi: "Teknik Industri",
                        deskripsi: "Mengoptimalkan sistem industri melalui pendekatan teknik dan manajemen. Fokus pada logistik, sistem produksi, dan ergonomi.",
                        nilaiSNBP: 94.5,
                        nilaiSNBT: 800,
                        dayaTampung: 160,
                        pendaftar: 3500,
                        keketatan: "4.57%"},
                          
                        {namaProdi: "Teknik Lingkungan",
                        deskripsi: "Mengembangkan solusi berkelanjutan untuk masalah lingkungan seperti pengolahan air limbah dan manajemen sampah. Berbasis pendekatan eco-engineering.",
                        nilaiSNBP: 92.3,
                        nilaiSNBT: 770,
                        dayaTampung: 90,
                        pendaftar: 1500,
                        keketatan: "6.00%"}
                    ]},

                    {namaFakultas: "Ilmu Komputer",
                    prodi: [
                        {namaProdi: "Ilmu Komputer",
                        deskripsi: "Berfokus pada pengembangan algoritma, kecerdasan buatan, dan sistem komputasi. Lulusannya banyak bekerja di perusahaan teknologi global.",
                        nilaiSNBP: 97.1,
                        nilaiSNBT: 835,
                        dayaTampung: 120,
                        pendaftar: 3500,
                        keketatan: "3.43%"},

                        {namaProdi: "Sistem Informasi",
                        deskripsi: "Mengintegrasikan teknologi informasi dengan kebutuhan bisnis. Kurikulum mencakup analisis data dan pengembangan sistem enterprise.",
                        nilaiSNBP: 96.4,
                        nilaiSNBT: 820,
                        dayaTampung: 100,
                        pendaftar: 2800,
                        keketatan: "3.57%"}
                    ]},

                    {namaFakultas: "Matematika dan Ilmu Pengetahuan Alam",
                        prodi: [
                          {namaProdi: "Matematika",
                            deskripsi: "Mengembangkan kemampuan analitis dalam matematika murni dan terapan. Mencakup aljabar, analisis, dan matematika komputasi.",
                            nilaiSNBP: 92.8,
                            nilaiSNBT: 770,
                            dayaTampung: 90,
                            pendaftar: 850,
                            keketatan: "10.59%"},

                          {namaProdi: "Fisika",
                            deskripsi: "Mempelajari fenomena alam melalui pendekatan eksperimental dan teoretis. Memiliki laboratorium fisika modern untuk penelitian.",
                            nilaiSNBP: 91.2,
                            nilaiSNBT: 755,
                            dayaTampung: 80,
                            pendaftar: 780,
                            keketatan: "10.26%"},
                    ]}
                ]
                },

                // ===== RUMPUN SOSIAL HUMANIORA =====
                {rumpun: "Sosial dan Humaniora",
                fakultas: [
                    {namaFakultas: "Ekonomi dan Bisnis",
                    prodi: [
                        {namaProdi: "Ilmu Ekonomi",
                        deskripsi: "Mempelajari teori ekonomi makro/mikro dan aplikasinya dalam kebijakan. Mencetak analis ekonomi untuk institusi pemerintah dan swasta.",
                        nilaiSNBP: 93.7,
                        nilaiSNBT: 780,
                        dayaTampung: 120,
                        pendaftar: 2100,
                        keketatan: "5.71%"},

                        {namaProdi: "Manajemen",
                        deskripsi: "Program unggulan UI yang menghasilkan manajer profesional di berbagai sektor industri. Kurikulum berbasis kasus bisnis aktual.",
                        nilaiSNBP: 95.2,
                        nilaiSNBT: 800,
                        dayaTampung: 150,
                        pendaftar: 3200,
                        keketatan: "4.69%"}
                    ]},
                    
                    {namaFakultas: "Ilmu Hukum",
                    prodi: [
                        {namaProdi: "Ilmu Hukum",
                        deskripsi: "Mempelajari sistem hukum Indonesia dan internasional. Mencetak sarjana hukum dengan kompetensi litigasi dan non-litigasi.",
                        nilaiSNBP: 94.1,
                        nilaiSNBT: 790,
                        dayaTampung: 200,
                        pendaftar: 3800,
                        keketatan: "5.26%"}
                    ]},

                    {namaFakultas: "Ilmu Pengetahuan Budaya",
                        prodi: [
                          {namaProdi: "Sastra Inggris",
                           deskripsi: "Mempelajari linguistik, sastra, dan budaya Inggris secara mendalam. Mempersiapkan lulusan untuk karir di bidang linguistik dan diplomasi.",
                           nilaiSNBP: 89.3,
                           nilaiSNBT: 725,
                           dayaTampung: 120,
                           pendaftar: 1500,
                           keketatan: "8.00%"},

                          {namaProdi: "Sastra Jepang",
                            deskripsi: "Program studi yang mengkaji bahasa, sastra, dan budaya Jepang secara komprehensif. Bermitra dengan universitas di Jepang untuk pertukaran mahasiswa.",
                            nilaiSNBP: 88.7,
                            nilaiSNBT: 715,
                            dayaTampung: 80,
                            pendaftar: 1100,
                            keketatan: "7.27%"},
                        
                          {namaProdi: "Sastra Indonesia",
                            deskripsi: "Mengkaji khazanah sastra Indonesia modern dan tradisional beserta perkembangan bahasanya. Mencakup studi filologi, linguistik, dan kritik sastra.",
                            nilaiSNBP: 88.4,
                            nilaiSNBT: 720,
                            dayaTampung: 110,
                            pendaftar: 1300,
                            keketatan: "8.46%"},
                              
                          {namaProdi: "Sastra Jerman",
                            deskripsi: "Program studi yang mempelajari bahasa, sastra, dan budaya Jerman secara komprehensif. Menawarkan program pertukaran dengan universitas di Jerman.",
                            nilaiSNBP: 86.7,
                            nilaiSNBT: 705,
                            dayaTampung: 70,
                            pendaftar: 900,
                            keketatan: "7.78%"},

                          {namaProdi: "Arkeologi",
                            deskripsi: "Mempelajari peninggalan budaya masa lalu melalui ekskavasi dan analisis artefak. Fokus pada arkeologi Indonesia dan Asia Tenggara.",
                            nilaiSNBP: 85.9,
                            nilaiSNBT: 695,
                            dayaTampung: 60,
                            pendaftar: 750,
                            keketatan: "8.00%"},
                              
                          {namaProdi: "Ilmu Filsafat",
                            deskripsi: "Mengembangkan kemampuan berpikir kritis melalui studi filsafat Barat dan Timur. Mencakup logika, etika, dan filsafat ilmu pengetahuan.",
                            nilaiSNBP: 84.2,
                            nilaiSNBT: 680,
                            dayaTampung: 50,
                            pendaftar: 600,
                            keketatan: "8.33%"}    
                    ]},

                    {namaFakultas: "Ilmu Sosial dan Ilmu Politik",
                        prodi: [
                          {namaProdi: "Ilmu Komunikasi",
                            deskripsi: "Mengkaji proses komunikasi dalam konteks media, organisasi, dan masyarakat. Mempersiapkan lulusan untuk karir di industri media dan public relations.",
                            nilaiSNBP: 93.1,
                            nilaiSNBT: 785,
                            dayaTampung: 180,
                            pendaftar: 3200,
                            keketatan: "5.63%"},

                          {namaProdi : "Ilmu Hubungan Internasional",
                            deskripsi: "Mempelajari dinamika politik global, diplomasi, dan kerjasama internasional. Kurikulumnya mencakup studi kawasan dan organisasi internasional.",
                            nilaiSNBP: 94.2,
                            nilaiSNBT: 790,
                            dayaTampung: 150,
                            pendaftar: 2800,
                            keketatan: "5.36%"}
                    ]},

                    {namaFakultas: "Ilmu Administrasi",
                        prodi: [
                          {namaProdi: "Administrasi Niaga",
                            deskripsi: "Berfokus pada manajemen bisnis dan administrasi perusahaan. Mempersiapkan lulusan untuk karir di bidang manajemen dan konsultasi bisnis.",
                            nilaiSNBP: 91.8,
                            nilaiSNBT: 765,
                            dayaTampung: 140,
                            pendaftar: 1900,
                            keketatan: "7.37%"},

                          {namaProdi: "Administrasi Negara",
                            deskripsi: "Mempelajari teori dan praktik administrasi publik serta kebijakan pemerintah. Mencetak profesional untuk birokrasi dan organisasi publik.",
                            nilaiSNBP: 90.5,
                            nilaiSNBT: 750,
                            dayaTampung: 130,
                            pendaftar: 1800,
                            keketatan: "7.22%"}
                    ]},
                    
                    {namaFakultas: "Psikologi",
                        prodi: [
                          {namaProdi: "Psikologi",
                            deskripsi: "Mempelajari perilaku manusia dan proses mental secara ilmiah. Mencakup psikologi klinis, industri, dan perkembangan.",
                            nilaiSNBP: 94.5,
                            nilaiSNBT: 795,
                            dayaTampung: 150,
                            pendaftar: 3500,
                            keketatan: "4.29%"}
                    ]},
                ]}
            ],
            
              // ===== GENERAL TUITION FEES =====
            biaya: {
                kategori: [
                    {nama: "UKT (Uang Kuliah Tunggal)",
                    deskripsi: "Pembayaran per semester yang sudah termasuk SPP dan biaya layanan akademik",
                    kisaran: "Rp5.000.000 - Rp35.000.000/semester",
                    ketergantungan: "Berdasarkan fakultas dan kemampuan ekonomi (ditentukan melalui BKT)"},

                    {nama: "SPP per SKS",
                    deskripsi: "Biaya satuan kredit semester untuk mahasiswa non-UKT",
                    kisaran: "Rp250.000 - Rp600.000/SKS"}
                ],
                biayaLain: [
                    {nama: "Uang Pangkal",
                    deskripsi: "Hanya untuk jalur mandiri (SIMAK UI/PPKB)",
                    kisaran: "Rp10.000.000 - Rp50.000.000 (sekali bayar)"},

                    {nama: "Asrama",
                    deskripsi: "Optional - tersedia di Kampus Depok",
                    kisaran: "Rp1.500.000 - Rp3.500.000/semester"}
                ],
                beasiswa: [
                "KIP-Kuliah (full coverage)",
                "Beasiswa UI (berprestasi/ekonomi)",
                "Beasiswa industri (contoh: Djarum, Astra)"
                ],
                catatan: [
                "Biaya program internasional 2-3x lebih tinggi",
                "Pembayaran dapat diangsur maksimal 4x per semester",
                "Biaya praktikum tertentu tidak termasuk dalam UKT"
                ]
            },
        },

        itb = {
            id: 2,
            // ===== INSTITUTIONAL PROFILE =====
            profilSingkat: {
              nama: "Institut Teknologi Bandung",
              motto: "In Harmonia Progressio",
              bahasaLatin: "Kemajuan dalam Keselarasan",
              tahunBerdiri: 1920,
              kota: "Bandung",
              provinsi: "Jawa Barat",
              status: "Perguruan Tinggi Negeri Badan Hukum",
              akreditasi: "A (Unggul) dari BAN-PT",
              jumlahDosen: "1.300+",
              jumlahMahasiswa: "20.000+",
              logo: "https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png",
              fotoKampus: "https://www.itb.ac.id/files/images/2020/09/23/itb_campus.jpg",
              deskripsi: "Institut Teknologi Bandung adalah perguruan tinggi teknik terbaik di Indonesia yang berfokus pada sains, teknologi, dan seni. ITB dikenal dengan budaya riset yang kuat dan kolaborasi industri yang erat.",
              ranking: {
                qsWorld: "Top 250 Dunia (2024)",
                asia: "Top 45 Asia (2024)",
                nasional: 3
              },
              luasKampus: {
                ganesha: "28 hektar",
                jatinangor: "45 hektar"
              },
              kemahasiswaan: {
                himpunan: "40+ Himpunan Mahasiswa Jurusan",
                ukm: "80+ Unit Kegiatan Mahasiswa",
                prestasi: [
                  "Juara Dunia Kontes Robotika 15x",
                  "Pemenang Shell Eco-marathon Asia",
                  "Startup Unicorn: Bukalapak, Traveloka"
                ]
              },
              fasilitas: [
                "Perpustakaan Pusat (1 juta koleksi)",
                "Bengkel Teknik 8.000 m²",
                "Laboratorium Nano Technology",
                "Gedung Serba Guna Campus Center",
                "Asrama Mahasiswa Kapasitas 3.000+"
              ],
              kontak: {
                alamat: "Jl. Ganesha No.10, Bandung 40132",
                telepon: "+62 22 2500935",
                email: "humas@itb.ac.id",
                website: "https://www.itb.ac.id"
              }
            },
          
            // ===== ADMISSION DATA =====
            penerimaan: {
              jalurMasuk: [
                {
                  nama: "SNBP",
                  deskripsi: "Seleksi Nasional Berdasarkan Prestasi (seleksi nilai rapor dan prestasi akademik/non-akademik)"
                },
                {
                  nama: "SNBT",
                  deskripsi: "Seleksi Nasional Berdasarkan Tes (ujian terstandarisasi berbasis komputer)"
                },
                {
                  nama: "SM-ITB",
                  deskripsi: "Seleksi Mandiri ITB (tes tertulis dan ujian keterampilan khusus ITB)"
                },
                {
                  nama: "Kemitraan",
                  deskripsi: "Program afirmasi untuk siswa dari sekolah mitra di daerah terpencil"
                },
                {
                  nama: "Internasional",
                  deskripsi: "International Undergraduate Program (IUP) untuk mahasiswa asing"
                }
              ],
              tahunData: 2024,
              totalPendaftar: "45.000",
              dayaTampungTotal: "5.500",
              catatan: [
                "SNBP kuota minimal 20% dari daya tampung",
                "SNBT kuota minimal 40% dari daya tampung",
                "SM-ITB kuota maksimal 30% dari daya tampung"
              ]
            },
          
            // ===== COMPLETE FACULTIES & PROGRAMS =====
            fakultasDanProdi: [
            // ===== SCIENCE =====
            {rumpun: "Sains",
                fakultas: [
                    {namaFakultas: "Matematika dan Ilmu Pengetahuan Alam (FMIPA)",
                     prodi: [
                        {namaProdi: "Matematika",
                         deskripsi: "Program studi matematika murni dan terapan dengan penelitian di bidang aljabar, analisis, dan matematika industri.",
                         nilaiSNBP: 96.2,
                         nilaiSNBT: 835,
                         dayaTampung: 90,
                         pendaftar: 1200,
                         keketatan: "7.5%"},
                         
                        {namaProdi: "Fisika",
                         deskripsi: "Program unggulan dengan fokus fisika material, fisika teoretik, dan instrumentasi.",
                         nilaiSNBP: 95.8,
                         nilaiSNBT: 830,
                         dayaTampung: 80,
                         pendaftar: 1100,
                         keketatan: "7.27%"},
                            
                        {namaProdi: "Astronomi",
                         deskripsi: "Satu-satunya program astronomi di Indonesia dengan observatorium Bosscha.",
                         nilaiSNBP: 94.5,
                         nilaiSNBT: 820,
                         dayaTampung: 50,
                         pendaftar: 900,
                         keketatan: "5.56%"}
                        ]}
                ]
            },
    
            // ===== ENGINEERING =====
            {rumpun: "Teknik",
             fakultas: [
                    {namaFakultas: "Sekolah Teknik Elektro dan Informatika (STEI)",
                     prodi: [
                        {namaProdi: "Teknik Elektro",
                         deskripsi: "Konsentrasi pada sistem tenaga, telekomunikasi, dan kontrol.",
                         nilaiSNBP: 98.3,
                         nilaiSNBT: 855,
                         dayaTampung: 150,
                         pendaftar: 4500,
                         keketatan: "3.33%"},
                        
                        {namaProdi: "Teknik Informatika",
                         deskripsi: "Program paling kompetitif di ITB dengan fokus AI, sistem cerdas, dan komputasi.",
                         nilaiSNBP: 99.1,
                         nilaiSNBT: 865,
                         dayaTampung: 120,
                         pendaftar: 5200,
                         keketatan: "2.31%"}
                        ]},
                    
                    {namaFakultas: "Fakultas Teknik Sipil dan Lingkungan (FTSL)",
                     prodi: [
                            {namaProdi: "Teknik Sipil",
                             deskripsi: "Program tertua di ITB dengan spesialisasi struktur, geoteknik, dan manajemen konstruksi.",
                             nilaiSNBP: 97.5,
                             nilaiSNBT: 850,
                             dayaTampung: 180,
                             pendaftar: 3800,
                             keketatan: "4.74%"},
                            
                            {namaProdi: "Teknik Lingkungan",
                             deskripsi: "Fokus pada pengelolaan lingkungan dan sumber daya air.",
                             nilaiSNBP: 95.0,
                             nilaiSNBT: 825,
                             dayaTampung: 90,
                             pendaftar: 1500,
                             keketatan: "6.0%"}
                        ]}
                ]
            },
    
            // ===== ART & DESIGN =====
            {rumpun: "Seni dan Desain",
                fakultas: [
                    {namaFakultas: "Fakultas Seni Rupa dan Desain (FSRD)",
                     prodi: [
                            {namaProdi: "Desain Produk",
                             deskripsi: "Kombinasi seni, teknologi, dan bisnis dalam perancangan produk.",
                             nilaiSNBP: 93.7,
                             nilaiSNBT: 815,
                             dayaTampung: 60,
                             pendaftar: 1100,
                             keketatan: "5.45%"},
                            
                            {namaProdi: "Kriya",
                             deskripsi: "Pengembangan kerajinan artistik berbasis material tradisional dan modern.",
                             nilaiSNBP: 92.5,
                             nilaiSNBT: 805,
                             dayaTampung: 50,
                             pendaftar: 900,
                             keketatan: "5.56%"}
                        ]}
                ]
            },
    
            // ===== BUSINESS =====
            {rumpun: "Bisnis",
             fakultas: [
                    {namaFakultas: "Sekolah Bisnis dan Manajemen (SBM)",
                     prodi: [
                            {namaProdi: "Manajemen",
                             deskripsi: "Program bisnis dengan pendekatan teknologi dan kewirausahaan.",
                             nilaiSNBP: 97.0,
                             nilaiSNBT: 845,
                             dayaTampung: 120,
                             pendaftar: 3500,
                             keketatan: "3.43%"},
                            
                            {namaProdi: "Kewirausahaan",
                             deskripsi: "Program unggulan untuk pengembangan startup teknologi.",
                             nilaiSNBP: 96.5,
                             nilaiSNBT: 840,
                             dayaTampung: 80,
                             pendaftar: 2800,
                             keketatan: "2.86%"}
                        ]}
                ]
            }
        ],
          
            // ===== GENERAL TUITION FEES =====
            biaya: {
              kategori: [
                {
                  nama: "UKT (Uang Kuliah Tunggal)",
                  deskripsi: "Pembayaran per semester yang mencakup biaya pendidikan dasar",
                  kisaran: "Rp10.000.000 - Rp30.000.000/semester",
                  ketergantungan: "Berdasarkan program studi dan kemampuan ekonomi"
                },
                {
                  nama: "SPP per SKS",
                  deskripsi: "Biaya satuan kredit semester untuk mahasiswa non-UKT",
                  kisaran: "Rp300.000 - Rp700.000/SKS"
                }
              ],
              biayaLain: [
                {
                  nama: "Uang Pangkal",
                  deskripsi: "Hanya untuk jalur mandiri (SM-ITB)",
                  kisaran: "Rp15.000.000 - Rp75.000.000 (sekali bayar)"
                },
                {
                  nama: "Asrama",
                  deskripsi: "Tersedia di Kampus Ganesha dan Jatinangor",
                  kisaran: "Rp2.000.000 - Rp4.000.000/semester"
                }
              ],
              beasiswa: [
                "KIP-Kuliah (full coverage)",
                "Beasiswa ITB (akademik/non-akademik)",
                "Beasiswa industri (contoh: Pertamina, Telkom)"
              ],
              catatan: [
                "Biaya program internasional 2.5x lebih tinggi",
                "Pembayaran dapat diangsur maksimal 5x per semester",
                "Biaya praktikum teknik lebih tinggi dibanding program lain"
              ]
            }
        },
      
        ugm = {
          id: 3,
          // ===== INSTITUTIONAL PROFILE =====
          profilSingkat: {
            nama: "Universitas Gadjah Mada",
            motto: "Mengakar Kuat, Menjulang Tinggi",
            tahunBerdiri: 1949,
            kota: "Yogyakarta",
            provinsi: "Yogyakarta",
            status: "Perguruan Tinggi Negeri Badan Hukum",
            akreditasi: "A (Unggul) dari BAN-PT",
            jumlahDosen: "2.500+",
            jumlahMahasiswa: "55.000+",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Gadjah_Mada_University_Logo.gif/250px-Gadjah_Mada_University_Logo.gif",
            fotoKampus: "https://ugm.ac.id/wp-content/uploads/2021/06/kampus-ugm.jpg",
            deskripsi: "UGM adalah universitas negeri tertua dan terluas di Indonesia dengan 18 fakultas dan berbagai pusat studi unggulan.",
            ranking: {
              qsWorld: "Top 300 Dunia (2024)",
              asia: "Top 50 Asia (2024)",
              nasional: 2
            },
            luasKampus: "360 hektar",
            kemahasiswaan: {
              himpunan: "60+ Himpunan Mahasiswa Jurusan",
              ukm: "150+ Unit Kegiatan Mahasiswa",
              prestasi: [
                "Juara Dunia Debat Mahasiswa 7x",
                "Pemenang Kompetisi Bisnis ASEAN",
                "Startup Unicorn: Jurnalisme Warga"
              ]
            },
            fasilitas: [
              "Perpustakaan Pusat (3 juta koleksi)",
              "Rumah Sakit Pendidikan (RS UGM)",
              "Laboratorium Riset Terpadu",
              "Sports Center Internasional",
              "Asrama Mahasiswa Kapasitas 10.000+"
            ],
            kontak: {
              alamat: "Bulaksumur, Sleman, Yogyakarta 55281",
              telepon: "+62 274 588688",
              email: "humas@ugm.ac.id",
              website: "https://ugm.ac.id"
            }
          },
        
          // ===== ADMISSION DATA =====
          penerimaan: {
            jalurMasuk: [
              {
                nama: "SNBP",
                deskripsi: "Seleksi Nasional Berdasarkan Prestasi (nilai rapor dan portofolio)"
              },
              {
                nama: "SNBT",
                deskripsi: "Seleksi Nasional Berdasarkan Tes (ujian terstandarisasi)"
              },
              {
                nama: "UM-UGM",
                deskripsi: "Ujian Mandiri UGM (tes tertulis khusus UGM)"
              },
              {
                nama: "PPKB",
                deskripsi: "Program Prestasi dan Pemerataan Kesempatan Belajar"
              }
            ],
            tahunData: 2024,
            totalPendaftar: "95.000",
            dayaTampungTotal: "9.500",
            catatan: [
              "SNBP kuota minimal 20%",
              "SNBT kuota minimal 40%",
              "UM-UGM kuota maksimal 30%"
            ]
          },
        
          // ===== COMPLETE FACULTIES & PROGRAMS =====
          fakultasDanProdi: [
            // ===== RUMPUN SAINS TEKNOLOGI =====
            {
              rumpun: "Sains dan Teknologi",
              fakultas: [
                // 1. FMIPA
                {
                  namaFakultas: "Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)",
                  akreditasi: "A",
                  prodi: [
                    {
                      namaProdi: "Ilmu Komputer",
                      deskripsi: "Pengembangan perangkat lunak dan sistem komputasi cerdas. Fokus pada AI dan komputasi saintifik.",
                      nilaiSNBP: 96.5,
                      nilaiSNBT: 830,
                      dayaTampung: 120,
                      pendaftar: 3400,
                      keketatan: "3.53%"
                    },
                    {
                      namaProdi: "Fisika",
                      deskripsi: "Eksplorasi fenomena alam dengan pendekatan eksperimental dan teoretis. Spesialisasi fisika material.",
                      nilaiSNBP: 92.3,
                      nilaiSNBT: 775,
                      dayaTampung: 90,
                      pendaftar: 1100,
                      keketatan: "8.18%"
                    }
                    // Add other FMIPA programs...
                  ]
                },
        
                // 2. Fakultas Teknik
                {
                  namaFakultas: "Fakultas Teknik",
                  prodi: [
                    {
                      namaProdi: "Teknik Elektro",
                      deskripsi: "Desain sistem tenaga listrik, telekomunikasi, dan kontrol otomatis. Laboratorium smart grid terbaik di Indonesia.",
                      nilaiSNBP: 95.8,
                      nilaiSNBT: 820,
                      dayaTampung: 180,
                      pendaftar: 3800,
                      keketatan: "4.74%"
                    },
                    {
                      namaProdi: "Arsitektur",
                      deskripsi: "Perancangan bangunan berkelanjutan dengan pendekatan budaya lokal. Studio desin dilengkapi teknologi BIM.",
                      nilaiSNBP: 94.7,
                      nilaiSNBT: 810,
                      dayaTampung: 140,
                      pendaftar: 2900,
                      keketatan: "4.83%"
                    }
                    // Add other Teknik programs...
                  ]
                }
              ]
            },
        
            // ===== RUMPUN KESEHATAN =====
            {
              rumpun: "Kesehatan",
              fakultas: [
                // 1. FK-KMK
                {
                  namaFakultas: "Fakultas Kedokteran, Kesehatan Masyarakat, dan Keperawatan",
                  prodi: [
                    {
                      namaProdi: "Kedokteran",
                      deskripsi: "Program pendidikan dokter dengan teaching hospital berstandar internasional. Kurikulum berbasis kompetensi.",
                      nilaiSNBP: 98.8,
                      nilaiSNBT: 860,
                      dayaTampung: 150,
                      pendaftar: 4200,
                      keketatan: "3.57%"
                    }
                    // Add other health programs...
                  ]
                }
              ]
            },
        
            // ===== RUMPUN SOSIAL HUMANIORA =====
            {
              rumpun: "Sosial dan Humaniora",
              fakultas: [
                // 1. FEB
                {
                  namaFakultas: "Fakultas Ekonomika dan Bisnis (FEB)",
                  akreditasi: "A",
                  prodi: [
                    {
                      namaProdi: "Manajemen",
                      deskripsi: "Pengembangan strategi bisnis dengan pendekatan kewirausahaan digital. Kerjasama dengan perusahaan multinasional.",
                      nilaiSNBP: 96.2,
                      nilaiSNBT: 825,
                      dayaTampung: 200,
                      pendaftar: 4500,
                      keketatan: "4.44%"
                    }
                    // Add other FEB programs...
                  ]
                },
        
                // 2. FISIPOL
                {
                  namaFakultas: "Fakultas Ilmu Sosial dan Ilmu Politik (FISIPOL)",
                  akreditasi: "A",
                  prodi: [
                    {
                      namaProdi: "Ilmu Hubungan Internasional",
                      deskripsi: "Analisis politik global dan diplomasi kontemporer. Program pertukaran dengan 50+ universitas global.",
                      nilaiSNBP: 95.5,
                      nilaiSNBT: 815,
                      dayaTampung: 150,
                      pendaftar: 3200,
                      keketatan: "4.69%"
                    }
                    // Add other FISIPOL programs...
                  ]
                }
              ]
            },
        
            // ===== RUMPUN PERTANIAN =====
            {
              rumpun: "Pertanian",
              fakultas: [
                // 1. Fakultas Pertanian
                {
                  namaFakultas: "Fakultas Pertanian",
                  prodi: [
                    {
                      namaProdi: "Agronomi",
                      deskripsi: "Pengembangan sistem pertanian berkelanjutan dengan teknologi precision farming. Kebun percobaan seluas 50 hektar.",
                      nilaiSNBP: 89.7,
                      nilaiSNBT: 730,
                      dayaTampung: 120,
                      pendaftar: 900,
                      keketatan: "13.33%"
                    }
                    // Add other agriculture programs...
                  ]
                }
              ]
            }
          ],
        
          // ===== GENERAL TUITION FEES =====
          biaya: {
            kategori: [
              {
                nama: "UKT",
                deskripsi: "Uang Kuliah Tunggal per semester",
                kisaran: "Rp5.000.000 - Rp40.000.000",
                ketergantungan: "Berdasarkan fakultas dan kemampuan ekonomi"
              }
            ],
            beasiswa: [
              "KIP-Kuliah",
              "Beasiswa UGM",
              "Beasiswa industri"
            ]
          }
        },

        unair = {
          id: 4,
          // ===== INSTITUTIONAL PROFILE =====
          profilSingkat: {
            nama: "Universitas Airlangga",
            motto: "Excellence with Morality",
            terjemahan: "Unggul dengan Moralitas",
            tahunBerdiri: 1954,
            kota: "Surabaya",
            provinsi: "Jawa Timur",
            tipe: "Negeri",
            akreditasi: "A (Unggul) dari BAN-PT",
            jumlahDosen: "2.100+",
            jumlahMahasiswa: "35.000+",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Logo-Branding-UNAIR-biru.png",
            fotoKampus: "https://fh.unair.ac.id/wp-content/uploads/revslider/home/unair-slider-4.jpg?w=640",
            deskripsi: "Universitas Airlangga adalah perguruan tinggi negeri unggulan di Indonesia Timur dengan fokus pada kesehatan, sains, dan sosial humaniora.",
            ranking: {
              qsWorld: "Top 500 Dunia (2024)",
              asia: "Top 100 Asia (2024)",
              nasional: 4
            },
            luasKampus: ["Kampus A (Rumah Sakit) - 5 hektar", "Kampus B (Fakultas) - 15 hektar", "Kampus C (Baru) - 50 hektar"],
            kemahasiswaan: {
              himpunan: "40+ Himpunan Mahasiswa Jurusan",
              ukm: "100+ Unit Kegiatan Mahasiswa",
              prestasi: [
                "Juara Dunia Debat Kedokteran",
                "Pemenang Kompetisi Farmasi ASEAN",
                "Startup Kesehatan: Alodokter"
              ]
            },
            fasilitas: [
              "Rumah Sakit Pendidikan (RS UNAIR)",
              "Laboratorium Biosafety Level 3",
              "Perpustakaan Pusat (1.5 juta koleksi)",
              "Sports Center",
              "Asrama Mahasiswa Kapasitas 3.000+"
            ],
            kontak: {
              alamat: "Kampus C Mulyorejo, Surabaya 60115",
              telepon: "+62 31 5915555",
              email: "humas@unair.ac.id",
              website: "https://unair.ac.id"
            }
          },
        
          // ===== ADMISSION DATA =====
          penerimaan: {
            jalurMasuk: [
              {
                nama: "SNBP",
                deskripsi: "Seleksi Nasional Berdasarkan Prestasi (nilai rapor dan portofolio akademik)"
              },
              {
                nama: "SNBT",
                deskripsi: "Seleksi Nasional Berdasarkan Tes (ujian terstandarisasi berbasis komputer)"
              },
              {
                nama: "SMUNAIR",
                deskripsi: "Seleksi Mandiri UNAIR (tes tertulis khusus UNAIR)"
              },
              {
                nama: "PPKB",
                deskripsi: "Program Prestasi dan Pemerataan Kesempatan Belajar"
              }
            ],
            tahunData: 2024,
            totalPendaftar: "65.000",
            dayaTampungTotal: "6.500",
            catatan: [
              "SNBP kuota minimal 20% dari daya tampung",
              "SNBT kuota minimal 40% dari daya tampung",
              "SMUNAIR kuota maksimal 30% dari daya tampung"
            ]
          },
        
          // ===== COMPLETE FACULTIES & PROGRAMS =====
          fakultasDanProdi: [
            // ===== RUMPUN KESEHATAN =====
            {
              rumpun: "Kesehatan",
              fakultas: [
                // 1. Fakultas Kedokteran
                {
                  namaFakultas: "Fakultas Kedokteran",
                  akreditasi: "A",
                  prodi: [
                    {
                      namaProdi: "Kedokteran",
                      deskripsi: "Program pendidikan dokter dengan RS Pendidikan berstandar internasional. Kurikulum berbasis kompetensi klinis.",
                      nilaiSNBP: 98.2,
                      nilaiSNBT: 840,
                      dayaTampung: 150,
                      pendaftar: 4000,
                      keketatan: "3.75%"
                    },
                    {
                      namaProdi: "Kedokteran Gigi",
                      deskripsi: "Pendidikan dokter gigi dengan fasilitas klinik gigi pendidikan. Fokus pada kedokteran gigi komunitas.",
                      nilaiSNBP: 96.5,
                      nilaiSNBT: 820,
                      dayaTampung: 80,
                      pendaftar: 1200,
                      keketatan: "6.67%"
                    }
                  ]
                },
        
                // 2. Fakultas Farmasi
                {
                  namaFakultas: "Fakultas Farmasi",
                  akreditasi: "A",
                  prodi: [
                    {
                      namaProdi: "Farmasi",
                      deskripsi: "Program studi yang memadukan sains farmasi dan pelayanan kefarmasian. Laboratorium dilengkapi HPLC dan spektrofotometer.",
                      nilaiSNBP: 95.8,
                      nilaiSNBT: 810,
                      dayaTampung: 100,
                      pendaftar: 1800,
                      keketatan: "5.56%"
                    }
                  ]
                }
              ]
            },
        
            // ===== RUMPUN SAINS TEKNOLOGI =====
            {
              rumpun: "Sains dan Teknologi",
              fakultas: [
                // 1. Fakultas Sains dan Teknologi
                {
                  namaFakultas: "Fakultas Sains dan Teknologi",
                  prodi: [
                    {
                      namaProdi: "Biologi",
                      deskripsi: "Studi tentang makhluk hidup dari tingkat molekuler hingga ekosistem. Memiliki kebun botani seluas 5 hektar.",
                      nilaiSNBP: 89.5,
                      nilaiSNBT: 740,
                      dayaTampung: 90,
                      pendaftar: 800,
                      keketatan: "11.25%"
                    },
                    {
                      namaProdi: "Kimia",
                      deskripsi: "Pengembangan material baru dan analisis kimia. Laboratorium dilengkapi GC-MS dan FTIR.",
                      nilaiSNBP: 88.7,
                      nilaiSNBT: 730,
                      dayaTampung: 80,
                      pendaftar: 700,
                      keketatan: "11.43%"
                    }
                  ]
                }
              ]
            },
        
            // ===== RUMPUN SOSIAL HUMANIORA =====
            {
              rumpun: "Sosial dan Humaniora",
              fakultas: [
                // 1. Fakultas Ekonomi dan Bisnis
                {
                  namaFakultas: "Fakultas Ekonomi dan Bisnis",
                  akreditasi: "A",
                  prodi: [
                    {
                      namaProdi: "Manajemen",
                      deskripsi: "Pengembangan strategi bisnis dengan pendekatan kewirausahaan. Kerjasama dengan perusahaan multinasional.",
                      nilaiSNBP: 93.2,
                      nilaiSNBT: 790,
                      dayaTampung: 180,
                      pendaftar: 3000,
                      keketatan: "6.00%"
                    }
                  ]
                }
              ]
            }
          ],
        
          // ===== GENERAL TUITION FEES =====
          biaya: {
            kategori: [
              {
                nama: "UKT (Uang Kuliah Tunggal)",
                deskripsi: "Pembayaran per semester yang sudah termasuk SPP dan biaya layanan akademik",
                kisaran: "Rp5.000.000 - Rp30.000.000/semester",
                ketergantungan: "Berdasarkan fakultas dan kemampuan ekonomi"
              }
            ],
            biayaLain: [
              {
                nama: "Uang Pangkal",
                deskripsi: "Hanya untuk jalur mandiri (SMUNAIR)",
                kisaran: "Rp10.000.000 - Rp40.000.000 (sekali bayar)"
              }
            ],
            beasiswa: [
              "KIP-Kuliah (full coverage)",
              "Beasiswa UNAIR (akademik/non-akademik)",
              "Beasiswa industri kesehatan"
            ],
            catatan: [
              "Biaya program kedokteran lebih tinggi",
              "Pembayaran dapat diangsur maksimal 5x per semester"
            ]
          }
        },

        ub = {
          id: 5, // Next sequential ID
          // ===== INSTITUTIONAL PROFILE =====
          profilSingkat: {
            nama: "Universitas Brawijaya",
            motto: "Building Up Noble Future",
            terjemahan: "Membangun Masa Depan Mulia",
            tahunBerdiri: 1963,
            kota: "Malang",
            provinsi: "Jawa Timur",
            tipe: "Negeri",
            akreditasi: "A (Unggul) dari BAN-PT",
            jumlahDosen: "1.800+",
            jumlahMahasiswa: "40.000+",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Logo_Universitas_Brawijaya.svg/2036px-Logo_Universitas_Brawijaya.svg.png",
            deskripsi:"Universitas Brawijaya (UB) adalah sebuah perguruan tinggi negeri terkemuka yang berlokasi di Malang, Jawa Timur, Indonesia. Didirikan pada tahun 1963, UB dikenal sebagai salah satu universitas terbaik di Indonesia dengan reputasi kuat di bidang pendidikan, penelitian, dan pengabdian masyarakat. Universitas ini menawarkan beragam program studi mulai dari ekonomi, teknik, kedokteran, pertanian, hingga ilmu sosial dan humaniora. Dengan komitmen tinggi terhadap inovasi dan daya saing global, Universitas Brawijaya terus berkembang menjadi pusat keunggulan akademik yang banyak diminati mahasiswa dari berbagai daerah di Indonesia maupun mancanegara.",
            fotoKampus: "https://www.ub.ac.id/wp-content/uploads/2016/10/panorama-1280x480.jpg",
            ranking: {
              qsWorld: "Top 800 Dunia (2024)",
              asia: "Top 150 Asia (2024)",
              nasional: 5
            },
            luasKampus: ["Kampus Veteran - 120 hektar", "Kampus Dieng - 50 hektar"],
            kemahasiswaan: {
              himpunan: "45+ Himpunan Mahasiswa Jurusan",
              ukm: "110+ Unit Kegiatan Mahasiswa",
              prestasi: [
                "Juara Nasional Kontes Robotika",
                "Pemenang Kompetisi Agribisnis ASEAN",
                "Startup Unicorn: eFishery"
              ]
            },
            fasilitas: [
              "Perpustakaan Pusat (1.2 juta koleksi)",
              "Teaching Farm seluas 25 hektar",
              "Laboratorium Teknologi Pangan",
              "Sports Center",
              "Asrama Mahasiswa Kapasitas 4.000+"
            ],
            kontak: {
              alamat: "Jl. Veteran, Malang 65145, Jawa Timur",
              telepon: "+62 341 551611",
              email: "humas@ub.ac.id",
              website: "https://ub.ac.id"
            }
          },
        
          // ===== ADMISSION DATA =====
          penerimaan: {
            jalurMasuk: [
              {
                nama: "SNBP",
                deskripsi: "Seleksi Nasional Berdasarkan Prestasi (nilai rapor dan portofolio akademik)"
              },
              {
                nama: "SNBT",
                deskripsi: "Seleksi Nasional Berdasarkan Tes (ujian terstandarisasi berbasis komputer)"
              },
              {
                nama: "SMUB",
                deskripsi: "Seleksi Mandiri UB (tes tertulis khusus UB)"
              },
              {
                nama: "PPKB",
                deskripsi: "Program Prestasi dan Pemerataan Kesempatan Belajar"
              }
            ],
            tahunData: 2024,
            totalPendaftar: "70.000",
            dayaTampungTotal: "7.000",
            catatan: [
              "SNBP kuota minimal 20% dari daya tampung",
              "SNBT kuota minimal 40% dari daya tampung",
              "SMUB kuota maksimal 30% dari daya tampung"
            ]
          },
        
          // ===== COMPLETE FACULTIES & PROGRAMS =====
          fakultasDanProdi: [
            // ===== RUMPUN SAINS TEKNOLOGI =====
            {
              rumpun: "Sains dan Teknologi",
              fakultas: [
                // 1. Fakultas Teknik
                {
                  namaFakultas: "Fakultas Teknik",
                  akreditasi: "A",
                  prodi: [
                    {
                      namaProdi: "Teknik Elektro",
                      deskripsi: "Program studi yang mencakup sistem tenaga, telekomunikasi, dan kontrol otomatis. Bermitra dengan industri energi dan manufaktur.",
                      nilaiSNBP: 94.5,
                      nilaiSNBT: 800,
                      dayaTampung: 180,
                      pendaftar: 3500,
                      keketatan: "5.14%"
                    },
                    {
                      namaProdi: "Teknik Industri",
                      deskripsi: "Optimasi sistem produksi melalui pendekatan teknik dan manajemen. Fokus pada logistik dan supply chain.",
                      nilaiSNBP: 93.8,
                      nilaiSNBT: 790,
                      dayaTampung: 160,
                      pendaftar: 3000,
                      keketatan: "5.33%"
                    }
                  ]
                },
        
                // 2. Fakultas Ilmu Komputer
                {
                  namaFakultas: "Fakultas Ilmu Komputer",
                  akreditasi: "A",
                  prodi: [
                    {
                      namaProdi: "Ilmu Komputer",
                      deskripsi: "Pengembangan perangkat lunak dan sistem komputasi cerdas. Fokus pada AI dan big data analytics.",
                      nilaiSNBP: 95.2,
                      nilaiSNBT: 815,
                      dayaTampung: 120,
                      pendaftar: 2800,
                      keketatan: "4.29%"
                    }
                  ]
                }
              ]
            },
        
            // ===== RUMPUN PERTANIAN =====
            {
              rumpun: "Pertanian",
              fakultas: [
                // 1. Fakultas Pertanian
                {
                  namaFakultas: "Fakultas Pertanian",
                  akreditasi: "A",
                  prodi: [
                    {
                      namaProdi: "Agroteknologi",
                      deskripsi: "Pengembangan sistem pertanian modern dengan teknologi precision farming. Memiliki teaching farm seluas 25 hektar.",
                      nilaiSNBP: 88.3,
                      nilaiSNBT: 730,
                      dayaTampung: 150,
                      pendaftar: 1200,
                      keketatan: "12.50%"
                    },
                    {
                      namaProdi: "Agribisnis",
                      deskripsi: "Manajemen bisnis pertanian dari hulu ke hilir. Kurikulum berbasis kewirausahaan agrikultur.",
                      nilaiSNBP: 87.5,
                      nilaiSNBT: 720,
                      dayaTampung: 140,
                      pendaftar: 1100,
                      keketatan: "12.73%"
                    }
                  ]
                },
        
                // 2. Fakultas Teknologi Pertanian
                {
                  namaFakultas: "Fakultas Teknologi Pertanian",
                  prodi: [
                    {
                      namaProdi: "Teknologi Industri Pertanian",
                      deskripsi: "Transformasi hasil pertanian menjadi produk bernilai tambah. Fokus pada pengolahan pangan dan bioproses.",
                      nilaiSNBP: 89.0,
                      nilaiSNBT: 735,
                      dayaTampung: 100,
                      pendaftar: 900,
                      keketatan: "11.11%"
                    }
                  ]
                }
              ]
            },
        
            // ===== RUMPUN EKONOMI BISNIS =====
            {
              rumpun: "Ekonomi dan Bisnis",
              fakultas: [
                // 1. Fakultas Ekonomi dan Bisnis
                {
                  namaFakultas: "Fakultas Ekonomi dan Bisnis",
                  akreditasi: "A",
                  prodi: [
                    {
                      namaProdi: "Manajemen",
                      deskripsi: "Pengembangan strategi bisnis dengan pendekatan kewirausahaan digital. Kerjasama dengan perusahaan multinasional.",
                      nilaiSNBP: 92.7,
                      nilaiSNBT: 785,
                      dayaTampung: 200,
                      pendaftar: 3800,
                      keketatan: "5.26%"
                    },
                    {
                      namaProdi: "Akuntansi",
                      deskripsi: "Pembelajaran sistem informasi akuntansi dan audit berbasis teknologi. Kurikulum berstandar internasional.",
                      nilaiSNBP: 93.5,
                      nilaiSNBT: 795,
                      dayaTampung: 180,
                      pendaftar: 3500,
                      keketatan: "5.14%"
                    }
                  ]
                }
              ]
            }
          ],
        
          // ===== GENERAL TUITION FEES =====
          biaya: {
            kategori: [
              {
                nama: "UKT (Uang Kuliah Tunggal)",
                deskripsi: "Pembayaran per semester yang sudah termasuk SPP dan biaya layanan akademik",
                kisaran: "Rp4.500.000 - Rp25.000.000/semester",
                ketergantungan: "Berdasarkan fakultas dan kemampuan ekonomi"
              },
              {
                nama: "SPP per SKS",
                deskripsi: "Biaya satuan kredit semester untuk mahasiswa non-UKT",
                kisaran: "Rp200.000 - Rp500.000/SKS"
              }
            ],
            biayaLain: [
              {
                nama: "Uang Pangkal",
                deskripsi: "Hanya untuk jalur mandiri (SMUB)",
                kisaran: "Rp8.000.000 - Rp35.000.000 (sekali bayar)"
              },
              {
                nama: "Asrama",
                deskripsi: "Tersedia di Kampus Veteran",
                kisaran: "Rp1.500.000 - Rp3.000.000/semester"
              }
            ],
            beasiswa: [
              "KIP-Kuliah (full coverage)",
              "Beasiswa UB (akademik/non-akademik)",
              "Beasiswa industri agrikultur"
            ],
            catatan: [
              "Biaya program teknik 1.2x lebih tinggi",
              "Pembayaran dapat diangsur maksimal 4x per semester",
              "Biaya praktikum pertanian tidak termasuk dalam UKT"
            ]
          }
        },

        unpad = {
          id: 6,
          // ===== INSTITUTIONAL PROFILE =====
          profilSingkat: {
              nama: "Universitas Padjadjaran",
              motto: "Melayani dengan Setulus Hati",
              terjemahan: "Serving with Sincerity",
              tahunBerdiri: 1957,
              kota: "Bandung",
              provinsi: "Jawa Barat",
              tipe: "Negeri",
              akreditasi: "A (Unggul) dari BAN-PT",
              jumlahDosen: "3.200",
              jumlahMahasiswa: "45.000+",
              logo: "https://upload.wikimedia.org/wikipedia/id/thumb/8/80/Lambang_Universitas_Padjadjaran.svg/800px-Lambang_Universitas_Padjadjaran.svg.png",
              fotoKampus: "https://media.quipper.com/media/W1siZiIsIjIwMTgvMDEvMjMvMDkvNDIvNDQvNzYyNDcwYzctZGQxYy00YTc0LWE5Y2UtNWFjODA1YmEwN2I3LyJdLFsicCIsInRodW1iIiwiMTIwMHhcdTAwM2UiLHt9XSxbInAiLCJjb252ZXJ0IiwiLWNvbG9yc3BhY2Ugc1JHQiAtc3RyaXAiLHsiZm9ybWF0IjoianBnIn1dXQ?sha=b4f4972359c6b426",
              deskripsi: "Universitas Padjadjaran merupakan salah satu perguruan tinggi negeri terbaik di Indonesia yang berlokasi di Bandung dan Jatinangor, Jawa Barat. Unpad memiliki 16 fakultas dengan berbagai rumpun ilmu.",
              ranking: {
                  qsWorld: "Top 800 Dunia (2024)",
                  asia: "Top 150 Asia (2024)",
                  nasional: 5
              },
              luasKampus: ["Jatinangor - 270 hektar", "Dipati Ukur - 25 hektar"],
              kemahasiswaan: {
                  himpunan: "60+ Himpunan Mahasiswa Jurusan",
                  ukm: "100+ Unit Kegiatan Mahasiswa",
                  prestasi: [
                      "Juara Debat Mahasiswa Nasional 7x",
                      "Pemenang Kompetisi Farmasi ASEAN",
                      "Startup: eFishery (decacorn)"
                  ]
              },
              fasilitas: [
                  "Perpustakaan Pusat (1,5 juta koleksi)",
                  "Rumah Sakit Pendidikan (RS Unpad)",
                  "Laboratorium Riset Terpadu",
                  "Sport Center Internasional",
                  "Asrama Mahasiswa Kapasitas 5.000+"
              ],
              kontak: {
                  alamat: "Kampus Unpad Jatinangor, Sumedang 45363, Jawa Barat",
                  telepon: "+62 22 84288888",
                  email: "humas@unpad.ac.id",
                  website: "https://www.unpad.ac.id"
              },
          },
      
          // ===== ADMISSION DATA =====
          penerimaan: {
              jalurMasuk: [
                  {
                      nama: "SNBP",
                      deskripsi: "Seleksi Nasional Berdasarkan Prestasi (seleksi nilai rapor dan portofolio akademik)"
                  },
                  {
                      nama: "SNBT",
                      deskripsi: "Seleksi Nasional Berdasarkan Tes (ujian terstandarisasi berbasis komputer)"
                  },
                  {
                      nama: "SMUP",
                      deskripsi: "Seleksi Mandiri Unpad (tes tertulis khusus Unpad dengan materi sesuai program studi)"
                  },
                  {
                      nama: "PPKB",
                      deskripsi: "Program Perluasan Kesempatan Belajar (afirmasi untuk siswa dari daerah khusus)"
                  },
                  {
                      nama: "Internasional",
                      deskripsi: "International Undergraduate Program (seleksi khusus untuk mahasiswa asing dan program berbahasa Inggris)"
                  }
              ],
              tahunData: 2024,
              totalPendaftar: "65.000",
              dayaTampungTotal: "7.500",
              catatan: [
                  "SNBP kuota minimal 20% dari daya tampung",
                  "SNBT kuota minimal 40% dari daya tampung",
                  "SMUP kuota maksimal 30% dari daya tampung"
              ]
          },
      
          // ===== COMPLETE FACULTIES & PROGRAMS =====
          fakultasDanProdi: [
              // ===== RUMPUN ILMU KESEHATAN =====
              {rumpun: "Kesehatan",
              fakultas: [
                  {namaFakultas: "Kedokteran",
                   prodi: [
                      {namaProdi: "Kedokteran",
                      deskripsi: "Program pendidikan dokter unggulan Unpad dengan fasilitas rumah sakit pendidikan. Mencetak dokter kompeten berbasis evidence-based medicine.",
                      nilaiSNBP: 96.5,
                      nilaiSNBT: 825,
                      dayaTampung: 100,
                      pendaftar: 3500,
                      keketatan: "2.86%"}]
                  },
      
                  {namaFakultas: "Kedokteran Gigi",
                   prodi: [
                      {namaProdi: "Kedokteran Gigi",
                      deskripsi: "Program studi yang menghasilkan dokter gigi profesional dengan kompetensi klinis dan manajerial. Didukung laboratorium simulasi canggih.",
                      nilaiSNBP: 95.2,
                      nilaiSNBT: 810,
                      dayaTampung: 50,
                      pendaftar: 400,
                      keketatan: "12.50%"}]
                  },
      
                  {namaFakultas: "Farmasi",
                   prodi: [
                      {namaProdi: "Farmasi",
                      deskripsi: "Berfokus pada pengembangan obat dan produk farmasi. Mencakup farmasi klinik, industri, dan komunitas.",
                      nilaiSNBP: 94.3,
                      nilaiSNBT: 795,
                      dayaTampung: 80,
                      pendaftar: 1100,
                      keketatan: "7.27%"},
      
                      {namaProdi: "Farmasi Klinik dan Komunitas",
                      deskripsi: "Mempelajari pelayanan farmasi di rumah sakit dan komunitas. Fokus pada penggunaan obat yang rasional.",
                      nilaiSNBP: 92.8,
                      nilaiSNBT: 780,
                      dayaTampung: 60,
                      pendaftar: 850,
                      keketatan: "7.06%"}]
                  },
      
                  {namaFakultas: "Keperawatan",
                   prodi: [
                      {namaProdi: "Ilmu Keperawatan",
                      deskripsi: "Mencetak perawat profesional dengan kompetensi klinis dan manajerial. Berbasis praktik berbasis bukti.",
                      nilaiSNBP: 90.5,
                      nilaiSNBT: 750,
                      dayaTampung: 90,
                      pendaftar: 1000,
                      keketatan: "9.00%"}]
                  },
              ]
              },
      
              // ===== RUMPUN SAINS TEKNOLOGI =====
              {rumpun: "Sains dan Teknologi",
              fakultas: [
                  {namaFakultas: "Teknik Geologi",
                  prodi: [
                      {namaProdi: "Teknik Geologi",
                      deskripsi: "Mempelajari bumi dan sumber dayanya untuk eksplorasi mineral, minyak bumi, dan mitigasi bencana geologi.",
                      nilaiSNBP: 92.3,
                      nilaiSNBT: 775,
                      dayaTampung: 80,
                      pendaftar: 1200,
                      keketatan: "6.67%"}]
                  },
      
                  {namaFakultas: "Teknologi Industri Pertanian",
                  prodi: [
                      {namaProdi: "Teknologi Industri Pertanian",
                      deskripsi: "Mengembangkan teknologi untuk pengolahan hasil pertanian. Fokus pada rekayasa proses dan manajemen industri.",
                      nilaiSNBP: 90.8,
                      nilaiSNBT: 755,
                      dayaTampung: 90,
                      pendaftar: 1100,
                      keketatan: "8.18%"},
      
                      {namaProdi: "Teknik Pangan",
                      deskripsi: "Mempelajari pengolahan, pengawetan, dan keamanan pangan. Berbasis teknologi pangan modern.",
                      nilaiSNBP: 91.5,
                      nilaiSNBT: 765,
                      dayaTampung: 80,
                      pendaftar: 950,
                      keketatan: "8.42%"}]
                  },
      
                  {namaFakultas: "MIPA",
                      prodi: [
                        {namaProdi: "Biologi",
                          deskripsi: "Mempelajari makhluk hidup dari tingkat molekuler hingga ekosistem. Fokus pada biodiversitas tropis.",
                          nilaiSNBP: 89.3,
                          nilaiSNBT: 740,
                          dayaTampung: 70,
                          pendaftar: 800,
                          keketatan: "8.75%"},
      
                        {namaProdi: "Kimia",
                          deskripsi: "Mengkaji struktur, sifat, dan perubahan materi. Memiliki laboratorium kimia terpadu untuk penelitian.",
                          nilaiSNBP: 88.7,
                          nilaiSNBT: 735,
                          dayaTampung: 75,
                          pendaftar: 850,
                          keketatan: "8.82%"},
                  ]}
              ]
              },
      
              // ===== RUMPUN SOSIAL HUMANIORA =====
              {rumpun: "Sosial dan Humaniora",
              fakultas: [
                  {namaFakultas: "Ekonomi dan Bisnis",
                  prodi: [
                      {namaProdi: "Ekonomi Pembangunan",
                      deskripsi: "Mempelajari teori ekonomi dan aplikasinya dalam pembangunan regional dan nasional.",
                      nilaiSNBP: 91.7,
                      nilaiSNBT: 770,
                      dayaTampung: 100,
                      pendaftar: 1800,
                      keketatan: "5.56%"},
      
                      {namaProdi: "Manajemen",
                      deskripsi: "Program unggulan Unpad yang menghasilkan manajer profesional di berbagai sektor industri.",
                      nilaiSNBP: 93.2,
                      nilaiSNBT: 790,
                      dayaTampung: 120,
                      pendaftar: 2800,
                      keketatan: "4.29%"},
      
                      {namaProdi: "Akuntansi",
                      deskripsi: "Mempelajari sistem informasi akuntansi, audit, dan perpajakan. Mencetak akuntan profesional.",
                      nilaiSNBP: 94.1,
                      nilaiSNBT: 800,
                      dayaTampung: 130,
                      pendaftar: 3000,
                      keketatan: "4.33%"}
                  ]},
                  
                  {namaFakultas: "Hukum",
                  prodi: [
                      {namaProdi: "Ilmu Hukum",
                      deskripsi: "Mempelajari sistem hukum Indonesia dan internasional. Mencetak sarjana hukum dengan kompetensi litigasi dan non-litigasi.",
                      nilaiSNBP: 92.1,
                      nilaiSNBT: 785,
                      dayaTampung: 180,
                      pendaftar: 3500,
                      keketatan: "5.14%"}
                  ]},
      
                  {namaFakultas: "Ilmu Budaya",
                      prodi: [
                        {namaProdi: "Sastra Inggris",
                         deskripsi: "Mempelajari linguistik, sastra, dan budaya Inggris secara mendalam. Mempersiapkan lulusan untuk karir di bidang linguistik dan diplomasi.",
                         nilaiSNBP: 87.3,
                         nilaiSNBT: 720,
                         dayaTampung: 100,
                         pendaftar: 1300,
                         keketatan: "7.69%"},
      
                        {namaProdi: "Sastra Sunda",
                          deskripsi: "Program studi yang mengkaji bahasa, sastra, dan budaya Sunda secara komprehensif.",
                          nilaiSNBP: 85.7,
                          nilaiSNBT: 700,
                          dayaTampung: 60,
                          pendaftar: 750,
                          keketatan: "8.00%"},
                      
                        {namaProdi: "Sastra Jepang",
                          deskripsi: "Mengkaji bahasa, sastra, dan budaya Jepang. Bermitra dengan universitas di Jepang untuk pertukaran mahasiswa.",
                          nilaiSNBP: 86.4,
                          nilaiSNBT: 710,
                          dayaTampung: 70,
                          pendaftar: 900,
                          keketatan: "7.78%"},
                  ]},
      
                  {namaFakultas: "Ilmu Sosial dan Ilmu Politik",
                      prodi: [
                        {namaProdi: "Ilmu Komunikasi",
                          deskripsi: "Mengkaji proses komunikasi dalam konteks media, organisasi, dan masyarakat. Mempersiapkan lulusan untuk karir di industri media.",
                          nilaiSNBP: 91.1,
                          nilaiSNBT: 775,
                          dayaTampung: 150,
                          pendaftar: 2900,
                          keketatan: "5.17%"},
      
                        {namaProdi : "Ilmu Politik",
                          deskripsi: "Mempelajari sistem politik, pemerintahan, dan kebijakan publik. Fokus pada dinamika politik Indonesia.",
                          nilaiSNBP: 88.9,
                          nilaiSNBT: 745,
                          dayaTampung: 100,
                          pendaftar: 1500,
                          keketatan: "6.67%"},
      
                        {namaProdi: "Sosiologi",
                          deskripsi: "Mempelajari struktur sosial, perubahan sosial, dan interaksi dalam masyarakat.",
                          nilaiSNBP: 87.5,
                          nilaiSNBT: 730,
                          dayaTampung: 90,
                          pendaftar: 1200,
                          keketatan: "7.50%"}
                  ]},
      
                  {namaFakultas: "Ilmu Administrasi",
                      prodi: [
                        {namaProdi: "Administrasi Bisnis",
                          deskripsi: "Berfokus pada manajemen bisnis dan administrasi perusahaan. Mempersiapkan lulusan untuk karir di bidang manajemen.",
                          nilaiSNBP: 89.8,
                          nilaiSNBT: 760,
                          dayaTampung: 120,
                          pendaftar: 1700,
                          keketatan: "7.06%"},
      
                        {namaProdi: "Administrasi Publik",
                          deskripsi: "Mempelajari teori dan praktik administrasi publik serta kebijakan pemerintah.",
                          nilaiSNBP: 88.5,
                          nilaiSNBT: 750,
                          dayaTampung: 110,
                          pendaftar: 1600,
                          keketatan: "6.88%"}
                  ]},
                  
                  {namaFakultas: "Psikologi",
                      prodi: [
                        {namaProdi: "Psikologi",
                          deskripsi: "Mempelajari perilaku manusia dan proses mental secara ilmiah. Mencakup psikologi klinis, industri, dan perkembangan.",
                          nilaiSNBP: 92.5,
                          nilaiSNBT: 785,
                          dayaTampung: 120,
                          pendaftar: 3200,
                          keketatan: "3.75%"}
                  ]},
              ]}
          ],
          
            // ===== GENERAL TUITION FEES =====
          biaya: {
              kategori: [
                  {nama: "UKT (Uang Kuliah Tunggal)",
                  deskripsi: "Pembayaran per semester yang sudah termasuk SPP dan biaya layanan akademik",
                  kisaran: "Rp3.000.000 - Rp30.000.000/semester"},
      
                  {nama: "SPP per SKS",
                  deskripsi: "Biaya satuan kredit semester untuk mahasiswa non-UKT",
                  kisaran: "Rp200.000 - Rp550.000/SKS"}
              ],
              biayaLain: [
                  {nama: "Uang Pangkal",
                  deskripsi: "Hanya untuk jalur mandiri (SMUP/PPKB)",
                  kisaran: "Rp8.000.000 - Rp45.000.000 (sekali bayar)"},
      
                  {nama: "Asrama",
                  deskripsi: "Optional - tersedia di Kampus Jatinangor",
                  kisaran: "Rp1.200.000 - Rp3.000.000/semester"}
              ],
              beasiswa: [
              "KIP-Kuliah (full coverage)",
              "Beasiswa Unpad (berprestasi/ekonomi)",
              "Beasiswa industri (contoh: Unilever, Bank BJB)"
              ],
              catatan: [
              "Biaya program internasional 2-3x lebih tinggi"]
          }
        },

        uns = {
          id: 7,
          // ===== INSTITUTIONAL PROFILE =====
          profilSingkat: {
              nama: "Universitas Sebelas Maret",
              motto: "Mangesthi Luhur Ambangun Nagara",
              terjemahan: "Bercita-cita Luhur Membangun Negara",
              tahunBerdiri: 1976,
              kota: "Surakarta",
              provinsi: "Jawa Tengah",
              tipe: "Negeri",
              akreditasi: "A (Unggul) dari BAN-PT",
              jumlahDosen: "2.800+",
              jumlahMahasiswa: "35.000+",
              logo: "https://upload.wikimedia.org/wikipedia/id/c/cd/Logo_UNS.png",
              fotoKampus: "https://amaldoft.wordpress.com/wp-content/uploads/2018/01/universitas-sebelas-maret-2.png?w=366&h=242",
              deskripsi: "Universitas Sebelas Maret adalah perguruan tinggi negeri terkemuka di Jawa Tengah dengan fokus pada pengembangan sains, teknologi, dan seni budaya. Memiliki 11 fakultas dan multiple kampus.",
              ranking: {
                  qsWorld: "Top 1000 Dunia (2024)",
                  asia: "Top 200 Asia (2024)",
                  nasional: 8
              },
              luasKampus: ["Kentingan - 120 hektar", "Manahan - 15 hektar", "Karanganyar - 50 hektar"],
              kemahasiswaan: {
                  himpunan: "55+ Himpunan Mahasiswa Jurusan",
                  ukm: "90+ Unit Kegiatan Mahasiswa",
                  prestasi: [
                      "Juara Kompetisi Robotik ASEAN 3x",
                      "Pemenang Lomba Karya Tulis Nasional",
                      "Startup: Warung Pintar (unicorn)"
                  ]
              },
              fasilitas: [
                  "Perpustakaan Pusat (1,2 juta koleksi)",
                  "Rumah Sakit Pendidikan (UNS Hospital)",
                  "Technopark Kewirausahaan",
                  "Gelanggang Olahraga Nasional",
                  "Asrama Mahasiswa Kapasitas 3.000+"
              ],
              kontak: {
                  alamat: "Jl. Ir. Sutami 36A, Kentingan, Surakarta 57126",
                  telepon: "+62 271 663375",
                  email: "humas@uns.ac.id",
                  website: "https://www.uns.ac.id"
              },
          },
      
          // ===== ADMISSION DATA =====
          penerimaan: {
              jalurMasuk: [
                  {
                      nama: "SNBP",
                      deskripsi: "Seleksi Nasional Berdasarkan Prestasi (seleksi nilai rapor dan portofolio akademik)"
                  },
                  {
                      nama: "SNBT",
                      deskripsi: "Seleksi Nasional Berdasarkan Tes (ujian terstandarisasi berbasis komputer)"
                  },
                  {
                      nama: "SM UNS",
                      deskripsi: "Seleksi Mandiri UNS (tes tertulis khusus UNS dengan materi sesuai program studi)"
                  },
                  {
                      nama: "PPKB",
                      deskripsi: "Program Perluasan Kesempatan Belajar (afirmasi untuk siswa dari daerah 3T)"
                  }
              ],
              tahunData: 2024,
              totalPendaftar: "52.000",
              dayaTampungTotal: "6.800",
              catatan: [
                  "SNBP kuota minimal 20% dari daya tampung",
                  "SNBT kuota minimal 40% dari daya tampung",
                  "SM UNS kuota maksimal 30% dari daya tampung"
              ]
          },
      
          // ===== COMPLETE FACULTIES & PROGRAMS =====
          fakultasDanProdi: [
              // ===== RUMPUN ILMU KESEHATAN =====
              {rumpun: "Kesehatan",
              fakultas: [
                  {namaFakultas: "Kedokteran",
                   prodi: [
                      {namaProdi: "Kedokteran",
                      deskripsi: "Program pendidikan dokter dengan kurikulum berbasis kompetensi dan fasilitas RS Pendidikan.",
                      nilaiSNBP: 95.5,
                      nilaiSNBT: 815,
                      dayaTampung: 90,
                      pendaftar: 3200,
                      keketatan: "2.81%"},
      
                      {namaProdi: "Kedokteran Gigi",
                      deskripsi: "Program studi yang menghasilkan dokter gigi dengan fasilitas klinik gigi pendidikan.",
                      nilaiSNBP: 93.2,
                      nilaiSNBT: 795,
                      dayaTampung: 50,
                      pendaftar: 750,
                      keketatan: "6.67%"}]
                  },
      
                  {namaFakultas: "Kesehatan Masyarakat",
                   prodi: [
                      {namaProdi: "Kesehatan Masyarakat",
                      deskripsi: "Berfokus pada pencegahan penyakit dan promosi kesehatan masyarakat.",
                      nilaiSNBP: 90.8,
                      nilaiSNBT: 765,
                      dayaTampung: 100,
                      pendaftar: 1500,
                      keketatan: "6.67%"}]
                  },
              ]
              },
      
              // ===== RUMPUN SAINS TEKNOLOGI =====
              {rumpun: "Sains dan Teknologi",
              fakultas: [
                  {namaFakultas: "Teknik",
                  prodi: [
                      {namaProdi: "Teknik Sipil",
                      deskripsi: "Mempelajari perancangan dan konstruksi infrastruktur berkelanjutan.",
                      nilaiSNBP: 92.1,
                      nilaiSNBT: 780,
                      dayaTampung: 120,
                      pendaftar: 2500,
                      keketatan: "4.80%"},
      
                      {namaProdi: "Teknik Industri",
                      deskripsi: "Mengoptimalkan sistem produksi melalui pendekatan teknik dan manajemen.",
                      nilaiSNBP: 93.5,
                      nilaiSNBT: 790,
                      dayaTampung: 110,
                      pendaftar: 2300,
                      keketatan: "4.78%"},
      
                      {namaProdi: "Teknik Kimia",
                      deskripsi: "Berfokus pada proses industri kimia dan pengolahan bahan mentah.",
                      nilaiSNBP: 91.8,
                      nilaiSNBT: 775,
                      dayaTampung: 90,
                      pendaftar: 1800,
                      keketatan: "5.00%"}]
                  },
      
                  {namaFakultas: "MIPA",
                      prodi: [
                        {namaProdi: "Kimia",
                          deskripsi: "Mengkaji struktur materi dan reaksi kimia dengan laboratorium terakreditasi.",
                          nilaiSNBP: 88.7,
                          nilaiSNBT: 740,
                          dayaTampung: 80,
                          pendaftar: 900,
                          keketatan: "8.89%"},
      
                        {namaProdi: "Fisika",
                          deskripsi: "Mempelajari fenomena alam dengan pendekatan eksperimental dan teoretis.",
                          nilaiSNBP: 87.2,
                          nilaiSNBT: 730,
                          dayaTampung: 70,
                          pendaftar: 800,
                          keketatan: "8.75%"},
      
                        {namaProdi: "Statistika",
                          deskripsi: "Mengembangkan metode analisis data untuk berbagai bidang aplikasi.",
                          nilaiSNBP: 89.5,
                          nilaiSNBT: 750,
                          dayaTampung: 75,
                          pendaftar: 850,
                          keketatan: "8.82%"}
                  ]}
              ]
              },
      
              // ===== RUMPUN SOSIAL HUMANIORA =====
              {rumpun: "Sosial dan Humaniora",
              fakultas: [
                  {namaFakultas: "Ekonomi dan Bisnis",
                  prodi: [
                      {namaProdi: "Ekonomi Pembangunan",
                      deskripsi: "Mempelajari teori ekonomi dalam konteks pembangunan regional.",
                      nilaiSNBP: 90.3,
                      nilaiSNBT: 770,
                      dayaTampung: 100,
                      pendaftar: 1600,
                      keketatan: "6.25%"},
      
                      {namaProdi: "Manajemen",
                      deskripsi: "Program unggulan UNS yang menghasilkan manajer profesional.",
                      nilaiSNBP: 92.8,
                      nilaiSNBT: 785,
                      dayaTampung: 120,
                      pendaftar: 2500,
                      keketatan: "4.80%"},
      
                      {namaProdi: "Akuntansi",
                      deskripsi: "Mencetak akuntan profesional dengan kompetensi audit dan perpajakan.",
                      nilaiSNBP: 93.1,
                      nilaiSNBT: 790,
                      dayaTampung: 110,
                      pendaftar: 2400,
                      keketatan: "4.58%"}
                  ]},
                  
                  {namaFakultas: "Hukum",
                  prodi: [
                      {namaProdi: "Ilmu Hukum",
                      deskripsi: "Mempelajari sistem hukum Indonesia dengan pendekatan socio-legal.",
                      nilaiSNBP: 91.5,
                      nilaiSNBT: 780,
                      dayaTampung: 150,
                      pendaftar: 2800,
                      keketatan: "5.36%"}
                  ]},
      
                  {namaFakultas: "ISIP",
                      prodi: [
                        {namaProdi: "Ilmu Komunikasi",
                          deskripsi: "Mengkaji media, jurnalistik, dan public relations.",
                          nilaiSNBP: 90.8,
                          nilaiSNBT: 775,
                          dayaTampung: 120,
                          pendaftar: 2200,
                          keketatan: "5.45%"},
      
                        {namaProdi: "Sosiologi",
                          deskripsi: "Mempelajari struktur sosial dan perubahan masyarakat.",
                          nilaiSNBP: 87.5,
                          nilaiSNBT: 735,
                          dayaTampung: 90,
                          pendaftar: 1100,
                          keketatan: "8.18%"},
      
                        {namaProdi: "Ilmu Politik",
                          deskripsi: "Berfokus pada sistem politik dan kebijakan publik.",
                          nilaiSNBP: 88.2,
                          nilaiSNBT: 745,
                          dayaTampung: 80,
                          pendaftar: 1000,
                          keketatan: "8.00%"}
                  ]},
      
                  {namaFakultas: "Seni Rupa dan Desain",
                      prodi: [
                        {namaProdi: "Desain Komunikasi Visual",
                          deskripsi: "Mempelajari desain grafis, animasi, dan multimedia.",
                          nilaiSNBP: 89.1,
                          nilaiSNBT: 760,
                          dayaTampung: 100,
                          pendaftar: 1500,
                          keketatan: "6.67%"},
      
                        {namaProdi: "Seni Rupa Murni",
                          deskripsi: "Berfokus pada penciptaan karya seni kontemporer.",
                          nilaiSNBP: 85.3,
                          nilaiSNBT: 710,
                          dayaTampung: 60,
                          pendaftar: 700,
                          keketatan: "8.57%"}
                  ]},
                  
                  {namaFakultas: "Keguruan dan Ilmu Pendidikan",
                      prodi: [
                        {namaProdi: "Pendidikan Guru SD",
                          deskripsi: "Mencetak guru SD profesional dengan pendekatan multidisplin.",
                          nilaiSNBP: 86.7,
                          nilaiSNBT: 725,
                          dayaTampung: 120,
                          pendaftar: 1400,
                          keketatan: "8.57%"},
      
                        {namaProdi: "Pendidikan Bahasa Inggris",
                          deskripsi: "Berfokus pada metodologi pengajaran bahasa Inggris.",
                          nilaiSNBP: 88.4,
                          nilaiSNBT: 750,
                          dayaTampung: 90,
                          pendaftar: 1100,
                          keketatan: "8.18%"}
                  ]},
              ]
              }
          ],
          
          // ===== GENERAL TUITION FEES =====
          biaya: {
              kategori: [
                  {nama: "UKT (Uang Kuliah Tunggal)",
                  deskripsi: "Pembayaran per semester yang sudah termasuk SPP dan biaya layanan akademik",
                  kisaran: "Rp2.500.000 - Rp25.000.000/semester"},
      
                  {nama: "SPP per SKS",
                  deskripsi: "Biaya satuan kredit semester untuk mahasiswa non-UKT",
                  kisaran: "Rp180.000 - Rp500.000/SKS"}
              ],
              biayaLain: [
                  {nama: "Uang Pangkal",
                  deskripsi: "Hanya untuk jalur mandiri (SM UNS/PPKB)",
                  kisaran: "Rp7.000.000 - Rp40.000.000 (sekali bayar)"},
      
                  {nama: "Asrama",
                  deskripsi: "Optional - tersedia di Kampus Kentingan",
                  kisaran: "Rp1.000.000 - Rp2.800.000/semester"}
              ],
              beasiswa: [
                  "KIP-Kuliah (full coverage)",
                  "Beasiswa UNS (akademik/non-akademik)",
                  "Beasiswa Pemda (untuk mahasiswa daerah)"
              ],
              catatan: [
                  "Biaya program vokasi lebih rendah 30%",
                  "Pembayaran dapat diangsur maksimal 3x per semester",
                  "Biaya praktikum tertentu tidak termasuk dalam UKT"
              ]
          }
        },

        its = {
          id: 8,
          // ===== INSTITUTIONAL PROFILE =====
          profilSingkat: {
              nama: "Institut Teknologi Sepuluh Nopember",
              singkatan: "ITS",
              motto: "Innovating The Future",
              terjemahan: "Berinovasi untuk Masa Depan",
              tahunBerdiri: 1957,
              kota: "Surabaya",
              provinsi: "Jawa Timur",
              tipe: "Negeri",
              akreditasi: "A (Unggul) dari BAN-PT",
              jumlahDosen: "1,200+",
              jumlahMahasiswa: "20,000+",
              logo: "https://upload.wikimedia.org/wikipedia/id/thumb/0/01/Institut_Teknologi_Sepuluh_Nopember_seal.svg/1200px-Institut_Teknologi_Sepuluh_Nopember_seal.svg.png",
              fotoKampus: "https://www.its.ac.id/wp-content/uploads/2020/12/slider-1-1-1024x490.jpg",
              deskripsi: "ITS adalah perguruan tinggi teknik terkemuka di Indonesia Timur, dikenal dengan inovasi di bidang maritim, robotika, dan energi terbarukan. Memiliki 5 fakultas dengan dominasi program teknik.",
              ranking: {
                  qsWorld: "Top 800 Dunia (2024)",
                  asia: "Top 150 Asia (2024)",
                  nasional: 3,
                  teknik: 2
              },
              luasKampus: ["Sukolilo - 180 hektar", "Manyar - 20 hektar"],
              kemahasiswaan: {
                  himpunan: "40+ Himpunan Mahasiswa Jurusan",
                  ukm: "80+ Unit Kegiatan Mahasiswa",
                  prestasi: [
                      "Juara Kontes Robot Terbang Internasional 5x",
                      "Pemenang Shell Eco-Marathon Asia",
                      "Startup: Algoritma (decacorn)"
                  ]
              },
              fasilitas: [
                  "Ocean Tech Center (laboratorium kelautan terbesar di ASEAN)",
                  "Robotics Center",
                  "Technopark Inkubasi Startup",
                  "Marine Research Vessel 'ITS Discovery'",
                  "Asrama Kapasitas 4,000+"
              ],
              kontak: {
                  alamat: "Kampus ITS Sukolilo, Surabaya 60111",
                  telepon: "+62 31 5994251",
                  email: "humas@its.ac.id",
                  website: "https://www.its.ac.id"
              },
          },
      
          // ===== ADMISSION DATA =====
          penerimaan: {
              jalurMasuk: [
                  {
                      nama: "SNBP",
                      deskripsi: "Seleksi Nasional Berdasarkan Prestasi (untuk siswa berprestasi akademik/non-akademik)"
                  },
                  {
                      nama: "SNBT",
                      deskripsi: "Seleksi Nasional Berdasarkan Tes (ujian terstandarisasi dengan bobot tinggi di matematika/sains)"
                  },
                  {
                      nama: "SMITS",
                      deskripsi: "Seleksi Mandiri ITS (tes khusus dengan materi matematika, fisika, dan kimia intensif)"
                  },
                  {
                      nama: "Kemitraan",
                      deskripsi: "Kerjasama dengan industri (PTTEP, Pertamina, dll) untuk prodi tertentu"
                  }
              ],
              tahunData: 2024,
              totalPendaftar: "48,000",
              dayaTampungTotal: "5,500",
              catatan: [
                  "Prioritas untuk siswa dengan prestasi olimpiade sains",
                  "SMITS menyumbang 35% kuota penerimaan",
                  "Wajib tes kesehatan untuk prodi kelautan"
              ]
          },
      
          // ===== COMPLETE FACULTIES & PROGRAMS =====
          fakultasDanProdi: [
              // ===== RUMPUN TEKNOLOGI KELAUTAN =====
              {rumpun: "Teknologi Kelautan",
              fakultas: [
                  {namaFakultas: "Teknik Kelautan",
                   prodi: [
                      {namaProdi: "Teknik Perkapalan",
                      deskripsi: "Program unggulan ITS dengan akreditasi internasional IMarEST. Fokus pada desain kapal dan offshore structure.",
                      nilaiSNBP: 96.2,
                      nilaiSNBT: 820,
                      dayaTampung: 120,
                      pendaftar: 3200,
                      keketatan: "3.75%"},
      
                      {namaProdi: "Teknik Sistem Perkapalan",
                      deskripsi: "Berfokus pada sistem propulsi, HVAC, dan otomasi kapal. Kerjasama dengan industri galangan kapal.",
                      nilaiSNBP: 94.8,
                      nilaiSNBT: 805,
                      dayaTampung: 80,
                      pendaftar: 1800,
                      keketatan: "4.44%"},
      
                      {namaProdi: "Teknik Kelautan",
                      deskripsi: "Mempelajari coastal engineering, ocean energy, dan underwater technology. Memiliki akses ke laboratorium laut.",
                      nilaiSNBP: 93.5,
                      nilaiSNBT: 795,
                      dayaTampung: 70,
                      pendaftar: 1500,
                      keketatan: "4.67%"}]
                  },
              ]
              },
      
              // ===== RUMPUN TEKNOLOGI INDUSTRI =====
              {rumpun: "Teknologi Industri",
              fakultas: [
                  {namaFakultas: "Teknik Mesin",
                   prodi: [
                      {namaProdi: "Teknik Mesin",
                      deskripsi: "Kurikulum berbasis desain mesin dan energi terbarukan. Laboratorium berstandar ASME.",
                      nilaiSNBP: 95.7,
                      nilaiSNBT: 815,
                      dayaTampung: 150,
                      pendaftar: 3500,
                      keketatan: "4.29%"},
      
                      {namaProdi: "Teknik Material",
                      deskripsi: "Fokus pada material canggih untuk aerospace, otomotif, dan biomedis.",
                      nilaiSNBP: 93.1,
                      nilaiSNBT: 790,
                      dayaTampung: 80,
                      pendaftar: 1600,
                      keketatan: "5.00%"}]
                  },
      
                  {namaFakultas: "Teknik Kimia",
                   prodi: [
                      {namaProdi: "Teknik Kimia",
                      deskripsi: "Berorientasi pada proses industri kimia dan petrokimia. Bermitra dengan PT Pupuk Indonesia.",
                      nilaiSNBP: 94.3,
                      nilaiSNBT: 800,
                      dayaTampung: 120,
                      pendaftar: 2800,
                      keketatan: "4.29%"},
      
                      {namaProdi: "Teknik Kimia Industri",
                      deskripsi: "Kombinasi teknik kimia dan manajemen industri proses.",
                      nilaiSNBP: 92.8,
                      nilaiSNBT: 785,
                      dayaTampung: 90,
                      pendaftar: 1900,
                      keketatan: "4.74%"}]
                  },
              ]
              },
      
              // ===== RUMPUN TEKNOLOGI INFORMASI =====
              {rumpun: "Teknologi Informasi",
              fakultas: [
                  {namaFakultas: "Teknologi Informasi dan Komunikasi",
                   prodi: [
                      {namaProdi: "Teknik Informatika",
                      deskripsi: "Program unggulan dengan fokus AI, big data, dan cybersecurity. Lulusannya banyak bekerja di unicorn.",
                      nilaiSNBP: 97.5,
                      nilaiSNBT: 840,
                      dayaTampung: 130,
                      pendaftar: 4200,
                      keketatan: "3.10%"},
      
                      {namaProdi: "Sistem Informasi",
                      deskripsi: "Mengintegrasikan TI dengan bisnis. Kurikulum berbasis project dengan industri.",
                      nilaiSNBP: 95.8,
                      nilaiSNBT: 825,
                      dayaTampung: 100,
                      pendaftar: 3100,
                      keketatan: "3.23%"},
      
                      {namaProdi: "Teknik Komputer",
                      deskripsi: "Fokus pada embedded system, IoT, dan robotics programming.",
                      nilaiSNBP: 96.3,
                      nilaiSNBT: 830,
                      dayaTampung: 90,
                      pendaftar: 2800,
                      keketatan: "3.21%"}]
                  },
              ]
              },
      
              // ===== RUMPUN SAINS =====
              {rumpun: "Sains",
              fakultas: [
                  {namaFakultas: "Sains",
                   prodi: [
                      {namaProdi: "Fisika",
                      deskripsi: "Fokus pada fisika terapan untuk energi dan material. Laboratorium bekerja sama dengan BATAN.",
                      nilaiSNBP: 90.2,
                      nilaiSNBT: 760,
                      dayaTampung: 70,
                      pendaftar: 1100,
                      keketatan: "6.36%"},
      
                      {namaProdi: "Kimia",
                      deskripsi: "Penelitian di bidang kimia material dan lingkungan. Akreditasi internasional dari RSC.",
                      nilaiSNBP: 89.7,
                      nilaiSNBT: 755,
                      dayaTampung: 65,
                      pendaftar: 950,
                      keketatan: "6.84%"},
      
                      {namaProdi: "Matematika",
                      deskripsi: "Matematika industri dan komputasi. Banyak lulusan bekerja di bidang fintech.",
                      nilaiSNBP: 88.3,
                      nilaiSNBT: 740,
                      dayaTampung: 60,
                      pendaftar: 850,
                      keketatan: "7.06%"}]
                  },
              ]
              },
      
              // ===== RUMPUN TEKNOLOGI INFRASTRUKTUR =====
              {rumpun: "Teknologi Infrastruktur",
              fakultas: [
                  {namaFakultas: "Teknik Sipil dan Perencanaan",
                   prodi: [
                      {namaProdi: "Teknik Sipil",
                      deskripsi: "Spesialisasi struktur, geoteknik, dan manajemen konstruksi. Laboratorium terbesar di Indonesia Timur.",
                      nilaiSNBP: 94.5,
                      nilaiSNBT: 810,
                      dayaTampung: 140,
                      pendaftar: 3000,
                      keketatan: "4.67%"},
      
                      {namaProdi: "Arsitektur",
                      deskripsi: "Berfokus pada arsitektur tropis dan coastal architecture. Studio desin berstandar internasional.",
                      nilaiSNBP: 95.1,
                      nilaiSNBT: 815,
                      dayaTampung: 100,
                      pendaftar: 2500,
                      keketatan: "4.00%"},
      
                      {namaProdi: "Teknik Lingkungan",
                      deskripsi: "Spesialisasi pengolahan limbah industri dan coastal zone management.",
                      nilaiSNBP: 91.8,
                      nilaiSNBT: 780,
                      dayaTampung: 80,
                      pendaftar: 1400,
                      keketatan: "5.71%"}]
                  },
              ]
              }
          ],
          
          // ===== GENERAL TUITION FEES =====
          biaya: {
              kategori: [
                  {nama: "UKT (Uang Kuliah Tunggal)",
                  deskripsi: "Pembayaran per semester termasuk SPP dan fasilitas laboratorium",
                  kisaran: "Rp4,000,000 - Rp32,000,000/semester"},
      
                  {nama: "SPP per SKS",
                  deskripsi: "Biaya tambahan untuk praktikum intensif",
                  kisaran: "Rp300,000 - Rp700,000/SKS (tergantung prodi)"}
              ],
              biayaLain: [
                  {nama: "Uang Pangkal",
                  deskripsi: "Hanya untuk jalur mandiri SMITS/Kemitraan",
                  kisaran: "Rp12,000,000 - Rp75,000,000 (sekali bayar)"},
      
                  {nama: "Asrama",
                  deskripsi: "Wajib tahun pertama kecuali tinggal di Surabaya",
                  kisaran: "Rp1,800,000 - Rp4,000,000/semester"},
      
                  {nama: "Praktikum Khusus",
                  deskripsi: "Untuk prodi kelautan/robotika (per semester)",
                  kisaran: "Rp2,500,000 - Rp5,000,000"}
              ],
              beasiswa: [
                  "Beasiswa Kemitraan Industri (Pertamina, MIND ID)",
                  "Beasiswa Prestasi Teknologi (full tuition + living allowance)",
                  "KIP-Kuliah (termasuk biaya praktikum)"
              ],
              catatan: [
                  "Biaya prodi kelautan 20% lebih tinggi",
                  "Tersedia program angsuran 6x untuk UKT",
                  "Biaya tidak termasuk field trip/lab offshore"
              ]
          }
        },

        undip = {
          id: 9,
          // ===== INSTITUTIONAL PROFILE =====
          profilSingkat: {
              nama: "Universitas Diponegoro",
              singkatan: "UNDIP",
              motto: "Wiyata Hangreksa Gapuraning Nagara",
              terjemahan: "Pendidikan yang Menjaga Gerbang Negara",
              tahunBerdiri: 1957,
              kota: "Semarang",
              provinsi: "Jawa Tengah",
              tipe: "Negeri",
              akreditasi: "A (Unggul) dari BAN-PT",
              jumlahDosen: "2,500+",
              jumlahMahasiswa: "40,000+",
              logo: "https://i0.wp.com/fisip.undip.ac.id/wp-content/uploads/2023/05/logo-undip-2.png?fit=418%2C503&ssl=1",
              fotoKampus: "https://undip.ac.id/wp-content/uploads/2023/03/MSTP-jepara.jpg",
              deskripsi: "UNDIP merupakan universitas negeri terkemuka di Jawa Tengah yang unggul dalam bidang kemaritiman, teknik, dan ilmu sosial. Memiliki 11 fakultas dengan kampus utama di Tembalang.",
              ranking: {
                  qsWorld: "Top 1000 Dunia (2024)",
                  asia: "Top 200 Asia (2024)",
                  nasional: 7,
                  maritime: 2
              },
              luasKampus: ["Tembalang - 200 hektar", "Pleburan - 15 hektar"],
              kemahasiswaan: {
                  himpunan: "55+ Himpunan Mahasiswa Jurusan",
                  ukm: "100+ Unit Kegiatan Mahasiswa",
                  prestasi: [
                      "Juara Nasional Debat Mahasiswa 4x",
                      "Pemenang Kompetisi Maritime Innovation ASEAN",
                      "Startup: Warung Pintar (unicorn alumni)"
                  ]
              },
              fasilitas: [
                  "Oceanography Research Center",
                  "Technopark Kewirausahaan",
                  "Rumah Sakit Pendidikan (RS UNDIP)",
                  "Marine Station di Kepulauan Karimunjawa",
                  "Asrama Mahasiswa Kapasitas 3,500+"
              ],
              kontak: {
                  alamat: "Jl. Prof. Soedarto, SH, Tembalang, Semarang 50275",
                  telepon: "+62 24 7460011",
                  email: "humas@undip.ac.id",
                  website: "https://www.undip.ac.id"
              },
          },
      
          // ===== ADMISSION DATA =====
          penerimaan: {
              jalurMasuk: [
                  {
                      nama: "SNBP",
                      deskripsi: "Seleksi Nasional Berdasarkan Prestasi (nilai rapor + portofolio)"
                  },
                  {
                      nama: "SNBT",
                      deskripsi: "Seleksi Nasional Berdasarkan Tes (fokus pada kemampuan kognitif)"
                  },
                  {
                      nama: "SM UNDIP",
                      deskripsi: "Seleksi Mandiri UNDIP (tes akademik khusus dengan bobot tinggi di bidang studi terkait)"
                  },
                  {
                      nama: "PPKB",
                      deskripsi: "Program Perluasan Kesempatan Belajar (kuota khusus daerah 3T)"
                  }
              ],
              tahunData: 2024,
              totalPendaftar: "68,000",
              dayaTampungTotal: "7,200",
              catatan: [
                  "Prodi teknik/kesehatan menerima 60% via SNBT",
                  "SM UNDIP menyumbang 25% total penerimaan",
                  "Wajib tes fisik untuk prodi kelautan"
              ]
          },
      
          // ===== COMPLETE FACULTIES & PROGRAMS =====
          fakultasDanProdi: [
              // ===== RUMPUN KESEHATAN =====
              {rumpun: "Kesehatan",
              fakultas: [
                  {namaFakultas: "Kedokteran",
                   prodi: [
                      {namaProdi: "Pendidikan Dokter",
                      deskripsi: "Program dokter umum dengan teaching hospital RS UNDIP. Kurikulum berbasis kompetensi.",
                      nilaiSNBP: 96.0,
                      nilaiSNBT: 820,
                      dayaTampung: 120,
                      pendaftar: 3800,
                      keketatan: "3.16%"},
      
                      {namaProdi: "Ilmu Gizi",
                      deskripsi: "Fokus pada nutrisi klinis dan community nutrition. Bermitra dengan industri makanan.",
                      nilaiSNBP: 92.5,
                      nilaiSNBT: 780,
                      dayaTampung: 80,
                      pendaftar: 1200,
                      keketatan: "6.67%"}]
                  },
      
                  {namaFakultas: "Kesehatan Masyarakat",
                   prodi: [
                      {namaProdi: "Kesehatan Masyarakat",
                      deskripsi: "Spesialisasi epidemiologi dan health policy. Pusat penelitian kesehatan masyarakat pesisir.",
                      nilaiSNBP: 90.8,
                      nilaiSNBT: 760,
                      dayaTampung: 100,
                      pendaftar: 1500,
                      keketatan: "6.67%"}]
                  },
              ]
              },
      
              // ===== RUMPUN TEKNIK =====
              {rumpun: "Teknik",
              fakultas: [
                  {namaFakultas: "Teknik",
                   prodi: [
                      {namaProdi: "Teknik Sipil",
                      deskripsi: "Spesialisasi struktur pantai dan earthquake engineering. Laboratorium terbesar di Jawa Tengah.",
                      nilaiSNBP: 94.2,
                      nilaiSNBT: 800,
                      dayaTampung: 150,
                      pendaftar: 3200,
                      keketatan: "4.69%"},
      
                      {namaProdi: "Teknik Kimia",
                      deskripsi: "Berorientasi pada proses industri kimia dan petrokimia. Kerjasama dengan PT Petrokimia Gresik.",
                      nilaiSNBP: 93.8,
                      nilaiSNBT: 795,
                      dayaTampung: 120,
                      pendaftar: 2800,
                      keketatan: "4.29%"},
      
                      {namaProdi: "Teknik Perkapalan",
                      deskripsi: "Satu-satunya di Jawa Tengah dengan fasilitas model basin. Akreditasi IMarEST.",
                      nilaiSNBP: 95.5,
                      nilaiSNBT: 815,
                      dayaTampung: 90,
                      pendaftar: 2500,
                      keketatan: "3.60%"}]
                  },
      
                  {namaFakultas: "Teknologi Industri",
                   prodi: [
                      {namaProdi: "Teknik Industri",
                      deskripsi: "Kombinasi engineering dan manajemen sistem industri. Project-based learning dengan mitra industri.",
                      nilaiSNBP: 93.1,
                      nilaiSNBT: 790,
                      dayaTampung: 130,
                      pendaftar: 2900,
                      keketatan: "4.48%"},
      
                      {namaProdi: "Teknik Elektro",
                      deskripsi: "Konsentrasi power system dan telekomunikasi. Laboratorium smart grid terintegrasi.",
                      nilaiSNBP: 92.7,
                      nilaiSNBT: 785,
                      dayaTampung: 110,
                      pendaftar: 2600,
                      keketatan: "4.23%"}]
                  },
              ]
              },
      
              // ===== RUMPUN KEMARITIMAN =====
              {rumpun: "Kemaritiman",
              fakultas: [
                  {namaFakultas: "Perikanan dan Ilmu Kelautan",
                   prodi: [
                      {namaProdi: "Ilmu Kelautan",
                      deskripsi: "Studi ekosistem pesisir dan marine resource management. Akses langsung ke stasiun penelitian laut.",
                      nilaiSNBP: 91.3,
                      nilaiSNBT: 770,
                      dayaTampung: 80,
                      pendaftar: 1400,
                      keketatan: "5.71%"},
      
                      {namaProdi: "Aquaculture",
                      deskripsi: "Budidaya perikanan modern dengan teknologi RAS. Magang di hatchery industri.",
                      nilaiSNBP: 89.7,
                      nilaiSNBT: 750,
                      dayaTampung: 70,
                      pendaftar: 1100,
                      keketatan: "6.36%"}]
                  },
              ]
              },
      
              // ===== RUMPUN SOSIAL HUMANIORA =====
              {rumpun: "Sosial Humaniora",
              fakultas: [
                  {namaFakultas: "Ekonomika dan Bisnis",
                   prodi: [
                      {namaProdi: "Ekonomi Pembangunan",
                      deskripsi: "Analisis kebijakan ekonomi regional dengan fokus maritim. Pusat studi ekonomi pesisir.",
                      nilaiSNBP: 92.0,
                      nilaiSNBT: 785,
                      dayaTampung: 120,
                      pendaftar: 2300,
                      keketatan: "5.22%"},
      
                      {namaProdi: "Akuntansi",
                      deskripsi: "Kurikulum berbasis PSAK dan IFRS. Lulusan banyak bekerja di Big 4 accounting firms.",
                      nilaiSNBP: 93.5,
                      nilaiSNBT: 795,
                      dayaTampung: 140,
                      pendaftar: 3000,
                      keketatan: "4.67%"}]
                  },
      
                  {namaFakultas: "Hukum",
                   prodi: [
                      {namaProdi: "Ilmu Hukum",
                      deskripsi: "Spesialisasi hukum maritim dan bisnis. Klinik hukum untuk masyarakat pesisir.",
                      nilaiSNBP: 91.8,
                      nilaiSNBT: 780,
                      dayaTampung: 180,
                      pendaftar: 3500,
                      keketatan: "5.14%"}]
                  },
      
                  {namaFakultas: "Ilmu Sosial dan Ilmu Politik",
                   prodi: [
                      {namaProdi: "Ilmu Administrasi Publik",
                      deskripsi: "Manajemen pemerintahan daerah dengan studi kasus kebijakan pesisir.",
                      nilaiSNBP: 89.5,
                      nilaiSNBT: 755,
                      dayaTampung: 110,
                      pendaftar: 1800,
                      keketatan: "6.11%"},
      
                      {namaProdi: "Sosiologi",
                      deskripsi: "Studi perubahan sosial masyarakat pesisir dan urban. Metode penelitian lapangan intensif.",
                      nilaiSNBP: 87.3,
                      nilaiSNBT: 735,
                      dayaTampung: 90,
                      pendaftar: 1300,
                      keketatan: "6.92%"}]
                  },
              ]
              }
          ],
          
          // ===== GENERAL TUITION FEES =====
          biaya: {
              kategori: [
                  {nama: "UKT (Uang Kuliah Tunggal)",
                  deskripsi: "Pembayaran per semester termasuk biaya praktikum dasar",
                  kisaran: "Rp3,500,000 - Rp28,000,000/semester"},
      
                  {nama: "SPP per SKS",
                  deskripsi: "Biaya tambahan untuk praktikum lanjutan",
                  kisaran: "Rp250,000 - Rp600,000/SKS"}
              ],
              biayaLain: [
                  {nama: "Uang Pangkal",
                  deskripsi: "Hanya untuk jalur mandiri SM UNDIP",
                  kisaran: "Rp10,000,000 - Rp50,000,000 (sekali bayar)"},
      
                  {nama: "Asrama",
                  deskripsi: "Optional dengan prioritas mahasiswa luar Jawa",
                  kisaran: "Rp1,200,000 - Rp3,200,000/semester"},
      
                  {nama: "Praktikum Khusus",
                  deskripsi: "Untuk prodi kelautan/teknik (per semester)",
                  kisaran: "Rp2,000,000 - Rp4,500,000"}
              ],
              beasiswa: [
                  "Beasiswa Maritim (dari Kemenko Maritim)",
                  "Beasiswa Mitra Industri (PT Pelindo, PT Pertamina)",
                  "KIP-Kuliah (termasuk biaya praktikum)"
              ],
              catatan: [
                  "Biaya prodi kemaritiman 15-20% lebih tinggi",
                  "Tersedia program angsuran 5x untuk UKT",
                  "Biaya tidak termasuk field trip kelautan"
              ]
          }
        },

        ipb = {
          id: 10,
          // ===== INSTITUTIONAL PROFILE =====
          profilSingkat: {
              nama: "IPB University",
              singkatan: "IPB",
              motto: "Leading in Innovation",
              terjemahan: "Unggul dalam Inovasi",
              tahunBerdiri: 1963,
              kota: "Bogor",
              provinsi: "Jawa Barat",
              tipe: "Negeri",
              akreditasi: "A (Unggul) dari BAN-PT",
              jumlahDosen: "1,800+",
              jumlahMahasiswa: "25,000+",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bogor_Agricultural_University_%28IPB%29_symbol.svg/1200px-Bogor_Agricultural_University_%28IPB%29_symbol.svg.png",
              fotoKampus: "https://www.ipb.ac.id/wp-content/uploads/2024/04/IPB-University-Peringkat-3-Universitas-Terbaik-se-ASEAN-berdasarkan-The-AppliedHe-Public-University-Ranking-770x400.png",
              deskripsi: "IPB University adalah perguruan tinggi pertanian terbaik di Indonesia yang berfokus pada agroteknologi, biosains, dan pengembangan pedesaan. Memiliki 9 fakultas dengan kampus seluas 250 hektar di Dramaga.",
              ranking: {
                  qsWorld: "Top 800 Dunia (2024)",
                  asia: "Top 100 Asia (Agriculture & Forestry)",
                  nasional: 4,
                  pertanian: 1
              },
              luasKampus: ["Dramaga - 250 hektar", "Botani Square - 5 hektar"],
              kemahasiswaan: {
                  himpunan: "50+ Himpunan Mahasiswa Departemen",
                  ukm: "120+ Unit Kegiatan Mahasiswa",
                  prestasi: [
                      "Juara Dunia Youth Agricultural Summit",
                      "Pemenang Kompetisi Bioteknologi ASEAN",
                      "Startup: Sayurbox (unicorn alumni)"
                  ]
              },
              fasilitas: [
                  "Kebun Percobaan seluas 150 hektar",
                  "Laboratorium Biosains Terpadu",
                  "Agro Technopark",
                  "Teaching Farm dengan hewan ternak",
                  "Asrama Mahasiswa Kapasitas 5,000+"
              ],
              kontak: {
                  alamat: "Kampus IPB Dramaga, Bogor 16680",
                  telepon: "+62 251 8622095",
                  email: "humas@ipb.ac.id",
                  website: "https://www.ipb.ac.id"
              },
          },
      
          // ===== ADMISSION DATA =====
          penerimaan: {
              jalurMasuk: [
                  {
                      nama: "SNBP",
                      deskripsi: "Seleksi Nasional Berdasarkan Prestasi (nilai rapor + sertifikat kompetensi pertanian)"
                  },
                  {
                      nama: "SNBT",
                      deskripsi: "Seleksi Nasional Berdasarkan Tes (penekanan pada biologi/kimia)"
                  },
                  {
                      nama: "SMM IPB",
                      deskripsi: "Seleksi Mandiri Mahasiswa IPB (tes biologi/kimia intensif + wawancara)"
                  },
                  {
                      nama: "PPKB",
                      deskripsi: "Program Perluasan Kesempatan Belajar (kuota khusus daerah perdesaan)"
                  }
              ],
              tahunData: 2024,
              totalPendaftar: "45,000",
              dayaTampungTotal: "6,500",
              catatan: [
                  "Prioritas untuk siswa sekolah kejuruan pertanian",
                  "SMM IPB menyumbang 30% kuota penerimaan",
                  "Wajib tes fisik untuk prodi peternakan/kehutanan"
              ]
          },
      
          // ===== COMPLETE FACULTIES & PROGRAMS =====
          fakultasDanProdi: [
              // ===== RUMPUN PERTANIAN =====
              {rumpun: "Pertanian",
              fakultas: [
                  {namaFakultas: "Pertanian",
                   prodi: [
                      {namaProdi: "Agronomi dan Hortikultura",
                      deskripsi: "Mempelajari budidaya tanaman pangan dan hortikultura modern. Akses ke kebun percobaan seluas 50 hektar.",
                      nilaiSNBP: 93.5,
                      nilaiSNBT: 795,
                      dayaTampung: 120,
                      pendaftar: 2800,
                      keketatan: "4.29%"},
      
                      {namaProdi: "Proteksi Tanaman",
                      deskripsi: "Spesialisasi pengendalian hama dan penyakit tanaman. Laboratorium bioteknologi terintegrasi.",
                      nilaiSNBP: 91.8,
                      nilaiSNBT: 780,
                      dayaTampung: 90,
                      pendaftar: 1900,
                      keketatan: "4.74%"}]
                  },
      
                  {namaFakultas: "Peternakan",
                   prodi: [
                      {namaProdi: "Ilmu Peternakan",
                      deskripsi: "Kombinasi breeding, nutrisi, dan manajemen peternakan modern. Teaching farm dengan 500+ hewan.",
                      nilaiSNBP: 92.3,
                      nilaiSNBT: 785,
                      dayaTampung: 100,
                      pendaftar: 2200,
                      keketatan: "4.55%"},
      
                      {namaProdi: "Teknologi Hasil Ternak",
                      deskripsi: "Pengolahan produk ternak (susu, daging, telur). Bermitra dengan industri seperti Nestlé.",
                      nilaiSNBP: 90.7,
                      nilaiSNBT: 770,
                      dayaTampung: 80,
                      pendaftar: 1600,
                      keketatan: "5.00%"}]
                  },
              ]
              },
      
              // ===== RUMPUN KEHUTANAN =====
              {rumpun: "Kehutanan",
              fakultas: [
                  {namaFakultas: "Kehutanan dan Lingkungan",
                   prodi: [
                      {namaProdi: "Manajemen Hutan",
                      deskripsi: "Pengelolaan hutan berkelanjutan dengan akses ke hutan pendidikan seluas 6,000 hektar.",
                      nilaiSNBP: 90.2,
                      nilaiSNBT: 765,
                      dayaTampung: 90,
                      pendaftar: 1500,
                      keketatan: "6.00%"},
      
                      {namaProdi: "Teknologi Hasil Hutan",
                      deskripsi: "Pengolahan kayu dan non-kayu. Laboratorium pengujian material bersertifikat.",
                      nilaiSNBP: 88.9,
                      nilaiSNBT: 750,
                      dayaTampung: 70,
                      pendaftar: 1200,
                      keketatan: "5.83%"}]
                  },
              ]
              },
      
              // ===== RUMPUN PERIKANAN =====
              {rumpun: "Perikanan",
              fakultas: [
                  {namaFakultas: "Perikanan dan Ilmu Kelautan",
                   prodi: [
                      {namaProdi: "Budidaya Perairan",
                      deskripsi: "Teknologi akuakultur modern dengan fasilitas hatchery skala industri.",
                      nilaiSNBP: 91.5,
                      nilaiSNBT: 780,
                      dayaTampung: 80,
                      pendaftar: 1800,
                      keketatan: "4.44%"},
      
                      {namaProdi: "Ilmu Kelautan",
                      deskripsi: "Studi ekosistem pesisir dan konservasi laut. Stasiun penelitian di Pulau Pari.",
                      nilaiSNBP: 89.7,
                      nilaiSNBT: 760,
                      dayaTampung: 70,
                      pendaftar: 1400,
                      keketatan: "5.00%"}]
                  },
              ]
              },
      
              // ===== RUMPUN SAINS =====
              {rumpun: "Sains",
              fakultas: [
                  {namaFakultas: "Matematika dan Ilmu Pengetahuan Alam",
                   prodi: [
                      {namaProdi: "Biologi",
                      deskripsi: "Fokus pada biodiversitas tropis dan bioteknologi. Herbarium dengan 50,000 spesimen.",
                      nilaiSNBP: 92.0,
                      nilaiSNBT: 785,
                      dayaTampung: 90,
                      pendaftar: 1700,
                      keketatan: "5.29%"},
      
                      {namaProdi: "Kimia",
                      deskripsi: "Penelitian kimia material alam dan analisis lingkungan. Akreditasi internasional RSC.",
                      nilaiSNBP: 90.8,
                      nilaiSNBT: 775,
                      dayaTampung: 80,
                      pendaftar: 1500,
                      keketatan: "5.33%"}]
                  },
      
                  {namaFakultas: "Ekonomi dan Manajemen",
                   prodi: [
                      {namaProdi: "Agribisnis",
                      deskripsi: "Kombinasi bisnis dan pertanian. Project-based learning dengan perusahaan agribisnis.",
                      nilaiSNBP: 93.2,
                      nilaiSNBT: 800,
                      dayaTampung: 120,
                      pendaftar: 2500,
                      keketatan: "4.80%"},
      
                      {namaProdi: "Ekonomi Sumberdaya dan Lingkungan",
                      deskripsi: "Analisis ekonomi untuk pengelolaan sumberdaya alam. Kurikulum berbasis sustainability.",
                      nilaiSNBP: 91.5,
                      nilaiSNBT: 785,
                      dayaTampung: 90,
                      pendaftar: 1800,
                      keketatan: "5.00%"}]
                  },
              ]
              }
          ],
          
          // ===== GENERAL TUITION FEES =====
          biaya: {
              kategori: [
                  {nama: "UKT (Uang Kuliah Tunggal)",
                  deskripsi: "Pembayaran per semester termasuk praktikum dasar",
                  kisaran: "Rp3,000,000 - Rp25,000,000/semester"},
      
                  {nama: "SPP per SKS",
                  deskripsi: "Biaya tambahan untuk praktikum lapangan",
                  kisaran: "Rp200,000 - Rp550,000/SKS"}
              ],
              biayaLain: [
                  {nama: "Uang Pangkal",
                  deskripsi: "Hanya untuk jalur mandiri SMM IPB",
                  kisaran: "Rp8,000,000 - Rp40,000,000 (sekali bayar)"},
      
                  {nama: "Asrama",
                  deskripsi: "Wajib tahun pertama kecuali tinggal di Bogor",
                  kisaran: "Rp1,000,000 - Rp2,800,000/semester"},
      
                  {nama: "Praktikum Lapangan",
                  deskripsi: "Untuk prodi pertanian/kehutanan (per semester)",
                  kisaran: "Rp1,500,000 - Rp4,000,000"}
              ],
              beasiswa: [
                  "Beasiswa Kementan (untuk prodi pertanian)",
                  "Beasiswa Mitra Agribisnis (PT Sampoerna Agro, PT Sinarmas)",
                  "KIP-Kuliah (termasuk biaya praktikum lapangan)"
              ],
              catatan: [
                  "Biaya prodi sains 15% lebih rendah",
                  "Tersedia program angsuran 4x untuk UKT",
                  "Biaya tidak termasuk field trip ke desa/lapangan"
              ]
          }
        },

        binus = {
          id: 11,
          // ===== INSTITUTIONAL PROFILE =====
          profilSingkat: {
              nama: "Bina Nusantara University",
              singkatan: "BINUS",
              motto: "Empowering Society, Building the Nation",
              terjemahan: "Memberdayakan Masyarakat, Membangun Bangsa",
              tahunBerdiri: 1984,
              kota: "Jakarta",
              provinsi: "DKI Jakarta",
              tipe: "Swasta",
              akreditasi: "A (Unggul) dari BAN-PT",
              jumlahDosen: "2,000+",
              jumlahMahasiswa: "30,000+",
              logo: "https://www.binus.edu/wp-content/uploads/2016/11/logoBINUS.png",
              fotoKampus: "https://assets.promediateknologi.id/crop/71x79:1520x865/0x0/webp/photo/p3/20/2024/02/03/Kampus-gedung-baru-Binus-University-Semarang-3038009424.jpeg",
              deskripsi: "BINUS University adalah perguruan tinggi swasta terkemuka di Indonesia yang berfokus pada teknologi informasi, bisnis digital, dan industri kreatif. Memiliki 7 fakultas dengan kampus di 8 lokasi strategis.",
              ranking: {
                  qsWorld: "Top 1000 Dunia (2024)",
                  asia: "Top 150 Asia (Computer Science)",
                  nasional: 6,
                  swasta: 1
              },
              luasKampus: [
                  "Senayan - 3.5 hektar", 
                  "Alam Sutera - 5 hektar",
                  "Bekasi - 2 hektar"
              ],
              kemahasiswaan: {
                  himpunan: "40+ Student Interest Groups",
                  ukm: "100+ Student Activity Units",
                  prestasi: [
                      "Juara Dunia Microsoft Imagine Cup 3x",
                      "Pemenang Hackathon Silicon Valley",
                      "Startup Unicorn: Tokopedia (alumni)"
                  ]
              },
              fasilitas: [
                  "BINUS TECH Park (inkubator teknologi)",
                  "Creative Hub untuk industri digital",
                  "Apple Developer Academy",
                  "Big Data Research Center",
                  "Asrama Mahasiswa Kapasitas 2,000+"
              ],
              kontak: {
                  alamat: "Jl. K.H. Syahdan No. 9, Palmerah, Jakarta Barat",
                  telepon: "+62 21 5345830",
                  email: "info@binus.edu",
                  website: "https://binus.ac.id"
              },
          },
      
          // ===== ADMISSION DATA =====
          penerimaan: {
              jalurMasuk: [
                  {
                      nama: "BINUS Scholarship",
                      deskripsi: "Seleksi berbasis prestasi akademik/non-akademik (potongan tuition 25-100%)"
                  },
                  {
                      nama: "BINUS Admission Test",
                      deskripsi: "Tes masuk mandiri dengan penekanan pada logika dan bahasa Inggris"
                  },
                  {
                      nama: "BINUS International Pathway",
                      deskripsi: "Program jalur internasional dengan kurikulum global"
                  },
                  {
                      nama: "Direct Admission",
                      deskripsi: "Kerjasama dengan sekolah mitra (tanpa tes)"
                  }
              ],
              tahunData: 2024,
              totalPendaftar: "35,000",
              dayaTampungTotal: "6,000",
              catatan: [
                  "40% mahasiswa menerima beasiswa parsial",
                  "Wajib tes bahasa Inggris untuk semua program",
                  "Prioritas untuk portofolio (program kreatif)"
              ]
          },
      
          // ===== COMPLETE FACULTIES & PROGRAMS =====
          fakultasDanProdi: [
              // ===== RUMPUN TEKNOLOGI INFORMASI =====
              {rumpun: "Teknologi Informasi",
              fakultas: [
                  {namaFakultas: "Computer Science",
                   prodi: [
                      {namaProdi: "Computer Science",
                      deskripsi: "Program unggulan dengan spesialisasi AI, blockchain, dan cloud computing. Kurikulum berbasis industri.",
                      nilaiMinimal: 85.0,
                      dayaTampung: 300,
                      pendaftar: 4500,
                      keketatan: "6.67%",
                      bahasaPengantar: "Bilingual"},
      
                      {namaProdi: "Cyber Security",
                      deskripsi: "Program keamanan siber dengan sertifikasi internasional EC-Council. Partner: Kominfo dan BSSN.",
                      nilaiMinimal: 83.5,
                      dayaTampung: 150,
                      pendaftar: 2800,
                      keketatan: "5.36%",
                      bahasaPengantar: "Bilingual"}]
                  },
      
                  {namaFakultas: "Information Systems",
                   prodi: [
                      {namaProdi: "Information Systems",
                      deskripsi: "Integrasi bisnis dan teknologi informasi. Project-based learning dengan perusahaan mitra.",
                      nilaiMinimal: 82.0,
                      dayaTampung: 250,
                      pendaftar: 3200,
                      keketatan: "7.81%",
                      bahasaPengantar: "Bilingual"},
      
                      {namaProdi: "Data Science",
                      deskripsi: "Analisis big data dan machine learning. Akses ke supercomputer cluster.",
                      nilaiMinimal: 84.5,
                      dayaTampung: 180,
                      pendaftar: 2500,
                      keketatan: "7.20%",
                      bahasaPengantar: "English"}]
                  },
              ]
              },
      
              // ===== RUMPUN BISNIS =====
              {rumpun: "Bisnis",
              fakultas: [
                  {namaFakultas: "Business",
                   prodi: [
                      {namaProdi: "Business Management",
                      deskripsi: "Kurikulum bisnis digital dengan magang di perusahaan rintisan. Startup incubation program.",
                      nilaiMinimal: 81.5,
                      dayaTampung: 350,
                      pendaftar: 4000,
                      keketatan: "8.75%",
                      bahasaPengantar: "Bilingual"},
      
                      {namaProdi: "Digital Marketing",
                      deskripsi: "Strategi pemasaran digital dan e-commerce. Sertifikasi Google Analytics dan Facebook Blueprint.",
                      nilaiMinimal: 80.0,
                      dayaTampung: 200,
                      pendaftar: 2700,
                      keketatan: "7.41%",
                      bahasaPengantar: "Bilingual"}]
                  },
      
                  {namaFakultas: "Accounting",
                   prodi: [
                      {namaProdi: "Accounting",
                      deskripsi: "Akuntansi berbasis teknologi dengan sertifikasi ACCA. Partner: Big Four accounting firms.",
                      nilaiMinimal: 83.0,
                      dayaTampung: 280,
                      pendaftar: 3500,
                      keketatan: "8.00%",
                      bahasaPengantar: "Bilingual"}]
                  },
              ]
              },
      
              // ===== RUMPUN INDUSTRI KREATIF =====
              {rumpun: "Industri Kreatif",
              fakultas: [
                  {namaFakultas: "Creative Industry",
                   prodi: [
                      {namaProdi: "Film Production",
                      deskripsi: "Pembuatan film dengan fasilitas studio profesional. Partner: Netflix dan Cameo Project.",
                      nilaiMinimal: 78.0,
                      dayaTampung: 120,
                      pendaftar: 1800,
                      keketatan: "6.67%",
                      bahasaPengantar: "English"},
      
                      {namaProdi: "Game Development",
                      deskripsi: "Pengembangan game multiplatform. Akses ke engine Unreal dan Unity.",
                      nilaiMinimal: 82.5,
                      dayaTampung: 150,
                      pendaftar: 2200,
                      keketatan: "6.82%",
                      bahasaPengantar: "English"}]
                  },
      
                  {namaFakultas: "Design",
                   prodi: [
                      {namaProdi: "Visual Communication Design",
                      deskripsi: "Desain grafis dan multimedia interaktif. Workshop dengan creative director ternama.",
                      nilaiMinimal: 79.5,
                      dayaTampung: 180,
                      pendaftar: 2500,
                      keketatan: "7.20%",
                      bahasaPengantar: "Bilingual"}]
                  },
              ]
              }
          ],
          
          // ===== GENERAL TUITION FEES =====
          biaya: {
              kategori: [
                  {nama: "Tuition Fee",
                  deskripsi: "Pembayaran per semester (termasuk fasilitas teknologi)",
                  kisaran: "Rp12,000,000 - Rp45,000,000/semester"},
      
                  {nama: "Development Fee",
                  deskripsi: "Pembayaran satu kali di awal perkuliahan",
                  kisaran: "Rp5,000,000 - Rp15,000,000"}
              ],
              biayaLain: [
                  {nama: "International Program",
                  deskripsi: "Tambahan untuk program berbahasa Inggris penuh",
                  kisaran: "Rp5,000,000 - Rp10,000,000/semester"},
      
                  {nama: "Laptop Requirement",
                  deskripsi: "Spesifikasi khusus untuk program IT/design",
                  kisaran: "Rp15,000,000 - Rp25,000,000 (sekali)"}
              ],
              beasiswa: [
                  "BINUS Outstanding Achievement Scholarship (50-100%)",
                  "BINUS Business Leader Scholarship",
                  "KIP-Kuliah (untuk program reguler)"
              ],
              catatan: [
                  "Biaya dapat dicicil 6x per semester",
                  "Diskon 10% untuk pembayaran penuh di awal",
                  "Biaya tidak termasuk sertifikasi internasional"
              ]
          }
        },

        telkomuniv = {
          id: 12,
          // ===== INSTITUTIONAL PROFILE =====
          profilSingkat: {
              nama: "Telkom University",
              singkatan: "Tel-U",
              motto: "Creating the Future",
              terjemahan: "Menciptakan Masa Depan",
              tahunBerdiri: 2013,
              kota: "Bandung",
              provinsi: "Jawa Barat",
              tipe: "Swasta (BUMN)",
              akreditasi: "A (Unggul) dari BAN-PT",
              jumlahDosen: "1,500+",
              jumlahMahasiswa: "28,000+",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Logo_Telkom_University_potrait.png/1200px-Logo_Telkom_University_potrait.png",
              fotoKampus: "https://kelaskaryawan.net/wp-content/uploads/2016/06/telkom-university-01-resize.jpg",
              deskripsi: "Telkom University adalah perguruan tinggi swasta berbasis ICT terbesar di Indonesia yang berafiliasi dengan PT Telkom Indonesia. Memiliki 7 fakultas dengan fokus pada teknologi digital, bisnis telekomunikasi, dan industri kreatif.",
              ranking: {
                  qsWorld: "Top 1000 Dunia (2024)",
                  asia: "Top 150 Asia (Engineering & Technology)",
                  nasional: 9,
                  swasta: 2
              },
              luasKampus: ["Gegerkalong - 48 hektar", "Bandung Technoplex - 20 hektar"],
              kemahasiswaan: {
                  himpunan: "35+ Himpunan Mahasiswa Jurusan",
                  ukm: "80+ Unit Kegiatan Mahasiswa",
                  prestasi: [
                      "Juara Dunia ITU Telecom World 3x",
                      "Pemenang GSMA Mobile World Challenge",
                      "Startup: Pahamify (edtech unicorn alumni)"
                  ]
              },
              fasilitas: [
                  "IoT Innovation Center",
                  "5G Lab (kerjasama dengan Telkomsel)",
                  "Digital Creative Hub",
                  "R&D Center for AI and Big Data",
                  "Asrama Mahasiswa Kapasitas 3,000+"
              ],
              kontak: {
                  alamat: "Jl. Telekomunikasi No. 1, Terusan Buahbatu, Bandung 40257",
                  telepon: "+62 22 7564108",
                  email: "info@telkomuniversity.ac.id",
                  website: "https://telkomuniversity.ac.id"
              },
          },
      
          // ===== ADMISSION DATA =====
          penerimaan: {
              jalurMasuk: [
                  {
                      nama: "SMART (Seleksi Mandiri Tel-U)",
                      deskripsi: "Tes tertulis dengan penekanan pada matematika, fisika, dan kemampuan logika"
                  },
                  {
                      nama: "UTBK-SNBT",
                      deskripsi: "Jalur nasional dengan bobot tinggi di bidang sains/teknik"
                  },
                  {
                      nama: "Talent Scouting",
                      deskripsi: "Rekrutmen berbasis prestasi (olimpiade sains/hackathon)"
                  },
                  {
                      nama: "International Track",
                      deskripsi: "Program internasional dengan tes TOEFL/IELTS wajib"
                  }
              ],
              tahunData: 2024,
              totalPendaftar: "40,000",
              dayaTampungTotal: "6,500",
              catatan: [
                  "50% kuota untuk program ICT/engineering",
                  "Wajib tes kesehatan untuk prodi teknik",
                  "Prioritas untuk peserta kompetisi IT"
              ]
          },
      
          // ===== COMPLETE FACULTIES & PROGRAMS =====
          fakultasDanProdi: [
              // ===== RUMPUN ICT =====
              {rumpun: "ICT",
              fakultas: [
                  {namaFakultas: "School of Computing",
                   prodi: [
                      {namaProdi: "Informatics",
                      deskripsi: "Program unggulan dengan spesialisasi AI, blockchain, dan cloud computing. Kurikulum berbasis industri.",
                      nilaiMinimal: 85.0,
                      dayaTampung: 300,
                      pendaftar: 4500,
                      keketatan: "6.67%",
                      bahasaPengantar: "Bilingual"},
      
                      {namaProdi: "Cyber Security",
                      deskripsi: "Program keamanan siber dengan sertifikasi internasional EC-Council. Partner: BSSN dan Kominfo.",
                      nilaiMinimal: 83.5,
                      dayaTampung: 150,
                      pendaftar: 2800,
                      keketatan: "5.36%",
                      bahasaPengantar: "Bilingual"}]
                  },
      
                  {namaFakultas: "Electrical Engineering",
                   prodi: [
                      {namaProdi: "Telecommunication Engineering",
                      deskripsi: "Spesialisasi jaringan 5G dan IoT. Akses ke lab operator telekomunikasi.",
                      nilaiMinimal: 84.0,
                      dayaTampung: 200,
                      pendaftar: 3200,
                      keketatan: "6.25%",
                      bahasaPengantar: "Bilingual"},
      
                      {namaProdi: "Computer Engineering",
                      deskripsi: "Desain sistem embedded dan arsitektur komputer. Partner: Intel dan Cisco.",
                      nilaiMinimal: 83.0,
                      dayaTampung: 180,
                      pendaftar: 2700,
                      keketatan: "6.67%",
                      bahasaPengantar: "Bilingual"}]
                  },
              ]
              },
      
              // ===== RUMPUN BISNIS DIGITAL =====
              {rumpun: "Bisnis Digital",
              fakultas: [
                  {namaFakultas: "Business and Economics",
                   prodi: [
                      {namaProdi: "Digital Business",
                      deskripsi: "Kombinasi bisnis dan teknologi digital. Magang di startup unicorn.",
                      nilaiMinimal: 81.5,
                      dayaTampung: 250,
                      pendaftar: 3500,
                      keketatan: "7.14%",
                      bahasaPengantar: "Bilingual"},
      
                      {namaProdi: "Fintech",
                      deskripsi: "Inovasi keuangan digital dan blockchain. Partner: Bank Mandiri dan OJK.",
                      nilaiMinimal: 82.0,
                      dayaTampung: 150,
                      pendaftar: 2200,
                      keketatan: "6.82%",
                      bahasaPengantar: "English"}]
                  },
              ]
              },
      
              // ===== RUMPUN INDUSTRI KREATIF =====
              {rumpun: "Industri Kreatif",
              fakultas: [
                  {namaFakultas: "Creative Industries",
                   prodi: [
                      {namaProdi: "Digital Content",
                      deskripsi: "Produksi konten digital dan media interaktif. Studio produksi berstandar industri.",
                      nilaiMinimal: 78.0,
                      dayaTampung: 120,
                      pendaftar: 1800,
                      keketatan: "6.67%",
                      bahasaPengantar: "Bilingual"},
      
                      {namaProdi: "Game Technology",
                      deskripsi: "Pengembangan game VR/AR. Akses ke engine Unreal dan Unity.",
                      nilaiMinimal: 80.5,
                      dayaTampung: 100,
                      pendaftar: 1500,
                      keketatan: "6.67%",
                      bahasaPengantar: "English"}]
                  },
              ]
              }
          ],
          
          // ===== GENERAL TUITION FEES =====
          biaya: {
              kategori: [
                  {nama: "Tuition Fee",
                  deskripsi: "Pembayaran per semester (termasuk akses lab khusus)",
                  kisaran: "Rp10,000,000 - Rp35,000,000/semester"},
      
                  {nama: "Development Fee",
                  deskripsi: "Pembayaran satu kali di awal perkuliahan",
                  kisaran: "Rp5,000,000 - Rp12,000,000"}
              ],
              biayaLain: [
                  {nama: "ICT Toolset",
                  deskripsi: "Paket software wajib (tergantung prodi)",
                  kisaran: "Rp3,000,000 - Rp8,000,000/tahun"},
      
                  {nama: "Certification Fee",
                  deskripsi: "Sertifikasi internasional (Cisco, AWS, etc)",
                  kisaran: "Rp2,500,000 - Rp7,000,000/sertifikat"}
              ],
              beasiswa: [
                  "Telkom Group Scholarship (untuk prodi teknik)",
                  "Digital Talent Scholarship (Kominfo)",
                  "KIP-Kuliah (untuk program reguler)"
              ],
              catatan: [
                  "Diskon 20% untuk karyawan Telkom Group",
                  "Biaya dapat dicicil 5x per semester",
                  "Biaya tidak termasuk device pribadi (laptop)"
              ]
          }
        },
];

const kampusTable = document.querySelector("table");
const tableHeader = document.getElementById("kampusHeader")
const tableKota = document.getElementById("kota")
const tableProvinsi = document.getElementById("provinsi")
const tableID = document.getElementById("id")
const tableKampus = document.getElementById("kampus")

if(screen.width <= 1000){
  tableHeader.removeChild(tableKota)
}

if(screen.width <= 700){
  tableHeader.removeChild(tableProvinsi)
}

if(screen.width <= 500){
  tableHeader.removeChild(tableID)
  tableKampus.innerHTML = "Kampus"
}

daftarKampus.forEach(kampus => {
  const kampusRow = document.createElement("tr")
  kampusRow.classList.add("kampus")

  if(screen.width > 500){
    const kampusID = document.createElement("td")
    kampusID.innerHTML = kampus.id
    kampusID.classList.add("kampusTI")
    kampusRow.appendChild(kampusID)
  }

  const kampusLogo = document.createElement("td")
  const kampusLogoIMG = document.createElement("img")
  kampusLogoIMG.src = kampus.profilSingkat.logo
  kampusLogoIMG.classList.add("kampusLogo")
  kampusLogo.appendChild(kampusLogoIMG)
  kampusLogo.classList.add("kampusTI")
  kampusRow.appendChild(kampusLogo)

  const kampusNama = document.createElement("td")
  kampusNama.classList.add("kampusTI")
  kampusRow.appendChild(kampusNama)

  const kampusNamaA = document.createElement("a")
  kampusNamaA.classList.add("kampusNama")
  kampusNamaA.href = `kampus.html?id=${kampus.id}`
  kampusNamaA.innerHTML = kampus.profilSingkat.nama
  kampusNama.appendChild(kampusNamaA)

  if(screen.width > 1000){
    const kampusKota = document.createElement("td")
    kampusKota.innerHTML = kampus.profilSingkat.kota
    kampusKota.classList.add("kampusTI")
    kampusRow.appendChild(kampusKota)
  }

  if(screen.width > 700){
    const kampusProvinsi = document.createElement("td")
    kampusProvinsi.innerHTML = kampus.profilSingkat.provinsi
    kampusProvinsi.classList.add("kampusTI")
    kampusRow.appendChild(kampusProvinsi)
  }

  kampusTable.appendChild(kampusRow)

})
